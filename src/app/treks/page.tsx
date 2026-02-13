"use client";

import React, { useState } from "react";
import ListingHero from "@/components/ListingHero";
import TrekGrid from "@/components/TrekGrid";
import { treks } from "@/data/treks";
import { SlidersHorizontal } from "lucide-react";

export default function TreksListingPage() {
    const [activeTreks, setActiveTreks] = useState(treks);

    return (
        <main className="min-h-screen bg-background pb-20">
            <ListingHero
                title="Explore Treks in Nepal"
                subtitle="Small-group Himalayan adventures led by trusted local guides."
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Results Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-border-subtle gap-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-text">{activeTreks.length}</span>
                        <span className="text-primary-text/60 font-medium">Treks found in Nepal</span>
                    </div>

                    <div className="flex items-center space-x-6 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {/* Mobile Filter Toggle (Placeholder) */}
                        <button className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-border-subtle rounded-xl text-sm font-bold shadow-sm">
                            <SlidersHorizontal size={16} />
                            <span>Filters</span>
                        </button>

                        {/* Sort Select (Placeholder) */}
                        <div className="flex items-center space-x-3 text-sm flex-shrink-0">
                            <span className="text-primary-text/60 font-bold uppercase tracking-wider text-[10px]">Sort by:</span>
                            <select className="bg-transparent border-none focus:ring-0 font-bold text-primary-text cursor-pointer p-0 pr-6">
                                <option>Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Duration: Longest</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Layout with Sidebar (Phase 4) or Full Width */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Placeholder for Filtering */}
                    <aside className="hidden lg:block w-72 shrink-0">
                        <div className="h-[500px] rounded-3xl bg-white border border-border-subtle shadow-sm p-6">
                            <p className="text-primary-text/40 font-medium tracking-widest uppercase text-[10px] text-center mt-20">
                                Advanced Filters coming in Phase 4...
                            </p>
                        </div>
                    </aside>

                    {/* Main Grid */}
                    <div className="flex-1">
                        <TrekGrid treks={activeTreks} />
                    </div>
                </div>
            </div>
        </main>
    );
}
