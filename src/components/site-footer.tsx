import Link from "next/link";
import { site } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-slate-50 sm:mt-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-8 text-sm sm:px-6 lg:grid-cols-3 lg:px-8 sm:py-12">
        <div>
          <p className="text-base font-semibold text-slate-900">{site.name}</p>
          <p className="mt-2 text-slate-600">{site.mission}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Get In Touch</p>
          <p className="mt-2 text-slate-600">{site.address}</p>
          <p className="text-slate-600">{site.phone}</p>
          <p className="text-slate-600">{site.email}</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Quick Links</p>
          <div className="mt-2 flex flex-col gap-2">
            <Link className="text-slate-600 hover:text-emerald-800" href="/events">
              Join Our Next Bird Walk
            </Link>
            <Link className="text-slate-600 hover:text-emerald-800" href="/get-involved">
              Help a Kid Discover Birding
            </Link>
            <Link className="text-slate-600 hover:text-emerald-800" href="/contact">
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
