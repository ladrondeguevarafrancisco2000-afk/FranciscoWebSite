"use client"

import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Groupe Renault",
    role: "Performance Engineering Intern",
    location: "Argentina",
    period: "Mar 2024 - Aug 2025",
    description: [
      "Analyzed performance test data, supporting continuous improvement in automotive systems.",
      "Collaborated with cross-functional teams to propose competitive solutions."
    ],
    skills: ["Data Analysis", "Process Improvement", "Excel", "Cross-functional Collaboration"],
    highlight: true
  },
  {
    company: "Grupo Arcor",
    role: "International Logistics Intern",
    location: "Argentina",
    period: "Sep 2022 - Mar 2024",
    description: [
      "Assisted in coordinating export operations for international shipments.",
      "Developed Excel dashboards to track delivery KPIs and optimize logistics performance."
    ],
    skills: ["Supply Chain Management", "International Logistics", "Excel", "Reporting", "Team Coordination"],
    highlight: true
  },
  {
    company: "Olmer Giusti SRL",
    role: "Sales Executive",
    location: "Argentina",
    period: "Feb 2022 - Sep 2022",
    description: [
      "Managed outbound calls and email campaigns to promote company catalogs and generate B2B leads.",
      "Ensured accurate communication of product information and follow-up on sales opportunities."
    ],
    skills: ["Sales", "Customer Relationship Management", "Communication", "Negotiation", "B2B Marketing"],
    highlight: false
  }
]

export function ExperienceSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Work Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className={`absolute left-2.5 md:left-4.5 w-3 h-3 rounded-full border-2 ${
                  exp.highlight 
                    ? "bg-primary border-primary" 
                    : "bg-card border-muted-foreground/30"
                }`} />

                <div className={`p-5 md:p-6 rounded-xl border ${
                  exp.highlight 
                    ? "bg-card border-primary/20 shadow-sm" 
                    : "bg-card border-border"
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
