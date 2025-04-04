// import ProjectCard from "../components/project_card";
// import { ProjectInterface } from "../models/interface";
// import { motion } from "framer-motion";

// // const Project = () => {
// //     const projects: ProjectInterface[] = [
// //         {
// //             title: "Smart City Management",
// //             description: "A platform for real-time traffic, waste, and flood management.",
// //             image: "/images/smart-city.jpg",
// //             tags: ["Web App", "React.js", "Tailwind CSS"],
// //             link: "https://example.com",
// //         },
// //         {
// //             title: "Car Park System",
// //             description: "An app that allows users to find and pay for parking easily.",
// //             image: "/images/car-park.jpg",
// //             tags: ["Mobile App", "Next.js", "Stripe"],
// //             link: "https://example.com",
// //         },
// //     ];

// //     return (
// //         <motion.section
// //             id="projects"
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             // viewport={{ once: true }}
// //             className="py-16 min-h-[80vh]"
// //         >
// //             <div className="max-w-6xl mx-auto px-5">
// //                 {/* Section Heading */}
// //                 <motion.h2
// //                     initial={{ opacity: 0, x: -50 }}
// //                     whileInView={{ opacity: 1, x: 0 }}
// //                     transition={{ duration: 0.6, delay: 0.2 }}
// //                     // viewport={{ once: true }}
// //                     className="text-3xl font-bold mb-10"
// //                 >
// //                     Projects
// //                 </motion.h2>

// //                 {/* Projects Grid */}
// //                 <motion.div
// //                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
// //                     initial="hidden"
// //                     whileInView="visible"
// //                     transition={{ staggerChildren: 0.2 }}
// //                     // viewport={{ once: true }}
// //                     variants={{
// //                         hidden: { opacity: 0 },
// //                         visible: { opacity: 1 }
// //                     }}
// //                 >
// //                     {projects.map((project, index) => (
// //                         <motion.div
// //                             key={index}
// //                             initial={{ opacity: 0, y: 20 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
// //                             // viewport={{ once: true }}
// //                         >
// //                             <ProjectCard project={project} />
// //                         </motion.div>
// //                     ))}
// //                 </motion.div>
// //             </div>
// //         </motion.section>
// //     );
// // }

// const Project = () => {
//     const projects: ProjectInterface[] = [
//         {
//             title: "Smart City Management",
//             description: "A platform for real-time traffic, waste, and flood management.",
//             image: "/images/smart-city.jpg",
//             tags: ["Web App", "React.js", "Tailwind CSS"],
//             link: "https://example.com",
//         },
//         {
//             title: "Car Park System",
//             description: "An app that allows users to find and pay for parking easily.",
//             image: "/images/car-park.jpg",
//             tags: ["Mobile App", "Next.js", "Stripe"],
//             link: "https://example.com",
//         },
//     ];


//     return (
//         <>
//             <div id="projects" className="py-1 min-h-[80vh]">
//                 <div className="max-w-6xl mx-auto px-5">
//                     <h2 className="text-3xl font-bold mb-10">Projects</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {projects.map((project, index) => (
//                             <ProjectCard key={index} project={project} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Project;

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
            link: "https://example.com",
        },
        {
            title: "Car Park System",
            description: "An app that allows users to find and pay for parking easily.",
            image: "/images/car-park.jpg",
            tags: ["Mobile App", "Next.js", "Stripe"],
            link: "https://example.com",
        },
    ];

    return (
        <div id="projects" className="px-2 py-2 min-h-[80vh]">
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border-2 border-white mx-3"
            >
                <div className="px-5">
                    {/* Title Animation */}
                    <motion.h2
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold mb-10"
                    >
                        Projects
                    </motion.h2>

                    {/* Project Cards Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
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
