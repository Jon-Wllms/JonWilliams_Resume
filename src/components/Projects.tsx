import { resumeData } from '@/data/resume-data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {resumeData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  aria-label="View project"
                >
                  {project.link.includes('github') ? <Github size={24} /> : <ExternalLink size={24} />}
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
