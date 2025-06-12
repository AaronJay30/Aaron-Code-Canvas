"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useProjectContext } from "../context/ProjectContext"
import { X, ExternalLink, Code } from "lucide-react"

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useProjectContext()

  const closeModal = () => setSelectedProject(null)

  const openProject = () => {
    if (selectedProject) {
      window.open(selectedProject.url, "_blank")
    }
  }

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-8 border-b border-gray-700/50 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-bold text-white mb-3"
                  >
                    {selectedProject.title}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {selectedProject.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 text-sm text-gray-400"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Live & Deployed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code size={16} />
                      <span>{selectedProject.tags.length} Technologies</span>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="p-3 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-xl transition-all duration-300 backdrop-blur-sm"
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Project Description */}
              {selectedProject.description && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                    About this project
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{selectedProject.description}</p>
                </motion.div>
              )}

              {/* Live Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
                  Live Preview
                </h3>
                <div className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-600/50 shadow-2xl">
                  <div className="bg-gray-800/80 px-4 py-3 border-b border-gray-600/50 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-700/50 rounded px-3 py-1 text-sm text-gray-400 font-mono">
                      {selectedProject.url}
                    </div>
                  </div>
                  <iframe
                    src={selectedProject.url}
                    className="w-full h-96 md:h-[500px]"
                    title={`Preview of ${selectedProject.title}`}
                  />
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openProject}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <ExternalLink size={20} />
                  Open Live Project
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
