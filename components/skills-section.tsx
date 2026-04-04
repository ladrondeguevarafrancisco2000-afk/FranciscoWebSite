"use client"

import { 
  Wrench, 
  FileSpreadsheet, 
  Presentation, 
  FileText, 
  Code, 
  Compass, 
  FolderKanban, 
  Database, 
  Activity, 
  Palette 
} from "lucide-react"

const skills = [
  {
    name: "Project Management",
    icon: FolderKanban,
    category: "management"
  },
  {
    name: "Excel",
    icon: FileSpreadsheet,
    category: "tools"
  },
  {
    name: "PowerPoint",
    icon: Presentation,
    category: "tools"
  },
  {
    name: "Word",
    icon: FileText,
    category: "tools"
  },
  {
    name: "Python",
    icon: Code,
    category: "technical"
  },
  {
    name: "AutoCAD",
    icon: Compass,
    category: "technical"
  },
  {
    name: "MATLAB",
    icon: Activity,
    category: "technical"
  },
  {
    name: "SQL",
    icon: Database,
    category: "technical"
  },
  {
    name: "Canvas",
    icon: Palette,
    category: "technical"
  }
]

export function SkillsSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Wrench className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sans uppercase tracking-tight">Technical Skills</h2>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="p-3 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-foreground text-center leading-tight">{skill.name}</span>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-8 p-6 bg-card rounded-xl border border-border">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
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
              "Continuous Improvement"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border/50 hover:border-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
