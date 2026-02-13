"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const stories = [
    {
        name: "Sarah Jenkins",
        location: "United Kingdom",
        text: "The Everest Base Camp trek was a life-changing experience. Our Sherpa guide, Pasang, didn't just show us the trail; he shared his home and culture with us.",
        image: "/images/testimonial-1.jpg",
        trek: "Everest Base Camp",
    },
    {
        name: "Marco Rossi",
        location: "Italy",
        text: "Professional, safe, and truly authentic. Vacation Nepal handled every detail, allowing us to focus entirely on the breathtaking views of the Annapurnas.",
        image: "/images/testimonial-2.jpg",
        trek: "Annapurna Circuit",
    },
    {
        name: "Emma Thompson",
        location: "Australia",
        text: "As a solo traveler, I felt completely safe and supported. The small group size made it feel like trekking with friends rather than a tour.",
        image: "/images/testimonial-3.jpg",
        trek: "Manaslu Circuit",
    },
];

export default function Inspiration() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Traveler Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Real Himalayan Experiences</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background p-8 rounded-3xl relative group hover:shadow-xl transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-8 text-cta-accent/10 w-16 h-16" />
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                                    <Image
                                        src={story.image}
                                        alt={story.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-text">{story.name}</h4>
                                    <p className="text-xs text-primary-text/60 italic">{story.location}</p>
                                </div>
                            </div>
                            <p className="text-primary-text/80 leading-relaxed mb-6 italic">
                                "{story.text}"
                            </p>
                            <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                                <span className="text-xs font-bold text-cta-accent uppercase tracking-widest">{story.trek}</span>
                                <div className="flex text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-lg leading-none">★</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
