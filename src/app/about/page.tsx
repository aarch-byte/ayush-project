import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Award, BookOpen, Compass, Globe2, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "First-Principles Thinking",
      description:
        "Looking past buzzwords to understand fundamental drivers. Whether exploring business models or financial statements, value is determined by unit economics, cash flow, and real customer utility.",
    },
    {
      number: "02",
      title: "Strategy Meets Quantitative Truth",
      description:
        "Pairing business strategy from IIM Bangalore with empirical data analytics from GNDU. Ideas require analytical grounding; numbers require strategic context to be actionable.",
    },
    {
      number: "03",
      title: "Discipline and Composure",
      description:
        "Cadet training in the NCC, student leadership as House Captain, and school-level sports like boxing and table tennis cultivate composure under pressure and steady execution.",
    },
    {
      number: "04",
      title: "Learning as an Ongoing Process",
      description:
        "Refusing premature specialization. Exploring across digital business, finance, quantitative tools, and hands-on competitions to build a versatile problem-solving foundation.",
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
          <span className="text-universe-accent uppercase">02 ABOUT</span>
        </div>

        {/* Editorial Title Banner */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PERSONAL PROFILE // AYUSH</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            A MIND WITHOUT <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              fixed boundaries.
            </span>
          </h1>

          <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs text-universe-muted">
            <p className="max-w-xl text-universe-text/80 text-sm leading-relaxed">
              Curious explorer navigating the intersections of business strategy, finance, data analytics, and continuous learning.
            </p>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 rounded-full border border-universe-border bg-universe-surface text-universe-accent uppercase">
                LOCATION: {PERSONAL_DATA.location}
              </span>
              <span className="text-universe-border">•</span>
              <span className="text-universe-text">
                STATUS: {PERSONAL_DATA.status}
              </span>
            </div>
          </div>
        </header>

        {/* Section 1: Dual Academic Pursuit & Background */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl border border-universe-border bg-universe-surface/80 p-8 space-y-6 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-universe-accent/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-universe-border/80 ring-1 ring-universe-accent/20 bg-universe-bg shadow-xl shrink-0 group/avatar">
                  <Image
                    src="/images/ayush-portrait.png"
                    alt="Ayush profile portrait"
                    width={96}
                    height={96}
                    priority
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/avatar:scale-105"
                  />
                </div>
                <span className="px-3 py-1 rounded-full border border-universe-border bg-universe-surface text-universe-text font-mono text-[10px] uppercase tracking-wider font-semibold">
                  PROFILE
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
                  <span className="text-universe-muted uppercase block text-[10px]">CURRENT PROGRAMMES (CONCURRENT)</span>
                  <p className="text-universe-text font-semibold mt-1">
                    • IIM Bangalore — BBA in Digital Business & Entrepreneurship
                  </p>
                  <p className="text-universe-text font-semibold mt-0.5">
                    • GNDU — B.Com (Hons.) Data Analytics
                  </p>
                </div>

                <div>
                  <span className="text-universe-muted uppercase block text-[10px]">COMPETITION RECOGNITION</span>
                  <p className="text-universe-accent font-semibold mt-1">
                    Top 10 Finalist — MITTI Café Case Competition | Offline Final-Round Participant, IIM Bangalore (Nov 2026)
                  </p>
                </div>

                <div>
                  <span className="text-universe-muted uppercase block text-[10px]">LEADERSHIP & CADET TRAINING</span>
                  <p className="text-universe-text font-semibold mt-1">
                    • School House Captain (Class XII, 2025)
                  </p>
                  <p className="text-universe-text font-semibold mt-0.5">
                    • NCC &apos;A&apos; Certificate — Alpha Grade (Completed 2023)
                  </p>
                </div>

                <div>
                  <span className="text-universe-muted uppercase block text-[10px]">INDEPENDENT WORK</span>
                  <p className="text-universe-text font-semibold mt-1">
                    Independent Accountancy Tuition
                  </p>
                </div>
              </div>
            </div>

            {/* Languages Box */}
            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-3 font-mono text-xs">
              <span className="text-universe-accent uppercase tracking-widest block text-[11px] flex items-center gap-2 font-semibold">
                <Globe2 className="w-4 h-4" />
                <span>LANGUAGES</span>
              </span>
              <p className="text-universe-muted text-[11px] leading-relaxed">
                Languages:
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                {PERSONAL_DATA.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full border border-universe-border/60 bg-universe-bg text-universe-text text-[11px]"
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
              I am someone who genuinely enjoys understanding how businesses function from the inside out: what gives an idea momentum, how unit economics sustain operations, and how data and technology can turn an abstract concept into a workable reality.
            </p>

            <p>
              Rather than confining myself to a single discipline, I am currently pursuing two academic journeys simultaneously: a <strong className="text-universe-text font-semibold">BBA in Digital Business and Entrepreneurship at IIM Bangalore</strong> and a <strong className="text-universe-text font-semibold">B.Com (Hons.) in Data Analytics at Guru Nanak Dev University (GNDU)</strong>. This dual path allows me to bridge high-level strategic models with grounded financial accounting and statistical rigor.
            </p>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-universe-text uppercase tracking-tight pt-4 border-t border-universe-border/40">
              Applied Problem-Solving & Case Competitions
            </h3>

            <p>
              One of the most defining experiences of my academic journey has been participating in the <strong className="text-universe-text font-semibold">MITTI Café Case Competition</strong>. Reaching the national Top 10 and presenting our strategy in the offline final round at IIM Bangalore in November 2026 provided deep insight into social enterprise economics. Contributing to marketing and financial planning for our concept—<em>MITTI Compass</em>—reinforced that social mission and financial viability must reinforce each other.
            </p>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-universe-text uppercase tracking-tight pt-4 border-t border-universe-border/40">
              Discipline, Governance & Sharing Knowledge
            </h3>

            <p>
              Discipline has been built through varied experiences: completing three years of cadet training in the <strong className="text-universe-text font-semibold">National Cadet Corps (NCC) with an &apos;Alpha&apos; grade</strong>, serving as <strong className="text-universe-text font-semibold">School House Captain during Class XII</strong>, participating in two Model United Nations conferences, and competing in school-level boxing and table tennis.
            </p>

            <p>
              I also independently teach Accountancy tuition, helping students break down ledgers, balance sheets, and core financial principles. Teaching forces clarity—if you cannot explain a concept simply, you do not truly understand it yet.
            </p>
          </div>
        </section>

        {/* Section 2: Operating Principles */}
        <section className="pt-12 border-t border-universe-border/60 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-universe-accent uppercase tracking-widest block mb-2">
                // FOUNDATIONS
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight">
                HOW I APPROACH PROBLEMS
              </h2>
            </div>
            <p className="font-mono text-xs text-universe-muted max-w-sm">
              The core principles guiding my academic exploration, business analysis, and daily habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="p-8 rounded-2xl border border-universe-border/80 bg-universe-surface/60 hover:bg-universe-surface/90 hover:border-universe-accent/50 transition-all space-y-4"
              >
                <div className="flex items-center justify-between font-mono text-xs text-universe-accent">
                  <span className="font-bold">{principle.number} // PRINCIPLE</span>
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

        {/* Section 3: Areas of Interest */}
        <section className="pt-12 border-t border-universe-border/60 space-y-6">
          <span className="font-mono text-xs text-universe-accent uppercase tracking-widest block">
            // AREAS OF INTEREST
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
