"use client";

import React, { useState } from "react";
import { Check, Minus, AlertCircle, ShoppingBag, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TrekLogisticsProps {
    includes: string[];
    excludes: string[];
    difficulty: string;
}

export default function TrekLogistics({ includes, excludes, difficulty }: TrekLogisticsProps) {
    const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);

    const difficultyLevel = difficulty === "Easy" ? 1 : difficulty === "Moderate" ? 2 : difficulty === "Challenging" ? 3 : 5;

    return (
        <div className="space-y-12">
            {/* Cost Details */}
            <section className="bg-white rounded-[2.5rem] border border-border-subtle overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Includes */}
                    <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border-subtle bg-background/30">
                        <h3 className="text-xl font-bold text-primary-text mb-8 flex items-center space-x-2">
                            <Check className="text-cta-accent" />
                            <span>What's Included</span>
                        </h3>
                        <ul className="space-y-4">
                            {includes.map((item, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cta-accent shrink-0" />
                                    <span className="text-sm font-medium text-primary-text/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Excludes */}
                    <div className="p-8 md:p-12">
                        <h3 className="text-xl font-bold text-primary-text mb-8 flex items-center space-x-2">
                            <Minus className="text-red-500" />
                            <span>What's Excluded</span>
                        </h3>
                        <ul className="space-y-4">
                            {excludes.map((item, i) => (
                                <li key={i} className="flex items-start space-x-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                    <span className="text-sm font-medium text-primary-text/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Preparation & Trust Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Difficulty Scale */}
                <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm flex flex-col justify-between">
                    <div>
                        <h4 className="text-lg font-bold text-primary-text mb-2">Trek Difficulty</h4>
                        <p className="text-sm text-primary-text/60 font-medium mb-6">Based on altitude, trail conditions, and length.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-end mb-1">
                            <span className="text-sm font-bold text-cta-accent px-3 py-1 bg-cta-accent/10 rounded-lg">{difficulty}</span>
                            <span className="text-[10px] font-bold text-primary-text/40 tracking-widest uppercase">Level {difficultyLevel} of 5</span>
                        </div>
                        <div className="h-3 w-full bg-background rounded-full overflow-hidden flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((level) => (
                                <div
                                    key={level}
                                    className={cn(
                                        "flex-1 transition-colors duration-500",
                                        level <= difficultyLevel ? "bg-cta-accent" : "bg-border-subtle"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Equipment Checklist Trigger */}
                <div className="bg-white rounded-3xl p-8 border border-border-subtle shadow-sm flex flex-col justify-between">
                    <div>
                        <h4 className="text-lg font-bold text-primary-text mb-2">Equipment Checklist</h4>
                        <p className="text-sm text-primary-text/60 font-medium mb-6">Everything you need for a comfortable journey.</p>
                    </div>
                    <button
                        onClick={() => setIsEquipmentOpen(!isEquipmentOpen)}
                        className="w-full bg-background hover:bg-border-subtle/30 border border-border-subtle text-primary-text py-3 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all"
                    >
                        <ShoppingBag size={18} className="text-cta-accent" />
                        <span>View Essential Gear</span>
                        <ChevronDown size={18} className={cn("transition-transform", isEquipmentOpen && "rotate-180")} />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isEquipmentOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="bg-white rounded-3xl p-8 border border-border-subtle grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <GearSection
                                title="Clothing"
                                items={["Waterproof Jacket", "Thermal Base Layers", "Trekking Trousers", "Down Jacket", "Sun Hat & Beanie"]}
                            />
                            <GearSection
                                title="Footwear"
                                items={["Sturdy Trekking Boots", "Thermal Socks", "Camp Shoes/Sandals"]}
                            />
                            <GearSection
                                title="Essentials"
                                items={["30-40L Daypack", "Sleeping Bag (-15°C)", "Water Bottles", "Sunblock & Lip Balm", "Headlamp"]}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function GearSection({ title, items }: { title: string; items: string[] }) {
    return (
        <div>
            <h5 className="text-sm font-bold text-primary-text mb-4 border-b border-border-subtle pb-2 uppercase tracking-widest text-[10px]">{title}</h5>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center text-xs font-medium text-primary-text/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-border-subtle mr-3" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
