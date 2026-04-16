import type { Metadata } from "next";
import { BookCard } from "@/components/book-card";
import { SectionHeading } from "@/components/section-heading";
import { books } from "@/lib/data";

export const metadata: Metadata = {
  title: "Library",
  description: "A curated collection of birding guides, natural history, and nature art for youth birders.",
};

export default function LibraryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="Our Library"
          title="Recommended reading for budding birders"
          description="We maintain a collection of essential field guides and nature writing to help young birders deepen their connection with the natural world."
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}
