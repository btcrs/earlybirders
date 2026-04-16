import { getRecentBirdSightings } from "@/lib/birds";

const DEFAULT_LIMIT = 25;
const DEFAULT_BACK_DAYS = 7;
const MAX_LIMIT = 50;
const MAX_BACK_DAYS = 30;

function clampPositiveInt(
  value: string | null,
  fallback: number,
  maximum: number,
) {
  const parsed = Number.parseInt(value ?? "", 10);

  if (Number.isNaN(parsed) || parsed < 1) {
    return fallback;
  }

  return Math.min(parsed, maximum);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = clampPositiveInt(
    searchParams.get("limit"),
    DEFAULT_LIMIT,
    MAX_LIMIT,
  );
  const back = clampPositiveInt(
    searchParams.get("back"),
    DEFAULT_BACK_DAYS,
    MAX_BACK_DAYS,
  );

  const observations = await getRecentBirdSightings({ limit, back });

  if (observations.length === 0 && !process.env.EBIRD_API_TOKEN) {
    return Response.json(
      {
        error:
          "Missing EBIRD_API_TOKEN. Add it to your environment before calling this route.",
      },
      { status: 500 },
    );
  }

  return Response.json({
    county: "New Hanover County, NC",
    regionCode: "US-NC-129",
    fetchedAt: new Date().toISOString(),
    back,
    limit,
    count: observations.length,
    observations: observations,
  });
}
