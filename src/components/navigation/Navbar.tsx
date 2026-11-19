"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { SoundToggle } from "./SoundToggle";
import { MenuOverlay } from "./MenuOverlay";
import { PERSONAL_DATA } from "@/data/personal";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-universe-bg/80 backdrop-blur-md border-b border-universe-border/40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus:outline-none"
              aria-label="AYUSH Home"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-universe-border/80 ring-1 ring-universe-accent/20 shrink-0">
                <Image
                  src="/images/ayush-portrait.png"
                  alt="Ayush"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tighter text-universe-text group-hover:text-universe-accent transition-colors">
                {PERSONAL_DATA.brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-universe-accent animate-pulse-slow" />
            </Link>

            {/* Location / Status Pill (Desktop only) */}
            <div className="hidden lg:flex items-center gap-3 px-3 py-1 rounded-full border border-universe-border/60 bg-universe-surface/40 text-[11px] font-mono tracking-wider text-universe-muted">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{PERSONAL_DATA.location}</span>
              <span className="text-universe-border">/</span>
              <span className="text-universe-text truncate max-w-[200px]">
                {PERSONAL_DATA.status}
              </span>
            </div>
          </div>

          {/* Right Action Controls: Sound Toggle + Menu Trigger */}
          <div className="flex items-center gap-3 sm:gap-4">
            <SoundToggle />

            <button
              onClick={() => setIsMenuOpen(true)}
              type="button"
              className="group flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-universe-border bg-universe-surface hover:border-universe-accent transition-all focus:outline-none focus:ring-1 focus:ring-universe-accent"
              aria-label="Open main navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="font-mono text-xs uppercase tracking-widest text-universe-text group-hover:text-universe-accent transition-colors">
                MENU
              </span>
              <Menu className="w-4 h-4 text-universe-muted group-hover:text-universe-accent transition-colors" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
