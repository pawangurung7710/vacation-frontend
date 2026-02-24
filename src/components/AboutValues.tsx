"use client";

import React from "react";
import { Shield, Globe, Users, Star, CreditCard, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const values = [
    {
        icon: Shield,
        title: "Safety First",
        description: "Your safety is our absolute priority. We employ high-altitude rescue trained guides and maintain rigorous safety protocols."
    },
    {
        icon: Globe,
        title: "Responsible Tourism",
        description: "We are committed to preserving the Himalayas for future generations through low-impact travel and waste management."
    },
    {
        icon: Users,
        title: "Local Employment",
        description: "100% of our office and field staff are local Nepalis. We believe in empowering our community through fair wages."
    },
    {
        icon: Star,
        title: "Premium Standards",
        description: "We bring international service quality to the highest trails, ensuring comfort, hygiene, and professional support."
    },
    {
        icon: CreditCard,
        title: "Transparent Pricing",
        description: "No hidden costs. What you see is what you pay. We believe in honest business and clear value for our guests."
    },
    {
        icon: Leaf,
        title: "Sustainable Practices",
        description: "From plastic-free initiatives to supporting local eco-lodges, we prioritize the health of our mountains."
    }
];

export default function AboutValues() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Our Mission & Values</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-text">
                        The Pillars of Our Passion
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border-subtle group"
                        >
                            <div className="w-12 h-12 bg-cta-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cta-accent group-hover:text-white transition-colors">
                                <value.icon size={24} className="text-cta-accent group-hover:text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-primary-text mb-4">{value.title}</h4>
                            <p className="text-primary-text/70 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
