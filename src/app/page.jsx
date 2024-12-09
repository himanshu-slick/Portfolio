/* eslint-disable react/no-unescaped-entities */
import HeroSection from "@/components/home/HeroSection";
import SelectedProjects from "@/components/home/SelectedProjects";
import FeaturedSkills from "@/components/home/FeaturedSkills";

export const metadata = {
  title: "Himanshu - Portfolio",
  description: "Welcome to my portfolio website",
};

function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />
      <SelectedProjects />
      <FeaturedSkills />

      {/* Contact CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Lets Work Together
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="mt-8">
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
