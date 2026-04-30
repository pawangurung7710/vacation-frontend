"use client";

import React from "react";
import Image from "next/image";
import { TrekData } from "@/types/trek";
import TrekStats from "./TrekStats";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  trek: TrekData;
}

export default function EntityHero({ trek }: HeroProps) {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Next/Image for optimization */}
      <div className="absolute inset-0 z-0 bg-[#1E3A5F]">
        <Image
          src={trek.heroImage}
          alt={`Cinematic view of the ${trek.name}`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-[#1E3A5F]/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-3xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {trek.trustBadges.map((badge, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold tracking-wide shadow-sm"
              >
                <ShieldCheck size={14} className="text-[#F59E0B]" />
                {badge}
              </motion.span>
            ))}
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6"
          >
            {trek.name}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light"
          >
            {trek.description}
          </motion.p>

          {/* Trek Stats Custom Component */}
          <div className="mb-8">
            <TrekStats trek={trek} />
          </div>
          
        </div>
      </div>
    </div>
  );
}
