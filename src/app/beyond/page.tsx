import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, Dumbbell, Globe, HeartHandshake, Shield, Sparkles, Trophy, Zap } from "lucide-react";

export default function BeyondPage() {
  const experiences = [
    {
      title: "BOXING",
      discipline: "Kinetic Presence & Tactical Composure",
      category: "COMBAT DISCIPLINE",
      accent: "#FF674A",
      icon: <Dumbbell className="w-5 h-5 text-universe-secondary" />,
      quote: "Inside the ring, rhetoric is useless. You are either balanced, or you are hit.",
      narrative:
        "Boxing is an uncompromising teacher of honesty. There is no hiding behind clever phrasing or delegating responsibility inside the ropes. It demands total situational awareness, microsecond reaction time, defensive composure under physical strain, and constant rhythm modulation.",
      takeaways: [
        "Mastering emotional composure while under intense physical pressure",
        "Reading subtle micro-tells and weight shifts in an opponent",
        "The discipline of relentless footwork and energy conservation",
      ],
    },
    {
      title: "TABLE TENNIS",
      discipline: "Reflex Geometry & Spin Mechanics",
      category: "TACTICAL RACQUET SPORT",
      accent: "#D8FF3E",
      icon: <Trophy className="w-5 h-5 text-universe-accent" />,
      quote: "A game of centimeters where decisions occur faster than conscious thought.",
      narrative:
        "Table tennis is physical geometry at lightning velocity. Reading the subtle brush angle of an opponent's paddle to anticipate topspin, underspin, or sidespin before the ball crosses the net. It requires combining explosive acceleration with delicate fingertip touch control.",
      takeaways: [
        "Anticipating three strokes ahead of the current ball placement",
        "Subtle touch control balancing speed with high-friction spin",
        "Exploiting spatial angles to force unforced opponent errors",
      ],
    },
    {
      title: "MODEL UNITED NATIONS",
      discipline: "Multilateral Diplomacy & Resolution Craft",
      category: "PUBLIC DIPLOMACY (2 CONFERENCES)",
      accent: "#38bdf8",
      icon: <Globe className="w-5 h-5 text-sky-400" />,
      quote: "Diplomacy is the art of aligning opposing self-interests toward mutual action.",
      narrative:
        "Participated as a delegate in two intensive Model United Nations assemblies. Represented designated member states across contentious committee sessions, drafting actionable multilateral clauses, building cross-caucus voting blocs, and defending treaty resolutions during cross-examination.",
      takeaways: [
        "Deconstructing complex geopolitical mandates into operative clauses",
        "Negotiating coalitions across competing ideological positions",
        "Composed public speaking under aggressive committee scrutiny",
      ],
    },
    {
      title: "GROUND EXPEDITIONS & COMMERCE",
      discipline: "Local Market Dynamics & Linguistic Immersion",
      category: "CULTURAL DISCOVERY & TRADE",
      accent: "#34d399",
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      quote: "To understand an economy, observe how local merchants price perishables.",
      narrative:
        "Traveling across the diverse cultural corridors of North and South India. Fluent across English, Hindi, Punjabi, and Urdu, I observe ground-level supply chains, localized pricing behaviors, and how family-run micro-enterprises navigate credit cycles and working capital constraints.",
      takeaways: [
        "First-hand observation of unorganized retail and bazaar liquidity",
        "Linguistic agility bridging regional barriers with authenticity",
        "Appreciation for localized economic resilience away from corporate bubbles",
      ],
    },
  ];

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
          <span className="text-universe-accent uppercase">06 BEYOND THE WORK</span>
        </div>

        {/* Page Header */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE UNFILTERED INDIVIDUAL // ATHLETICS, DIPLOMACY & LIFE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            THERE&apos;S MORE TO <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              the story.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-universe-muted max-w-2xl leading-relaxed">
            Character is forged away from the laptop. The athletic disciplines, diplomatic assemblies, and observational travels that shape intuition and resilience.
          </p>
        </header>

        {/* Four In-Depth Discipline Showcases */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-12 rounded-3xl border border-universe-border/80 bg-universe-surface/60 hover:bg-universe-surface/90 hover:border-universe-accent/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Ambient Backlight Glow */}
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none opacity-15"
                style={{ backgroundColor: exp.accent }}
              />

              {/* Header Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-universe-border/40 pb-6 mb-8 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-universe-bg border border-universe-border">
                    {exp.icon}
                  </span>
                  <span className="font-bold uppercase tracking-wider text-universe-text text-[11px]">
                    {exp.category}
                  </span>
                </div>
                <span className="text-universe-muted uppercase">
                  EXPERIENCE RECORD // NO STOCK FABRICATION
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-3">
                <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-universe-text">
                  {exp.title}
                </h2>
                <p className="font-mono text-xs text-universe-accent uppercase tracking-wider">
                  // {exp.discipline}
                </p>
              </div>

              {/* Quote & Narrative */}
              <div className="my-8 pt-6 border-t border-universe-border/40 grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-6 space-y-4">
                  <div className="border-l-2 pl-4 py-1" style={{ borderColor: exp.accent }}>
                    <p className="font-serif italic text-xl text-universe-text leading-snug">
                      &ldquo;{exp.quote}&rdquo;
                    </p>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-universe-text/80 leading-relaxed">
                    {exp.narrative}
                  </p>
                </div>

                <div className="lg:col-span-6 space-y-3 p-6 rounded-2xl border border-universe-border bg-universe-bg/70 font-mono text-xs">
                  <span className="text-universe-accent uppercase block font-semibold text-[10px] tracking-wider">
                    OPERATIONAL & STRATEGIC TAKEAWAYS:
                  </span>
                  <ul className="space-y-2 text-universe-text/90 text-xs">
                    {exp.takeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="mt-0.5 text-universe-accent">›</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <footer className="pt-12 border-t border-universe-border/60 flex items-center justify-between font-mono text-xs">
          <Link href="/thinking" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>← 05 THE THINKING</span>
          </Link>
          <Link href="/contact" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>07 CONNECT →</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
