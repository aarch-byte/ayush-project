import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";
import { NAVIGATION_LINKS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative border-t border-universe-border/60 bg-universe-bg text-universe-muted pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 universe-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-universe-border/40">
          {/* Brand Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-2xl text-universe-text tracking-tighter">
                {PERSONAL_DATA.brand}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded border border-universe-accent/40 text-universe-accent uppercase tracking-widest">
                EDITION 2026
              </span>
            </div>
            <p className="font-serif italic text-lg sm:text-xl text-universe-text/90 leading-snug max-w-md">
              &ldquo;{PERSONAL_DATA.headline}&rdquo;
            </p>
            <p className="font-mono text-xs text-universe-muted leading-relaxed max-w-sm">
              {PERSONAL_DATA.philosophy}
            </p>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-[11px] text-universe-accent tracking-widest uppercase">
              // SITE INDEX
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {NAVIGATION_LINKS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="hover:text-universe-accent transition-colors flex items-center gap-1 group py-1"
                >
                  <span className="text-universe-muted group-hover:text-universe-accent text-[10px]">
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact / Connection */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-[11px] text-universe-accent tracking-widest uppercase">
              // CONNECT
            </span>
            <p className="font-mono text-xs text-universe-muted">
              Interested in strategic ideas, data analytics, or business models?
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-universe-accent bg-universe-accent/10 hover:bg-universe-accent text-universe-accent hover:text-universe-bg font-mono text-xs font-semibold tracking-wider transition-all"
              >
                <span>INITIATE CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-universe-muted">
          <div>
            © {new Date().getFullYear()} {PERSONAL_DATA.brand} — ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>BUILT WITH PRECISION & INTENT</span>
            <span className="text-universe-accent">•</span>
            <span>NEXT.JS // THREE.JS // TAILWIND</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
