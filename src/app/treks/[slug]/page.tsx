import React from "react";
import { notFound } from "next/navigation";
import { treks } from "@/data/treks";
import TrekDetailHero from "@/components/TrekDetailHero";
import StickyInquiryCard from "@/components/StickyInquiryCard";
import { MessageCircle } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return treks.map((trek) => ({
        slug: trek.slug,
    }));
}

export default async function TrekDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const trek = treks.find((t) => t.slug === slug);

    if (!trek) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <TrekDetailHero trek={trek} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-20 relative z-20 pb-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Main Content Area */}
                    <div className="flex-1 space-y-12">
                        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-border-subtle shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Itinerary & Details coming soon</h2>
                            <p className="text-primary-text/60 max-w-lg">
                                We are currently building the full itinerary for {trek.title}.
                                Phase 3 will implement the overview grid and interactive vertical timeline.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar / Sticky Card */}
                    <div className="w-full lg:w-[380px] shrink-0">
                        <StickyInquiryCard trek={trek} />
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Footer CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border-subtle p-4 z-50 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-primary-text/40 tracking-widest leading-none mb-1">Price from</span>
                    <span className="text-xl font-bold text-primary-text leading-none">${trek.price}</span>
                </div>
                <div className="flex space-x-2">
                    <a
                        href="https://wa.me/9779801234567"
                        className="p-3 bg-[#25D366] text-white rounded-xl shadow-md active:scale-95 transition-transform"
                    >
                        <MessageCircle size={24} />
                    </a>
                    <button className="bg-cta-accent text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
                        Plan This Trek
                    </button>
                </div>
            </div>
        </main>
    );
}
