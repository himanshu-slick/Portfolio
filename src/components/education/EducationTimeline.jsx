import { education } from "@/constants/education";
export default function EducationTimeline() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Education
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            My academic journey and qualifications
          </p>
        </div>

        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-12 ml-4 relative before:absolute before:w-4 before:h-4 before:bg-primary before:rounded-full before:-left-[1.45rem] before:top-1.5"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h2>
                <div className="flex flex-wrap gap-2 items-center text-gray-600 dark:text-gray-300 mt-2">
                  <span>{edu.school}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                  <span>•</span>
                  <span>{edu.location}</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
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
