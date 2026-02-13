"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Nepal Treks", href: "/treks" },
    { name: "Custom Treks", href: "/custom-treks" },
    { name: "Why Travel With us", href: "/#why-us" },
    { name: "Seasonal Deals", href: "/deals" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="w-10 h-10 bg-cta-accent rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                            <span className="text-white font-serif font-bold text-xl">V</span>
                        </div>
                        <span className={cn(
                            "font-serif font-bold text-xl tracking-tight transition-colors",
                            scrolled ? "text-primary-text" : "text-white"
                        )}>
                            Vacation Nepal
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-cta-accent",
                                    scrolled ? "text-primary-text" : "text-white/90"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Contact & WhatsApp */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a
                            href="tel:+9779800000000"
                            className={cn(
                                "flex items-center space-x-2 text-sm font-semibold transition-colors",
                                scrolled ? "text-primary-text" : "text-white"
                            )}
                        >
                            <Phone size={16} className="text-cta-accent" />
                            <span>+977 980 0000000</span>
                        </a>
                        <a
                            href="https://wa.me/9779800000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cta-accent text-white p-2 rounded-full hover:scale-110 transition-transform shadow-lg"
                        >
                            <MessageCircle size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "p-2 rounded-md transition-colors",
                                scrolled ? "text-primary-text" : "text-white"
                            )}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-border-subtle"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-base font-medium text-primary-text hover:bg-background rounded-xl transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex items-center justify-between px-3">
                                <a
                                    href="tel:+9779800000000"
                                    className="flex items-center space-x-2 text-sm font-bold text-primary-text"
                                >
                                    <Phone size={16} className="text-cta-accent" />
                                    <span>Call Us</span>
                                </a>
                                <a
                                    href="https://wa.me/9779800000000"
                                    className="flex items-center space-x-2 bg-cta-accent text-white px-4 py-2 rounded-xl text-sm font-medium"
                                >
                                    <MessageCircle size={18} />
                                    <span>WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
