import Image from "next/image";
import type { Book } from "@/lib/data";

const categoryColors = {
  Identification: "bg-blue-50 text-blue-700 border-blue-100",
  "Science & Nature": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Art & Humor": "bg-purple-50 text-purple-700 border-purple-100",
};

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-emerald-200 hover:shadow-md">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <Image
          src={book.imageUrl}
          alt={`Cover of ${book.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${categoryColors[book.category]}`}>
            {book.category}
          </span>
        </div>
        <h3 className="text-lg font-bold leading-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
          {book.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-slate-500">
          {book.author}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-3">
          {book.description}
        </p>
      </div>
    </article>
  );
}
