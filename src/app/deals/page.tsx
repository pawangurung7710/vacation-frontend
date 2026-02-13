
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DealsHero from "@/components/DealsHero";
import OfferCard from "@/components/OfferCard";
import OfferConditions from "@/components/OfferConditions";
import OfferUrgencyCTA from "@/components/OfferUrgencyCTA";

const activeOffers = [
    {
        title: "Everest Base Camp – Autumn Special",
        description: "Experience the legendary trek during the crystal-clear autumn months with exclusive local benefits and equipment upgrades.",
        image: "/images/everest-base-camp.jpg",
        badge: "Limited Time",
        highlights: ["15% Off Standard Price", "Free Helicopter Pick-up Option", "Complimentary Expedition Duffel"],
        expiryDate: "October 31, 2025",
        priceValue: "1,060",
        originalPrice: "1,250",
        slug: "everest-base-camp"
    },
    {
        title: "Annapurna Circuit – Early Bird 2026",
        description: "Secure your 2026 spring journey at current rates. Perfect for travelers who plan ahead for the best logistics.",
        image: "/images/annapurna-circuit.jpg",
        badge: "Early Bird",
        highlights: ["Locked-in 2024 Pricing", "Guaranteed Best Teahouses", "Flexible Date Change"],
        expiryDate: "December 15, 2025",
        priceValue: "945",
        originalPrice: "1,050",
        slug: "annapurna-circuit"
    },
    {
        title: "Manaslu Circuit – Small Group Offer",
        description: "Join a curated small group for the remote Manaslu Circuit and enjoy shared permit savings and extra cultural side-trips.",
        image: "/images/manaslu-circuit.jpg",
        badge: "Small Group",
        highlights: ["Free Airport Transfers", "Extra Acclimatization Day", "Group Permit Discount Included"],
        expiryDate: "November 20, 2025",
        priceValue: "1,300",
        originalPrice: "1,450",
        slug: "manaslu-circuit"
    }
];

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Exclusive Nepal Trekking Offers | Season Deals & Early Bird",
    description: "Explore limited-time trekking deals for Everest, Annapurna, and Manaslu. Secure exclusive savings and premium benefits on 2025/2026 Himalayan departures.",
    openGraph: {
        title: "Trekking Special Offers | Vacation Nepal Trekking",
        description: "Autumn Specials, Early Bird 2026, and Small Group discounts. High-quality Himalayan adventures at exclusive rates.",
    }
};

export default function DealsPage() {
    return (
        <main className="min-h-screen bg-background text-primary-text">
            <Navbar />

            <DealsHero />

            <section id="active-offers" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Available Now</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Active Trekking Deals</h2>
                    <p className="text-lg text-primary-text/60 max-w-2xl mx-auto font-medium">
                        Our curated selection of seasonal offers designed to give you maximum value without compromising on the premium local experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeOffers.map((offer, index) => (
                        <OfferCard
                            key={index}
                            {...offer}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <OfferConditions />
            <OfferUrgencyCTA />

            <Footer />
        </main>
    );
}
