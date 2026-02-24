"use client";

import React from "react";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
    {
        icon: MessageCircle,
        title: "WhatsApp",
        detail: "+977 980 0000000",
        action: "Chat with us",
        href: "https://wa.me/9779800000000",
        color: "bg-[#25D366]"
    },
    {
        icon: Mail,
        title: "Email",
        detail: "hello@vacationnepal.com",
        action: "Send an email",
        href: "mailto:hello@vacationnepal.com",
        color: "bg-cta-accent"
    },
    {
        icon: Phone,
        title: "Phone",
        detail: "+977 1 4410000",
        action: "Call our office",
        href: "tel:+97714410000",
        color: "bg-primary-text"
    },
    {
        icon: MapPin,
        title: "Office",
        detail: "Lazimpat, Kathmandu",
        action: "View on map",
        href: "#map",
        color: "bg-earth-accent"
    }
];

export default function ContactGrid() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactMethods.map((method, index) => (
                        <motion.a
                            key={method.title}
                            href={method.href}
                            target={method.href.startsWith("http") ? "_blank" : undefined}
                            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-[2rem] bg-background border border-border-subtle hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`w-12 h-12 ${method.color} text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <method.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-primary-text mb-2">{method.title}</h3>
                            <p className="text-primary-text/60 text-sm mb-6">{method.detail}</p>
                            <span className="text-cta-accent text-sm font-bold flex items-center group-hover:gap-2 transition-all">
                                {method.action} <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
