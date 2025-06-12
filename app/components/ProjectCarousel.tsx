"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProjectContext } from "../context/ProjectContext";
import { ExternalLink, Info } from "lucide-react"; // Added Info icon

export default function ProjectCarousel() {
    const { filteredProjects, setSelectedProject, viewMode } =
        useProjectContext(); // Added viewMode

    const handleProjectClick = (project: any) => {
        setSelectedProject(project);
    };

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className={
                    viewMode === "grid"
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        : "space-y-6" // Added list view styling
                }
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{
                                opacity: 0,
                                y: 50,
                                scale: viewMode === "grid" ? 0.9 : 0.95, // Adjusted scale for list view initial
                            }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{
                                opacity: 0,
                                y: -50,
                                scale: viewMode === "grid" ? 0.9 : 0.95, // Adjusted scale for list view exit
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                            }}
                            whileHover={
                                viewMode === "grid"
                                    ? { y: -10, scale: 1.02 }
                                    : {
                                          y: -5,
                                          backgroundColor:
                                              "rgba(17, 24, 39, 0.7)",
                                      }
                            }
                            className={`group cursor-pointer ${
                                viewMode === "list"
                                    ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex items-center p-4 gap-4"
                                    : ""
                            }`}
                            onClick={() => handleProjectClick(project)}
                        >
                            {viewMode === "grid" ? (
                                // Grid View Card
                                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                                    {/* Project Preview */}
                                    <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent z-10" />
                                        <iframe
                                            src={project.url}
                                            className="w-full h-full scale-75 origin-top-left pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                width: "133.33%",
                                                height: "133.33%",
                                            }}
                                            title={`${project.title} preview`}
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileHover={{ scale: 1 }}
                                                className="bg-white/10 backdrop-blur-sm rounded-full p-3"
                                            >
                                                <ExternalLink
                                                    className="text-white"
                                                    size={24}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                    {/* Project Info */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.description && (
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                                                {project.description}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag: string) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full text-xs font-medium text-blue-300 hover:border-blue-400/40 transition-colors duration-300"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium text-sm"
                                            >
                                                <Info size={16} />
                                                View Details
                                            </motion.button>
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                                <span className="text-xs">
                                                    Live
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // List View Item
                                <>
                                    <div className="relative w-32 h-20 sm:w-40 sm:h-24 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg overflow-hidden flex-shrink-0">
                                        {" "}
                                        {/* Increased size */}
                                        <iframe
                                            src={project.url}
                                            className="w-full h-full scale-[0.35] sm:scale-[0.45] origin-top-left pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" /* Adjusted scale for new size */
                                            style={{
                                                width: "285.71%", // Adjusted for new scale (100/0.35)
                                                height: "285.71%", // Adjusted for new scale (100/0.35)
                                            }}
                                            title={`${project.title} preview thumbnail`}
                                        />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        {" "}
                                        {/* Added min-w-0 for better truncation */}
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 truncate">
                                            {project.title}
                                        </h3>
                                        {project.description && (
                                            <p className="text-gray-400 text-xs mb-2 line-clamp-1 leading-relaxed">
                                                {project.description}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags
                                                .slice(0, 3)
                                                .map((tag: string) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-full text-[10px] font-medium text-blue-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-2 py-0.5 bg-gray-700/50 border border-gray-600/50 rounded-full text-[10px] font-medium text-gray-400">
                                                    +{project.tags.length - 3}{" "}
                                                    more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium text-sm p-2 rounded-md hover:bg-blue-500/10 ml-auto flex-shrink-0"
                                    >
                                        <Info size={16} />
                                        Details
                                    </motion.button>
                                </>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                >
                    <div className="text-gray-400 text-lg mb-4">
                        No projects found
                    </div>
                    <div className="text-gray-500 text-sm">
                        Try adjusting your filters
                    </div>
                </motion.div>
            )}
        </div>
    );
}
