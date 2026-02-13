"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function DealsHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image - Lighter / Softer Himalayan View */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/seasonal-deal.jpg"
                    alt="Soft Himalayan Sunset"
                    fill
                    priority
                    className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cta-accent/10 border border-cta-accent/20 text-cta-accent text-xs font-bold tracking-widest uppercase mb-6">
                        Updated for 2025 season departures
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-primary-text mb-6 leading-tight">
                        Exclusive Himalayan <br className="hidden md:block" />
                        Trekking <span className="text-cta-accent italic">Offers</span>
                    </h1>
                    <p className="text-lg md:text-xl text-primary-text/70 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                        Limited-time journeys crafted for unforgettable experiences. High-quality treks, inclusive service, and seasonal savings.
                    </p>

                    <button
                        onClick={() => document.getElementById('active-offers')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-cta-accent text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 mx-auto shadow-xl hover:bg-cta-accent/90 transition-all active:scale-95"
                    >
                        <span>View Active Offers</span>
                        <ArrowDown size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
