import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, BookOpen, Compass, Globe2, ShieldCheck, Sparkles, Terminal, User } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "First-Principles Deconstruction",
      description:
        "Refusing to accept conventional models at face value. Whether analyzing customer acquisition or operational overhead, truth resides at unit-level economics, not narrative momentum.",
    },
    {
      number: "02",
      title: "Kinetic & Intellectual Parity",
      description:
        "Physical discipline in the boxing ring and at the table tennis table is not a distraction from intellectual work—it is its primary engine. Fast reaction time and emotional composure under pressure transfer directly to strategic negotiation.",
    },
    {
      number: "03",
      title: "The Dual-Axis Advantage",
      description:
        "Synthesizing high-level platform business strategy at IIM Bangalore with ground-truth quantitative data analytics at GNDU. Ideas without data are delusions; data without business strategy is noise.",
    },
    {
      number: "04",
      title: "Unbounded Exploration",
      description:
        "A refusal to fit into pre-cast corporate or academic templates. Continuous learning across business models, finance, geopolitical diplomacy, and emerging technologies.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 sm:pt-32 pb-24 bg-universe-bg text-universe-text">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-25" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-universe-muted">
          <Link href="/" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-universe-accent uppercase">02 THE PERSON</span>
        </div>

        {/* Editorial Title Banner */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BIOGRAPHICAL DOSSIER // AYUSH</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            A MIND WITHOUT <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              fixed boundaries.
            </span>
          </h1>

          <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-universe-muted">
            <p className="max-w-xl text-universe-text/80 text-sm leading-relaxed">
              Curious explorer navigating the intersections of business models, corporate finance, data analytics, and continuous personal experimentation.
            </p>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full border border-universe-border bg-universe-surface text-universe-accent uppercase">
                {PERSONAL_DATA.location}
              </span>
              <span className="text-universe-border">•</span>
              <span className="text-universe-text">
                STATUS: {PERSONAL_DATA.status}
              </span>
            </div>
          </div>
        </header>

        {/* Section 1: Dual Academic Pursuit & Methodology */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Authentic Portrait Framing & Verified Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl border border-universe-border bg-universe-surface/80 p-8 space-y-6 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-universe-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="w-20 h-20 rounded-full border border-universe-accent/40 bg-universe-bg flex items-center justify-center">
                  <User className="w-10 h-10 text-universe-accent" />
                </div>
                <span className="px-3 py-1 rounded-full border border-universe-accent/30 bg-universe-accent/10 font-mono text-[10px] text-universe-accent uppercase tracking-wider font-semibold">
                  AUTHENTIC RECORD
                </span>
              </div>

              <div>
                <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight text-universe-text">
                  {PERSONAL_DATA.name}
                </h2>
                <p className="font-mono text-xs text-universe-accent mt-0.5">
                  {PERSONAL_DATA.tagline}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-universe-border/60 font-mono text-xs">
                <div>
                  <span className="text-universe-muted uppercase block text-[10px]">CURRENT DEGREES (CONCURRENT)</span>
                  <p className="text-universe-text font-semibold mt-1">
                    • IIM Bangalore — BBA in Digital Business & Entrepreneurship
                  </p>
                  <p className="text-universe-text font-semibold mt-0.5">
                    • GNDU — B.Com (Hons.) Data Analytics
                  </p>
                </div>

                <div>
                  <span className="text-universe-muted uppercase block text-[10px]">CADET RECORD</span>
                  <p className="text-universe-text font-semibold mt-1">
                    National Cadet Corps (NCC) — &apos;A&apos; Certificate (Alpha Grade)
                  </p>
                </div>

                <div>
                  <span className="text-universe-muted uppercase block text-[10px]">STUDENT GOVERNANCE</span>
                  <p className="text-universe-text font-semibold mt-1">
                    School House Captain
                  </p>
                </div>

                <div>
                  <span className="text-universe-muted uppercase block text-[10px]">CASE COMPETITION MILESTONE</span>
                  <p className="text-universe-accent font-semibold mt-1">
                    MITTI Café National Finalist (Top 10 Offline Grand Finals)
                  </p>
                </div>
              </div>
            </div>

            {/* Linguistic Fluency Box */}
            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-3 font-mono text-xs">
              <span className="text-universe-accent uppercase tracking-widest block text-[11px] flex items-center gap-2 font-semibold">
                <Globe2 className="w-4 h-4" />
                <span>MULTILINGUAL FLUENCY</span>
              </span>
              <p className="text-universe-muted text-[11px] leading-relaxed">
                Proficient across four regional and national tongues—enabling nuanced cultural rapport, negotiation, and ground-level perspective across diverse Indian markets:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {PERSONAL_DATA.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full border border-universe-border bg-universe-bg text-universe-text text-[11px]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Narrative */}
          <div className="lg:col-span-7 space-y-8 text-universe-text/90 leading-relaxed font-sans text-base sm:text-lg">
            
            <div className="border-l-2 border-universe-accent pl-6 py-2">
              <p className="font-serif italic text-2xl sm:text-3xl text-universe-text leading-snug">
                &ldquo;{PERSONAL_DATA.subheadline}&rdquo;
              </p>
            </div>

            <p>
              I believe modern education often forces premature specialization—funneling curious minds into narrow compartments before they understand how different systems connect. My academic path is an intentional rejection of that constraint.
            </p>

            <p>
              At <strong className="text-universe-text font-semibold">IIM Bangalore</strong>, I immerse myself in the architecture of digital platforms, network effects, and venture business strategy. Simultaneously, at <strong className="text-universe-text font-semibold">Guru Nanak Dev University (GNDU)</strong>, I ground those concepts in rigorous financial accounting, statistical modeling, and quantitative data analytics.
            </p>

            <p>
              The result is a complementary lens: the strategic intuition to identify structural market opportunities, backed by the analytical discipline to stress-test unit economics on a spreadsheet before committing capital.
            </p>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-universe-text uppercase tracking-tight pt-6 border-t border-universe-border/40">
              Discipline Beyond Rhetoric
            </h3>

            <p>
              Ideas are abundant; execution requires self-governance. Completing cadet service in the <strong className="text-universe-text font-semibold">National Cadet Corps (NCC) with an &apos;Alpha&apos; grade</strong> taught me how to operate with absolute precision under fatigue. Whether leading peers as <strong className="text-universe-text font-semibold">School House Captain</strong>, sparring in the boxing gym, or defending policy resolutions across two <strong className="text-universe-text font-semibold">Model United Nations</strong> conferences, I gravitate toward environments where accountability is immediate.
            </p>

            <p>
              I am not here to compile a conventional corporate résumé or collect titles. I am building a toolkit to analyze, build, and scale resilient ventures that solve real economic and human challenges.
            </p>
          </div>
        </section>

        {/* Section 2: Core Operating Principles */}
        <section className="pt-12 border-t border-universe-border/60 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-universe-accent uppercase tracking-widest block mb-2">
                // PHILOSOPHICAL FOUNDATIONS
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
                HOW I THINK & OPERATE
              </h2>
            </div>
            <p className="font-mono text-xs text-universe-muted max-w-sm">
              The four foundational mental models that govern my study, strategic analysis, and daily habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 rounded-2xl border border-universe-border/80 bg-universe-surface/60 hover:bg-universe-surface/90 hover:border-universe-accent/50 transition-all space-y-4"
              >
                <div className="flex items-center justify-between font-mono text-xs text-universe-accent">
                  <span className="font-bold">{principle.number} // RULE</span>
                  <span className="w-2 h-2 rounded-full bg-universe-accent" />
                </div>
                <h3 className="font-display font-bold text-2xl uppercase text-universe-text tracking-tight">
                  {principle.title}
                </h3>
                <p className="font-sans text-sm text-universe-text/80 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Verified Interests & Inquiry Domains */}
        <section className="pt-12 border-t border-universe-border/60 space-y-6">
          <span className="font-mono text-xs text-universe-accent uppercase tracking-widest block">
            // DOMAINS OF CONTINUOUS INQUIRY
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            {PERSONAL_DATA.interests.map((interest, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-universe-border bg-universe-surface/40 flex items-center justify-between hover:border-universe-accent/40 transition-colors"
              >
                <span className="text-universe-text">{interest}</span>
                <span className="text-universe-accent text-[10px]">0{idx + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Action Footnotes & Route Links */}
        <footer className="pt-12 border-t border-universe-border/60 flex flex-wrap items-center justify-between gap-6 font-mono text-xs">
          <div className="flex items-center gap-4">
            <Link
              href="/journey"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-universe-accent text-universe-bg font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(216,255,62,0.2)]"
            >
              <span>INSPECT THE JOURNEY TIMELINE</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work/mitti-compass"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-universe-border bg-universe-surface hover:border-universe-accent text-universe-text tracking-wider transition-all"
            >
              <span>STUDY MITTI COMPASS</span>
            </Link>
          </div>

          <Link href="/contact" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>GET IN TOUCH DIRECTLY</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-universe-accent" />
          </Link>
        </footer>
      </div>
    </div>
  );
}
