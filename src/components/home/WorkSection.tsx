import React from "react";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Building2, CheckCircle2, ChevronRight, Layers, Lightbulb, Target } from "lucide-react";
import { CASE_STUDIES } from "@/data/projects";

export function WorkSection() {
  const mittiProject = CASE_STUDIES[0];
  const secondaryProject = CASE_STUDIES[1];

  return (
    <section id="work" className="relative py-24 lg:py-36 bg-universe-bg border-t border-universe-border/60 overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-universe-border/60 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest mb-3">
              <span>// SECTION 04 — STRATEGY & APPLIED CONCEPTS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-tight text-universe-text">
              IDEAS INTO <br />
              <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
                action.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs sm:text-sm text-universe-muted leading-relaxed">
            Theoretical frameworks are only validated when stress-tested against realistic constraints. Selected strategic models and financial expansion frameworks.
          </p>
        </div>

        {/* Featured Case Study: MITTI COMPASS */}
        <div
          data-cursor="view"
          className="relative rounded-3xl border border-universe-accent/40 bg-universe-surface/80 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_0_60px_rgba(216,255,62,0.06)]"
        >
          
          {/* Accent Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-universe-accent/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Top Metadata Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-universe-border/60 pb-6 mb-8 font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-universe-accent text-universe-bg font-bold uppercase tracking-wider text-[11px]">
                {mittiProject.badge}
              </span>
              <span className="text-universe-muted hidden sm:inline">
                YEAR: {mittiProject.year}
              </span>
            </div>

            <span className="text-universe-muted uppercase">
              {mittiProject.category}
            </span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4 max-w-4xl">
            <h3 className="font-display font-black text-4xl sm:text-6xl text-universe-text uppercase tracking-tight">
              {mittiProject.title}
            </h3>
            <p className="font-serif italic text-xl sm:text-2xl text-universe-text/90 leading-snug">
              {mittiProject.subtitle}
            </p>
          </div>

          {/* Detailed Editorial Grid: Problem & Approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10 pt-8 border-t border-universe-border/40">
            
            {/* Context & Problem */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-universe-accent uppercase tracking-widest flex items-center gap-2">
                <Target className="w-3.5 h-3.5" />
                <span>THE STRATEGIC CHALLENGE</span>
              </span>
              <p className="text-sm sm:text-base text-universe-text/80 leading-relaxed font-sans">
                {mittiProject.problem}
              </p>

              <div className="p-4 rounded-xl border border-universe-border bg-universe-bg/60 font-mono text-xs space-y-2">
                <span className="text-universe-muted uppercase block text-[10px]">
                  PROJECT CONTEXT
                </span>
                <p className="text-universe-text text-[11px] leading-relaxed">
                  A conceptual financial and expansion-planning simulator developed in the MITTI Café case competition (Top 10 Finalist | Offline Final-Round Participant at IIM Bangalore, November 2026).
                </p>
              </div>
            </div>

            {/* Solution Framework Pillars */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs text-universe-accent uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                <span>THE MITTI COMPASS BLUEPRINT</span>
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                {mittiProject.financialFramework.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-universe-border/80 bg-universe-bg/40 flex flex-col justify-between space-y-2 hover:border-universe-accent/40 transition-colors"
                  >
                    <span className="text-universe-accent font-semibold text-[11px]">
                      0{idx + 1} // {pillar.label}
                    </span>
                    <p className="text-universe-muted text-[11px] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Learnings Bar */}
              <div className="pt-2">
                <span className="font-mono text-[11px] text-universe-muted uppercase block mb-1">
                  CORE STRATEGIC TAKEAWAY
                </span>
                <p className="font-serif italic text-sm sm:text-base text-universe-text/90">
                  &ldquo;{mittiProject.learnings[0]}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-universe-border/40 font-mono text-xs">
            <span className="text-universe-muted">
              AUTHORED BY AYUSH // STRATEGIC CASE ANALYSIS
            </span>

            <Link
              href="/work/mitti-compass"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-universe-accent text-universe-bg font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(216,255,62,0.2)]"
            >
              <span>OPEN COMPREHENSIVE CASE STUDY</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Secondary Exploratory Project Preview */}
        <div className="mt-8 rounded-2xl border border-universe-border/60 bg-universe-surface/40 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-universe-border hover:bg-universe-surface/60 transition-all">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs text-universe-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-universe-secondary" />
              <span>{secondaryProject.category}</span>
              <span>•</span>
              <span>{secondaryProject.badge}</span>
            </div>
            <h4 className="font-display font-bold text-2xl text-universe-text uppercase">
              {secondaryProject.title}
            </h4>
            <p className="font-mono text-xs text-universe-muted">
              {secondaryProject.subtitle}
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-universe-border bg-universe-surface text-universe-text font-mono text-xs uppercase hover:border-universe-accent transition-all shrink-0"
          >
            <span>VIEW ALL PROJECTS</span>
            <ChevronRight className="w-3.5 h-3.5 text-universe-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
