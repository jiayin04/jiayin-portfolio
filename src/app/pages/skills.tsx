import {
    Code2,
    FileCode,
    Database,
    Languages,
    Server,
    Terminal,
    GitBranch,
    Github,
    FlaskConical,
    Figma,
    Wrench,
    Braces,
    Atom,
    Settings2,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = {
    Languages: [
        { name: "JavaScript", icon: <Code2 />, description: "Dynamic web apps" },
        { name: "TypeScript", icon: <Braces />, description: "Typed JavaScript" },
        { name: "HTML", icon: <FileCode />, description: "Web structure" },
        { name: "CSS", icon: <FileCode />, description: "Web styling" },
        { name: "SQL", icon: <Database />, description: "Database queries" },
        { name: "Java", icon: <FlaskConical />, description: "OOP language" },
        { name: "PHP", icon: <Braces />, description: "Backend scripting" },
    ],
    Frameworks: [
        { name: "React.js", icon: <Atom />, description: "Frontend library" },
        { name: "Next.js", icon: <Atom />, description: "SSR React framework" },
        { name: "Tailwind CSS", icon: <Settings2 />, description: "Utility CSS" },
        { name: "Node.js", icon: <Server />, description: "Backend runtime" },
        { name: "Flutter", icon: <Languages />, description: "Mobile SDK" },
        { name: "Radzen", icon: <Wrench />, description: "Low-code platform" },
    ],
    Tools: [
        { name: "Git", icon: <GitBranch />, description: "Version control" },
        { name: "GitHub", icon: <Github />, description: "Code hosting" },
        { name: "Postman", icon: <Terminal />, description: "API testing" },
        { name: "Figma", icon: <Figma />, description: "UI design" },
        { name: "VS Code", icon: <FileCode />, description: "Code editor" },
        { name: "Talend", icon: <Database />, description: "ETL tool" },
        { name: "SQL Server", icon: <Database />, description: "RDBMS" },
        { name: "Android Studio", icon: <Settings2 />, description: "Android IDE" },
    ],
};

const Skills = () => {
    return (
        <div
            className="min-h-screen px-4 py-16"
            style={{
                backgroundImage: `linear-gradient(to bottom, hsl(var(--section-skills-from)), hsl(var(--section-skills-to)))`,
            }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center">My Tech Stack</h2>

                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="mb-10">
                        <h3 className="text-xl font-semibold mb-4 text-blue-400 uppercase tracking-wide">
                            {category}
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                            {items.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="relative bg-[hsl(var(--card-bg))] border border-slate-700 rounded-lg p-3 flex flex-col items-center justify-center h-24 overflow-hidden group shadow hover:shadow-blue-500/20 transition  cursor-pointer"
                                >
                                    {/* relative bg-slate-800 border border-slate-700 rounded-lg p-3 flex flex-col items-center justify-center h-24 overflow-hidden group shadow hover:shadow-blue-500/20 transition  cursor-pointer */}
                                    <div className="text-xl text-blue-400 mb-1">{skill.icon}</div>
                                    <p className="text-sm font-medium z-10">{skill.name}</p>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-[hsl(var(--card))] bg-opacity-90 flex items-center justify-center px-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-10000">
                                        {skill.description}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
