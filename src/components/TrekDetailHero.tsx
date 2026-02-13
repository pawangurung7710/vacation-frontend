"use client";

import React from "react";
import Image from "next/image";
import { Clock, Mountain, Award, Users, ChevronRight, MessageCircle, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Trek } from "@/data/treks";
import Link from "next/link";

interface TrekDetailHeroProps {
    trek: Trek;
}

export default function TrekDetailHero({ trek }: TrekDetailHeroProps) {
    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] w-full flex items-center overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={trek.image}
                    alt={trek.title}
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="max-w-3xl">
                    {/* Breadcrumbs */}
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-white/80 text-sm mb-6 font-medium"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link href="/treks" className="hover:text-white transition-colors">Nepal Treks</Link>
                        <ChevronRight size={14} />
                        <span className="text-white">{trek.title}</span>
                    </motion.nav>

                    {/* Title & Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            {trek.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl font-medium mb-12">
                            {trek.description}
                        </p>
                    </motion.div>

                    {/* Quick Stats Bar (Hero Version) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-wrap gap-6 md:gap-12"
                    >
                        <StatItem icon={<Clock size={24} />} label="Duration" value={`${trek.duration} Days`} />
                        <StatItem icon={<Mountain size={24} />} label="Max Altitude" value={`${trek.maxAltitude}m`} />
                        <StatItem icon={<Award size={24} />} label="Difficulty" value={trek.difficulty} />
                        <StatItem icon={<Users size={24} />} label="Group Size" value="Max 12" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center space-x-3 text-white">
            <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                {icon}
            </div>
            <div>
                <span className="block text-[10px] uppercase tracking-widest text-white/60 font-bold mb-0.5">{label}</span>
                <span className="block text-sm md:text-base font-bold">{value}</span>
            </div>
        </div>
    );
}
