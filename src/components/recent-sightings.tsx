import Image from "next/image";
import { getRecentBirdSightings } from "@/lib/birds";

export async function RecentSightingsGrid() {
  // Fetch more observations to increase chances of finding ones with images,
  // but only request images for the first 3 matches we find.
  const observations = await getRecentBirdSightings({ 
    limit: 40,
    maxImageResults: 3 
  });

  // Filter for observations that actually have images
  const recentBirds = observations
    .filter((obs) => obs.image.imageUrl)
    .slice(0, 3);

  // Only show fallback if absolutely no birds with images are found
  if (recentBirds.length === 0) {
    return (
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 opacity-50">
        <div className="md:col-span-12 py-10 text-center text-slate-500 italic">
          {!process.env.EBIRD_API_TOKEN 
            ? "Connect your eBird API token to see live sightings." 
            : "No recent sightings with photos available at the moment."}
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 items-center gap-6 ${
      recentBirds.length === 1 ? "md:grid-cols-4" : 
      recentBirds.length === 2 ? "md:grid-cols-8" : 
      "md:grid-cols-12"
    }`}>
      {recentBirds.map((bird, index) => (
        <article
          key={`${bird.comName}-${index}`}
          className="group relative overflow-hidden rounded-2xl bg-slate-100 md:col-span-4 md:h-[360px]"
        >
          <div className="relative h-full w-full min-h-[300px]">
            <Image
              src={bird.image.imageUrl!}
              alt={`A ${bird.comName} spotted recently`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              unoptimized={bird.image.imageUrl?.endsWith('.svg')}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Recent Sightings
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">
              {bird.comName}
            </h3>
            <p className="mt-2 text-xs font-medium leading-relaxed text-slate-300">
              Spotted at {bird.locName} on {bird.obsDt}
            </p>
            {bird.image.imageAttribution && (
              <p className="mt-4 text-[10px] text-slate-500">
                Photo: {bird.image.imageAttribution}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
