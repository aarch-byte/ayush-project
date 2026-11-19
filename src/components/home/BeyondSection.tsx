import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, Dumbbell, Globe, Sparkles, Trophy } from "lucide-react";

interface CollageCard {
  title: string;
  category: string;
  discipline: string;
  narrative: string;
  coordinates?: string;
  icon: React.ReactNode;
  aspect: string;
  accentColor: string;
}

export function BeyondSection() {
  const collageItems: CollageCard[] = [
    {
      title: "BOXING",
      category: "SCHOOL-LEVEL & DISCIPLINE",
      discipline: "Physical Training & Composure",
      narrative:
        "Participated at the school level and maintained personal conditioning. Boxing instills physical discipline, focus under pressure, and emotional composure.",
      icon: <Dumbbell className="w-5 h-5 text-universe-secondary" />,
      aspect: "col-span-1 md:col-span-6 lg:col-span-7",
      accentColor: "#FF674A",
    },
    {
      title: "TABLE TENNIS",
      category: "SCHOOL-LEVEL COMPETITION",
      discipline: "Reflexes & Tactical Anticipation",
      narrative:
        "Competed in table tennis at the school level. A game requiring quick anticipation, spin awareness, and split-second tactical adjustments.",
      icon: <Trophy className="w-5 h-5 text-universe-accent" />,
      aspect: "col-span-1 md:col-span-6 lg:col-span-5",
      accentColor: "#D8FF3E",
    },
    {
      title: "MODEL UNITED NATIONS",
      category: "DIPLOMACY & COLLABORATIVE DEBATE",
      discipline: "Multilateral Discussion (2 Conferences)",
      narrative:
        "Participated as a delegate in two Model United Nations conferences, working through committee negotiations, policy debate, and resolution drafting.",
      icon: <Globe className="w-5 h-5 text-sky-400" />,
      aspect: "col-span-1 md:col-span-6 lg:col-span-5",
      accentColor: "#38bdf8",
    },
    {
      title: "ACCOUNTANCY TUTORING",
      category: "INDEPENDENT TEACHING",
      discipline: "Commercial Fundamentals",
      narrative:
        "Independently teaching Accountancy tuition, breaking down financial statements, balance sheets, and accounting mechanics to clarify core concepts.",
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      aspect: "col-span-1 md:col-span-6 lg:col-span-7",
      accentColor: "#f59e0b",
    },
    {
      title: "TRAVEL & PERSPECTIVE",
      category: "CULTURAL DISCOVERY",
      discipline: "Observation & Local Markets",
      narrative:
        "Exploring regional commercial centers and observing how local markets operate. Conversant across English and Hindi (working/academic), Punjabi (native/conversational), and Urdu (foundational/conversational).",
      coordinates: "INDIAN MARKETS",
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      aspect: "col-span-1 md:col-span-12",
      accentColor: "#34d399",
    },
  ];

  return (
    <section id="beyond" className="relative py-24 lg:py-36 bg-universe-bg border-t border-universe-border/60 overflow-hidden">
      {/* Subtle Background Markings */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-universe-border/60 pb-8 mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest mb-3">
              <span>// SECTION 06 — BEYOND THE WORK</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-tight text-universe-text">
              THERE&apos;S MORE TO <br />
              <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
                the story.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs sm:text-sm text-universe-muted leading-relaxed">
            School-level sports, Model United Nations conferences, independent teaching, and personal exploration that shape discipline and curiosity.
          </p>
        </div>

        {/* Asymmetric Editorial Visual Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {collageItems.map((item, index) => (
            <div
              key={index}
              className={`${item.aspect} group relative rounded-3xl border border-universe-border/70 bg-universe-surface/60 p-8 sm:p-10 flex flex-col justify-between hover:border-universe-accent/50 hover:bg-universe-surface/90 transition-all duration-300 min-h-[260px] overflow-hidden`}
            >
              {/* Subtle Ambient Glow for Accent */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: item.accentColor }}
              />

              {/* Top Card Metadata */}
              <div className="flex items-center justify-between font-mono text-xs text-universe-muted mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-universe-bg border border-universe-border/60">
                    {item.icon}
                  </span>
                  <span className="uppercase tracking-wider font-semibold text-universe-text text-[11px]">
                    {item.category}
                  </span>
                </div>

                {item.coordinates ? (
                  <span className="text-[10px] text-universe-accent uppercase">
                    {item.coordinates}
                  </span>
                ) : (
                  <span className="text-[10px] text-universe-muted uppercase">
                    FIG. 0{index + 1}
                  </span>
                )}
              </div>

              {/* Middle Title & Narrative */}
              <div className="space-y-3 my-auto">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-universe-text uppercase tracking-tight group-hover:text-universe-accent transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-universe-accent uppercase tracking-wider">
                  // {item.discipline}
                </p>
                <p className="text-sm sm:text-base text-universe-text/80 font-sans leading-relaxed">
                  {item.narrative}
                </p>
              </div>

              {/* Bottom Authentic Marker */}
              <div className="mt-6 pt-4 border-t border-universe-border/40 flex items-center justify-between font-mono text-[11px] text-universe-muted">
                <span>PERSONAL PURSUITS</span>
                <span className="text-universe-accent">AUTHENTIC</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Beyond Page */}
        <div className="mt-16 text-center">
          <Link
            href="/beyond"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-universe-border bg-universe-surface hover:border-universe-accent text-universe-text font-mono text-xs tracking-wider uppercase transition-all"
          >
            <span>VIEW BEYOND THE WORK DETAILS</span>
            <ArrowUpRight className="w-4 h-4 text-universe-accent" />
          </Link>
        </div>
      </div>
    </section>
  );
}
