"use client";

import React, { useEffect, useState } from "react";
import { ExperienceInterface } from "../models/interface";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";


const Experience = () => {

    const [experiences, setExperiences] = useState<ExperienceInterface[]>([]);
    const [selected, setSelected] = useState("General");
    const [showAll, setShowAll] = useState(false);
    const categories = ["General", "Competition", "Event", "Job"];

    useEffect(() => {
        const fetchExperiences = async () => {
            const { data, error } = await supabase
                .from('experiences')
                .select('title, desc, image, category, from_date, to_date, proof_link, organization')
                .order('from_date', { ascending: false });

            if (error) {
                console.error("Error fetching data: ", error);
                return [];
            } else {
                console.log(data)
                setExperiences(data);
            }
        }
        fetchExperiences();
    }, [])

    const filtered = selected === "General"
        ? experiences
        : experiences.filter((item) => item.category === selected);

    const showExperiences = showAll ? filtered : filtered?.slice(0, 10);

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
                            {showExperiences.map((item, index) => {
                                const isLeft = index % 2 === 0;
                                const dateText = item.to_date
                                    ? (new Date(item.from_date).getMonth() === new Date(item.to_date).getMonth() &&
                                        new Date(item.from_date).getFullYear() === new Date(item.to_date).getFullYear()
                                        ? `${new Date(item.from_date).toLocaleString("default", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })} – ${new Date(item.to_date).toLocaleString("default", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}`
                                        : `${new Date(item.from_date).toLocaleString("default", {
                                            month: "short",
                                            year: "numeric",
                                        })} – ${new Date(item.to_date).toLocaleString("default", {
                                            month: "short",
                                            year: "numeric",
                                        })}`)
                                    : `${new Date(item.from_date).toLocaleString("default", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })}`;
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
                                            <div className="bg-[hsl(var(--card-bg))] border border-[hsl(var(--border))] rounded-xl p-5 shadow-lg backdrop-blur-md space-y-3">

                                                <div className="flex items-center justify-between text-xs text-gray-500 flex-wrap gap-2">
                                                    {item.organization &&
                                                        <span className="text-xs px-2 py-1 bg-[hsl(var(--accent))] rounded-md text-[hsl(var(--accent-foreground))]">
                                                            {item.organization}
                                                        </span>
                                                    }
                                                    <span className="text-gray-400">{dateText}</span>
                                                </div>

                                                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
                                                    {item.title}
                                                </h3>

                                                <p className="text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
                                                    {item.desc}
                                                </p>

                                                {item.proof_link && (
                                                    <a
                                                        href={item.proof_link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--primary))] hover:underline"
                                                    >
                                                        ↗ View more
                                                    </a>
                                                )}

                                                {item.image && (
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="w-full h-48 object-cover rounded-lg border border-[hsl(var(--border))] shadow-sm"
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
                {filtered?.length > 10 &&
                    (
                        <div className="flex justify-center mt-16">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="relative px-6 py-3 font-medium text-blue-500 rounded-full group"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {showAll ? "Show Less" : "Explore More"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={showAll ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
                                    </svg>
                                </span>
                                <span className="absolute inset-0 rounded-full border-2 border-blue-400 group-hover:border-blue-500 transition-all duration-300 animate-pulse"></span>
                                <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                            </button>
                        </div>
                    )
                }
            </div>
        </div >
    );

}

export default Experience;