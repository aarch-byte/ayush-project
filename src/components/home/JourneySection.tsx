"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Award, Compass, GraduationCap, ShieldCheck, Flag } from "lucide-react";
import { JOURNEY_TIMELINE, TimelineItem } from "@/data/journey";

export function JourneySection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "EDUCATION", "COMPETITION", "LEADERSHIP", "DIPLOMACY"];

  const filteredItems =
    activeCategory === "ALL"
      ? JOURNEY_TIMELINE
      : JOURNEY_TIMELINE.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category: TimelineItem["category"]) => {
    switch (category) {
      case "EDUCATION":
        return <GraduationCap className="w-4 h-4 text-universe-accent" />;
      case "COMPETITION":
        return <Award className="w-4 h-4 text-universe-accent" />;
      case "LEADERSHIP":
        return <ShieldCheck className="w-4 h-4 text-universe-secondary" />;
      case "DIPLOMACY":
        return <Flag className="w-4 h-4 text-sky-400" />;
      default:
        return <Compass className="w-4 h-4 text-universe-accent" />;
    }
  };

  return (
    <section id="journey" className="relative py-24 lg:py-36 bg-universe-bg border-t border-universe-border/60 overflow-hidden">
      {/* Background Architectural Markings */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-universe-border/60 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest mb-3">
              <span>// SECTION 03 — TRAJECTORY</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-tight text-universe-text">
              NOT A STRAIGHT <br />
              <span className="text-universe-muted hover:text-universe-accent transition-colors">
                LINE.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-4">
            <p className="font-mono text-xs sm:text-sm text-universe-muted leading-relaxed">
              Curiosity doesn&apos;t follow a linear career corridor. It branches across quantitative analytics, digital venture economics, competitive case defense, and disciplined cadet training.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-universe-accent text-universe-bg font-bold shadow-[0_0_15px_rgba(216,255,62,0.3)]"
                      : "border border-universe-border bg-universe-surface/60 text-universe-muted hover:border-universe-accent/50 hover:text-universe-text"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Asymmetric Interactive Timeline Architecture */}
        <div className="relative border-l border-universe-border/80 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12 lg:space-y-16">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                item.highlight
                  ? "bg-universe-surface/90 border-universe-accent/50 shadow-[0_0_30px_rgba(216,255,62,0.08)]"
                  : "bg-universe-surface/40 border-universe-border/60 hover:border-universe-accent/40 hover:bg-universe-surface/70"
              }`}
            >
              {/* Timeline Node Point */}
              <div
                className={`absolute -left-[31px] sm:-left-[55px] top-8 w-4 h-4 rounded-full border-2 transition-transform duration-300 ${
                  item.highlight
                    ? "bg-universe-accent border-universe-bg ring-4 ring-universe-accent/20 scale-125"
                    : "bg-universe-surface border-universe-border group-hover:border-universe-accent group-hover:scale-110"
                }`}
              />

              {/* Node Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="p-1.5 rounded-lg bg-universe-bg border border-universe-border">
                    {getCategoryIcon(item.category)}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-universe-accent">
                    {item.category}
                  </span>
                  <span className="text-universe-border">•</span>
                  <span className="font-mono text-xs text-universe-muted">
                    {item.period}
                  </span>
                </div>

                <div className="font-mono text-xs text-universe-muted px-2.5 py-1 rounded bg-universe-bg border border-universe-border/50">
                  {item.institutionOrContext}
                </div>
              </div>

              {/* Title & Narrative Description */}
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-universe-text tracking-tight uppercase group-hover:text-universe-accent transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base text-universe-text/80 leading-relaxed font-sans max-w-3xl">
                {item.description}
              </p>

              {/* Tags & Competency Chips */}
              <div className="mt-5 pt-4 border-t border-universe-border/40 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full border border-universe-border bg-universe-bg/60 text-[11px] font-mono text-universe-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {item.category === "COMPETITION" && (
                  <Link
                    href="/work/mitti-compass"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-universe-accent hover:underline"
                  >
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Full Journey Link */}
        <div className="mt-16 text-center">
          <Link
            href="/journey"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-universe-border bg-universe-surface hover:border-universe-accent text-universe-text font-mono text-xs tracking-wider uppercase transition-all"
          >
            <span>EXPLORE EXTENDED JOURNEY ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 text-universe-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
