"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function CustomHero() {
    return (
        <section className="relative min-h-[70vh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/seasonal-deal.jpg"
                    alt="Warm Himalayan Sunset"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-6 border border-white/20">
                        Tailor-Made Himalayan Journeys
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                        Design Your Personalized <br className="hidden md:block" />
                        <span className="text-cta-accent italic">Nepal Trek</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium mb-12">
                        Crafted around your pace, comfort, and dreams. Share your vision, and we’ll handle every detail of your unique Himalayan adventure.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => document.getElementById('custom-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto px-8 py-4 bg-cta-accent text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-xl hover:bg-cta-accent/90 transition-all active:scale-95 group"
                        >
                            <span>Start Planning</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="https://wa.me/9779800000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all active:scale-95"
                        >
                            <MessageCircle size={20} className="text-[#25D366]" />
                            <span>WhatsApp Consultation</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Gradient Shadow overlap to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
        </section>
    );
}
