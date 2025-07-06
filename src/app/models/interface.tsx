export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    tags: string[];
    projectLink: string;
    demoLink: string;
}

export interface ExperienceInterface {
    title: string;
    desc: string;
    image?: string;
    date: Date;
    category: "General" | "Volunteer" | "Event" | "Job";
}