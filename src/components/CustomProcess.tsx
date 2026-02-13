"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Map, PencilLine, CheckCircle } from "lucide-react";

const steps = [
    {
        title: "Tell Us Your Vision",
        description: "Submit our customization form or message us on WhatsApp with your dates, budget, and travel style.",
        icon: <MessageSquare size={32} />
    },
    {
        title: "Expert Draft",
        description: "Our local trekking experts design a personalized day-by-day plan based on your specific requirements.",
        icon: <Map size={32} />
    },
    {
        title: "Review & Refine",
        description: "We work with you to adjust the route, accommodation, and pace until the itinerary is exactly what you dreamed of.",
        icon: <PencilLine size={32} />
    },
    {
        title: "Confirm & Trek",
        description: "Once you're 100% happy, we secure your permits and guides. You receive a detailed prep guide and we meet you in Nepal.",
        icon: <CheckCircle size={32} />
    }
];

export default function CustomProcess() {
    return (
        <section className="py-24 bg-white border-y border-border-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Simple & Seamless</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-text">How it Works</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-border-subtle z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 bg-background rounded-full border-4 border-white shadow-md flex items-center justify-center text-cta-accent mb-6 transition-all duration-300 group-hover:bg-cta-accent group-hover:text-white group-hover:scale-110">
                                {step.icon}
                            </div>
                            <h4 className="text-lg font-bold text-primary-text mb-3">{step.title}</h4>
                            <p className="text-sm text-primary-text/60 leading-relaxed max-w-xs">
                                {step.description}
                            </p>

                            {/* Step Number Badge */}
                            <div className="mt-4 px-3 py-1 bg-border-subtle rounded-full text-[10px] font-bold text-primary-text/40 uppercase tracking-widest leading-none">
                                Step 0{index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-primary-text/80 font-medium mb-8">Ready to take the first step towards your custom journey?</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <div className="flex items-center space-x-2 text-sm text-primary-text/60">
                            <span className="text-cta-accent font-bold">✔</span>
                            <span>No obligation quote</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-primary-text/60">
                            <span className="text-cta-accent font-bold">✔</span>
                            <span>Expert local planning</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-primary-text/60">
                            <span className="text-cta-accent font-bold">✔</span>
                            <span>Response within 24h</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
