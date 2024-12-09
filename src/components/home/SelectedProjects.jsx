import Link from "next/link";
import { projects } from "@/constants/projects";

export default function SelectedProjects() {
  // Only show featured projects on home page
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent works
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const IconComponent = project.icon;

            return (
              <div
                key={project.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-200 hover:shadow-xl"
              >
                <div className="p-8 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <IconComponent
                    size={48}
                    className="text-primary hover:text-primary/80 transition-colors duration-200"
                  />
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors duration-200"
                      >
                        Live Demo →
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                      >
                        View Code →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 dark:hover:bg-primary/80 transition-all duration-200"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
