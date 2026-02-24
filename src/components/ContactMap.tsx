"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function ContactMap() {
    return (
        <section className="py-24 bg-background" id="map">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Office Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-sm uppercase tracking-[0.3em] text-cta-accent font-bold mb-4">Our Kathmandu Office</h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-text mb-6">
                                Visit Us in Person
                            </h3>
                            <p className="text-primary-text/60 leading-relaxed">
                                Located in the heart of Kathmandu, our office is your first stop for planning
                                an unforgettable Himalayan adventure. Drop by for a consultation, meet our team,
                                or simply enjoy a cup of traditional Nepali tea.
                            </p>
                        </div>

                        <div className="space-y-6 bg-white p-8 rounded-2xl border border-border-subtle">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-cta-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <MapPin size={20} className="text-cta-accent" />
                                </div>
                                <div>
                                    <div className="font-bold text-primary-text mb-1">Address</div>
                                    <p className="text-primary-text/60 text-sm">
                                        Lazimpat Road 21<br />
                                        Kathmandu 44600<br />
                                        Nepal
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-cta-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Clock size={20} className="text-cta-accent" />
                                </div>
                                <div>
                                    <div className="font-bold text-primary-text mb-1">Office Hours</div>
                                    <p className="text-primary-text/60 text-sm">
                                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday: 10:00 AM - 4:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-bold text-primary-text mb-4">Follow Our Journey</h4>
                            <div className="flex space-x-4">
                                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-12 h-12 rounded-xl bg-white border border-border-subtle hover:bg-cta-accent hover:text-white hover:border-cta-accent transition-all flex items-center justify-center group"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Map Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-white border border-border-subtle"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-4 p-8">
                                <MapPin size={48} className="text-cta-accent mx-auto" />
                                <div>
                                    <p className="font-bold text-primary-text mb-2">Kathmandu, Nepal</p>
                                    <p className="text-sm text-primary-text/60">Lazimpat Road 21</p>
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/Lazimpat+Kathmandu+Nepal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-cta-accent text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-cta-accent/90 transition-colors"
                                >
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
