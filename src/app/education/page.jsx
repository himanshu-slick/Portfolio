import EducationTimeline from "@/components/education/EducationTimeline";
import Certifications from "@/components/education/Certifications";
import AchievementsSection from "@/components/education/AchievementsSection";

export const metadata = {
  title: "Education & Certifications",
  description:
    "My educational background, certifications, and academic achievements",
};

export default function Education() {
  return (
    <main className="min-h-screen">
      <EducationTimeline />
      <Certifications />
      <AchievementsSection />
    </main>
  );
}
