"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Mountain, Award, ArrowUpRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Trek } from "@/data/treks";
import { cn } from "@/lib/utils";

interface TrekCardProps {
    trek: Trek;
    index: number;
    className?: string;
}

export default function TrekCard({ trek, index, className }: TrekCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn("premium-card group overflow-hidden flex flex-col h-full", className)}
        >
            {/* Link wrapper for the whole image/content area */}
            <Link href={`/treks/${trek.slug}`} className="flex flex-col flex-1">
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                        src={trek.image}
                        alt={trek.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {trek.isPopular && (
                            <span className="bg-cta-accent text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                                Most Popular
                            </span>
                        )}
                        {trek.isBestSeller && (
                            <span className="bg-white/90 backdrop-blur-sm text-primary-text text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                                Best Seller
                            </span>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold leading-tight group-hover:text-cta-accent transition-colors">
                            {trek.title}
                        </h3>
                    </div>

                    <p className="text-sm text-primary-text/60 mb-4 line-clamp-2">
                        {trek.description}
                    </p>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 mt-auto">
                        <div className="flex items-center text-xs font-medium text-primary-text/70">
                            <Clock size={14} className="text-cta-accent mr-2" />
                            <span>{trek.duration} Days</span>
                        </div>
                        <div className="flex items-center text-xs font-medium text-primary-text/70">
                            <Mountain size={14} className="text-cta-accent mr-2" />
                            <span>{trek.maxAltitude}m max</span>
                        </div>
                        <div className="flex items-center text-xs font-medium text-primary-text/70">
                            <Award size={14} className="text-cta-accent mr-2" />
                            <span>{trek.difficulty}</span>
                        </div>
                        <div className="flex items-center text-xs font-medium text-primary-text/70">
                            <Users size={14} className="text-cta-accent mr-2" />
                            <span>Max 12</span>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-wider text-primary-text/50 font-bold">From USD</span>
                            <span className="text-lg font-bold text-primary-text">${trek.price}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-transparent border border-cta-accent text-cta-accent rounded-xl font-bold group-hover:bg-cta-accent group-hover:text-white transition-all group-hover:shadow-md text-sm">
                            <span>Details</span>
                            <ArrowUpRight size={16} />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
