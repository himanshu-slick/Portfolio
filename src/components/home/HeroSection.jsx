/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white dark:bg-darker-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block">
              <span className="bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-medium">
                Full Stack Developer
              </span>
            </div>

            <h1 className="mt-6 text-6xl font-bold">
              <span className="text-gray-900 dark:text-white">Hi, Im </span>
              <span className="text-brand-blue">Himanshu</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              I'm a passionate software developer specializing in building
              exceptional digital experiences. Currently, I'm focused on
              building accessible, human-centered products.
            </p>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                Tech Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "Next.js", "MongoDB"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-md bg-gray-100 dark:bg-darker-navy border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-blue/90 transition-colors"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="hidden lg:block">
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <Image
                src="/images/dp.png"
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
