"use client";

import React from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Newsletter() {
    const [subscribed, setSubscribed] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubscribed(true);
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative mountain background line */}
            <div className="absolute bottom-0 left-0 w-full opacity-[0.03] pointer-events-none">
                <svg viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="#2C4A6A" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,224C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {!subscribed ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Inner Circle</h2>
                        <p className="text-lg text-primary-text/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Get exclusive Himalayan trekking news, seasonal photography tips, and early-access deals delivered to your inbox once a month.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email address"
                                className="flex-1 w-full px-6 py-5 rounded-2xl border border-border-subtle focus:ring-2 focus:ring-cta-accent focus:border-transparent outline-none transition-all shadow-sm font-medium"
                            />
                            <button
                                type="submit"
                                className="btn-primary w-full sm:w-auto px-10 py-5 flex items-center justify-center space-x-2"
                            >
                                <span>Subscribe</span>
                                <Send size={18} />
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-primary-text/40">
                            By subscribing, you agree to our <a href="/privacy" className="underline hover:text-cta-accent">Privacy Policy</a>. No spam, ever.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-10"
                    >
                        <div className="w-20 h-20 bg-cta-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle2 size={40} className="text-cta-accent" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Welcome to the Family!</h2>
                        <p className="text-lg text-primary-text/70 mb-2">Check your inbox for a special welcome guide.</p>
                        <p className="text-sm font-bold text-cta-accent">Namaste 🙏</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
