"use client";

import React from "react";
import { Map, Info, Compass } from "lucide-react";

interface TrekSeasonMapProps {
    bestSeasons: string[];
    trekTitle: string;
}

export default function TrekSeasonMap({ bestSeasons, trekTitle }: TrekSeasonMapProps) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Logic for season color coding
    const getStatus = (month: string) => {
        if (bestSeasons.includes("Spring") && ["Mar", "Apr", "May"].includes(month)) return "excellent";
        if (bestSeasons.includes("Autumn") && ["Sep", "Oct", "Nov"].includes(month)) return "excellent";
        if (bestSeasons.includes("Summer") && ["Jun", "Jul", "Aug"].includes(month)) return "good";
        if (bestSeasons.includes("Winter") && ["Dec", "Jan", "Feb"].includes(month)) return "good";
        if (["Jun", "Jul", "Aug"].includes(month)) return "caution"; // Default monsoon for most
        return "good";
    };

    return (
        <div className="space-y-12">
            {/* Season Calendar */}
            <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border-subtle shadow-sm">
                <h3 className="text-xl font-bold text-primary-text mb-2">Best Time to Trek</h3>
                <p className="text-sm text-primary-text/60 font-medium mb-8">Monthly guide for weather and visibility on the {trekTitle} route.</p>

                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
                    {months.map((month) => {
                        const status = getStatus(month);
                        return (
                            <div key={month} className="flex flex-col items-center">
                                <div className={`w-full h-12 rounded-xl flex items-center justify-center font-bold text-xs transition-transform hover:scale-105 cursor-default ${status === "excellent" ? "bg-cta-accent text-white" :
                                        status === "good" ? "bg-cta-accent/20 text-cta-accent border border-cta-accent/30" :
                                            "bg-red-50 text-red-400 border border-red-100"
                                    }`}>
                                    {month}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-border-subtle">
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-cta-accent" />
                        <span className="text-[10px] font-bold text-primary-text/60 uppercase tracking-widest">Excellent</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-cta-accent/20 border border-cta-accent/30" />
                        <span className="text-[10px] font-bold text-primary-text/60 uppercase tracking-widest">Good</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-50 border border-red-100" />
                        <span className="text-[10px] font-bold text-primary-text/60 uppercase tracking-widest">Not Recommended</span>
                    </div>
                </div>
            </section>

            {/* Route & Elevation placeholder */}
            <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border-subtle shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-primary-text mb-1">Route & Elevation</h3>
                        <p className="text-sm text-primary-text/60 font-medium">Visualizing the path through the Himalayas.</p>
                    </div>
                    <button className="flex items-center space-x-2 bg-background border border-border-subtle px-4 py-2 rounded-xl text-sm font-bold text-primary-text hover:border-cta-accent transition-all">
                        <Map size={18} className="text-cta-accent" />
                        <span>Open Interactive Map</span>
                    </button>
                </div>

                <div className="aspect-[21/9] bg-background rounded-3xl border border-dashed border-border-subtle flex flex-col items-center justify-center text-center p-8">
                    <div className="mb-4 p-4 bg-white rounded-2xl shadow-sm border border-border-subtle">
                        <Compass size={40} className="text-cta-accent animate-spin-slow" />
                    </div>
                    <h4 className="text-lg font-bold text-primary-text mb-2">Interactive Route Map (V2)</h4>
                    <p className="text-sm text-primary-text/60 max-w-sm font-medium">
                        Our detailed elevation profiles and 3D route visualizations are being updated for {trekTitle}.
                        Coming soon in the next update.
                    </p>
                </div>
            </section>
        </div>
    );
}
