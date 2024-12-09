import { certifications } from "@/constants/certifications";

export default function Certifications() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Certifications & Licenses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="h-12 flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Issued {cert.date}
                </p>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ID: {cert.credentialId}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
