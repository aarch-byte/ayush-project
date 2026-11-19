"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Copy, Mail, MessageSquare, Send, Sparkles, User } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";

export default function ContactPage() {
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

    const subject = encodeURIComponent(`[Website Inquiry] ${formState.topic} - from ${formState.name || "Visitor"}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.topic}\n\nMessage:\n${formState.message}`);
    const mailtoUrl = `mailto:${PERSONAL_DATA.contact.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-24 sm:pt-32 pb-24 bg-universe-bg text-universe-text">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-25" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-universe-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-universe-muted">
          <Link href="/" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-universe-accent uppercase">07 CONNECT</span>
        </div>

        {/* Page Header */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNICATION // DIRECT CONTACT</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            LET&apos;S START A <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              conversation.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-universe-muted max-w-2xl leading-relaxed">
            Whether you want to discuss the MITTI Compass simulator concept, explore ideas in business strategy and data analytics, or connect around shared interests in entrepreneurship and finance.
          </p>
        </header>

        {/* Contact Grid: Direct Connection & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Dossier */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-8 rounded-3xl border border-universe-border bg-universe-surface/80 space-y-4">
              <span className="font-mono text-[11px] text-universe-accent uppercase tracking-widest block font-semibold">
                DIRECT INBOX
              </span>
              <p className="font-display font-bold text-2xl text-universe-text tracking-tight break-all">
                {PERSONAL_DATA.contact.email}
              </p>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-universe-border bg-universe-bg hover:border-universe-accent font-mono text-xs text-universe-text hover:text-universe-accent transition-all font-semibold"
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

            {/* Professional Profiles */}
            <div className="p-8 rounded-3xl border border-universe-border bg-universe-surface/80 space-y-4">
              <span className="font-mono text-[11px] text-universe-accent uppercase tracking-widest block font-semibold">
                PROFESSIONAL PROFILE
              </span>

              <div className="space-y-3 font-mono text-xs">
                <a
                  href={PERSONAL_DATA.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-universe-border/60 bg-universe-bg hover:border-universe-accent hover:text-universe-accent transition-all text-universe-text group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-universe-accent" />
                    <span>LINKEDIN PROFILE</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="p-4 rounded-xl border border-universe-border/40 bg-universe-bg/50 text-universe-muted text-[11px] space-y-1">
                  <span className="text-universe-text block font-semibold">ACADEMIC JOURNEYS:</span>
                  <p>• IIM Bangalore — BBA in Digital Business & Entrepreneurship</p>
                  <p>• GNDU — B.Com (Hons.) Data Analytics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Message Dispatcher Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-universe-border bg-universe-surface/80 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-16 text-center space-y-4 font-mono">
                  <div className="w-14 h-14 rounded-full bg-universe-accent/20 border border-universe-accent text-universe-accent flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-universe-text">
                    Email Client Dispatched
                  </h3>
                  <p className="text-xs text-universe-muted max-w-sm mx-auto leading-relaxed">
                    Your transmission has been forwarded to your mail client addressed to {PERSONAL_DATA.contact.email}.
                  </p>
                  <div>
                    <a
                      href={`mailto:${PERSONAL_DATA.contact.email}?subject=${encodeURIComponent(`[Website Inquiry] ${formState.topic} - from ${formState.name || "Visitor"}`)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\nTopic: ${formState.topic}\n\nMessage:\n${formState.message}`)}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-universe-accent text-universe-bg font-mono text-xs font-bold uppercase hover:bg-white transition-all my-2"
                    >
                      <span>Click to open email client</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-block mt-3 text-xs text-universe-accent hover:underline uppercase"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:outline-none focus:border-universe-accent font-sans text-sm"
                    />
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Your Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:outline-none focus:border-universe-accent font-sans text-sm"
                    />
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Topic of Discussion</label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-universe-border bg-universe-bg text-universe-text focus:outline-none focus:border-universe-accent font-sans text-sm"
                    >
                      <option value="Business Strategy / Ideas">Business Strategy & Ideas</option>
                      <option value="Financial Analysis & Modeling">Financial Analysis & Modeling</option>
                      <option value="MITTI Compass Case Study">MITTI Compass Case Study</option>
                      <option value="Data Analytics & Projects">Data Analytics & Projects</option>
                      <option value="General Conversation">General Conversation</option>
                    </select>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <label className="text-universe-muted uppercase block">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your note or question here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/50 focus:outline-none focus:border-universe-accent font-sans text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-universe-accent text-universe-bg font-mono text-xs uppercase tracking-wider font-bold hover:bg-white transition-all shadow-[0_0_20px_rgba(216,255,62,0.2)]"
                  >
                    <span>OPEN EMAIL DISPATCHER</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
