"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsStartedRef = useRef(false);

  useEffect(() => {
    // Check saved preference on mount
    try {
      const saved = localStorage.getItem("ayush_sound_preference");
      if (saved === "true") {
        // Prepared state, but avoid aggressive autoplay before user gesture
      }
    } catch {
      // Ignore storage access restrictions
    }

    return () => {
      // Cleanup audio context on unmount
      if (audioContextRef.current) {
        try {
          audioContextRef.current.close();
        } catch {}
        audioContextRef.current = null;
      }
    };
  }, []);

  const initAudio = () => {
    if (audioContextRef.current) return audioContextRef.current;

    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return null;

      const ctx = new AudioCtx();
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Warm ambient frequencies (A2 drone & harmonic E3)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(110, ctx.currentTime);

      const osc2 = ctx.createOscillator();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(164.81, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);

      osc1.start();
      osc2.start();
      oscillatorsStartedRef.current = true;

      audioContextRef.current = ctx;
      gainNodeRef.current = masterGain;

      return ctx;
    } catch (err) {
      console.warn("Web Audio API not supported or user blocked:", err);
      return null;
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      // Smoothly ramp down volume to silence
      if (gainNodeRef.current && audioContextRef.current) {
        const ctx = audioContextRef.current;
        gainNodeRef.current.gain.cancelScheduledValues(ctx.currentTime);
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
      }
      setIsPlaying(false);
      try {
        localStorage.setItem("ayush_sound_preference", "false");
      } catch {}
    } else {
      // Initialize or resume
      let ctx = audioContextRef.current;
      if (!ctx) {
        ctx = initAudio();
      }
      if (ctx && ctx.state === "suspended") {
        ctx.resume();
      }
      if (gainNodeRef.current && ctx) {
        gainNodeRef.current.gain.cancelScheduledValues(ctx.currentTime);
        gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value || 0.0001, ctx.currentTime);
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.8);
      }
      setIsPlaying(true);
      try {
        localStorage.setItem("ayush_sound_preference", "true");
      } catch {}
    }
  };

  return (
    <button
      onClick={toggleSound}
      type="button"
      className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-universe-border bg-universe-surface/60 hover:border-universe-accent/50 transition-all text-xs font-mono tracking-wider focus:outline-none focus:ring-1 focus:ring-universe-accent"
      aria-label={isPlaying ? "Mute ambient sound" : "Enable ambient sound"}
      aria-pressed={isPlaying}
      title={isPlaying ? "Sound ON (Click to mute)" : "Sound OFF (Click to enable ambient soundscape)"}
    >
      <span className="flex items-center gap-0.5 h-3">
        {isPlaying ? (
          <>
            <span className="w-0.5 h-3 bg-universe-accent animate-pulse" />
            <span
              className="w-0.5 h-2 bg-universe-accent animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-0.5 h-3.5 bg-universe-accent animate-pulse"
              style={{ animationDelay: "300ms" }}
            />
          </>
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-universe-muted group-hover:text-universe-text transition-colors" />
        )}
      </span>
      <span className="hidden sm:inline uppercase text-[10px] text-universe-muted group-hover:text-universe-text transition-colors font-medium">
        {isPlaying ? "SOUND ON" : "SOUND OFF"}
      </span>
    </button>
  );
}
