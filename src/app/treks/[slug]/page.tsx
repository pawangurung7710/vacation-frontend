import React from "react";
import { notFound } from "next/navigation";
import { treks } from "@/data/treks";
import ListingHero from "@/components/ListingHero";

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
            {/* Hero section from shared component (Phase 2 will replace with custom detailed hero) */}
            <ListingHero
                title={trek.title}
                subtitle={trek.description}
                image={trek.image}
            />

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[2.5rem] p-12 border border-border-subtle shadow-sm flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold mb-4">Itinerary & Details coming soon</h2>
                    <p className="text-primary-text/60 max-w-lg">
                        We are currently building the full itinerary for {trek.title}.
                        Phase 2 will implement the custom immersive hero and sticky CTAs.
                    </p>
                </div>
            </section>
        </main>
    );
}
