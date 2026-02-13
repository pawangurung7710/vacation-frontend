"use client";

import React from "react";
import ListingHero from "@/components/ListingHero";
import { treks } from "@/data/treks";

export default function TreksListingPage() {
    return (
        <main className="min-h-screen bg-background">
            <ListingHero
                title="Explore Treks in Nepal"
                subtitle="Small-group Himalayan adventures led by trusted local guides."
                image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000"
            />

            {/* Placeholder for results grid and filters */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-96 rounded-3xl bg-white border-2 border-dashed border-border-subtle flex items-center justify-center">
                    <p className="text-primary-text/40 font-medium tracking-widest uppercase text-xs">
                        Filters and Trek Grid coming in next tasks...
                    </p>
                </div>
            </section>
        </main>
    );
}
