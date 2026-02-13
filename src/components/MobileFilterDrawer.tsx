"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TrekFilters from "./TrekFilters";

interface MobileFilterDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onFilterChange: (filters: any) => void;
    onClearFilters: () => void;
    activeFilters: any;
}

export default function MobileFilterDrawer({
    isOpen,
    onClose,
    onFilterChange,
    onClearFilters,
    activeFilters
}: MobileFilterDrawerProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-[100] backdrop-blur-sm lg:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[101] shadow-2xl p-6 lg:hidden flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border-subtle">
                            <h3 className="text-xl font-bold">Filters</h3>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-background rounded-full transition-colors"
                                aria-label="Close filters"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-2">
                            <TrekFilters
                                activeFilters={activeFilters}
                                onFilterChange={onFilterChange}
                                onClearFilters={onClearFilters}
                            />
                        </div>

                        <div className="mt-8 pt-4 border-t border-border-subtle">
                            <button
                                onClick={onClose}
                                className="w-full btn-primary py-4"
                            >
                                Show Results
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
