import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 no-underline">
      <Image
        src="/bird.png"
        alt="Early Birders Birding Club"
        width={48}
        height={48}
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
