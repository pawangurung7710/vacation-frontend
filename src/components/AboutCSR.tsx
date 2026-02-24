"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, School, TreePine, Recycle } from "lucide-react";

export default function AboutCSR() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Responsible Tourism</h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-text mb-6">
                                Giving Back to the Himalayas
                            </h3>
                            <p className="text-primary-text/75 leading-relaxed mb-8">
                                We believe that the Himalayas give us so much, and it is our duty to give back.
                                Our commitment to Corporate Social Responsibility (CSR) isn't just about charity;
                                it's about sustainable empowerment and environmental stewardship.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="flex items-center text-primary-text font-bold">
                                        <School className="text-cta-accent mr-3" size={20} />
                                        <span>Mountain Schools</span>
                                    </div>
                                    <p className="text-sm text-primary-text/60">We donate 2% of our annual profits to support primary schools in the Solu-Khumbu and Annapurna regions.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center text-primary-text font-bold">
                                        <TreePine className="text-cta-accent mr-3" size={20} />
                                        <span>Reforestation</span>
                                    </div>
                                    <p className="text-sm text-primary-text/60">Partnering with local NGOs to plant native trees along trekking corridors to combat erosion.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center text-primary-text font-bold">
                                        <Heart className="text-cta-accent mr-3" size={20} />
                                        <span>Fair Porter Policy</span>
                                    </div>
                                    <p className="text-sm text-primary-text/60">Exceeding standard wage requirements and providing full medical insurance for all our field porters.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center text-primary-text font-bold">
                                        <Recycle className="text-cta-accent mr-3" size={20} />
                                        <span>Zero-Waste Trails</span>
                                    </div>
                                    <p className="text-sm text-primary-text/60">Strict "Leave No Trace" policy and community clean-up initiatives during the off-season.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Section */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/images/annapurna-base-camp.jpg"
                                alt="Responsible Tourism in Nepal"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-primary-text/20" />
                        </motion.div>

                        {/* Quote Over Image */}
                        <div className="absolute -bottom-6 -left-6 md:left-12 bg-white p-6 rounded-2xl shadow-xl max-w-xs border border-border-subtle">
                            <p className="text-primary-text font-serif italic text-sm">"We don't inherit the earth from our ancestors, we borrow it from our children."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
