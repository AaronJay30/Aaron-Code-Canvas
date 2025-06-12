"use client";

import ProjectCarousel from "./components/ProjectCarousel";
import FilterSection from "./components/FilterSection";
import ProjectModal from "./components/ProjectModal";
import { ProjectProvider } from "./context/ProjectContext";
import { motion } from "framer-motion";
import { CommissionButton } from "./components/CommissionButton";

export default function Home() {
    return (
        <ProjectProvider>
            <div className="min-h-screen bg-gray-900 flex flex-col">
                <main className="flex-grow">
                    {/* Header with filters */}
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 p-6 pb-12"
                    >
                        <div className="max-w-7xl mt-20 mx-auto">
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-5xl md:text-7xl font-bold mb-2"
                            >
                                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Aaron
                                </span>
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent ml-2">
                                    Jay
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-gray-300 text-lg mb-8 max-w-3xl"
                            >
                                Full-stack developer building sleek, modern web
                                applications with the latest technologies.
                            </motion.p>
                            <FilterSection />
                        </div>
                    </motion.div>

                    {/* Projects Section */}
                    <div className="max-w-7xl mx-auto px-6 pb-12">
                        <ProjectCarousel />
                    </div>
                </main>

                <ProjectModal />

                {/* Modern Footer */}
                <motion.footer
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                    className="w-full border-t border-gray-700/50 bg-gray-900/30 backdrop-blur-sm mt-auto"
                >
                    <div className="max-w-7xl mx-auto py-8 px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex-shrink-0">
                            <CommissionButton />
                        </div>
                        <p className="text-sm text-gray-500 text-center sm:text-right">
                            &copy; 2025 Aaron Jay Gabato. All rights reserved.
                        </p>
                    </div>
                </motion.footer>
            </div>
        </ProjectProvider>
    );
}
