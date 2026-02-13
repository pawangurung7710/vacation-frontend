"use client";

import React from "react";
import Image from "next/image";
import { Timer, ArrowRight, Tag } from "lucide-react";
import { motion } from "framer-motion";

export default function SeasonalDeal() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-primary-text rounded-[2.5rem] overflow-hidden shadow-2xl"
                >
                    {/* Background Pattern/Overlay */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <Image
                            src="/images/seasonal-deal.jpg"
                            alt="Mountain Pattern"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-text via-primary-text/80 to-transparent z-0" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-16 lg:p-20">
                        <div className="flex-1 text-center lg:text-left mb-10 lg:mb-0">
                            <div className="inline-flex items-center space-x-2 bg-cta-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Tag size={14} />
                                <span>Limited Time Offer</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                Peak Season Special: <br />
                                <span className="text-cta-accent italic">15% Off</span> All Base Camp Treks
                            </h2>
                            <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0 mb-10">
                                Book your Autumn 2026 expedition before May 1st to receive our early-bird rate and a complimentary gear upgrade package.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                                <button className="btn-primary w-full sm:w-auto px-10 py-5 bg-white text-primary-text hover:bg-cta-accent hover:text-white border-transparent">
                                    Claim Offer Now
                                </button>
                                <div className="flex items-center space-x-3 text-white">
                                    <Timer className="text-cta-accent" />
                                    <span className="text-sm font-medium">Offer ends in <span className="font-bold text-cta-accent">14 Days</span></span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 lg:ml-12">
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-4 border border-white/20 rounded-full animate-spin-slow" />
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 shadow-inner">
                                    <div className="text-center">
                                        <span className="block text-5xl md:text-7xl font-serif font-bold text-white mb-2">15%</span>
                                        <span className="block text-xs md:text-sm font-bold text-cta-accent uppercase tracking-[0.3em]">Reduced Rate</span>
                                    </div>
                                </div>
                                {/* Decorative floating dots/icons could go here */}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
