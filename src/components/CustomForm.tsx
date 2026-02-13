"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, MessageCircle, Check } from "lucide-react";

const formSchema = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    whatsapp: z.string().min(10, "Valid phone number required"),
    travelDates: z.string().min(1, "Preferred dates are required"),
    groupSize: z.string().min(1, "Group size is required"),
    budgetRange: z.string().min(1, "Budget range is required"),
    region: z.string().min(1, "Preferred region is required"),
    tripStyles: z.array(z.string()).optional(),
    message: z.string().min(10, "Please share a bit more about your vision (min 10 chars)"),
});

type FormData = z.infer<typeof formSchema>;

export default function CustomForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            tripStyles: [],
        }
    });

    const onSubmit = (data: FormData) => {
        // Construct WhatsApp message
        const styles = data.tripStyles?.join(", ") || "No specific style selected";
        const message = `*Custom Trek Inquiry - Vacation Nepal*%0A%0A` +
            `*Name:* ${data.fullName}%0A` +
            `*Email:* ${data.email}%0A` +
            `*WhatsApp:* ${data.whatsapp}%0A` +
            `*Dates:* ${data.travelDates}%0A` +
            `*Group Size:* ${data.groupSize}%0A` +
            `*Budget:* ${data.budgetRange}%0A` +
            `*Region:* ${data.region}%0A` +
            `*Trip Styles:* ${styles}%0A%0A` +
            `*Vision:* ${data.message}`;

        const whatsappUrl = `https://wa.me/9779800000000?text=${message}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank");
    };

    return (
        <section id="custom-form" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-cta-accent font-bold tracking-widest uppercase text-sm mb-2 block">Take the first step</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-text mb-6">Plan Your Custom Journey</h2>
                    <p className="text-lg text-primary-text/60 max-w-2xl mx-auto">
                        Fill out the details below, and we'll start crafting your personalized Himalayan experience.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-background rounded-[3rem] shadow-sm border border-border-subtle overflow-hidden"
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-10">
                        {/* Section 1: Personal Info */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-primary-text flex items-center space-x-2">
                                <span className="w-8 h-8 bg-cta-accent/10 text-cta-accent rounded-full flex items-center justify-center text-sm">1</span>
                                <span>Personal Information</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Full Name" placeholder="John Doe" error={errors.fullName?.message} {...register("fullName")} />
                                <InputField label="Email Address" type="email" placeholder="john@example.com" error={errors.email?.message} {...register("email")} />
                                <InputField label="WhatsApp Number" placeholder="+1 234 567 890" error={errors.whatsapp?.message} {...register("whatsapp")} />
                            </div>
                        </div>

                        {/* Section 2: Trip Details */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-primary-text flex items-center space-x-2">
                                <span className="w-8 h-8 bg-cta-accent/10 text-cta-accent rounded-full flex items-center justify-center text-sm">2</span>
                                <span>Trip Details</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="Preferred Dates" placeholder="e.g., Oct 2026 or Spring 2027" error={errors.travelDates?.message} {...register("travelDates")} />
                                <InputField label="Approx. Group Size" type="number" placeholder="4" error={errors.groupSize?.message} {...register("groupSize")} />

                                <SelectField label="Budget Range (Per Person)" error={errors.budgetRange?.message} {...register("budgetRange")}>
                                    <option value="">Select Budget</option>
                                    <option value="$1000 - $2000">$1000 - $2000</option>
                                    <option value="$2000 - $4000">$2000 - $4000</option>
                                    <option value="$4000+">$4000+</option>
                                </SelectField>

                                <SelectField label="Preferred Region" error={errors.region?.message} {...register("region")}>
                                    <option value="">Select Region</option>
                                    <option value="Everest Region">Everest Region</option>
                                    <option value="Annapurna Region">Annapurna Region</option>
                                    <option value="Manaslu & Hidden Valleys">Manaslu & Hidden Valleys</option>
                                    <option value="Flexible / Not Sure">Flexible / Not Sure</option>
                                </SelectField>
                            </div>
                        </div>

                        {/* Section 3: Style & Vision */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-primary-text flex items-center space-x-2">
                                <span className="w-8 h-8 bg-cta-accent/10 text-cta-accent rounded-full flex items-center justify-center text-sm">3</span>
                                <span>Travel Style & Vision</span>
                            </h3>

                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-primary-text/60 uppercase tracking-widest">Optional Add-ons</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <CheckboxItem label="Private Group" value="Private Group" {...register("tripStyles")} />
                                    <CheckboxItem label="Luxury Lodges" value="Luxury Lodges" {...register("tripStyles")} />
                                    <CheckboxItem label="Short Trek" value="Short Trek" {...register("tripStyles")} />
                                    <CheckboxItem label="Helicopter Options" value="Helicopter Option" {...register("tripStyles")} />
                                    <CheckboxItem label="Cultural Immersion" value="Cultural Add-on" {...register("tripStyles")} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-primary-text/60 uppercase tracking-widest">Share Your Ideal Experience</label>
                                <textarea
                                    {...register("message")}
                                    placeholder="Tell us about your interests, fitness level, or any specific peaks you want to see..."
                                    className="w-full bg-white border border-border-subtle rounded-2xl p-4 min-h-[150px] focus:ring-2 focus:ring-cta-accent/20 focus:border-cta-accent transition-all text-primary-text font-medium outline-none"
                                />
                                {errors.message && <p className="text-red-500 text-xs mt-1 font-bold">{errors.message.message}</p>}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-1">
                                <div className="flex items-center space-x-2 text-primary-text/60 text-sm">
                                    <Check size={16} className="text-[#25D366]" />
                                    <span>Instant validation via WhatsApp</span>
                                </div>
                                <div className="flex items-center space-x-2 text-primary-text/60 text-sm">
                                    <Check size={16} className="text-[#25D366]" />
                                    <span>Response within 24 hours</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full md:w-auto px-10 py-5 bg-cta-accent text-white rounded-2xl font-bold flex items-center justify-center space-x-3 shadow-xl hover:bg-cta-accent/90 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100"
                            >
                                <MessageCircle size={20} />
                                <span>Create My Custom Trek</span>
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

// Helper Components
const InputField = React.forwardRef<HTMLInputElement, any>(({ label, error, ...props }, ref) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-primary-text/60 uppercase tracking-widest">{label}</label>
        <input
            ref={ref}
            {...props}
            className="w-full bg-white border border-border-subtle rounded-2xl px-6 py-4 focus:ring-2 focus:ring-cta-accent/20 focus:border-cta-accent transition-all text-primary-text font-semibold outline-none"
        />
        {error && <p className="text-red-500 text-xs mt-1 font-bold">{error}</p>}
    </div>
));

const SelectField = React.forwardRef<HTMLSelectElement, any>(({ label, error, children, ...props }, ref) => (
    <div className="space-y-2">
        <label className="block text-sm font-bold text-primary-text/60 uppercase tracking-widest">{label}</label>
        <select
            ref={ref}
            {...props}
            className="w-full bg-white border border-border-subtle rounded-2xl px-6 py-4 focus:ring-2 focus:ring-cta-accent/20 focus:border-cta-accent transition-all text-primary-text font-semibold outline-none cursor-pointer appearance-none"
        >
            {children}
        </select>
        {error && <p className="text-red-500 text-xs mt-1 font-bold">{error}</p>}
    </div>
));

const CheckboxItem = React.forwardRef<HTMLInputElement, any>(({ label, value, ...props }, ref) => (
    <label className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-border-subtle cursor-pointer hover:border-cta-accent/30 transition-colors">
        <input
            type="checkbox"
            ref={ref}
            value={value}
            {...props}
            className="w-5 h-5 rounded border-gray-300 text-cta-accent focus:ring-cta-accent"
        />
        <span className="text-sm font-bold text-primary-text">{label}</span>
    </label>
));
