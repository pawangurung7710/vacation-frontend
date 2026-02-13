"use client";

import React from "react";
import { Star, Mountain, Users, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
    {
        icon: Star,
        label: "4.9+ Average Review Score",
    },
    {
        icon: Mountain,
        label: "100% Local Sherpa Guides",
    },
    {
        icon: Users,
        label: "Small Groups (Max 12)",
    },
    {
        icon: Leaf,
        label: "Eco-Friendly & Responsible",
    },
];

export default function TrustStrip() {
    return (
        <div className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl md:rounded-[2.5rem] shadow-xl border border-border-subtle overflow-hidden">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border-subtle">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center space-x-4 py-8 px-6 hover:bg-background/50 transition-colors group"
                        >
                            <div className="bg-background w-12 h-12 rounded-xl flex items-center justify-center text-cta-accent group-hover:scale-110 group-hover:bg-cta-accent group-hover:text-white transition-all duration-300">
                                <item.icon size={22} />
                            </div>
                            <span className="text-sm md:text-base font-bold text-primary-text leading-tight max-w-[140px]">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
