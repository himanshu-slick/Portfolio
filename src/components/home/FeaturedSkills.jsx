export default function FeaturedSkills() {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Node.js", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "AWS", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Skills
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {skill.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
