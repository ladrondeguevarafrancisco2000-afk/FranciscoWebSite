"use client"

import { useState } from "react"
import { Briefcase, ChevronDown, ExternalLink, Linkedin, AlertTriangle, CheckCircle, Globe, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExperienceData {
  company: string
  role: string
  location: string
  period: string
  description: string[]
  skills: string[]
  highlight: boolean
  expandable?: boolean
  expandedContent?: {
    liaison?: {
      title: string
      areas: string[]
    }
    globalVision?: {
      title: string
      countries: string[]
    }
    caseStudy?: {
      title: string
      problem: string
      solution: string
      result: string
    }
    innovation?: {
      title: string
      name: string
      description: string
      features: string[]
    }
    supervisor?: {
      name: string
      linkedIn: string
    }
    companyLink?: string
  }
}

const experiences: ExperienceData[] = [
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
    highlight: true,
    expandable: false
  },
  {
    company: "Grupo Arcor",
    role: "International Logistics Intern",
    location: "Argentina",
    period: "Sep 2022 - Mar 2024",
    description: [
      "Optimized the global supply chain and reduced port costs in Mexico.",
      "Developed Excel dashboards to track delivery KPIs and optimize logistics performance."
    ],
    skills: ["Supply Chain Management", "International Logistics", "Excel", "KPI Analysis", "Process Optimization"],
    highlight: true,
    expandable: true,
    expandedContent: {
      liaison: {
        title: "Liaison Role",
        areas: ["Commercial Area (Stock Planning)", "Production (Plant Capacity)", "End Client"]
      },
      globalVision: {
        title: "Global Vision",
        countries: ["Argentina", "Brazil", "Angola", "Chile", "Mexico"]
      },
      caseStudy: {
        title: "Success Case: Mexico",
        problem: "Detected delays in sending original BLs causing port storage costs through KPI dashboard analysis.",
        solution: "Implementation of monthly compliance reports and direct monitoring system.",
        result: "Direct cost savings through elimination of unnecessary storage fees."
      },
      innovation: {
        title: "Technical Innovation: TACOP",
        name: "TACOP Tool (linked to BOEG)",
        description: "Preventive control dashboard developed in Excel that detects 'stuck' orders outside the system by comparing states and dates, triggering immediate alerts.",
        features: ["State comparison", "Date tracking", "Immediate alerts", "Preventive detection"]
      },
      supervisor: {
        name: "Juan Cruz Macagno",
        linkedIn: "https://www.linkedin.com/in/juan-cruz-macagno/"
      },
      companyLink: "https://www.arcor.com"
    }
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
    highlight: false,
    expandable: false
  }
]

function ExperienceCard({ exp }: { exp: ExperienceData }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="relative pl-12 md:pl-16">
      {/* Timeline dot */}
      <div className={`absolute left-2.5 md:left-4.5 w-3 h-3 rounded-full border-2 ${
        exp.highlight 
          ? "bg-primary border-primary" 
          : "bg-card border-muted-foreground/30"
      }`} />

      <div 
        className={`rounded-xl border overflow-hidden transition-all duration-200 ${
          exp.highlight 
            ? "bg-card border-primary/20 shadow-sm" 
            : "bg-card border-border"
        } ${exp.expandable ? "cursor-pointer hover:scale-[1.01]" : ""}`}
        onClick={() => exp.expandable && setIsExpanded(!isExpanded)}
      >
        <div className="p-5 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
            <div className="flex items-start gap-3">
              {/* Company Logo Placeholder */}
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <span className="text-lg font-bold text-primary">
                  {exp.company.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
              </div>
            </div>
            <div className="text-sm text-muted-foreground text-right">
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

          <div className="flex flex-wrap gap-2 mb-3">
            {exp.skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {exp.expandable && (
            <div className="flex items-center justify-center pt-2 border-t border-border/50">
              <div
                className={`flex items-center gap-2 text-sm text-primary transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              >
                <span className={isExpanded ? "hidden" : "block"}>View Details</span>
                <span className={isExpanded ? "block" : "hidden"}>Hide Details</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>

        {/* Expanded Content */}
        <div 
          className={`grid transition-all duration-400 ease-in-out ${
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {exp.expandedContent && (
              <div className="px-5 md:px-6 pb-6 pt-2 border-t border-border/50 space-y-6">
                {/* Liaison Role */}
                {exp.expandedContent.liaison && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{exp.expandedContent.liaison.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Coordination between key areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.expandedContent.liaison.areas.map((area, i) => (
                        <span key={i} className="px-3 py-1.5 bg-card border border-primary/20 rounded-full text-sm font-medium text-foreground">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Global Vision */}
                {exp.expandedContent.globalVision && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{exp.expandedContent.globalVision.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Management and traceability control for plants in:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.expandedContent.globalVision.countries.map((country, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Case Study */}
                {exp.expandedContent.caseStudy && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{exp.expandedContent.caseStudy.title}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-destructive">Problem Detected</p>
                          <p className="text-sm text-muted-foreground">{exp.expandedContent.caseStudy.problem}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-primary">Solution Implemented</p>
                          <p className="text-sm text-muted-foreground">{exp.expandedContent.caseStudy.solution}</p>
                        </div>
                      </div>
                      <div className="p-3 bg-card border border-border rounded-lg">
                        <p className="text-sm font-semibold text-foreground">Result:</p>
                        <p className="text-sm text-muted-foreground">{exp.expandedContent.caseStudy.result}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TACOP Innovation */}
                {exp.expandedContent.innovation && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                      <h4 className="font-semibold text-foreground">{exp.expandedContent.innovation.title}</h4>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-medium text-primary mb-1">{exp.expandedContent.innovation.name}</p>
                      <p className="text-sm text-muted-foreground">{exp.expandedContent.innovation.description}</p>
                    </div>
                    
                    {/* Alert Animation Visual */}
                    <div className="relative bg-card border border-border rounded-lg p-4 overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-muted-foreground">TACOP Dashboard Simulation</span>
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/20 border border-amber-500/30 rounded-full">
                          <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                          <span className="text-xs font-medium text-amber-600">Alert Active</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {exp.expandedContent.innovation.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {exp.expandedContent.companyLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(exp.expandedContent?.companyLink, "_blank")
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit {exp.company}
                    </Button>
                  )}
                  {exp.expandedContent.supervisor && (
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(exp.expandedContent?.supervisor?.linkedIn, "_blank")
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                      {exp.expandedContent.supervisor.name}
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

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
              <ExperienceCard key={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
