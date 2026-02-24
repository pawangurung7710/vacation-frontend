"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CompanyStory() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Story Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Our Story</h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-text mb-6">
                                Local Roots, International Standards
                            </h3>
                            <div className="space-y-6 text-primary-text/75 leading-relaxed">
                                <p>
                                    Vacation Nepal Trekking was born from a simple yet powerful vision: to bridge the gap between
                                    authentic Himalayan hospitality and international standards of safety and service.
                                    Founded by a team of veterans who spent decades guiding on the very trails you'll walk,
                                    we understand the mountains not just as destinations, but as our home.
                                </p>
                                <p>
                                    Our founder's journey began two decades ago as a porter in the Everest region,
                                    gradually rising to become one of Nepal's most respected lead guides.
                                    This "ground-up" experience is the DNA of our company—we know every turn of the trail,
                                    every teahouse owner, and the vital importance of a well-supported team.
                                </p>
                                <p>
                                    Today, we stand as a premier trekking operator based in Kathmandu,
                                    committed to providing ethical, sustainable, and life-changing adventures.
                                    We don't just sell tours; we craft personalized journeys that respect the environment
                                    and empower the local communities that make the Himalayas so magical.
                                </p>
                            </div>

                            <div className="pt-8 border-t border-border-subtle flex items-center space-x-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-text">10+</div>
                                    <div className="text-xs uppercase tracking-wider text-primary-text/50 font-bold">Years Exp</div>
                                </div>
                                <div className="w-px h-10 bg-border-subtle" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-text">1k+</div>
                                    <div className="text-xs uppercase tracking-wider text-primary-text/50 font-bold">Trekkers</div>
                                </div>
                                <div className="w-px h-10 bg-border-subtle" />
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-primary-text">100%</div>
                                    <div className="text-xs uppercase tracking-wider text-primary-text/50 font-bold">Local Team</div>
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
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="/images/everest-base-camp.jpg"
                                alt="Our Founder and Team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-sm font-medium text-white/80 mb-1 italic">"The mountains call, and we ensure you return with stories that last a lifetime."</p>
                                <p className="font-serif font-bold text-lg">— Founder, Vacation Nepal Trekking</p>
                            </div>
                        </motion.div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cta-accent/10 rounded-full blur-3xl z-0" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-cta-accent/10 rounded-full blur-3xl z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
