"use client";

import React from "react";
import { Clock, Mountain, Activity, Calendar } from "lucide-react";
import { TrekData } from "@/types/trek";
import { motion } from "framer-motion";

interface TrekStatsProps {
  trek: TrekData;
}

export default function TrekStats({ trek }: TrekStatsProps) {
  const stats = [
    {
      label: "Duration",
      value: `${trek.durationDays} Days`,
      icon: Clock,
    },
    {
      label: "Max Altitude",
      value: `${trek.maxAltitudeMeters}m`,
      icon: Mountain,
    },
    {
      label: "Difficulty",
      value: trek.difficulty,
      icon: Activity,
    },
    {
      label: "Best Season",
      value: "Spring / Autumn", // Derived from weather logic later
      icon: Calendar,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col items-center justify-center text-center text-white"
        >
          <div className="bg-[#F59E0B] p-2 rounded-full mb-3 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
            <stat.icon size={20} className="text-white" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
            {stat.label}
          </p>
          <p className="text-lg font-serif font-bold leading-tight">
            {stat.value}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
