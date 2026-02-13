"use client";

import React, { useMemo } from "react";
import { treks, Trek } from "@/data/treks";
import TrekGrid from "./TrekGrid";

interface RelatedTreksProps {
    currentTrekId: string;
    region: string;
}

export default function RelatedTreks({ currentTrekId, region }: RelatedTreksProps) {
    const related = useMemo(() => {
        // 1. Same region (excluding current)
        let filtered = treks.filter(t => t.id !== currentTrekId && t.region === region);

        // 2. If not enough, add popular treks
        if (filtered.length < 3) {
            const remaining = treks.filter(t => t.id !== currentTrekId && t.region !== region && t.isPopular);
            filtered = [...filtered, ...remaining];
        }

        return filtered.slice(0, 3);
    }, [currentTrekId, region]);

    if (related.length === 0) return null;

    return (
        <section className="mt-24 pt-20 border-t border-border-subtle">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-[10px] uppercase tracking-widest text-cta-accent font-bold mb-4">Discovery</h2>
                    <h3 className="text-3xl font-bold text-primary-text">You Might Also Like</h3>
                    <p className="text-primary-text/60 mt-2 font-medium">Similar Himalayan adventures handpicked for you.</p>
                </div>
                <a href="/treks" className="text-cta-accent font-bold hover:underline">View All Treks →</a>
            </div>

            <TrekGrid treks={related} />
        </section>
    );
}
