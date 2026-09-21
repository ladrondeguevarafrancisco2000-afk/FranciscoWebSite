import { Navbar } from "@/components/navbar"
import { BackToTop } from "@/components/back-to-top"
import { HeroSection } from "@/components/hero-section"
import { ImpactSection } from "@/components/impact-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { LeadershipSection } from "@/components/leadership-section"
import { InternationalSection } from "@/components/international-section"
import { SkillsSection } from "@/components/skills-section"
import { LanguagesSection } from "@/components/languages-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background antialiased">
      <Navbar />
      <HeroSection />
      <ImpactSection />
      <ExperienceSection />
      <EducationSection />
      <LeadershipSection />
      <InternationalSection />
      <SkillsSection />
      <LanguagesSection />
      <Footer />
      <BackToTop />
    </main>
  )
}
