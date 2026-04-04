import { Wrench, FileSpreadsheet, Presentation, FileText, Code, Compass, FolderKanban } from "lucide-react"

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
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
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
                <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
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
              "Cross-functional Collaboration",
              "Team Coordination",
              "KPI Reporting",
              "Cost Analysis",
              "Strategic Planning",
              "Continuous Improvement"
            ].map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 text-sm font-medium bg-muted text-muted-foreground rounded-full"
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
