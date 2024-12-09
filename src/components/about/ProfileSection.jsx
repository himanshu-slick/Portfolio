/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export default function ProfileSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/dp.png"
              alt="Profile picture"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary/10 dark:bg-primary/5 w-72 h-72 rounded-2xl -z-10"></div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-6">
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Hi, I'm Himanshu, a passionate Full Stack Developer based in
              Gurugram, India. I enjoy creating things that live on the
              internet, whether that be websites, applications, or anything in
              between.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              My goal is to always build products that provide pixel-perfect,
              performant experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gurugram, India
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Experience
                </h3>
                <p className="text-gray-600 dark:text-gray-300">2+ Years</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Availability
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Open to opportunities
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  himanshu.slick@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
