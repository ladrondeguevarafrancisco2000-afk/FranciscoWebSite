import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { LeadershipSection } from "@/components/leadership-section"
import { SkillsSection } from "@/components/skills-section"
import { LanguagesSection } from "@/components/languages-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceSection />
      <EducationSection />
      <LeadershipSection />
      <SkillsSection />
      <LanguagesSection />
      <Footer />
    </main>
  )
}
