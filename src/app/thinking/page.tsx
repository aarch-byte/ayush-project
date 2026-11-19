"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Clock, FileText, Filter, Sparkles } from "lucide-react";
import { JOURNAL_ENTRIES, JournalArticle } from "@/data/writing";

export default function ThinkingPage() {
  const [selectedTopic, setSelectedTopic] = useState<string>("ALL");

  const topics = [
    "ALL",
    "FINANCE & VALUATION",
    "BUSINESS MODELS",
    "DATA ANALYTICS",
    "ENTREPRENEURSHIP",
  ];

  const filteredEntries =
    selectedTopic === "ALL"
      ? JOURNAL_ENTRIES
      : JOURNAL_ENTRIES.filter((entry) => entry.topic === selectedTopic);

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
          <span className="text-universe-accent uppercase">05 THE THINKING</span>
        </div>

        {/* Page Header */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE INTELLECTUAL WORKSPACE // ESSAYS & WORKING NOTES</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            THINKING <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              out loud.
            </span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4 font-mono text-xs text-universe-muted">
            <p className="max-w-xl text-universe-text/80 text-sm leading-relaxed">
              Observations on venture unit economics, two-sided platform dynamics, corporate finance anomalies, and field notes from academic research.
            </p>

            {/* Topic Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all ${
                    selectedTopic === t
                      ? "bg-universe-accent text-universe-bg font-bold shadow-[0_0_15px_rgba(216,255,62,0.3)]"
                      : "border border-universe-border bg-universe-surface text-universe-muted hover:border-universe-accent/50 hover:text-universe-text"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Integrity Notice Banner */}
        <div className="p-4 rounded-2xl border border-universe-accent/30 bg-universe-accent/5 font-mono text-xs text-universe-muted flex items-center justify-between gap-4">
          <span className="text-universe-accent uppercase font-semibold">
            EDITORIAL TRANSPARENCY:
          </span>
          <span className="text-[11px]">
            The following represent working exploratory notes and hypotheses authored by Ayush, not commercial sponsored articles.
          </span>
        </div>

        {/* Journal Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEntries.map((entry, index) => (
            <article
              key={entry.id}
              className="group p-8 rounded-3xl border border-universe-border/80 bg-universe-surface/60 hover:bg-universe-surface/90 hover:border-universe-accent/50 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              {/* Header Badges */}
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-universe-accent uppercase font-bold text-[11px]">
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
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-universe-text uppercase tracking-tight group-hover:text-universe-accent transition-colors leading-tight">
                  {entry.title}
                </h2>
                <p className="font-sans text-sm text-universe-text/80 leading-relaxed">
                  {entry.excerpt}
                </p>
              </div>

              {/* Key Inquiry Hypotheses */}
              <div className="p-4 rounded-xl border border-universe-border bg-universe-bg/60 space-y-2 font-mono text-xs">
                <span className="text-universe-muted uppercase block text-[10px] tracking-wider font-semibold">
                  CENTRAL HYPOTHESES EXPLORED:
                </span>
                <ul className="space-y-1 text-universe-text/90 text-[11px]">
                  {entry.keyQuestions.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-universe-accent mt-0.5">›</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Discussion Trigger */}
              <div className="pt-2 border-t border-universe-border/40 flex items-center justify-between font-mono text-xs text-universe-muted">
                <span className="text-[11px]">ID: #{entry.id}</span>
                <Link
                  href="/contact"
                  className="text-universe-accent hover:underline flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  <span>DISCUSS THIS HYPOTHESIS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="pt-12 border-t border-universe-border/60 flex items-center justify-between font-mono text-xs">
          <Link href="/work" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>← 04 THE WORK</span>
          </Link>
          <Link href="/beyond" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>06 BEYOND THE WORK →</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
