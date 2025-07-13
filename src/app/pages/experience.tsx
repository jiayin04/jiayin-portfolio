"use client";

import React, { useEffect, useState } from "react";
import { ExperienceInterface } from "../models/interface";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";


const Experience = () => {

    const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);
    const [selected, setSelected] = useState("General");
    const categories = ["General", "Competition", "Event", "Job"];

    useEffect(() => {
        const fetchExperiences = async () => {
            const { data, error } = await supabase
                .from('experiences')
                .select('title, desc, image, category, from_date, to_date')
                .order('from_date', { ascending: false });

            if (error) {
                console.error("Error fetching data: ", error);
                return [];
            } else {
                setExperiences(data);
            }
        }
        fetchExperiences();
    }, [])

    const filtered = selected === "General"
        ? experiences
        : experiences.filter((item) => item.category === selected);

    return (
        <div
            className="py-12 px-4 min-h-[90vh]"
            style={{
                backgroundImage: `linear-gradient(to bottom, hsl(var(--section-experience-from)), hsl(var(--section-experience-to)))`,
            }}
        >
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center mb-6"
                >
                    My Timeline Highlights
                </motion.h2>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}

                    className="flex flex-wrap justify-center gap-4 mb-10 "
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelected(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border cursor-pointer ${selected === cat
                                ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                                : "border-[hsl(var(--primary))] text-[hsl(var(--primary))]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[hsl(var(--primary))] z-0" />

                    <div className="space-y-10 z-10 relative">
                        <AnimatePresence>
                            {filtered.map((item, index) => {
                                const isLeft = index % 2 === 0;
                                const dateText = item.to_date
                                    ? `${new Date(item.from_date).toDateString()} - ${new Date(item.to_date).toDateString()}`
                                    : `${new Date(item.from_date).toDateString()}`;
                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -30, scale: 0.95 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ amount: 0.2 }}
                                        className={`flex flex-col md:flex-row items-center md:items-start ${isLeft ? "md:flex-row-reverse" : ""
                                            } gap-6`}
                                    >
                                        {/* Content Card */}
                                        <div
                                            className={`w-full md:w-1/2 ${isLeft ? "md:pl-10" : "md:pr-10"
                                                }`}
                                        >
                                            <div className="bg-[hsl(var(--card-bg))] border border-[hsl(var(--border))] rounded-xl p-5 shadow-lg backdrop-blur-md">
                                                <p className="text-xs text-gray-500 mb-1">{dateText}</p>
                                                <h3 className="text-lg font-semibold text-[hsl(var(--foreground))]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-[hsl(var(--muted-foreground))] mt-1">
                                                    {item.desc}
                                                </p>
                                                {item.image && (
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="mt-3 w-full h-40 object-cover rounded-lg shadow-md"
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        {/* Dot + Spacer */}
                                        <div className="hidden md:flex flex-col items-center justify-center w-0 md:w-[20px]">
                                            <div className="w-4 h-4 bg-[hsl(var(--primary))] rounded-full z-10" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Experience;