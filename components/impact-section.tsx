"use client"

import { Banknote, Globe2, TrendingDown, Trophy } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const stats = [
  {
    icon: Banknote,
    value: "€30,000",
    label: "Sponsorship budget raised",
    context: "24 partnerships secured for a 1,200-student congress — CAEII 2025",
  },
  {
    icon: Globe2,
    value: "5 countries",
    label: "Plants under traceability",
    context: "Argentina, Brazil, Angola, Chile and Mexico — Arcor",
  },
  {
    icon: TrendingDown,
    value: "−5%",
    label: "Port storage costs",
    context: "Cut through KPI reporting on BL loading — Arcor",
  },
  {
    icon: Trophy,
    value: "1st place",
    label: "Reply Innovation Challenge",
    context: "Led the winning team among 5 finalists — Politecnico di Torino",
  },
]

export function ImpactSection() {
  return (
    <section className="py-12 md:py-14 bg-muted/30 border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-6">
            What I have actually delivered
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <AnimatedSection key={stat.label} delay={index * 0.08} className="h-full">
                <div className="h-full p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <Icon className="w-4 h-4 text-primary mb-3" />
                  <p className="text-3xl font-semibold text-primary leading-none mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-foreground mb-1.5">{stat.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{stat.context}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
