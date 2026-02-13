"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-text text-white/90 pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-cta-accent rounded-lg flex items-center justify-center">
                                <span className="text-white font-serif font-bold text-xl">V</span>
                            </div>
                            <span className="font-serif font-bold text-2xl tracking-tight text-white">
                                Vacation Nepal
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-white/60">
                            International Himalayan trekking brand based in Kathmandu. We provide local expert-led, ethical, and small-group adventures across Nepal.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-cta-accent hover:border-cta-accent hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            {["Everest Base Camp", "Annapurna Circuit", "Langtang Valley", "Manaslu Circuit", "Mustang Trek"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-cta-accent transition-colors flex items-center group">
                                        <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">→</span>
                                        <span>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h4>
                        <ul className="space-y-4 text-sm">
                            {["About Us", "Our Guides", "Custom Treks", "Responsible Travel", "Booking Terms", "Contact Us"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Custom Treks" ? "/custom-treks" : link === "Contact Us" ? "/contact" : "#"}
                                        className="hover:text-cta-accent transition-colors flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">→</span>
                                        <span>{link}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Get in Touch</h4>
                        <ul className="space-y-6 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-cta-accent flex-shrink-0 mt-1" />
                                <span className="text-white/60">Lazimpat Road 21, <br />Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-cta-accent flex-shrink-0" />
                                <span className="text-white/60">+977 980 123 4567</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-cta-accent flex-shrink-0" />
                                <span className="text-white/60">hello@vacationnepal.com</span>
                            </li>
                            <li className="pt-4">
                                <a href="https://wa.me/9779801234567" className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors">
                                    <MessageCircle size={18} className="text-[#25D366]" />
                                    <span className="font-bold">Chat on WhatsApp</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 space-y-4 md:space-y-0">
                    <p>© {currentYear} Vacation Nepal Trekking. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
