const EBIRD_REGION_CODE = "US-NC-129";

export type BirdImage = {
  imageUrl: string | null;
  imagePageUrl: string | null;
  imageAttribution: string;
};

export type EBirdObservation = {
  speciesCode: string;
  comName: string;
  sciName: string;
  locId: string;
  locName: string;
  obsDt: string;
  howMany?: number;
  lat: number;
  lng: number;
  obsValid: boolean;
  obsReviewed: boolean;
  locationPrivate: boolean;
  subId: string;
};

export type ObservationWithImage = EBirdObservation & {
  image: BirdImage;
};

async function fetchWikipediaImage(title: string): Promise<BirdImage | null> {
  const summaryUrl = new URL(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
  );

  try {
    const response = await fetch(summaryUrl, {
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 86400,
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as {
      thumbnail?: { source?: string };
      originalimage?: { source?: string };
      content_urls?: { desktop?: { page?: string } };
    };

    const imageUrl = data.originalimage?.source ?? data.thumbnail?.source ?? null;

    if (!imageUrl) {
      return null;
    }

    return {
      imageUrl,
      imagePageUrl: data.content_urls?.desktop?.page ?? null,
      imageAttribution: "Wikipedia",
    };
  } catch {
    return null;
  }
}

async function getBirdImage(observation: EBirdObservation): Promise<BirdImage> {
  const candidates = [observation.comName, observation.sciName];

  for (const candidate of candidates) {
    const image = await fetchWikipediaImage(candidate);

    if (image) {
      return image;
    }
  }

  return {
    imageUrl: null,
    imagePageUrl: null,
    imageAttribution: "",
  };
}

export async function getRecentBirdSightings(params: {
  limit?: number;
  back?: number;
  maxImageResults?: number;
} = {}): Promise<ObservationWithImage[]> {
  const token = process.env.EBIRD_API_TOKEN;

  if (!token) {
    console.error("Missing EBIRD_API_TOKEN environment variable.");
    return [];
  }

  const { limit = 25, back = 7, maxImageResults } = params;

  const ebirdUrl = new URL(
    `https://api.ebird.org/v2/data/obs/${EBIRD_REGION_CODE}/recent`,
  );
  ebirdUrl.searchParams.set("back", String(back));
  ebirdUrl.searchParams.set("maxResults", String(limit));
  ebirdUrl.searchParams.set("detail", "full");
  ebirdUrl.searchParams.set("includeProvisional", "true");

  try {
    const response = await fetch(ebirdUrl, {
      headers: {
        "X-eBirdApiToken": token,
      },
      next: {
        revalidate: 900,
      },
    });

    if (!response.ok) {
      console.error(`eBird API error: ${response.status}`);
      return [];
    }

    const observations = (await response.json()) as EBirdObservation[];
    console.log(`Fetched ${observations.length} observations from eBird.`);

    const imageBySpecies = new Map<string, BirdImage>();
    let imagesFoundCount = 0;

    // Fetch images sequentially until we hit maxImageResults
    for (const observation of observations) {
      // If we've already seen this species, skip
      if (imageBySpecies.has(observation.speciesCode)) {
        continue;
      }

      // If we have enough images, stop requesting new ones from Wikipedia
      if (maxImageResults !== undefined && imagesFoundCount >= maxImageResults) {
        imageBySpecies.set(observation.speciesCode, {
          imageUrl: null,
          imagePageUrl: null,
          imageAttribution: "",
        });
        continue;
      }

      const image = await getBirdImage(observation);
      imageBySpecies.set(observation.speciesCode, image);

      if (image.imageUrl) {
        console.log(`Found image for ${observation.comName}: ${image.imageUrl}`);
        imagesFoundCount++;
      }
    }

    const result = observations.map((observation) => ({
      ...observation,
      image: imageBySpecies.get(observation.speciesCode) ?? {
        imageUrl: null,
        imagePageUrl: null,
        imageAttribution: "",
      },
    }));

    console.log(`Returning ${result.filter(o => o.image.imageUrl).length} observations with images.`);
    return result;
  } catch (error) {
    console.error("Failed to fetch recent bird observations:", error);
    return [];
  }
}
