"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from "lucide-react";
import { SculptureCanvas } from "@/components/3d/SculptureCanvas";
import { PERSONAL_DATA } from "@/data/personal";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden">
      {/* Background Subtle Spatial Grid */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-30" />

      {/* Main Content Composition */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left / Editorial Typography Column */}
          <div className="lg:col-span-7 z-10 space-y-6 sm:space-y-8">
            
            {/* Top Status & Philosophy Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-universe-border bg-universe-surface/80 text-[11px] font-mono text-universe-muted tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-universe-accent animate-pulse" />
                <span className="text-universe-text font-semibold uppercase">AYUSH®</span>
                <span className="text-universe-border">//</span>
                <span>{PERSONAL_DATA.tagline}</span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-universe-muted">
                <Compass className="w-3.5 h-3.5 text-universe-accent" />
                <span>28.6139° N, 77.2090° E</span>
              </div>
            </div>

            {/* Oversized Signature Display Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tightest uppercase leading-[0.92] text-universe-text">
              I&apos;M NOT HERE TO <br />
              <span className="text-universe-muted hover:text-universe-text transition-colors duration-500">
                FIT INTO A BOX.
              </span> <br />
              I&apos;M HERE TO EXPLORE <br />
              <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal inline-block hover:translate-x-2 transition-transform duration-300">
                what&apos;s outside it.
              </span>
            </h1>

            {/* Supporting Statement & Philosophy */}
            <div className="pt-2 border-l-2 border-universe-accent/40 pl-4 sm:pl-6 space-y-3 max-w-xl">
              <p className="font-serif italic text-xl sm:text-2xl text-universe-text leading-snug">
                &ldquo;{PERSONAL_DATA.subheadline}&rdquo;
              </p>
              <p className="font-mono text-xs sm:text-sm text-universe-muted leading-relaxed">
                {PERSONAL_DATA.philosophy}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4 font-mono text-xs">
              <Link
                href="/work/mitti-compass"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-universe-accent text-universe-bg font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_30px_rgba(216,255,62,0.25)]"
              >
                <span>EXPLORE MITTI COMPASS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#introduction"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-universe-border bg-universe-surface/70 hover:border-universe-accent text-universe-text tracking-wider transition-all"
              >
                <span>DISCOVER STORY</span>
              </Link>
            </div>
          </div>

          {/* Right / Custom 3D Chrome Sculpture Viewport */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center overflow-visible">
            {/* Ambient Backlight Halo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-universe-accent/10 blur-[90px] pointer-events-none" />
            <div className="absolute w-60 h-60 rounded-full bg-universe-secondary/10 blur-[80px] pointer-events-none translate-y-12" />

            <div
              data-cursor="3d"
              className="w-full relative z-10 cursor-grab active:cursor-grabbing overflow-visible"
            >
              <SculptureCanvas />
            </div>

            {/* Discrete 3D Indicator Tag */}
            <div className="absolute bottom-2 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-universe-border/60 bg-universe-bg/85 backdrop-blur font-mono text-[10px] text-universe-muted shadow-lg">
              <Sparkles className="w-3 h-3 text-universe-accent" />
              <span className="text-universe-text font-semibold uppercase">THE TRANSCENDENT MONOLITH</span>
              <span className="text-universe-border">•</span>
              <span className="text-universe-accent">OUTSIDE THE BOX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between font-mono text-[11px] text-universe-muted border-t border-universe-border/40">
        <div className="flex items-center gap-4">
          <span className="text-universe-accent font-semibold">SECTION 01</span>
          <span className="text-universe-border">//</span>
          <span className="hidden sm:inline uppercase">CINEMATIC HERO EXPEDITION</span>
        </div>

        <a
          href="#introduction"
          className="group flex items-center gap-2 hover:text-universe-accent transition-colors py-1"
          aria-label="Scroll down to introduction"
        >
          <span className="uppercase tracking-widest text-[10px]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-universe-accent group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
