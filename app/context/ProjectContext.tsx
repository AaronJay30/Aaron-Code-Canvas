"use client";

import {
    createContext,
    useContext,
    useState,
    useMemo,
    type ReactNode,
} from "react";

interface Project {
    id: string;
    title: string;
    url: string;
    tags: string[];
    description?: string;
}

interface ProjectContextType {
    projects: Project[];
    filteredProjects: Project[];
    allTags: string[];
    activeFilters: string[];
    selectedProject: Project | null;
    viewMode: "grid" | "list"; // Added viewMode
    toggleFilter: (tag: string) => void;
    clearFilters: () => void;
    setSelectedProject: (project: Project | null) => void;
    setViewMode: (mode: "grid" | "list") => void; // Added setViewMode
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

const projects: Project[] = [
    {
        id: "1",
        title: "GWA Calculator",
        url: "https://aaronjay30.github.io/gwa-calculator/",
        tags: ["Tailwind", "ReactJS", "TypeScript", "Github Pages"],
        description:
            "A comprehensive GWA (General Weighted Average) calculator built with React and TypeScript. Features an intuitive interface for students to calculate their academic performance with real-time updates and grade validation.",
    },
    {
        id: "2",
        title: "Personal Portfolio",
        url: "https://aaronjay30.github.io/aaronjay_portfolio/",
        tags: ["Tailwind", "ReactJS", "JavaScript", "Github Pages"],
        description:
            "My previous portfolio website showcasing my projects and skills. Built with React and styled with Tailwind CSS, featuring responsive design and smooth animations.",
    },
    {
        id: "3",
        title: "Wish Upon a Star",
        url: "https://wish-upon-a-star-five.vercel.app/",
        tags: [
            "Tailwind",
            "Shadcn ui",
            "Next.js",
            "Firebase",
            "Google Auth",
            "Vercel",
        ],
        description:
            "A magical wish-making application where users can create, share, and track their wishes. Features Google authentication, real-time database updates, and a beautiful starry interface.",
    },
    {
        id: "4",
        title: "Daily Thought Garden",
        url: "https://daily-thought-garden.vercel.app/",
        tags: ["Tailwind", "Shadcn ui", "Next.js", "Firebase", "Vercel"],
        description:
            "A mindfulness and journaling app that helps users cultivate daily thoughts and reflections. Built with Next.js and Firebase for real-time data synchronization and user management.",
    },
    {
        id: "5",
        title: "Online Karaoke TV",
        url: "https://online-karaoke-tv-v1.vercel.app/",
        tags: [
            "Tailwind",
            "Shadcn ui",
            "Next.js",
            "Firebase",
            "YouTube API",
            "Vercel",
        ],
        description:
            "An interactive karaoke platform that integrates with YouTube API to provide a seamless singing experience. Features real-time lyrics, song search, and user session management.",
    },
];

export function ProjectProvider({ children }: { children: ReactNode }) {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid"); // Added viewMode state

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        projects.forEach((project) => {
            project.tags.forEach((tag) => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilters.length === 0) return projects;
        return projects.filter((project) =>
            activeFilters.every((filter) => project.tags.includes(filter))
        );
    }, [activeFilters]);

    const toggleFilter = (tag: string) => {
        setActiveFilters((prev) =>
            prev.includes(tag) ? prev.filter((f) => f !== tag) : [...prev, tag]
        );
    };

    const clearFilters = () => {
        setActiveFilters([]);
    };

    return (
        <ProjectContext.Provider
            value={{
                projects,
                filteredProjects,
                allTags,
                activeFilters,
                selectedProject,
                viewMode, // Exposed viewMode
                toggleFilter,
                clearFilters,
                setSelectedProject,
                setViewMode, // Exposed setViewMode
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
}

export function useProjectContext() {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error(
            "useProjectContext must be used within a ProjectProvider"
        );
    }
    return context;
}
