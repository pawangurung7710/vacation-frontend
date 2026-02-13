"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Zap } from "lucide-react";

export default function OfferUrgencyCTA() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-text rounded-[3rem] p-8 md:p-20 relative overflow-hidden shadow-2xl text-center">
                    {/* Urgency Badge */}
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-cta-accent rounded-full text-white text-[10px] font-bold tracking-widest uppercase mb-8"
                    >
                        <Zap size={14} />
                        <span>Limited Spaces Available</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                        Ready to Secure Your <br />
                        <span className="text-cta-accent italic">Himalayan Adventure?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12 font-medium">
                        Seasonal departures are filling up quickly. Lock in your preferred dates today with local experts who care about your safety and experience.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-5 bg-cta-accent text-white rounded-2xl font-bold flex items-center justify-center space-x-2 shadow-xl hover:bg-cta-accent/90 transition-all active:scale-95 group"
                        >
                            <span>Inquire Now</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://wa.me/9779800000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all active:scale-95"
                        >
                            <MessageCircle size={22} className="text-[#25D366]" />
                            <span>WhatsApp Status Check</span>
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
                        <div className="flex items-center space-x-2">
                            <span className="text-cta-accent">✔</span>
                            <span>No Hidden Costs</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-cta-accent">✔</span>
                            <span>Local Expert Planning</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="text-cta-accent">✔</span>
                            <span>Response within 24h</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
