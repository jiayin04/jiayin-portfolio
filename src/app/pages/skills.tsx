import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { iconComponents } from "../utils/icons";
import { Skill } from "../models/interface";

const Skills = () => {

    const [skills, setSkills] = useState<Record<string, Skill[]>>({});
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await supabase
                .from('skills')
                .select('*, categories:category_id(name)');

            if (data) {
                const grouped: Record<string, Skill[]> = {};
                data?.forEach(skill => {
                    const category = skill.categories?.name;
                    if (!grouped[category]) grouped[category] = [];
                    grouped[category].push(skill as Skill);
                });

                setSkills(grouped);
            }

        };

        fetchData();
    }, [])

    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <div
            className="min-h-screen px-4 py-20"
            style={{
                backgroundImage: `linear-gradient(to bottom, hsl(var(--section-skills-from)), hsl(var(--section-skills-to)))`,
            }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-10 text-center">My Tech Stack</h2>

                {Object.entries(skills).map(([category, items]) => {

                    const visibleItems = expandedCategories[category] ? items : items.slice(0, 12);

                    return (
                        <div key={category} className="mb-10">
                            <h3 className="text-xl font-semibold mb-4 text-blue-400 uppercase tracking-wide">
                                {category}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                                {visibleItems.map((skill, index) => {
                                    const Icon = skill.icon_name in iconComponents
                                        ? iconComponents[skill.icon_name as keyof typeof iconComponents]
                                        : Code2;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="relative bg-[hsl(var(--card-bg))] border border-slate-700 rounded-lg p-3 flex flex-col items-center justify-center h-24 overflow-hidden group shadow hover:shadow-blue-500/20 transition  cursor-pointer"
                                        >
                                            <Icon className="text-xl text-blue-400 mb-1" />

                                            <p className="text-sm font-medium z-10">{skill.name}</p>

                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-[hsl(var(--card))] bg-opacity-90 flex items-center justify-center px-2 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-10000">
                                                {skill.description}
                                            </div>
                                        </motion.div>
                                    );

                                })}
                            </div>

                            {/* View More Button */}
                            {items.length > 12 && (
                                <div className="flex justify-center mt-4">
                                    <button
                                        onClick={() => toggleCategory(category)}
                                        className="px-5 py-2 border rounded-full text-sm font-medium transition-all duration-200 
                      border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                                    >
                                        {expandedCategories[category] ? "View Less" : "View More"}
                                    </button>
                                </div>
                            )}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default Skills;
