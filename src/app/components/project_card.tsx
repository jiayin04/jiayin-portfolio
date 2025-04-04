// import Image from "next/image";
// import { ExternalLink } from "lucide-react";
// // import { FaExternalLinkAlt } from ".../react-icons/fa";
// import { ProjectInterface } from "../models/interface";

// interface ProjectCardProps {
//     project: ProjectInterface;
// }

// export default function ProjectCard({ project }: ProjectCardProps) {
//     return (
//         <div className="relative flex flex-col bg-[hsl(var(--card-bg))] shadow-lg rounded-2xl overflow-hidden transition-transform hover:scale-105">
//             <div className="relative w-full h-52">
//                 <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-t-2xl" />
//             </div>
//             <div className="p-5">
//                 <h3 className="text-lg font-semibold">{project.title}</h3>
//                 <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))] ">{project.description}</p>
//                 <div className="flex flex-wrap gap-2 mt-3">
//                     {project.tags.map((tag, index) => (
//                         <span key={index} className="bg-[hsl(var(--popover))] text-xs font-medium text-[hsl(--primary-foreground)] px-3 py-2 rounded-full">
//                             {tag}
//                         </span>
//                     ))}
//                 </div>
//                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center navlink">
//                     View Project <ExternalLink className="ml-1" />
//                 </a>
//                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center navlink">
//                     Live Demo
//                 </a>
//             </div>
//         </div>
//     );
// }
"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectInterface } from "../models/interface";

interface ProjectCardProps {
    project: ProjectInterface;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col bg-[hsl(var(--card-bg))] shadow-lg rounded-2xl overflow-hidden transition-all duration-300"
        >
            {/* Image Section */}
            <motion.div
                className="relative w-full h-56 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            >
                {/* <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-t-2xl"
                /> */}
            </motion.div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">{project.title}</h3>
                <p className="mt-3 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">{project.description}</p>

                {/* Tags */}
                <motion.div 
                    className="flex flex-wrap gap-2 mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    {project.tags.map((tag, index) => (
                        <span key={index} className="bg-[hsl(var(--popover)/0.8)] backdrop-blur-md text-xs font-medium text-[hsl(var(--secondary-foreground))] px-3 py-1.5 rounded-full border border-[hsl(var(--border)/0.5)]">
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div 
                    className="mt-6 flex gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
                    >
                        View Project <ExternalLink size={16} />
                    </motion.a>

                    <motion.a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    >
                        Live Demo
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
}
