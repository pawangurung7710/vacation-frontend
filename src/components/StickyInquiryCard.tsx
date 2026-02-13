"use client";

import React from "react";
import { MessageCircle, Calendar, Send, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Trek } from "@/data/treks";

interface StickyInquiryCardProps {
    trek: Trek;
}

export default function StickyInquiryCard({ trek }: StickyInquiryCardProps) {
    return (
        <div className="lg:sticky lg:top-28 w-full max-w-sm ml-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[2rem] shadow-2xl border border-border-subtle overflow-hidden"
            >
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-[10px] uppercase tracking-widest text-primary-text/40 font-bold">Total Price</span>
                        <div className="text-right">
                            <span className="text-3xl font-bold text-primary-text">${trek.price}</span>
                            <span className="block text-[10px] text-primary-text/40 font-bold">per person (USD)</span>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <button className="w-full bg-cta-accent hover:bg-cta-accent/90 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg active:scale-95">
                            <Calendar size={20} />
                            <span>Plan This Trek</span>
                        </button>
                        <a
                            href="https://wa.me/9779801234567"
                            className="w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all active:scale-95"
                        >
                            <MessageCircle size={20} />
                            <span>WhatsApp Now</span>
                        </a>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-border-subtle">
                        <div className="flex items-start space-x-3">
                            <ShieldCheck size={18} className="text-cta-accent mt-0.5" />
                            <div>
                                <span className="block text-xs font-bold text-primary-text">Guaranteed Response</span>
                                <span className="block text-[10px] text-primary-text/60">Local experts will reply within 24 hours.</span>
                            </div>
                        </div>
                        <div className="p-3 bg-background rounded-xl border border-border-subtle">
                            <p className="text-[10px] text-primary-text/60 italic leading-relaxed">
                                "We prioritize safe, local-led experiences. Your inquiry helps us prepare the perfect itinerary for your group."
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
