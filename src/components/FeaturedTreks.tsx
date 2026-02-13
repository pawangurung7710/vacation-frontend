"use client";

import React from "react";
import Image from "next/image";
import { Clock, Mountain, Award, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const treks = [
    {
        title: "Everest Base Camp Trek",
        image: "https://images.unsplash.com/photo-1585016495481-91613a37932d?q=80&w=800&auto=format&fit=crop",
        duration: "14 Days",
        difficulty: "Strenuous",
        altitude: "5,364m",
        price: "1,250",
        badges: ["Guided by Locals", "Small Group"],
    },
    {
        title: "Annapurna Circuit Trek",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        duration: "12 Days",
        difficulty: "Moderate",
        altitude: "5,416m",
        price: "1,050",
        badges: ["Best Culture", "Full Support"],
    },
    {
        title: "Manaslu Circuit Trek",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800&auto=format&fit=crop",
        duration: "15 Days",
        difficulty: "Challenging",
        altitude: "5,106m",
        price: "1,450",
        badges: ["Remote Trails", "Limited Permits"],
    },
];

const TrekCard = ({ trek, index }: { trek: typeof treks[0]; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="premium-card group overflow-hidden"
    >
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden">
            <Image
                src={trek.image}
                alt={trek.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {trek.badges.map((badge) => (
                    <span key={badge} className="bg-white/90 backdrop-blur-sm text-primary-text text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                        {badge}
                    </span>
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold leading-tight group-hover:text-cta-accent transition-colors">
                    {trek.title}
                </h3>
                <span className="text-earth-accent font-bold text-lg">
                    ${trek.price}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm text-primary-text/70">
                    <Clock size={16} className="text-cta-accent mr-2" />
                    <span>{trek.duration}</span>
                </div>
                <div className="flex items-center text-sm text-primary-text/70">
                    <Award size={16} className="text-cta-accent mr-2" />
                    <span>{trek.difficulty}</span>
                </div>
                <div className="flex items-center text-sm text-primary-text/70">
                    <Mountain size={16} className="text-cta-accent mr-2" />
                    <span>{trek.altitude} max</span>
                </div>
            </div>

            <button className="w-full flex items-center justify-center space-x-2 py-3 border border-cta-accent text-cta-accent rounded-xl font-bold hover:bg-cta-accent hover:text-white transition-all group-hover:shadow-md">
                <span>View Details</span>
                <ArrowUpRight size={18} />
            </button>
        </div>
    </motion.div>
);

export default function FeaturedTreks() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl mb-6 md:mb-0">
                        <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Our Top Destinations</span>
                        <h2 className="text-3xl md:text-5xl font-bold">Popular Himalayan Treks</h2>
                    </div>
                    <button className="btn-primary flex items-center space-x-2 group">
                        <span>Explore All Treks</span>
                        <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                            →
                        </motion.span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treks.map((trek, index) => (
                        <TrekCard key={trek.title} trek={trek} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
