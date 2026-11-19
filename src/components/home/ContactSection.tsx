"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    navigator.clipboard.writeText(PERSONAL_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formState.topic} - from ${formState.name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.topic}\n\nMessage:\n${formState.message}`);
    const mailtoUrl = `mailto:${PERSONAL_DATA.contact.email}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
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
            <span>SECTION 07 — GET IN TOUCH</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-tight text-universe-text">
            LET&apos;S START A <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              conversation.
            </span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-universe-muted max-w-xl mx-auto leading-relaxed">
            Interested in discussing business models, data analytics, case studies, or sharing thoughts on entrepreneurship and finance? Reach out directly.
          </p>
        </div>

        {/* Contact Grid: Direct Connection & Message Mechanism */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Connection Dossier */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/70 space-y-4">
              <span className="font-mono text-[11px] text-universe-accent uppercase tracking-widest block font-semibold">
                DIRECT INBOX
              </span>
              <p className="font-display font-bold text-xl text-universe-text tracking-tight break-all">
                {PERSONAL_DATA.contact.email}
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
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-universe-accent uppercase tracking-widest block font-semibold">
                  PROFESSIONAL PROFILE
                </span>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-universe-border/60 shrink-0">
                  <Image
                    src="/images/ayush-portrait.png"
                    alt="Ayush"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <a
                  href={PERSONAL_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-universe-border/60 bg-universe-bg hover:border-universe-accent hover:text-universe-accent transition-all text-universe-text group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-universe-accent" />
                    <span>LINKEDIN</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-3 rounded-xl border border-universe-border/40 bg-universe-bg/50 text-universe-muted text-[11px]">
                  <span>LOCATION: {PERSONAL_DATA.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl border border-universe-border bg-universe-surface/80 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 font-mono">
                  <div className="w-12 h-12 rounded-full bg-universe-accent/20 border border-universe-accent text-universe-accent flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-universe-text">
                    Email Client Opened
                  </h3>
                  <p className="text-xs text-universe-muted max-w-sm mx-auto leading-relaxed">
                    Your message has been pre-formatted for direct dispatch to {PERSONAL_DATA.contact.email}.
                  </p>
                  <div>
                    <a
                      href={`mailto:${PERSONAL_DATA.contact.email}?subject=${encodeURIComponent(`[Website Inquiry] ${formState.topic} - from ${formState.name || "Visitor"}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.topic}\n\nMessage:\n${formState.message}`)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-universe-accent text-universe-bg font-mono text-xs font-bold uppercase hover:bg-white transition-all"
                    >
                      <span>Click to open email client</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-block mt-2 text-xs text-universe-accent hover:underline uppercase"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:outline-none focus:border-universe-accent font-sans text-sm"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:outline-none focus:border-universe-accent font-sans text-sm"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Topic of Discussion</label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text focus:outline-none focus:border-universe-accent font-sans text-sm"
                    >
                      <option value="Business Strategy / Ideas">Business Strategy & Ideas</option>
                      <option value="Financial Analysis & Modeling">Financial Analysis & Modeling</option>
                      <option value="MITTI Compass Case Study">MITTI Compass Case Study</option>
                      <option value="Data Analytics & Projects">Data Analytics & Projects</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your thoughts, questions, or ideas..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:outline-none focus:border-universe-accent font-sans text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-universe-accent text-universe-bg font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(216,255,62,0.2)]"
                  >
                    <span>COMPOSE EMAIL IN DISPATCHER</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
