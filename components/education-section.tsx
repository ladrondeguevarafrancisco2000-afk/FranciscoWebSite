"use client"

import { useState } from "react"
import { 
  GraduationCap, 
  ChevronDown, 
  ExternalLink, 
  Trophy,
  Scale,
  Lightbulb,
  Brain,
  BarChart3,
  Settings,
  Leaf,
  Users,
  Cog,
  Target,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Subject {
  name: string
  icon: "scale" | "lightbulb" | "brain" | "chart" | "settings" | "leaf" | "users"
}

interface ProjectHighlight {
  title: string
  badge: string
  description: string
  impact: string
  context: string
}

interface EducationData {
  institution: string
  degree: string
  location: string
  period: string
  details: string
  highlight: boolean
  expandable: boolean
  expandedContent?: {
    focus?: string
    subjects?: Subject[]
    project?: ProjectHighlight
    academicRecordLink?: string
  }
}

const education: EducationData[] = [
  {
    institution: "Politecnico di Torino",
    degree: "M.Sc. Engineering and Management",
    location: "Turin, Italy",
    period: "Sep 2025 - Present",
    details: "Double Degree Program - English Course",
    highlight: true,
    expandable: true,
    expandedContent: {
      subjects: [
        { name: "Quality Engineering", icon: "settings" },
        { name: "Accounting and Corporate Finance", icon: "scale" },
        { name: "Information Systems", icon: "brain" },
        { name: "Sustainable Business Management", icon: "leaf" },
        { name: "Strategy Organization", icon: "chart" },
        { name: "Entrepreneurship", icon: "lightbulb" },
        { name: "Decision Making and AI for Business Change", icon: "brain" }
      ],
      project: {
        title: "Reply Innovation Challenge",
        badge: "1st Place Winner",
        description: "Led a multicultural team from diverse backgrounds in designing a proactive AI assistant for electric vehicles (EV).",
        impact: "The project combined product strategy, user research, and sustainability to optimize charging decisions, reduce 'range anxiety', and improve vehicle efficiency.",
        context: "3-month project under the mentorship of Reply and PoliTo, winning among 5 finalist teams."
      }
    }
  },
  {
    institution: "National University of Córdoba",
    degree: "Industrial Engineering (Double Degree)",
    location: "Córdoba, Argentina",
    period: "Feb 2020 - Present",
    details: "GPA: 7.8/10",
    highlight: true,
    expandable: true,
    expandedContent: {
      focus: "Focus on industrial process optimization and cost management.",
      academicRecordLink: "#" // Placeholder for PDF link
    }
  }
]

const subjectIcons = {
  scale: Scale,
  lightbulb: Lightbulb,
  brain: Brain,
  chart: BarChart3,
  settings: Settings,
  leaf: Leaf,
  users: Users
}

function EducationCard({ edu }: { edu: EducationData }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleToggle = () => {
    if (edu.expandable) {
      setIsExpanded(prev => !prev)
    }
  }

  return (
    <div 
      className={`bg-card rounded-xl border overflow-hidden transition-all duration-300 ${
        edu.highlight ? "border-primary/20 shadow-sm" : "border-border"
      } ${edu.expandable ? "cursor-pointer hover:shadow-md" : ""}`}
      onClick={handleToggle}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{edu.period}</span>
            {edu.expandable && (
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`} 
              />
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
        <p className="text-primary font-medium mb-2">{edu.institution}</p>
        <p className="text-sm text-muted-foreground">{edu.location}</p>
        {edu.details && (
          <p className="mt-3 text-sm font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-md inline-block">
            {edu.details}
          </p>
        )}

        {edu.expandable && (
          <p className="mt-4 text-xs text-primary font-medium">
            {isExpanded ? "Click to collapse" : "Click to expand details"}
          </p>
        )}
      </div>

      {/* Expandable Content */}
      {edu.expandable && edu.expandedContent && (
        <div 
          className={`grid transition-all duration-300 ease-in-out ${
            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 space-y-5 border-t border-border/50 pt-5">
              
              {/* Focus Description - UNC */}
              {edu.expandedContent.focus && (
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Cog className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{edu.expandedContent.focus}</p>
                </div>
              )}

              {/* Key Subjects - PoliTo */}
              {edu.expandedContent.subjects && (
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Key Subjects</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.expandedContent.subjects.map((subject, i) => {
                      const IconComponent = subjectIcons[subject.icon]
                      return (
                        <div 
                          key={i} 
                          className="flex items-center gap-2 p-2.5 bg-muted/50 rounded-lg text-sm"
                        >
                          <IconComponent className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-foreground">{subject.name}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Reply Innovation Challenge - PoliTo */}
              {edu.expandedContent.project && (
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-5">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
                      <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{edu.expandedContent.project.title}</h4>
                      <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 rounded-full">
                        {edu.expandedContent.project.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-sm text-foreground leading-relaxed">
                      {edu.expandedContent.project.description}
                    </p>
                    
                    <div className="p-3 bg-white/60 dark:bg-black/20 rounded-lg">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">Impact</p>
                      <p className="text-sm text-foreground">{edu.expandedContent.project.impact}</p>
                    </div>
                    
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Target className="w-4 h-4 shrink-0 mt-0.5" />
                      <p>{edu.expandedContent.project.context}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Academic Record Link - UNC */}
              {edu.expandedContent.academicRecordLink && (
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(edu.expandedContent?.academicRecordLink, "_blank")
                    }}
                  >
                    <FileText className="w-4 h-4" />
                    View Academic Record (PDF)
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function EducationSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education</h2>
        </div>

        {/* Double Degree Banner */}
        <div className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <p className="text-center text-primary font-semibold text-sm md:text-base">
            Double Degree Program between Argentina & Italy
          </p>
        </div>

        {/* Narrative Introduction */}
        <div className="mb-10 p-6 bg-card border border-border rounded-xl">
          <p className="text-foreground leading-relaxed text-balance">
            From the beginning of my studies at UNC, my focus was on internationalization. My goal was clear: to obtain the Double Degree scholarship for Politecnico di Torino, drawn by its global prestige and my Italian heritage. This challenge, which I pursued while working throughout my undergraduate career, represents my pursuit of professional growth, language mastery (Italian and English), and technical excellence in management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </div>
      </div>
    </section>
  )
}
