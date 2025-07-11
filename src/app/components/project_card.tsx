"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCardProps, ProjectInterface } from "../models/interface";

export default function ProjectCard({ project }: ProjectCardProps) {
    const [expanded, setExpanded] = useState(false);
    const MAX_DESC_LENGTH = 120;

    const getAvatarImage = (title: string) => {
        const seed = encodeURIComponent(title.trim());
        return `https://api.dicebear.com/7.x/identicon/svg?seed=${seed}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col w-full max-w-sm mx-auto bg-[hsl(var(--card-bg))] shadow-lg rounded-2xl overflow-hidden transition-all duration-300 h-full"
        >
            <motion.div
                className="relative w-full h-56 overflow-hidden"
                whileHover={{ scale: 1.1 }}
            >
                <Image
                    src={project.image || getAvatarImage(project.title)}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-2xl"
                />
            </motion.div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="min-h-[3rem]">
                    <h3 className="text-xl font-semibold text-[hsl(var(--foreground))] h-full">{project.title}</h3>
                </div>


                <div className="mt-3">
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {project.description.length > MAX_DESC_LENGTH && !expanded
                            ? `${project.description.substring(0, MAX_DESC_LENGTH)}...`
                            : project.description}

                        {project.description.length > MAX_DESC_LENGTH && (
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-xs text-blue-500 hover:underline mt-1 cursor-pointer"
                            >
                                {expanded ? 'Show less' : 'Read more'}
                            </button>
                        )}</p>
                </div>

                <div className="mt-auto">
                    <motion.div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="bg-[hsl(var(--popover)/0.8)] backdrop-blur-md text-xs font-medium text-[hsl(var(--secondary-foreground))] px-3 py-1.5 rounded-full border border-[hsl(var(--border)/0.5)]">
                                {tag}
                            </span>
                        ))}
                    </motion.div>

                    <motion.div className="mt-6 flex gap-3">
                        <motion.a
                            href={project.project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                        >
                            View Project <ExternalLink size={16} />
                        </motion.a>

                        {project.demo_link && (
                            <motion.a
                                href={project.demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-[hsl(var(--secondary-foreground))] text-[hsl(var(--secondary))] hover:bg-gray-200"
                            >
                                Live Demo
                            </motion.a>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}