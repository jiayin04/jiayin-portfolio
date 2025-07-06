"use client";

import { motion } from "framer-motion";
import ProjectCard from "../components/project_card";
import { ProjectInterface } from "../models/interface";

const Project = () => {
    const projects: ProjectInterface[] = [
        {
            title: "Smart City Management",
            description: "A platform for real-time traffic, waste, and flood management.",
            image: "/images/smart-city.jpg",
            tags: ["Web App", "React.js", "Tailwind CSS"],
            projectLink: "https://example.com",
            demoLink: "https://example.com",
        },
        {
            title: "Car Park System",
            description: "An app that allows users to find and pay for parking easily.",
            image: "/images/car-park.jpg",
            tags: ["Mobile App", "Next.js", "Stripe"],
            projectLink: "https://example.com",
            demoLink: "https://example.com",
        },

        {
            title: "Car Park System",
            description: "An app that allows users to find and pay for parking easily.",
            image: "/images/car-park.jpg",
            tags: ["Mobile App", "Next.js", "Stripe"],
            projectLink: "https://example.com",
            demoLink: "",
        },

        {
            title: "Car Park System",
            description: "An app that allows users to find and pay for parking easily.",
            image: "/images/car-park.jpg",
            tags: ["Mobile App", "Next.js", "Stripe"],
            projectLink: "https://example.com",
            demoLink: "",
        },

    ];

    return (
        <div
            id="projects"
            className="py-2 min-h-[80vh] pr-8"
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
                        {projects.map((project, index) => (
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
                </div>
            </motion.div>
        </div>
    );
};

export default Project;
