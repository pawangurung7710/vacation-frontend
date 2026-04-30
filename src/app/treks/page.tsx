"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import ListingHero from "@/components/ListingHero";
import TrekGrid from "@/components/TrekGrid";
import TrekFilters from "@/components/TrekFilters";
import MobileFilterDrawer from "@/components/MobileFilterDrawer";
import ListingSEO from "@/components/ListingSEO";
import { treks, Region, Difficulty } from "@/data/treks";
import { SlidersHorizontal, Sparkles, Film } from "lucide-react";

interface Filters {
    regions: Region[];
    difficulties: Difficulty[];
    duration: string;
    priceMax: number;
}

const initialFilters: Filters = {
    regions: [],
    difficulties: [],
    duration: "all",
    priceMax: 3000,
};

type SortOption = "popularity" | "price-asc" | "duration-desc" | "difficulty-desc";

export default function TreksListingPage() {
    const [activeFilters, setActiveFilters] = useState(initialFilters);
    const [sortBy, setSortBy] = useState<SortOption>("popularity");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    const filteredTreks = useMemo(() => {
        let results = treks.filter((trek) => {
            // Region check
            if (activeFilters.regions.length > 0 && !activeFilters.regions.includes(trek.region)) return false;

            // Difficulty check
            if (activeFilters.difficulties.length > 0 && !activeFilters.difficulties.includes(trek.difficulty)) return false;

            // Price check
            if (trek.price > activeFilters.priceMax) return false;

            // Duration check
            if (activeFilters.duration !== "all") {
                if (activeFilters.duration === "short" && trek.duration > 7) return false;
                if (activeFilters.duration === "medium" && (trek.duration < 8 || trek.duration > 14)) return false;
                if (activeFilters.duration === "long" && trek.duration < 15) return false;
            }

            return true;
        });

        // Sorting logic
        results.sort((a, b) => {
            if (sortBy === "price-asc") return a.price - b.price;
            if (sortBy === "duration-desc") return b.duration - a.duration;
            if (sortBy === "popularity") {
                if (a.isPopular && !b.isPopular) return -1;
                if (!a.isPopular && b.isPopular) return 1;
                if (a.isBestSeller && !b.isBestSeller) return -1;
                if (!a.isBestSeller && b.isBestSeller) return 1;
                return 0;
            }
            return 0;
        });

        return results;
    }, [activeFilters, sortBy]);

    const handleClearFilters = () => {
        setActiveFilters(initialFilters);
    };

    return (
        <main className="min-h-screen bg-background pb-20">
            <ListingHero
                title="Explore Treks in Nepal"
                subtitle="Small-group Himalayan adventures led by trusted local guides."
                image="/images/seasonal-deal.jpg"
            />

            {/* ── Design Mockup Quick Access ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-4">
                <h2 className="text-lg font-bold text-primary-text mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cta-accent" />
                    Design Prototypes
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Mockup V2 Card */}
                    <Link href="/mockup-v2" className="group">
                        <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#ff385c]/10 via-transparent to-[#ff385c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="p-6 flex items-center gap-5 relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-[#ff385c]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff385c]/15 transition-colors">
                                    <Sparkles className="w-7 h-7 text-[#ff385c]" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-primary-text group-hover:text-[#ff385c] transition-colors">Airbnb-Style Landing Page</h3>
                                    <p className="text-sm text-primary-text/60 mt-1">Mockup V2 — Carousel layout with animated sticky navbar</p>
                                </div>
                                <div className="ml-auto text-primary-text/30 group-hover:text-[#ff385c] group-hover:translate-x-1 transition-all">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Cinematic EBC Card */}
                    <Link href="/treks/everest-base-camp-cinematic" className="group">
                        <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2C4A6A]/10 via-transparent to-[#006D77]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="p-6 flex items-center gap-5 relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-[#2C4A6A]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2C4A6A]/15 transition-colors">
                                    <Film className="w-7 h-7 text-[#2C4A6A]" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-primary-text group-hover:text-[#2C4A6A] transition-colors">Cinematic Everest Base Camp</h3>
                                    <p className="text-sm text-primary-text/60 mt-1">Immersive scroll-driven storytelling experience</p>
                                </div>
                                <div className="ml-auto text-primary-text/30 group-hover:text-[#2C4A6A] group-hover:translate-x-1 transition-all">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                {/* Results Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-border-subtle gap-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-primary-text">{filteredTreks.length}</span>
                        <span className="text-primary-text/60 font-medium">Treks found in Nepal</span>
                    </div>

                    <div className="flex items-center space-x-6 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        {/* Mobile Filter Toggle */}
                        <button
                            onClick={() => setIsMobileFiltersOpen(true)}
                            className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-white border border-border-subtle rounded-xl text-sm font-bold shadow-sm active:scale-95 transition-all"
                        >
                            <SlidersHorizontal size={16} />
                            <span>Filters</span>
                        </button>

                        {/* Sort Select */}
                        <div className="flex items-center space-x-3 text-sm flex-shrink-0">
                            <span className="text-primary-text/60 font-bold uppercase tracking-wider text-[10px]">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortOption)}
                                className="bg-transparent border-none focus:ring-0 font-bold text-primary-text cursor-pointer p-0 pr-6"
                            >
                                <option value="popularity">Popularity</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="duration-desc">Duration: Longest</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Layout with Sidebar */}
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar - Desktop Only */}
                    <aside className="hidden lg:block w-72 shrink-0 sticky top-28 self-start">
                        <div className="rounded-3xl bg-white border border-border-subtle shadow-sm p-8">
                            <TrekFilters
                                activeFilters={activeFilters}
                                onFilterChange={setActiveFilters}
                                onClearFilters={handleClearFilters}
                            />
                        </div>
                    </aside>

                    {/* Mobile Filter Drawer */}
                    <MobileFilterDrawer
                        isOpen={isMobileFiltersOpen}
                        onClose={() => setIsMobileFiltersOpen(false)}
                        activeFilters={activeFilters}
                        onFilterChange={setActiveFilters}
                        onClearFilters={handleClearFilters}
                    />

                    {/* Main Grid */}
                    <div className="flex-1">
                        <TrekGrid treks={filteredTreks} />

                        {filteredTreks.length === 0 && (
                            <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-border-subtle">
                                <p className="text-primary-text/60 font-medium mb-4">No treks found matching your filters.</p>
                                <button
                                    onClick={handleClearFilters}
                                    className="text-cta-accent font-bold hover:underline"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <ListingSEO />
            </div>
        </main>
    );
}
