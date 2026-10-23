import Image from "next/image";
import { getRecentBirdSightings } from "@/lib/birds";

/** "2026-10-23 13:45" -> "Oct 23, 2026". Falls back to the raw value. */
function formatObsDate(obsDt: string): string {
  const parsed = new Date(obsDt.replace(" ", "T"));
  if (Number.isNaN(parsed.getTime())) return obsDt;
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export async function RecentSightingsGrid() {
  // Fetch more observations to increase chances of finding ones with images,
  // but only request images for the first 3 matches we find.
  const observations = await getRecentBirdSightings({
    limit: 40,
    maxImageResults: 3,
  });

  // Keep the first imaged observation per species, then take up to 3.
  const seenSpecies = new Set<string>();
  const recentBirds = observations
    .filter((obs) => obs.image.imageUrl)
    .filter((obs) => {
      if (seenSpecies.has(obs.speciesCode)) return false;
      seenSpecies.add(obs.speciesCode);
      return true;
    })
    .slice(0, 3);

  // Only show fallback if absolutely no birds with images are found
  if (recentBirds.length === 0) {
    return (
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12 opacity-50">
        <div className="md:col-span-12 py-10 text-center text-slate-500 italic">
          Recent sightings are unavailable right now. Check back soon.
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
      {recentBirds.map((bird) => (
        <article
          key={bird.speciesCode}
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
          {/* Sighting details are always visible on touch/small screens;
              on larger screens they reveal on hover or keyboard focus. */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100" />
          <div className="absolute bottom-0 p-8 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              Recent Sightings
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">
              {bird.comName}
            </h3>
            <p className="mt-2 text-xs font-medium leading-relaxed text-slate-300">
              Spotted at {bird.locName} on {formatObsDate(bird.obsDt)}
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
