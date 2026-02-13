"use client";

import React from "react";
import Image from "next/image";
import { Search, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const regions = ["Everest Region", "Annapurna Region", "Manaslu Region", "Langtang Region"];
const months = ["September", "October", "November", "March", "April", "May"];

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Himalayan Mountain Range"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-wider uppercase mb-4 border border-white/20">
                        Only Vacation Nepal
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Authentic Himalayan Adventures <br className="hidden md:block" />
                        Led by <span className="text-cta-accent underline decoration-white/30 underline-offset-8">Locals</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
                        Small groups • Local Sherpa guides • Transparent pricing
                    </p>
                </motion.div>

                {/* Search UI */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        {/* Region Select */}
                        <div className="flex-1 w-full flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-border-subtle group">
                            <MapPin className="text-cta-accent mr-3 group-hover:scale-110 transition-transform" size={20} />
                            <div className="text-left flex-1">
                                <label className="block text-[10px] uppercase tracking-wider text-primary-text font-bold mb-0.5">Where to?</label>
                                <select className="block w-full text-sm font-semibold text-primary-text bg-transparent border-none focus:ring-0 p-0 cursor-pointer">
                                    <option value="">Select Region</option>
                                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Month Select */}
                        <div className="flex-1 w-full flex items-center px-4 py-3 md:py-0 border-b md:border-b-0 md:border-r border-border-subtle group">
                            <Calendar className="text-cta-accent mr-3 group-hover:scale-110 transition-transform" size={20} />
                            <div className="text-left flex-1">
                                <label className="block text-[10px] uppercase tracking-wider text-primary-text font-bold mb-0.5">When?</label>
                                <select className="block w-full text-sm font-semibold text-primary-text bg-transparent border-none focus:ring-0 p-0 cursor-pointer">
                                    <option value="">Select Month</option>
                                    {months.map(m => <option key={m} value={m}>{m}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Search Button */}
                        <button className="w-full md:w-auto bg-cta-accent hover:bg-cta-accent/90 text-white px-8 py-4 rounded-xl md:rounded-3xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg active:scale-95">
                            <Search size={20} />
                            <span>Explore Treks</span>
                        </button>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-white/80 text-sm">
                        <span>Popular:</span>
                        {["Everest Base Camp", "Annapurna Circuit", "Manaslu Circuit"].map(tag => (
                            <button key={tag} className="hover:text-white transition-colors underline decoration-white/20 underline-offset-4">{tag}</button>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Hint */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
