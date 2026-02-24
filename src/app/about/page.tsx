import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import CompanyStory from "@/components/CompanyStory";
import AboutValues from "@/components/AboutValues";
import AboutLegitimacy from "@/components/AboutLegitimacy";
import AboutTimeline from "@/components/AboutTimeline";
import AboutTeam from "@/components/AboutTeam";
import AboutCSR from "@/components/AboutCSR";
import AboutCTA from "@/components/AboutCTA";

export const metadata = {
    title: "About Us | Vacation Nepal Trekking",
    description: "Learn about Vacation Nepal Trekking, our local expertise, and international standards in Himalayan adventure.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <AboutHero />
            <CompanyStory />
            <AboutValues />
            <AboutLegitimacy />
            <AboutTimeline />
            <AboutTeam />
            <AboutCSR />
            <AboutCTA />
            <Footer />
        </main>
    );
}
