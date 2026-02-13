"use client";

import React from "react";
import { Compass, ShieldCheck, HeartHandshake, TreePine, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    {
        icon: Compass,
        title: "Local Experts in Kathmandu",
        description: "Born and raised in the mountains, our guides offer deep cultural insights and safety knowledge you won't find anywhere else.",
    },
    {
        icon: ShieldCheck,
        title: "Safety & Altitude Awareness",
        description: "Your health is our priority. We use oxygen monitors, medical kits, and follow strict acclimatization protocols on every high-altitude trip.",
    },
    {
        icon: HeartHandshake,
        title: "Small Groups & Personalized",
        description: "With a maximum of 12 trekkers, we ensure personalized support and a tighter-knit community on the trail.",
    },
    {
        icon: TreePine,
        title: "Eco-Responsible Trekking",
        description: "We are committed to preserving the Himalayas. We follow zero-waste principles and support local communities directly.",
    },
];

export default function ValueProp() {
    return (
        <section className="py-24 bg-white" id="why-us">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Philosophy</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Travel With Us?</h2>
                    <p className="text-lg text-primary-text/70">
                        We don't just organize trips; we create authentic Himalayan experiences that prioritize your safety, comfort, and the local community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="mb-6 w-16 h-16 bg-background rounded-2xl flex items-center justify-center text-cta-accent group-hover:bg-cta-accent group-hover:text-white transition-all duration-300 transform group-hover:-rotate-6">
                                <value.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 group-hover:text-cta-accent transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-primary-text/70 mb-6 leading-relaxed">
                                {value.description}
                            </p>
                            <button className="flex items-center text-sm font-bold text-cta-accent group-hover:translate-x-2 transition-transform">
                                <span>Learn More</span>
                                <ArrowRight size={16} className="ml-2" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
