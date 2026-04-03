"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-aqua-600 text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
              T
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-ocean-800 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                The Trey Series
              </span>
              <span className="text-[10px] uppercase tracking-widest text-teal-600 leading-none">
                By Dr. Victoria Schmitt
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive
                      ? "bg-teal-100/80 text-teal-700"
                      : "text-ocean-700 hover:bg-teal-50/60 hover:text-teal-700"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-teal-50/60 transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-0.5 bg-ocean-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ocean-700 transition-all duration-300 mt-1 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ocean-700 transition-all duration-300 mt-1 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-card border-t border-white/20">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all
                    ${isActive
                      ? "bg-teal-100/80 text-teal-700"
                      : "text-ocean-700 hover:bg-teal-50/60 hover:text-teal-700"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
