"use client"

import { motion } from "framer-motion"
import { useProjectContext } from "../context/ProjectContext"
import { ExternalLink } from "lucide-react"

export default function MobileProjectList() {
  const { filteredProjects, setSelectedProject } = useProjectContext()

  return (
    <div className="md:hidden w-full h-full overflow-x-auto overflow-y-hidden">
      <div className="flex gap-4 p-4 h-full items-center" style={{ width: `${filteredProjects.length * 300}px` }}>
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-72 h-96 bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl"
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Preview */}
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
              <iframe
                src={project.url}
                className="w-full h-full scale-50 origin-top-left pointer-events-none"
                style={{
                  width: "200%",
                  height: "200%",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent" />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs font-medium text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-600/50 rounded-full text-xs text-gray-400">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <ExternalLink size={16} />
                <span className="text-sm font-medium">View Project</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
