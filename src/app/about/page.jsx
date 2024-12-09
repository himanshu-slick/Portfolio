import ProfileSection from "@/components/about/ProfileSection";
import SkillsSection from "@/components/about/SkillsSection";
import CareerTimeline from "@/components/about/CareerTimeline";

export const metadata = {
  title: "About Me",
  description: "Learn more about my skills, experience, and background",
};

function AboutPage() {
  return (
    <main className="min-h-screen">
      <ProfileSection />
      <SkillsSection />
      <CareerTimeline />
    </main>
  );
}

export default AboutPage;
