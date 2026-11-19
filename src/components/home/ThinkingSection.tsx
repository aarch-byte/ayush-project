import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, FileText, Sparkles } from "lucide-react";
import { JOURNAL_ENTRIES } from "@/data/writing";

export function ThinkingSection() {
  return (
    <section id="thinking" className="relative py-24 lg:py-36 bg-universe-bg border-t border-universe-border/60 overflow-hidden">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-universe-border/60 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest mb-3">
              <span>// SECTION 05 — THE INTELLECTUAL WORKSPACE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-tight text-universe-text">
              THINKING <br />
              <span className="font-serif italic font-normal text-universe-text/90 lowercase tracking-normal">
                out loud.
              </span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="font-mono text-xs sm:text-sm text-universe-muted leading-relaxed">
              A working journal of business observations, platform unit economics, quantitative anomalies, and personal learnings.
            </p>
            <span className="inline-block px-2.5 py-0.5 rounded border border-universe-accent/30 bg-universe-accent/5 font-mono text-[10px] text-universe-accent uppercase tracking-wider">
              STRUCTURE INITIALIZED // SAMPLE WORKING NOTES
            </span>
          </div>
        </div>

        {/* Editorial Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <article
              key={entry.id}
              className="group relative p-8 rounded-2xl border border-universe-border/70 bg-universe-surface/50 hover:bg-universe-surface/90 hover:border-universe-accent/50 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Header Badges */}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-universe-accent uppercase tracking-widest text-[11px] font-semibold">
                  0{index + 1} // {entry.topic}
                </span>

                <div className="flex items-center gap-3 text-universe-muted text-[11px]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{entry.readTime}</span>
                  </span>
                  <span>•</span>
                  <span className="text-universe-secondary uppercase font-semibold">
                    {entry.date}
                  </span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <div className="space-y-3">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-universe-text uppercase tracking-tight group-hover:text-universe-accent transition-colors leading-tight">
                  {entry.title}
                </h3>
                <p className="text-sm text-universe-text/80 leading-relaxed font-sans">
                  {entry.excerpt}
                </p>
              </div>

              {/* Key Inquiry Questions */}
              <div className="p-4 rounded-xl border border-universe-border/50 bg-universe-bg/50 space-y-2 font-mono text-xs">
                <span className="text-universe-muted uppercase block text-[10px] tracking-wider">
                  CORE INQUIRY FOCUS:
                </span>
                <ul className="space-y-1 text-universe-text/90 text-[11px]">
                  {entry.keyQuestions.map((q, qIdx) => (
                    <li key={qIdx} className="flex items-start gap-2">
                      <span className="text-universe-accent mt-0.5">›</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Indicator */}
              <div className="pt-2 border-t border-universe-border/40 flex items-center justify-between font-mono text-xs text-universe-muted">
                <span className="text-[11px]">NOTE #{entry.id}</span>
                <span className="group-hover:text-universe-accent transition-colors flex items-center gap-1">
                  <span>DISCUSS ESSAY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Link to Dedicated Thinking Page */}
        <div className="mt-16 text-center">
          <Link
            href="/thinking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-universe-border bg-universe-surface hover:border-universe-accent text-universe-text font-mono text-xs tracking-wider uppercase transition-all"
          >
            <BookOpen className="w-4 h-4 text-universe-accent" />
            <span>OPEN ESSAYS & THINKING ARCHIVE</span>
            <ArrowUpRight className="w-4 h-4 text-universe-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
