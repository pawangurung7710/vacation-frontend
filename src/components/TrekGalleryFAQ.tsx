"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, HelpCircle, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    { question: "How difficult is this trek?", answer: "This depends on the specific route. Generally, Nepal treks range from easy forest walks to strenuous high-altitude crossings. We provide a difficulty scale for each trek to help you choose." },
    { question: "Is prior experience required?", answer: "For moderate treks, no technical experience is needed, but good physical fitness is essential. For strenuous treks, previous high-altitude experience is highly recommended." },
    { question: "What permits are needed?", answer: "Most treks require a TIMS (Trekker's Information Management System) card and a National Park or Conservation Area permit. Some remote regions require a Special Restricted Area Permit." },
    { question: "Is altitude sickness common?", answer: "Altitude sickness can affect anyone regardless of fitness. Our itineraries are designed with proper acclimatization days to minimize risk, and our guides are trained to monitor symptoms." }
];

export default function TrekGalleryFAQ({ images, trekTitle }: { images: string[], trekTitle: string }) {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div className="space-y-20">
            {/* Gallery */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-primary-text flex items-center space-x-3">
                        <Camera className="text-cta-accent" />
                        <span>Gallery</span>
                    </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div key={i} className={cn(
                            "relative overflow-hidden rounded-2xl group cursor-pointer aspect-square",
                            i === 0 && "md:col-span-2 md:row-span-2"
                        )}>
                            <Image
                                src={img}
                                alt={`${trekTitle} gallery ${i}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQs */}
            <section className="bg-background/50 rounded-[2.5rem] p-8 md:p-12 border border-border-subtle">
                <h3 className="text-2xl font-bold text-primary-text mb-8 flex items-center space-x-3">
                    <HelpCircle className="text-cta-accent" />
                    <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-border-subtle overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full text-left p-6 flex justify-between items-center group"
                            >
                                <span className="font-bold text-primary-text group-hover:text-cta-accent transition-colors">{faq.question}</span>
                                <ChevronDown className={cn("text-primary-text/40 transition-transform", openFaq === i && "rotate-180")} />
                            </button>
                            <AnimatePresence>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                    >
                                        <div className="px-6 pb-6 text-sm text-primary-text/60 leading-relaxed font-medium">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
