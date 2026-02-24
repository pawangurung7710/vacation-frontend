"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Map, Award, CheckCircle } from "lucide-react";

export default function AboutLegitimacy() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-text rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative">
                    {/* Background decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cta-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cta-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Registration & Affiliations</h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                                Fully Licensed & Integrated
                            </h3>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                We separate ourselves from informal operators through full government compliance and international insurance coverage.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {[
                                { icon: FileText, label: "Govt. Registered", detail: "Reg No: 154230/73/074" },
                                { icon: Map, label: "TAAN Member", detail: "Licensed Member" },
                                { icon: Award, label: "Tourism Board", detail: "NTB Approved" },
                                { icon: CheckCircle, label: "Full Insurance", detail: "Staff & Client Safety" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                                >
                                    <item.icon size={32} className="text-cta-accent mx-auto mb-4" />
                                    <div className="font-bold text-lg mb-1">{item.label}</div>
                                    <div className="text-white/50 text-xs">{item.detail}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Affiliations Logos Placeholder */}
                        <div className="pt-12 border-t border-white/10 text-center">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-8">Recognized By</p>
                            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Using text as logos for now since no image assets for these */}
                                <div className="text-xl font-bold font-serif italic">Nepal Tourism Board</div>
                                <div className="text-xl font-bold font-serif italic">TAAN</div>
                                <div className="text-xl font-bold font-serif italic">Kathmandu Municipality</div>
                                <div className="text-xl font-bold font-serif italic">Vat/Pan Nepal</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
