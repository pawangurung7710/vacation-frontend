"use client";

import React, { useState, useMemo } from "react";
import ListingHero from "@/components/ListingHero";
import TrekGrid from "@/components/TrekGrid";
import TrekFilters from "@/components/TrekFilters";
import MobileFilterDrawer from "@/components/MobileFilterDrawer";
import { treks } from "@/data/treks";
import { SlidersHorizontal } from "lucide-react";

const initialFilters = {
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
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000"
            />

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
            </div>
        </main>
    );
}
