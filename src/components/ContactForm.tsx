"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => setStatus("success"), 1500);
    };

    return (
        <section className="py-24 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-border-subtle">
                    <div className="p-8 md:p-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-text mb-4">Send Us a Message</h2>
                            <p className="text-primary-text/60">Fill out the form below and our local experts will get back to you within 24 hours.</p>
                        </div>

                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center space-y-6"
                                >
                                    <div className="w-20 h-20 bg-cta-accent/10 text-cta-accent rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-text">Message Sent Successfully!</h3>
                                    <p className="text-primary-text/60">Thank you for reaching out. We've received your inquiry and will contact you shortly.</p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="text-cta-accent font-bold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest font-bold text-primary-text/40 ml-1">Full Name</label>
                                            <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-background border border-border-subtle focus:border-cta-accent focus:ring-0 transition-all outline-none" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest font-bold text-primary-text/40 ml-1">Email Address</label>
                                            <input required type="email" className="w-full px-6 py-4 rounded-2xl bg-background border border-border-subtle focus:border-cta-accent focus:ring-0 transition-all outline-none" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest font-bold text-primary-text/40 ml-1">WhatsApp / Phone</label>
                                            <input required type="text" className="w-full px-6 py-4 rounded-2xl bg-background border border-border-subtle focus:border-cta-accent focus:ring-0 transition-all outline-none" placeholder="+1 234 567 890" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest font-bold text-primary-text/40 ml-1">Subject</label>
                                            <select className="w-full px-6 py-4 rounded-2xl bg-background border border-border-subtle focus:border-cta-accent focus:ring-0 transition-all outline-none appearance-none">
                                                <option>General Inquiry</option>
                                                <option>Booking Request</option>
                                                <option>Custom Itinerary</option>
                                                <option>Partnerships</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold text-primary-text/40 ml-1">Message</label>
                                        <textarea required rows={5} className="w-full px-6 py-4 rounded-2xl bg-background border border-border-subtle focus:border-cta-accent focus:ring-0 transition-all outline-none resize-none" placeholder="How can we help you plan your journey?"></textarea>
                                    </div>

                                    <button
                                        disabled={status === "submitting"}
                                        type="submit"
                                        className="w-full bg-cta-accent hover:bg-cta-accent/90 text-white py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all shadow-xl active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
                                    >
                                        <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
                                        <Send size={18} className={`group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ${status === "submitting" ? "animate-pulse" : ""}`} />
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
