import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BarChart3, ChevronRight, Layers, Sparkles, Target } from "lucide-react";
import { CASE_STUDIES } from "@/data/projects";

export default function WorkPage() {
  return (
    <div className="relative min-h-screen pt-24 sm:pt-32 pb-24 bg-universe-bg text-universe-text">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-25" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-universe-muted">
          <Link href="/" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-universe-accent uppercase">04 THE WORK</span>
        </div>

        {/* Page Header */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STRATEGIC CONCEPTS & ANALYTICAL BLUEPRINTS</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            IDEAS INTO <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              action.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-universe-muted max-w-2xl leading-relaxed">
            Strategic case studies, financial expansion models, and quantitative unit economics frameworks developed through competitive analysis, academic rigor, and scenario simulations.
          </p>
        </header>

        {/* Case Studies Portfolio Grid */}
        <div className="space-y-12">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl border p-8 sm:p-12 relative overflow-hidden transition-all duration-300 ${
                project.featured
                  ? "bg-universe-surface/90 border-universe-accent/40 shadow-[0_0_60px_rgba(216,255,62,0.06)]"
                  : "bg-universe-surface/50 border-universe-border/70 hover:border-universe-accent/40 hover:bg-universe-surface/70"
              }`}
            >
              {/* Top Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-universe-border/40 pb-6 mb-8 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-universe-accent text-universe-bg font-bold uppercase tracking-wider text-[11px]">
                    {project.badge}
                  </span>
                  <span className="text-universe-muted hidden sm:inline">
                    YEAR: {project.year}
                  </span>
                </div>
                <span className="text-universe-muted uppercase">
                  {project.category}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-3 max-w-3xl">
                <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-universe-text">
                  {project.title}
                </h2>
                <p className="font-serif italic text-xl sm:text-2xl text-universe-text/90 leading-snug">
                  {project.subtitle}
                </p>
              </div>

              {/* Problem & Solution Comparison */}
              <div className="my-8 pt-6 border-t border-universe-border/40 grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans text-sm">
                <div className="lg:col-span-6 space-y-2 text-universe-text/80">
                  <span className="font-mono text-xs text-universe-accent uppercase block font-semibold">
                    THE STRATEGIC CHALLENGE
                  </span>
                  <p className="leading-relaxed">{project.problem}</p>
                </div>

                <div className="lg:col-span-6 space-y-2 text-universe-text/80">
                  <span className="font-mono text-xs text-universe-accent uppercase block font-semibold">
                    THE ARCHITECTED SOLUTION
                  </span>
                  <p className="leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Framework Pillars Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-universe-border/40 font-mono text-xs">
                {project.financialFramework.map((framework, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-xl border border-universe-border bg-universe-bg/60 space-y-1">
                    <span className="text-universe-accent font-semibold block text-[10px]">
                      PILLAR 0{fIdx + 1}
                    </span>
                    <span className="font-display font-bold text-universe-text uppercase block">
                      {framework.label}
                    </span>
                    <p className="text-universe-muted text-[11px] leading-relaxed">
                      {framework.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="mt-8 pt-6 border-t border-universe-border/40 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                <span className="text-universe-muted">
                  CONTRIBUTION: {project.role}
                </span>

                <Link
                  href={project.featured ? `/work/${project.slug}` : "/contact"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-universe-accent text-universe-bg font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(216,255,62,0.2)]"
                >
                  <span>{project.featured ? "OPEN DEEP-DIVE CASE STUDY" : "REQUEST RESEARCH BRIEF"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="pt-12 border-t border-universe-border/60 flex items-center justify-between font-mono text-xs">
          <Link href="/journey" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>← 03 THE JOURNEY</span>
          </Link>
          <Link href="/thinking" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>05 THE THINKING →</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
