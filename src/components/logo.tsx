import Link from "next/link";
import { site } from "@/lib/data";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 no-underline">
      <img
        src="/bird.png"
        alt="Early Birders Birding Club"
        className="h-12 w-12 object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-xl font-black text-slate-900">
          Early Birders
        </span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
          Birding Club
        </span>
      </div>
    </Link>
  );
}
