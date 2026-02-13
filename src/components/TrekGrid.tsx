"use client";

import React from "react";
import TrekCard from "@/components/TrekCard";
import { Trek } from "@/data/treks";
import { motion, AnimatePresence } from "framer-motion";

interface TrekGridProps {
    treks: Trek[];
}

export default function TrekGrid({ treks }: TrekGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
                {treks.map((trek, index) => (
                    <TrekCard
                        key={trek.id}
                        trek={trek}
                        index={index}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
