"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const tripTypes = [
    {
        title: "Private Group Treks",
        description: "Travel exclusively with your family, friends, or partner. Choose your own dates and adjust the intensity of each day as you go.",
        image: "/images/everest-base-camp.jpg",
        highlights: ["Dedicated Guide & Porter Team", "Personalized Acclimatization", "Flexible Departure Dates"],
        cta: "Plan Private Trek"
    },
    {
        title: "Luxury Himalayan Treks",
        description: "Experience the wilderness without compromising on comfort. We arrange the finest lodges, private transport, and boutique experiences.",
        image: "/images/seasonal-deal.jpg",
        titleAccent: "Luxury",
        highlights: ["Premium Boutique Lodges", "Helicopter Return Options", "Private High-End Transport"],
        cta: "Explore Luxury Options"
    },
    {
        title: "Short & Scenic Treks",
        description: "Ideal for travelers with limited time who still want the full Himalayan experience. Maximum scenery in minimal time (5-7 days).",
        image: "/images/annapurna-circuit.jpg",
        highlights: ["Helicopter Sightseeing Included", "Low Altitude, High Reward", "Culturally Rich Routes"],
        cta: "Customize Short Trek"
    }
];

export default function CustomTypes() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Choose Your Style</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-text mb-6">Ways to Customize</h2>
                    <p className="text-lg text-primary-text/60 max-w-2xl mx-auto">
                        Whether you're seeking rugged isolation or mountain luxury, we tailor every detail to your lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tripTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-[2rem] overflow-hidden border border-border-subtle hover:shadow-xl transition-all duration-500 flex flex-col group"
                        >
                            {/* Image Header */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={type.image}
                                    alt={type.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl font-bold text-white leading-tight">{type.title}</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <p className="text-primary-text/70 text-sm leading-relaxed mb-8">
                                    {type.description}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {type.highlights.map((highlight, i) => (
                                        <div key={i} className="flex items-start space-x-3 text-xs font-semibold text-primary-text/80">
                                            <CheckCircle2 size={16} className="text-cta-accent flex-shrink-0 mt-0.5" />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => document.getElementById('custom-form')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="mt-auto w-full py-4 border border-cta-accent rounded-xl text-cta-accent font-bold hover:bg-cta-accent hover:text-white transition-all flex items-center justify-center space-x-2"
                                >
                                    <span>{type.cta}</span>
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
