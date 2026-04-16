import Image from "next/image";
import { missionImages } from "@/lib/data";

const itemStyles = [
  { grid: "md:col-span-4", height: "md:h-[320px]" }, // Shortest
  { grid: "md:col-span-4", height: "md:h-[400px]" }, // Tallest
  { grid: "md:col-span-4", height: "md:h-[360px]" }, // Middle
];

export function MissionGrid() {
  return (
    <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-12">
      {missionImages.slice(0, 3).map((image, index) => (
        <article
          key={image.alt}
          className={`group relative overflow-hidden rounded-2xl bg-slate-100 ${itemStyles[index].grid} ${itemStyles[index].height}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm font-medium leading-relaxed text-white">
              {image.caption}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
