"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What's the best time to trek in Nepal?",
        a: "The best trekking seasons are Spring (March-May) and Autumn (September-November). These months offer stable weather, clear mountain views, and comfortable temperatures."
    },
    {
        q: "How do I book a trek with you?",
        a: "Simply reach out via WhatsApp, email, or this contact form. We'll discuss your preferences, suggest itineraries, and finalize your custom package with transparent pricing."
    },
    {
        q: "What's included in the trek price?",
        a: "All our packages include government permits, experienced guides, porters, accommodation, meals during the trek, and airport transfers. We provide full transparency with no hidden costs."
    },
    {
        q: "Do I need travel insurance?",
        a: "Yes, comprehensive travel insurance covering high-altitude trekking (up to 6,000m) and emergency helicopter evacuation is mandatory for all our treks."
    },
    {
        q: "Can I customize my itinerary?",
        a: "Absolutely! We specialize in custom itineraries. Tell us your dates, fitness level, and preferences, and we'll design a personalized journey just for you."
    },
    {
        q: "How do payments work?",
        a: "We require a 20-30% deposit to confirm your booking. The remaining balance can be paid upon arrival in Kathmandu via cash or bank transfer."
    }
];

export default function ContactFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Frequently Asked Questions</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-text">
                        Quick Answers to Common Queries
                    </h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-border-subtle rounded-2xl overflow-hidden bg-background"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white transition-colors"
                            >
                                <span className="font-bold text-primary-text pr-4">{faq.q}</span>
                                <ChevronDown
                                    size={20}
                                    className={`flex-shrink-0 text-cta-accent transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="px-8 pb-6 text-primary-text/70 border-t border-border-subtle bg-white"
                                >
                                    <p className="pt-4">{faq.a}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
