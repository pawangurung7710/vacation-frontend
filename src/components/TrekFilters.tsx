"use client";

import React from "react";
import { Filter, X, ChevronDown } from "lucide-react";
import { Region, Difficulty } from "@/data/treks";

interface TrekFiltersProps {
    onFilterChange: (filters: any) => void;
    onClearFilters: () => void;
    activeFilters: any;
}

const regions: Region[] = ["Everest", "Annapurna", "Manaslu", "Langtang", "Mustang", "Dolpo"];
const difficulties: Difficulty[] = ["Easy", "Moderate", "Challenging", "Strenuous"];

export default function TrekFilters({ onFilterChange, onClearFilters, activeFilters }: TrekFiltersProps) {
    const handleRegionToggle = (region: Region) => {
        const newRegions = activeFilters.regions.includes(region)
            ? activeFilters.regions.filter((r: any) => r !== region)
            : [...activeFilters.regions, region];
        onFilterChange({ ...activeFilters, regions: newRegions });
    };

    const handleDifficultyToggle = (diff: Difficulty) => {
        const newDiffs = activeFilters.difficulties.includes(diff)
            ? activeFilters.difficulties.filter((d: any) => d !== diff)
            : [...activeFilters.difficulties, diff];
        onFilterChange({ ...activeFilters, difficulties: newDiffs });
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">Filters</h4>
                <button
                    onClick={onClearFilters}
                    className="text-xs font-bold text-cta-accent uppercase tracking-widest hover:underline"
                >
                    Clear All
                </button>
            </div>

            {/* Region Filter */}
            <div>
                <h5 className="text-[10px] uppercase tracking-widest text-primary-text/40 font-bold mb-4">Region</h5>
                <div className="flex flex-wrap gap-2">
                    {regions.map((region) => (
                        <button
                            key={region}
                            onClick={() => handleRegionToggle(region)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${activeFilters.regions.includes(region)
                                    ? "bg-cta-accent border-cta-accent text-white"
                                    : "bg-white border-border-subtle text-primary-text hover:border-cta-accent"
                                }`}
                        >
                            {region}
                        </button>
                    ))}
                </div>
            </div>

            {/* Difficulty Filter */}
            <div>
                <h5 className="text-[10px] uppercase tracking-widest text-primary-text/40 font-bold mb-4">Difficulty</h5>
                <div className="space-y-2">
                    {difficulties.map((diff) => (
                        <label key={diff} className="flex items-center space-x-3 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={activeFilters.difficulties.includes(diff)}
                                onChange={() => handleDifficultyToggle(diff)}
                                className="w-4 h-4 rounded border-border-subtle text-cta-accent focus:ring-cta-accent cursor-pointer"
                            />
                            <span className={`text-sm font-medium transition-colors ${activeFilters.difficulties.includes(diff) ? "text-primary-text font-bold" : "text-primary-text/60 group-hover:text-primary-text"
                                }`}>
                                {diff}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Duration Filter (Simple Select) */}
            <div>
                <h5 className="text-[10px] uppercase tracking-widest text-primary-text/40 font-bold mb-4">Duration</h5>
                <select
                    value={activeFilters.duration}
                    onChange={(e) => onFilterChange({ ...activeFilters, duration: e.target.value })}
                    className="w-full bg-white border border-border-subtle rounded-xl px-4 py-2.5 text-sm font-medium focus:ring-2 focus:ring-cta-accent focus:border-transparent outline-none"
                >
                    <option value="all">Any Duration</option>
                    <option value="short">Short (1-7 Days)</option>
                    <option value="medium">Medium (8-14 Days)</option>
                    <option value="long">Long (15+ Days)</option>
                </select>
            </div>

            {/* Price Range Placeholder */}
            <div>
                <h5 className="text-[10px] uppercase tracking-widest text-primary-text/40 font-bold mb-4">Price Range</h5>
                <input
                    type="range"
                    min="500"
                    max="3000"
                    step="100"
                    value={activeFilters.priceMax}
                    onChange={(e) => onFilterChange({ ...activeFilters, priceMax: parseInt(e.target.value) })}
                    className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer accent-cta-accent"
                />
                <div className="flex justify-between mt-2 text-[10px] font-bold text-primary-text/60">
                    <span>$500</span>
                    <span>Up to ${activeFilters.priceMax}</span>
                </div>
            </div>
        </div>
    );
}
