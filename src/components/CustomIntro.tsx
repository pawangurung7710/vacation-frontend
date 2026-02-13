"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Zap, Award, ShieldCheck, Map } from "lucide-react";

const highlights = [
    { icon: <Calendar className="text-cta-accent" />, title: "Flexible Dates", description: "Start your journey on any day that suits your schedule." },
    { icon: <Users className="text-cta-accent" />, title: "Private Groups", description: "Trek exclusively with your own family or friends." },
    { icon: <Zap className="text-cta-accent" />, title: "Custom Pace", description: "Adjustment your daily walking hours based on your comfort." },
    { icon: <Award className="text-cta-accent" />, title: "Luxury Options", description: "Upgrade to premium lodges or boutique hotels where available." },
    { icon: <ShieldCheck className="text-cta-accent" />, title: "Personalized Safety", description: "Dedicated guides focused solely on your wellbeing." },
    { icon: <Map className="text-cta-accent" />, title: "Route Off-Trail", description: "Add unique cultural stops or hidden viewpoints to your path." },
];

export default function CustomIntro() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Persuasive Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div>
                            <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Why Customize?</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-primary-text leading-tight">
                                Because Every <span className="text-cta-accent">Himalayan Dream</span> is Unique.
                            </h2>
                        </div>

                        <div className="space-y-6 text-primary-text/80 text-lg leading-relaxed">
                            <p>
                                At Vacation Nepal, we believe that the best way to experience the Himalayas is at your own rhythm. Standard itineraries don't always capture the specific magic you're looking for—whether that's more time for photography, a private family celebration, or a focus on luxury comfort.
                            </p>
                            <p>
                                Our local experts don't just "book trips"; we craft experiences. From adjusting acclimatization schedules to arranging private transport or helicopter returns, we provide the flexibility of independent travel with the security of professional local expertise.
                            </p>
                            <p className="font-bold text-primary-text italic border-l-4 border-cta-accent pl-6 py-2">
                                "Our mission is to bridge the gap between fixed-departure tours and the freedom of self-discovery."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Icon-based Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 bg-background p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-border-subtle"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {highlights.map((item, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-border-subtle">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-primary-text">{item.title}</h4>
                                    <p className="text-sm text-primary-text/60 leading-snug">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-border-subtle text-center">
                            <p className="text-primary-text/70 mb-4 font-medium italic">"Tell us your vision — we’ll design the rest."</p>
                            <button
                                onClick={() => document.getElementById('custom-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-cta-accent font-bold hover:underline flex items-center justify-center mx-auto space-x-2"
                            >
                                <span>Start Your Consultation</span>
                                <span>→</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
