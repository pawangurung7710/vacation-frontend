"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Languages } from "lucide-react";

const team = [
    {
        name: "Pasang Sherpa",
        role: "Lead Expedition Guide",
        image: "/images/testimonial-1.jpg",
        exp: "15+ Years",
        expertise: "8000m Specialist",
        langs: "English, Nepali, Tibetan",
        bio: "With over 12 successful Everest summits, Pasang leads our technical expeditions with unmatched safety standards."
    },
    {
        name: "Maya Tamang",
        role: "Head of Operations",
        image: "/images/testimonial-2.jpg",
        exp: "10 Years",
        expertise: "Crisis Management",
        langs: "English, Nepali, Hindi",
        bio: "Maya ensures every logistics detail is perfect, from helicopter evacuations to organic meal planning."
    },
    {
        name: "Dr. Ramesh Giri",
        role: "Himalayan Medical Consultant",
        image: "/images/testimonial-3.jpg",
        exp: "12 Years",
        expertise: "Altitude Medicine",
        langs: "English, Nepali",
        bio: "Dr. Giri oversees our high-altitude health protocols and conducts wilderness first-aid training for all our staff."
    }
];

export default function AboutTeam() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Meet Our Team</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-text">
                        The Experts Behind Your Journey
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Photo Card */}
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-lg">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white text-sm italic">{member.bio}</p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-2xl font-serif font-bold text-primary-text mb-1">{member.name}</h4>
                                    <p className="text-cta-accent font-bold text-sm uppercase tracking-wider">{member.role}</p>
                                </div>

                                <div className="grid grid-cols-1 gap-3 pt-4 border-t border-border-subtle">
                                    <div className="flex items-center text-sm text-primary-text/70">
                                        <Award size={16} className="text-cta-accent mr-3" />
                                        <span><strong>Exp:</strong> {member.exp}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-primary-text/70">
                                        <ShieldCheck size={16} className="text-cta-accent mr-3" />
                                        <span><strong>Expertise:</strong> {member.expertise}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-primary-text/70">
                                        <Languages size={16} className="text-cta-accent mr-3" />
                                        <span><strong>Languages:</strong> {member.langs}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
