import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactGrid from "@/components/ContactGrid";
import ContactForm from "@/components/ContactForm";
import ContactFAQ from "@/components/ContactFAQ";
import ContactMap from "@/components/ContactMap";

export const metadata = {
    title: "Contact Us | Vacation Nepal Trekking",
    description: "Get in touch with local Himalayan experts. We're here to help you plan your perfect Nepal adventure.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ContactHero />
            <ContactGrid />
            <ContactForm />
            <ContactFAQ />
            <ContactMap />
            <Footer />
        </main>
    );
}
