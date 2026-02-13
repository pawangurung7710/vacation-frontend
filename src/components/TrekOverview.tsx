"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface TrekOverviewProps {
    overview: string;
    highlights: string[];
}

export default function TrekOverview({ overview, highlights }: TrekOverviewProps) {
    return (
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border-subtle shadow-sm overflow-hidden relative">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left Column: Description */}
                <div className="flex-1">
                    <h2 className="text-[10px] uppercase tracking-widest text-cta-accent font-bold mb-4">The Experience</h2>
                    <h3 className="text-3xl font-bold text-primary-text mb-6">Trek Overview</h3>
                    <div className="prose prose-slate prose-lg text-primary-text/70 leading-relaxed font-medium">
                        {overview.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Right Column: Highlights */}
                <div className="lg:w-[350px] shrink-0">
                    <div className="bg-background rounded-3xl p-8 border border-border-subtle h-full">
                        <h4 className="text-xl font-bold text-primary-text mb-8">Key Highlights</h4>
                        <ul className="space-y-6">
                            {highlights.map((highlight, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start space-x-3"
                                >
                                    <CheckCircle2 size={20} className="text-cta-accent mt-0.5 shrink-0" />
                                    <span className="text-sm font-semibold text-primary-text/80">{highlight}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
