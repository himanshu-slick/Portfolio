import { achievements } from "@/constants/achievements";
export default function AchievementsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Academic Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
                    <span className="text-gray-600 dark:text-gray-300">
                      {item}
                    </span>
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
