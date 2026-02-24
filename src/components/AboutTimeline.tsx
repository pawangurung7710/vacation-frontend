"use client";

import React from "react";
import { motion } from "framer-motion";

const events = [
    { year: "2015", title: "The Beginning", description: "Vacation Nepal Trekking founded with a small team of 3 guides." },
    { year: "2017", title: "Regional Expansion", description: "Opened full-scale operations in Everest and Annapurna regions." },
    { year: "2019", title: "Luxury Tier Launch", description: "Successfully introduced high-comfort boutique trekking packages." },
    { year: "2022", title: "1,000 Trekkers Milestone", description: "Served over 1,000 international guests with 100% safety record." },
    { year: "2024", title: "Global Recognition", description: "Expanded custom expedition services for technical peaks." },
];

export default function AboutTimeline() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Our History</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-text">
                        A Decade of Himalayan Excellence
                    </h3>
                </div>

                <div className="relative">
                    {/* Progress Line */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border-subtle hidden md:block" />

                    <div className="space-y-12 md:space-y-0">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Year Label */}
                                <div className="flex-1 text-center md:text-left px-8 mb-4 md:mb-0">
                                    <div className={`text-5xl font-serif font-bold ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                        } text-primary-text/10`}>
                                        {event.year}
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="relative z-10 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-cta-accent ring-8 ring-cta-accent/10" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 px-8 mt-4 md:mt-0">
                                    <div className={`bg-white p-6 rounded-2xl shadow-sm border border-border-subtle ${index % 2 === 0 ? "md:text-left" : "md:text-right"
                                        }`}>
                                        <h4 className="font-bold text-primary-text mb-2 text-lg">{event.title}</h4>
                                        <p className="text-primary-text/60 text-sm leading-relaxed">{event.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
