"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ListingSEO() {
    return (
        <div className="space-y-24 mt-24">
            {/* Promo Strip */}
            <section className="relative overflow-hidden rounded-[2.5rem] bg-cta-accent text-white p-8 md:p-12">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Planning for Autumn 2026?</h3>
                        <p className="text-white/80 font-medium">Limited slots are available for our popular Everest & Annapurna departures. Book early to secure your spot.</p>
                    </div>
                    <button className="bg-white text-cta-accent px-8 py-4 rounded-xl font-bold flex items-center space-x-2 hover:bg-background transition-colors flex-shrink-0">
                        <span>Explore Autumn Treks</span>
                        <ArrowRight size={18} />
                    </button>
                </div>
            </section>

            {/* SEO Content Block */}
            <section className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-border-subtle">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8">Trekking in Nepal – Find the Right Adventure</h2>
                    <div className="prose prose-slate prose-lg text-primary-text/70 space-y-6">
                        <p>
                            Nepal is world-renowned for its majestic Himalayan peaks and diverse trekking trails. Whether you're seeking the iconic
                            <strong> Everest Base Camp</strong>, the culturally rich <strong>Annapurna Circuit</strong>, or the remote
                            wilderness of <strong>Upper Mustang</strong>, there is a path for every level of experience and ambition.
                        </p>
                        <p>
                            Our treks are carefully designed to prioritize your safety and immersion. Led by local Sherpa guides who have
                            grown up on these mountains, you'll gain insights into the culture and traditions that you won't find anywhere else.
                            We advocate for small-group travel (maximum 12 people) to ensure a personalized experience and minimal environmental impact.
                        </p>
                        <h3 className="text-xl font-bold text-primary-text pt-4">Best Seasons for Trekking</h3>
                        <p>
                            While trekking is possible year-round in some regions, <strong>Autumn (September to November)</strong> and
                            <strong> Spring (March to May)</strong> offer the most stable weather and clearest mountain views. For those looking
                            to trek in the summer, rain-shadow regions like Upper Mustang and Dolpo provide incredible dry-land landscapes even
                            during the monsoon.
                        </p>
                    </div>
                </div>
            </section>

            {/* WhatsApp CTA */}
            <section className="text-center py-12">
                <h4 className="text-xl md:text-2xl font-bold mb-6 text-primary-text">Not sure which trek is right for you?</h4>
                <a
                    href="https://wa.me/9779801234567"
                    className="inline-flex items-center space-x-3 bg-[#25D366] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                >
                    <MessageCircle size={24} />
                    <span>Speak with a Trek Expert</span>
                </a>
                <p className="mt-4 text-sm text-primary-text/40 font-medium italic">Usually responds within 30 minutes (9:00 - 18:00 NPT)</p>
            </section>
        </div>
    );
}
