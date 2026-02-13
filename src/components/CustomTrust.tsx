"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Users, Globe } from "lucide-react";

export default function CustomTrust() {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-primary-text rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Background Accents */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-cta-accent/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cta-accent/5 rounded-full blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-cta-accent font-bold tracking-widest uppercase text-xs mb-4 block">International Standards, Local Soul</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Your Vision, <br />
                                <span className="text-white/60">Our Expertise.</span>
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed mb-10">
                                We combine 10+ years of Himalayan expertise with international safety standards to ensure your custom trip is both adventurous and impeccably managed.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-white">100%</h4>
                                    <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Local Experts</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-2xl font-bold text-white">24/7</h4>
                                    <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Field Support</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-8"
                        >
                            <TrustItem
                                icon={<Shield className="text-cta-accent" />}
                                title="Safety First"
                                description="Every custom route is vetted for safe acclimatization profiles and accessibility."
                            />
                            <TrustItem
                                icon={<Clock className="text-cta-accent" />}
                                title="Total Flexibility"
                                description="Free custom revisions until you are 100% satisfied with the itinerary."
                            />
                            <TrustItem
                                icon={<Users className="text-cta-accent" />}
                                title="Ethical Operation"
                                description="We ensure fair wages and mountain insurance for every porter and guide on your trip."
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TrustItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/10 rounded-xl">
                {icon}
            </div>
            <div>
                <h4 className="text-white font-bold mb-1">{title}</h4>
                <p className="text-sm text-white/50 leading-snug">{description}</p>
            </div>
        </div>
    );
}
