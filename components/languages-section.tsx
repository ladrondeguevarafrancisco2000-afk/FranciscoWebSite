"use client"

import { motion } from "framer-motion"
import { Globe, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"

const languages = [
  {
    name: "Spanish",
    level: "Native",
    proficiency: 100,
    flag: "🇦🇷"
  },
  {
    name: "Italian",
    level: "C2",
    proficiency: 95,
    flag: "🇮🇹"
  },
  {
    name: "English",
    level: "Professional working proficiency (IELTS 6.5)",
    proficiency: 75,
    flag: "🇬🇧",
    certificate: "/documents/IELTScertificate.pdf"
  },
  {
    name: "French",
    level: "DELF A2",
    proficiency: 35,
    flag: "🇫🇷",
    certificate: "/documents/french_certificate.pdf"
  }
]

export function LanguagesSection() {
  return (
    <section id="languages" className="scroll-mt-20 py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            icon={<Globe className="w-5 h-5 text-primary" />}
            title="Languages"
            subtitle="Four languages, three of them used at work — Spanish at Arcor, Italian at Pininfarina and PoliTo, English across international teams."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {languages.map((lang, index) => (
            <AnimatedSection key={lang.name} delay={index * 0.08} className="h-full">
              <div className="h-full p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" role="img" aria-label={lang.name}>
                      {lang.flag}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{lang.name}</h3>
                      <p className="text-sm text-muted-foreground leading-snug">{lang.level}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
                    <motion.div
                      className="h-full bg-primary rounded-full origin-left"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: lang.proficiency / 100 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.9, delay: 0.15 + index * 0.08, ease: "easeOut" }}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                {/* Certificate Button (English & French) */}
                {lang.certificate && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2 gap-2 text-xs h-8"
                    onClick={() => window.open(lang.certificate, "_blank")}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    View Certificate
                  </Button>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
