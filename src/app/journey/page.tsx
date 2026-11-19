"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, BookOpen, Compass, Flag, GraduationCap, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { JOURNEY_TIMELINE, TimelineItem } from "@/data/journey";

export default function JourneyPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", "EDUCATION", "COMPETITION", "LEADERSHIP", "TEACHING", "DIPLOMACY"];

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
      case "TEACHING":
        return <BookOpen className="w-4 h-4 text-amber-400" />;
      case "DIPLOMACY":
        return <Flag className="w-4 h-4 text-sky-400" />;
      default:
        return <Compass className="w-4 h-4 text-universe-accent" />;
    }
  };

  return (
    <div className="relative min-h-screen pt-24 sm:pt-32 pb-24 bg-universe-bg text-universe-text">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-25" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-universe-muted">
          <Link href="/" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-universe-accent uppercase">03 THE JOURNEY</span>
        </div>

        {/* Page Header */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TIMELINE ARCHIVE // FACTUAL CHRONOLOGY</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            NOT A STRAIGHT <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              line.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 font-mono text-xs text-universe-muted">
            <p className="max-w-xl text-universe-text/80 text-sm leading-relaxed">
              A factual timeline tracking dual university studies, case competition finals at IIM Bangalore, student governance, cadet service, and independent teaching.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-universe-accent text-universe-bg font-bold shadow-[0_0_15px_rgba(216,255,62,0.3)]"
                      : "border border-universe-border bg-universe-surface text-universe-muted hover:border-universe-accent/50 hover:text-universe-text"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Detailed Timeline List */}
        <div className="relative border-l border-universe-border/80 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                item.highlight
                  ? "bg-universe-surface/90 border-universe-accent/50 shadow-[0_0_35px_rgba(216,255,62,0.08)]"
                  : "bg-universe-surface/40 border-universe-border/60 hover:border-universe-accent/40 hover:bg-universe-surface/70"
              }`}
            >
              {/* Timeline Marker Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[55px] top-8 w-4 h-4 rounded-full border-2 transition-transform duration-300 ${
                  item.highlight
                    ? "bg-universe-accent border-universe-bg ring-4 ring-universe-accent/20 scale-125"
                    : "bg-universe-surface border-universe-border group-hover:border-universe-accent group-hover:scale-110"
                }`}
              />

              {/* Node Header */}
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

              {/* Title & Narrative */}
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-universe-text tracking-tight uppercase group-hover:text-universe-accent transition-colors">
                {item.title}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-universe-text/80 leading-relaxed font-sans max-w-3xl">
                {item.description}
              </p>

              {/* Tags & Action Link */}
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
                    <span>STUDY MITTI COMPASS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="pt-12 border-t border-universe-border/60 flex items-center justify-between font-mono text-xs">
          <Link href="/about" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>← 02 THE PERSON</span>
          </Link>
          <Link href="/work" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>04 SELECTED WORK →</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
