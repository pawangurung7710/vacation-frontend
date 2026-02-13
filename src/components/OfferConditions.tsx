"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Info, HelpCircle, ArrowRight } from "lucide-react";

export default function OfferConditions() {
    return (
        <section className="py-24 bg-white border-y border-border-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Conditions */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-cta-accent font-bold tracking-widest uppercase text-xs mb-2 block">The Fine Print</span>
                            <h2 className="text-3xl font-bold text-primary-text">Offer Conditions</h2>
                        </div>

                        <div className="bg-background rounded-3xl p-8 space-y-6 border border-border-subtle shadow-sm">
                            <p className="text-sm text-primary-text/60 italic leading-relaxed">
                                To ensure we provide the highest quality service while maintaining our ethical standards, the following conditions apply to our special offers:
                            </p>

                            <ul className="space-y-4">
                                <ConditionItem text="Valid for specific seasonal departures mentioned on each card." />
                                <ConditionItem text="Requires a non-refundable deposit of 25% to lock in the special pricing." />
                                <ConditionItem text="Cannot be combined with other promotional codes or customized discounts." />
                                <ConditionItem text="Subject to permit availability and teahouse capacity at the time of booking." />
                                <ConditionItem text="Minimum group size of 2 people required for most special offers." />
                            </ul>

                            <div className="pt-6 border-t border-border-subtle">
                                <a href="/contact" className="text-cta-accent font-bold text-sm flex items-center space-x-2 hover:underline">
                                    <span>Have questions about a specific deal?</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Guarantee / Trust */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10 lg:pt-12"
                    >
                        <GuaranteeBlock
                            icon={<ShieldAlert size={28} className="text-cta-accent" />}
                            title="Premium Standards Guaranteed"
                            description="Even at a discounted rate, we never compromise on safety. Your guide team, inclusive high-altitude insurance, and ethical porter treatment remain at our global-standard levels."
                        />
                        <GuaranteeBlock
                            icon={<Info size={28} className="text-cta-accent" />}
                            title="Transparent Pricing"
                            description="The price you see on the offer is the final price. No hidden service charges, permit handling fees, or VAT surprises at checkout."
                        />
                        <GuaranteeBlock
                            icon={<HelpCircle size={28} className="text-cta-accent" />}
                            title="Flexible Reservations"
                            description="We understand travel plans can change. Most offers include a one-time free date modification within the same trekking season."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ConditionItem({ text }: { text: string }) {
    return (
        <li className="flex items-start space-x-3 text-sm font-medium text-primary-text/80">
            <span className="text-cta-accent mt-0.5">•</span>
            <span>{text}</span>
        </li>
    );
}

function GuaranteeBlock({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex items-start space-x-6">
            <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-border-subtle">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-bold text-primary-text mb-2">{title}</h4>
                <p className="text-sm text-primary-text/60 leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
}
