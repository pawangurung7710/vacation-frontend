"use client";

import React, { useState } from "react";
import { ChevronDown, Clock, Mountain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ItineraryDay } from "@/data/treks";
import { cn } from "@/lib/utils";

interface TrekItineraryProps {
    itinerary: ItineraryDay[];
}

export default function TrekItinerary({ itinerary }: TrekItineraryProps) {
    const [openDays, setOpenDays] = useState<number[]>([1]); // Day 1 open by default

    const toggleDay = (day: number) => {
        setOpenDays(prev =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    return (
        <section className="space-y-8">
            <div>
                <h2 className="text-[10px] uppercase tracking-widest text-cta-accent font-bold mb-4">Journey</h2>
                <h3 className="text-3xl font-bold text-primary-text mb-2">Detailed Itinerary</h3>
                <p className="text-primary-text/60 font-medium">Carefully planned for optimal acclimatization and experience.</p>
            </div>

            <div className="relative">
                {/* Timeline Line (Desktop) */}
                <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-border-subtle hidden md:block" />

                <div className="space-y-6">
                    {itinerary.map((item) => (
                        <div key={item.day} className="relative">
                            {/* Timeline Dot (Desktop) */}
                            <div className={cn(
                                "absolute left-[14px] top-4 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 transition-colors hidden md:block",
                                openDays.includes(item.day) ? "bg-cta-accent" : "bg-border-subtle"
                            )} />

                            <div className={cn(
                                "bg-white rounded-3xl border transition-all duration-300 overflow-hidden md:ml-12",
                                openDays.includes(item.day) ? "border-cta-accent shadow-md" : "border-border-subtle hover:border-cta-accent/50"
                            )}>
                                <button
                                    onClick={() => toggleDay(item.day)}
                                    className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                                >
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm font-bold text-cta-accent bg-cta-accent/10 px-3 py-1 rounded-lg shrink-0">
                                            Day {item.day}
                                        </span>
                                        <h4 className="text-lg font-bold text-primary-text">{item.title}</h4>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        {item.altitude !== "-" && (
                                            <div className="flex items-center text-[10px] font-bold text-primary-text/40 space-x-1.5 bg-background px-2 py-1 rounded-md border border-border-subtle">
                                                <Mountain size={12} className="text-cta-accent" />
                                                <span>{item.altitude}</span>
                                            </div>
                                        )}
                                        {item.hours !== "-" && (
                                            <div className="flex items-center text-[10px] font-bold text-primary-text/40 space-x-1.5 bg-background px-2 py-1 rounded-md border border-border-subtle">
                                                <Clock size={12} className="text-cta-accent" />
                                                <span>{item.hours} hrs</span>
                                            </div>
                                        )}
                                        <motion.div
                                            animate={{ rotate: openDays.includes(item.day) ? 180 : 0 }}
                                            className="text-primary-text/40"
                                        >
                                            <ChevronDown size={20} />
                                        </motion.div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openDays.includes(item.day) && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-8 pt-2">
                                                <div className="prose prose-slate prose-sm max-w-none text-primary-text/70 leading-relaxed font-medium">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
