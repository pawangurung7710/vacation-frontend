"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/manaslu-circuit.jpg"
                    alt="About Vacation Nepal Trekking"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-primary-text/40 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-wider uppercase mb-6 border border-white/20">
                        Our Story & Mission
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                        About Vacation <span className="text-cta-accent">Nepal</span> Trekking
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
                        Local expertise. International standards. Himalayan passion.
                    </p>
                    <div className="mt-4 flex items-center justify-center space-x-2 text-white/80 text-sm">
                        <span>Based in Kathmandu</span>
                        <span className="w-1 h-1 bg-cta-accent rounded-full" />
                        <span>Operating across Nepal's major trekking regions</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
