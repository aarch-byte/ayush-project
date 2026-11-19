"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Copy, Mail, Send, Sparkles } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "Business Strategy / Ideas",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ayush@digitaluniverse.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-universe-bg border-t border-universe-border/60 overflow-hidden">
      {/* Background Spatial Atmosphere */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-universe-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-universe-accent/40 bg-universe-accent/10 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECTION 07 — TRANSMISSION</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-tight text-universe-text">
            LET&apos;S MAKE <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              something happen.
            </span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-universe-muted max-w-xl mx-auto leading-relaxed">
            Whether you have a strategic financial problem, an intriguing venture model to deconstruct, or simply want to start a conversation with a curious mind.
          </p>
        </div>

        {/* Contact Grid: Direct Connection & Message Mechanism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Connection Dossier */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/70 space-y-4">
              <span className="font-mono text-[11px] text-universe-accent uppercase tracking-widest block">
                DIRECT INBOX
              </span>
              <p className="font-display font-bold text-xl text-universe-text tracking-tight break-all">
                ayush@digitaluniverse.com
              </p>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-universe-border bg-universe-bg hover:border-universe-accent font-mono text-xs text-universe-text hover:text-universe-accent transition-all"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-universe-accent" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Network Presence */}
            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/70 space-y-4">
              <span className="font-mono text-[11px] text-universe-accent uppercase tracking-widest block">
                DIGITAL PROFILES
              </span>

              <div className="space-y-2 font-mono text-xs">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-universe-border/60 bg-universe-bg hover:border-universe-accent hover:text-universe-accent transition-all text-universe-text group"
                >
                  <span className="font-semibold">LINKEDIN // PROFESSIONAL</span>
                  <ArrowUpRight className="w-4 h-4 text-universe-muted group-hover:text-universe-accent transition-colors" />
                </a>

                <div className="p-3 rounded-xl border border-universe-border/40 bg-universe-bg/40 text-universe-muted flex items-center justify-between">
                  <span>LOCATION BASE</span>
                  <span className="text-universe-text">{PERSONAL_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Response Commitment Note */}
            <div className="p-4 rounded-xl border border-universe-border/40 bg-universe-bg/40 font-mono text-[11px] text-universe-muted space-y-1">
              <span className="text-universe-accent block font-semibold uppercase">
                COMMUNICATION PROTOCOL
              </span>
              <p>
                Every thoughtful message receives a genuine, direct reply. No corporate gatekeeping or automated templates.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Mechanism */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border border-universe-border bg-universe-surface/80 relative">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-universe-accent/20 border border-universe-accent text-universe-accent flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl text-universe-text uppercase">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-mono text-xs text-universe-muted max-w-sm mx-auto">
                  Thank you for reaching out, {formState.name || "Explorer"}. Ayush will review your note and connect shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", topic: "Business Strategy / Ideas", message: "" });
                  }}
                  className="mt-4 px-6 py-2 rounded-full border border-universe-border bg-universe-bg font-mono text-xs text-universe-accent hover:border-universe-accent transition-colors"
                >
                  SEND ANOTHER NOTE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-universe-border/60 pb-4">
                  <span className="font-mono text-xs text-universe-accent uppercase tracking-widest">
                    // QUICK TRANSMISSION FORM
                  </span>
                  <span className="font-mono text-[10px] text-universe-muted uppercase">
                    ALL FIELDS SECURE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 font-mono text-xs">
                    <label htmlFor="name" className="text-universe-muted uppercase block">
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all"
                    />
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <label htmlFor="email" className="text-universe-muted uppercase block">
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <label htmlFor="topic" className="text-universe-muted uppercase block">
                    INQUIRY FOCUS
                  </label>
                  <select
                    id="topic"
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all"
                  >
                    <option value="Business Strategy / Ideas">Business Strategy / Ideas</option>
                    <option value="MITTI Compass Case Inquiry">MITTI Compass Case Inquiry</option>
                    <option value="Data Analytics Discussion">Data Analytics Discussion</option>
                    <option value="General Conversation / Connect">General Conversation / Connect</option>
                  </select>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <label htmlFor="message" className="text-universe-muted uppercase block">
                    YOUR NOTE / THOUGHT
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Share an interesting idea, case scenario, or proposal..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-universe-accent text-universe-bg font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(216,255,62,0.2)]"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>TRANSMIT MESSAGE TO AYUSH</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
