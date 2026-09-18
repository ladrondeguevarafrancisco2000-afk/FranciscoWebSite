"use client"

import {
  Wrench,
  FileSpreadsheet,
  Code,
  Compass,
  Database,
  Activity,
  Palette,
  Network,
  Warehouse,
  BarChart3,
  Route,
  Coins,
  Cog,
  Server,
  Sparkles,
} from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { SectionHeading } from "@/components/section-heading"

const skillGroups = [
  {
    title: "Logistics",
    caption: "What I do day to day",
    skills: [
      { name: "Warehouse Processes", icon: Warehouse },
      { name: "Delivery KPIs & Reporting", icon: BarChart3 },
      { name: "Order Traceability", icon: Route },
      { name: "Logistics Cost Control", icon: Coins },
      { name: "Process Optimisation", icon: Cog },
    ],
  },
  {
    title: "Tools",
    caption: "Software I work with",
    skills: [
      { name: "SAP", icon: Server },
      { name: "Excel VBA", icon: FileSpreadsheet },
      { name: "Odoo CRM", icon: Network },
      { name: "AutoCAD", icon: Compass },
      { name: "Matlab", icon: Activity },
      { name: "Canva", icon: Palette },
    ],
  },
  {
    title: "Currently Learning",
    caption: "Where I am investing my time",
    skills: [
      { name: "SQL", icon: Database },
      { name: "Python", icon: Code },
    ],
  },
]

const coreCompetencies = [
  "Data Analysis",
  "Process Improvement",
  "Supply Chain Management",
  "International Logistics",
  "Strategic Negotiation",
  "Fundraising & Sponsorship",
  "AI for Business Change",
  "SOP Documentation",
  "Cross-functional Collaboration",
  "Team Leadership",
  "KPI Reporting",
  "Cost Analysis",
  "Strategic Planning",
  "Social Responsibility",
  "Continuous Improvement",
]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            icon={<Wrench className="w-5 h-5 text-primary" />}
            title="Skills"
            subtitle="Grouped by how I actually use them: the logistics work itself, the tools behind it, and what I am still learning."
          />
        </AnimatedSection>

        <div className="space-y-6">
          {skillGroups.map((group, groupIndex) => (
            <AnimatedSection key={group.title} delay={groupIndex * 0.08}>
              <div className="p-5 md:p-6 bg-card rounded-xl border border-border">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{group.title}</h3>
                  <span className="text-xs text-muted-foreground">{group.caption}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-border hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 transition-all group"
                      >
                        <div className="p-2.5 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-foreground leading-tight">{skill.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Core Competencies */}
        <AnimatedSection delay={0.1}>
          <div className="mt-6 p-6 bg-card rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Core Competencies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreCompetencies.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border/50 hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
