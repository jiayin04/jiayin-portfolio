"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/project_card";
import { ProjectInterface } from "../models/interface";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Project = () => {

    const [projects, setProjects] = useState<ProjectInterface[]>([]);

    useEffect(() => {
        const getProjects = async () => {
            const { data, error } = await supabase
                .from('projects')
                .select('title, description, image, tags, project_link, demo_link, created_at')
                .order('created_at', { ascending: false })

            if (error) {
                console.error("Error fetching the project: ", error.message);
            } else {
                setProjects(data);
            }
        };

        getProjects();
    }, [])

    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? projects : projects?.slice(0, 8);

    return (
        <div
            id="projects"
            className="py-4 min-h-screen pr-8"
            style={{
                backgroundImage: `linear-gradient(to bottom, hsl(var(--section-project-from)), hsl(var(--section-project-to)))`,
            }}
        >
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="p-6 max-w-10xl mx-auto"
            >
                <div className="px-2">
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-10 "
                    >
                        Projects
                    </motion.h2>

                    <hr className="text-[hsl(var(--muted-foreground))]" />

                    {/* Project Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                    >
                        {visibleProjects?.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: -50 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: "easeIn" }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View More Button */}
                    {projects?.length > 8 && (
                        <div className="flex justify-center mt-20">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-5 py-2 border rounded-full text-sm font-medium transition-all duration-200 
                  border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                            >
                                {showAll ? "View Less" : "View More"}
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
