"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";

export default function AboutCTA() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl border border-border-subtle relative overflow-hidden text-center">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cta-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cta-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-text">
                            Ready to Trek with Trusted <br /> Himalayan Experts?
                        </h2>
                        <p className="text-xl text-primary-text/60 max-w-2xl mx-auto">
                            Join us for an authentic journey where safety, local expertise, and international standards meet.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="/treks"
                                className="w-full md:w-auto bg-primary-text text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-primary-text/90 transition-all shadow-xl hover:-translate-y-1"
                            >
                                <span>View Our Treks</span>
                                <ArrowRight size={20} />
                            </Link>
                            <a
                                href="https://wa.me/9779800000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full md:w-auto bg-cta-accent text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-cta-accent/90 transition-all shadow-xl hover:-translate-y-1"
                            >
                                <MessageCircle size={20} />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>

                        <div className="pt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                            {[
                                "Licensed & Registered",
                                "100% Local Experts",
                                "Transparent Pricing",
                                "24-Hour Response"
                            ].map((item) => (
                                <div key={item} className="flex items-center text-sm font-bold text-primary-text/40">
                                    <CheckCircle2 size={16} className="text-cta-accent mr-2" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
