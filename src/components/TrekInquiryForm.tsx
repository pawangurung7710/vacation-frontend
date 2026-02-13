"use client";

import React from "react";
import { Send, MessageCircle, ShieldCheck } from "lucide-react";

export default function TrekInquiryForm({ trekTitle }: { trekTitle: string }) {
    return (
        <section className="bg-white rounded-[2.5rem] border border-border-subtle shadow-lg overflow-hidden flex flex-col lg:flex-row">
            {/* Left Side: Copy */}
            <div className="bg-cta-accent p-12 lg:w-1/3 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Explore the Himalayas?</h3>
                <p className="text-white/80 font-medium mb-8">
                    Tell us your travel dates and group size, and our local experts will craft the perfect itinerary for you.
                </p>
                <div className="space-y-6 pt-8 border-t border-white/20">
                    <div className="flex items-start space-x-4">
                        <ShieldCheck className="text-white shrink-0" />
                        <span className="text-sm font-bold">No-obligation quote within 24 hours</span>
                    </div>
                    <div className="flex items-start space-x-4">
                        <ShieldCheck className="text-white shrink-0" />
                        <span className="text-sm font-bold">100% Secure & Private</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 md:p-12 lg:w-2/3">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary-text/40">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-cta-accent transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary-text/40">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-cta-accent transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary-text/40">Preferred Start Date</label>
                            <input type="date" className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-cta-accent transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest font-bold text-primary-text/40">Group Size</label>
                            <select className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-cta-accent transition-colors appearance-none">
                                <option>1 Person (Solo)</option>
                                <option>2 People</option>
                                <option>3-5 People</option>
                                <option>6-10 People</option>
                                <option>10+ People</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-primary-text/40">Tell us what you're looking for</label>
                        <textarea
                            rows={4}
                            placeholder={`Tell us about your fitness levels and any specific requirements for your ${trekTitle} journey.`}
                            className="w-full bg-background border border-border-subtle rounded-xl px-4 py-3 outline-none focus:border-cta-accent transition-colors resize-none"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 pt-4">
                        <button type="submit" className="flex-1 bg-primary-text text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-black transition-all">
                            <Send size={18} />
                            <span>Submit Inquiry</span>
                        </button>
                        <button type="button" className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all active:scale-95">
                            <MessageCircle size={18} />
                            <span>Chat on WhatsApp</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
