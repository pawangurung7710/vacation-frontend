"use client";

import React from "react";
import { CloudSun, Flower, Snowflake, Sun, Search, MessageCircle, Tent, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const seasons = [
    {
        icon: CloudSun,
        name: "Autumn",
        months: "Sep – Nov",
        tagline: "Best Overall",
        description: "Crisp air, clear blue skies, and the best mountain views after the monsoon.",
    },
    {
        icon: Flower,
        name: "Spring",
        months: "Mar – May",
        tagline: "Classic Views",
        description: "Rhododendrons in bloom and warm temperatures. Perfect for high passes.",
    },
    {
        icon: Sun,
        name: "Summer",
        months: "Jun – Aug",
        tagline: "Lush Trails",
        description: "Monsoon season. Best for rain-shadow regions like Mustang and Dolpo.",
    },
];

const steps = [
    {
        icon: Search,
        title: "Choose Your Trek",
        description: "Browse our curated routes with detailed itineraries and transparent pricing.",
    },
    {
        icon: MessageCircle,
        title: "Connect With Us",
        description: "Inquire via form or WhatsApp. Our local experts will help you plan every detail.",
    },
    {
        icon: Tent,
        title: "Prepare & Trek",
        description: "Receive your permits, gear list, and meet your local Sherpa family on the trail.",
    },
];

export default function SeasonalAndProcess() {
    return (
        <div className="bg-background">
            {/* Seasonal Guide */}
            <section className="py-24 border-b border-border-subtle overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Planning Your Journey</span>
                        <h2 className="text-3xl md:text-5xl font-bold">Best Time to Trek</h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {seasons.map((season, index) => (
                            <motion.div
                                key={season.name}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex-1 bg-white p-8 rounded-3xl border border-border-subtle group hover:border-cta-accent transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-cta-accent group-hover:bg-cta-accent group-hover:text-white transition-all">
                                        <season.icon size={28} />
                                    </div>
                                    <span className="px-3 py-1 bg-cta-accent/10 text-cta-accent text-[10px] font-bold uppercase rounded-full">
                                        {season.tagline}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{season.name}</h3>
                                <p className="text-cta-accent font-bold text-sm mb-4 uppercase tracking-tighter">{season.months}</p>
                                <p className="text-primary-text/70 leading-relaxed">
                                    {season.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
                        <div className="w-20 h-1.5 bg-cta-accent rounded-full" />
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-border-subtle -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex flex-col items-center text-center px-4"
                                >
                                    <div className="w-20 h-20 bg-white rounded-full p-2 border-4 border-background shadow-lg mb-8 group ring-8 ring-white transition-all hover:ring-cta-accent/20">
                                        <div className="w-full h-full bg-cta-accent rounded-full flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                                            <step.icon size={32} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-primary-text/70 leading-relaxed max-w-xs">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
