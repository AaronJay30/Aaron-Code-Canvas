"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProjectContext } from "../context/ProjectContext";
import { Filter, X, LayoutGrid, List } from "lucide-react";

export default function FilterSection() {
    const {
        allTags,
        activeFilters,
        toggleFilter,
        clearFilters,
        filteredProjects,
        viewMode,
        setViewMode,
    } = useProjectContext();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-4"
        >
            {/* Filter header and View Mode Toggles */}
            <div className="flex items-center justify-between -mt-2 border-t-2 border-white/10 pt-5">
                {
                    activeFilters.length > 0 ? (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={clearFilters}
                            className="flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-400/20 text-red-300 rounded-lg font-medium hover:bg-red-500/20 transition-all duration-300 text-sm"
                        >
                            <X size={14} />
                            Clear All
                        </motion.button>
                    ) : (
                        <div></div>
                    ) /* Empty div to maintain layout when no active filters */
                }

                {/* View Mode Toggles */}
                <div className="flex items-center gap-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setViewMode("grid")}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                            viewMode === "grid"
                                ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                                : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500/50"
                        }`}
                        aria-label="Grid View"
                    >
                        <LayoutGrid size={18} />
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setViewMode("list")}
                        className={`p-2 rounded-lg transition-all duration-300 ${
                            viewMode === "list"
                                ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                                : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500/50"
                        }`}
                        aria-label="List View"
                    >
                        <List size={18} />
                    </motion.button>
                </div>
            </div>

            {/* Filter tags */}
            <div className="flex flex-wrap gap-3">
                <AnimatePresence>
                    {allTags.map((tag, index) => (
                        <motion.button
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: -20 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleFilter(tag)}
                            className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                                activeFilters.includes(tag)
                                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/50"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50 hover:border-gray-500/50 backdrop-blur-sm"
                            }`}
                        >
                            {tag}
                            {activeFilters.includes(tag) && (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"
                                />
                            )}
                        </motion.button>
                    ))}
                </AnimatePresence>
            </div>

            {/* Active filters summary */}
            {activeFilters.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 text-sm text-gray-400"
                >
                    <span>Active filters:</span>
                    <div className="flex gap-1">
                        {activeFilters.map((filter, index) => (
                            <span key={filter} className="text-blue-400">
                                {filter}
                                {index < activeFilters.length - 1 && (
                                    <span className="text-gray-500 ml-1">
                                        +
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
}
