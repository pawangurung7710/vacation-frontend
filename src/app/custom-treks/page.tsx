import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomHero from "@/components/CustomHero";
import CustomIntro from "@/components/CustomIntro";
import CustomTypes from "@/components/CustomTypes";
import CustomProcess from "@/components/CustomProcess";
import CustomTrust from "@/components/CustomTrust";
import CustomForm from "@/components/CustomForm";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Design Your Personalized Nepal Trek | Custom Himalayan Itineraries",
    description: "Craft your dream Himalayan adventure with Vacation Nepal. Tailor-made trekking itineraries for families, luxury seekers, and private groups. Get a local expert quote in 24 hours.",
    openGraph: {
        title: "Personalized Nepal Trek Itineraries | Vacation Nepal",
        description: "Private, Luxury, and Short treks designed around your pace. Start your custom Himalayan journey today.",
    }
};

export default function CustomTreksPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <CustomHero />
            <CustomIntro />
            <CustomTypes />
            <CustomProcess />
            <CustomTrust />
            <CustomForm />

            <Footer />
        </main>
    );
}
