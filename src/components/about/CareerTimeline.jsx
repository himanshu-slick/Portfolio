import { experiences } from "@/constants/experiences";
export default function CareerTimeline() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Career Timeline
        </h2>

        <div className="relative border-l border-gray-200 dark:border-gray-700 pl-8 ml-4">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="mb-12 relative before:absolute before:w-4 before:h-4 before:bg-primary dark:before:bg-primary/80 before:rounded-full before:-left-10 before:top-1.5"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <span>{experience.company}</span>
                  <span className="mx-2">•</span>
                  <span>{experience.period}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {experience.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
