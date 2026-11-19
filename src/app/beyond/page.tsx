import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Compass, Dumbbell, Globe, HeartHandshake, Shield, Sparkles, Trophy, Zap } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";

export default function BeyondPage() {
  const experiences = [
    {
      title: "BOXING",
      discipline: "School-Level Participation & Discipline",
      category: "PHYSICAL TRAINING",
      accent: "#FF674A",
      icon: <Dumbbell className="w-5 h-5 text-universe-secondary" />,
      quote: "Discipline in the gym builds composure and focus under pressure.",
      narrative:
        "Participated in boxing at the school level and maintained personal conditioning. Inside the gym, there are no shortcuts. It demands physical endurance, defensive composure under strain, and steady emotional balance.",
      takeaways: [
        "Composure and situational focus under physical fatigue",
        "Spatial awareness and reaction timing",
        "The discipline of consistent daily conditioning",
      ],
    },
    {
      title: "TABLE TENNIS",
      discipline: "School-Level Competition & Reflexes",
      category: "RACQUET SPORT",
      accent: "#D8FF3E",
      icon: <Trophy className="w-5 h-5 text-universe-accent" />,
      quote: "A game of anticipation, spin mechanics, and millisecond tactical adjustments.",
      narrative:
        "Competed in table tennis at the school level. A fast-paced sport where reading the opponent's paddle angle, anticipating spin, and placing the ball with controlled touch require rapid micro-decisions.",
      takeaways: [
        "Anticipating trajectory angles before contact",
        "Touch control balancing speed with spin rotation",
        "Maintaining concentration through long rallies",
      ],
    },
    {
      title: "MODEL UNITED NATIONS",
      discipline: "Multilateral Negotiation & Policy Discussion",
      category: "DIPLOMACY (2 CONFERENCES)",
      accent: "#38bdf8",
      icon: <Globe className="w-5 h-5 text-sky-400" />,
      quote: "Understanding different perspectives is the prerequisite for collaborative resolution.",
      narrative:
        "Participated as a delegate in two Model United Nations conferences. Represented assigned nations in structured committee sessions, negotiating policy clauses, engaging in debate, and collaborating with fellow delegates to draft resolutions.",
      takeaways: [
        "Analyzing policy issues from an assigned nation's perspective",
        "Collaborative drafting and cross-caucus consensus building",
        "Structured public speaking and defending proposals under questioning",
      ],
    },
    {
      title: "ACCOUNTANCY TUTORING",
      discipline: "Independent Teaching & Financial Fundamentals",
      category: "COMMERCE EDUCATION",
      accent: "#f59e0b",
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      quote: "Teaching reveals whether you truly understand the mechanics beneath the formulas.",
      narrative:
        "Independently tutoring students in Accountancy, explaining ledger debit/credit mechanics, financial statement construction, cash flows, and balance sheets. Breaking down complex commercial concepts for students strengthens my own first-principles understanding.",
      takeaways: [
        "Deconstructing accounting principles into clear, intuitive steps",
        "Fostering patience and adaptable pedagogical explanations",
        "Reinforcing foundational financial and balance sheet mechanics",
      ],
    },
    {
      title: "TRAVEL & PERSPECTIVE",
      discipline: "Regional Exploration & Local Markets",
      category: "CULTURAL OBSERVATION",
      accent: "#34d399",
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      quote: "Observing local commerce in person grounds theoretical economic concepts.",
      narrative:
        "Traveling across different regions in India and observing how local markets and small enterprises operate. With working proficiency in English and Hindi, native conversational fluency in Punjabi, and foundational understanding of Urdu, engaging with diverse communities offers authentic commercial perspective.",
      takeaways: [
        "First-hand observation of local merchant cash-flow dynamics",
        "Multilingual communication bridging regional contexts",
        "Appreciating diverse commercial traditions across communities",
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
            <span>PERSONAL PURSUITS // SPORTS, DIPLOMACY & TEACHING</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            THERE&apos;S MORE TO <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              the story.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-universe-muted max-w-2xl leading-relaxed">
            School-level athletics, Model United Nations conferences, independent accountancy teaching, and travel experiences that broaden perspective.
          </p>
        </header>

        {/* Deep Dive Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-universe-border/70 bg-universe-surface/60 p-8 sm:p-12 hover:border-universe-accent/40 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Ambient Radial Highlight */}
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-15 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: exp.accent }}
              />

              {/* Card Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-universe-border/40 pb-6 mb-8 font-mono text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-universe-bg border border-universe-border/60">
                    {exp.icon}
                  </span>
                  <span className="uppercase tracking-wider font-semibold text-universe-text text-[11px]">
                    {exp.category}
                  </span>
                </div>
                <span className="text-universe-accent text-[11px]">
                  // {exp.discipline}
                </span>
              </div>

              {/* Headline & Quote */}
              <div className="space-y-4 max-w-3xl">
                <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-universe-text group-hover:text-universe-accent transition-colors">
                  {exp.title}
                </h2>
                <p className="font-serif italic text-xl sm:text-2xl text-universe-text/90 leading-snug">
                  &ldquo;{exp.quote}&rdquo;
                </p>
              </div>

              {/* Main Narrative & Takeaways Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 pt-6 border-t border-universe-border/40 text-sm">
                <div className="lg:col-span-7 space-y-4 text-universe-text/80 font-sans leading-relaxed">
                  <span className="font-mono text-xs text-universe-accent uppercase block font-semibold">
                    THE EXPERIENCE
                  </span>
                  <p>{exp.narrative}</p>
                </div>

                <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                  <span className="text-universe-accent uppercase block font-semibold">
                    KEY TAKEAWAYS:
                  </span>
                  <ul className="space-y-2">
                    {exp.takeaways.map((takeaway, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-universe-text/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-universe-accent mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{takeaway}</span>
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
            <span>07 INITIATE CONTACT →</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
