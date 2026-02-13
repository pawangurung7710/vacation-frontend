"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle2, ArrowRight } from "lucide-react";

interface OfferCardProps {
    title: string;
    description: string;
    image: string;
    badge: string;
    highlights: string[];
    expiryDate: string;
    priceValue: string;
    originalPrice?: string;
    slug: string;
    index: number;
}

export default function OfferCard({
    title,
    description,
    image,
    badge,
    highlights,
    expiryDate,
    priceValue,
    originalPrice,
    slug,
    index
}: OfferCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-[2rem] overflow-hidden border border-border-subtle hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Badge */}
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-cta-accent text-white text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                        {badge}
                    </span>
                </div>

                {/* Price Tag */}
                <div className="absolute bottom-6 left-6">
                    <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-white">${priceValue}</span>
                        {originalPrice && (
                            <span className="text-sm text-white/70 line-through">${originalPrice}</span>
                        )}
                        <span className="text-[10px] text-white/80 uppercase tracking-wider font-bold">/ Person</span>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary-text mb-3 group-hover:text-cta-accent transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-primary-text/60 leading-relaxed mb-6 line-clamp-2">
                    {description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-8">
                    {highlights.map((item, i) => (
                        <div key={i} className="flex items-center space-x-3 text-xs font-semibold text-primary-text/80">
                            <CheckCircle2 size={16} className="text-cta-accent flex-shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                {/* Expiry Display */}
                <div className="mt-auto pt-6 border-t border-border-subtle flex flex-col space-y-4">
                    <div className="flex items-center space-x-2 text-red-500/80">
                        <Clock size={16} />
                        <span className="text-[11px] font-bold uppercase tracking-widest">
                            Offer valid until: {expiryDate}
                        </span>
                    </div>

                    <Link
                        href={`/treks/${slug}`}
                        className="w-full py-4 bg-background border border-cta-accent/30 text-cta-accent font-bold rounded-xl text-center hover:bg-cta-accent hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 active:scale-95"
                    >
                        <span>Claim This Offer</span>
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
