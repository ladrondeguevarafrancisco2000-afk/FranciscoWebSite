"use client"

import { useState, useEffect } from "react"
import { Briefcase, ChevronDown, ExternalLink, Linkedin, AlertTriangle, CheckCircle, Globe, Users, TrendingUp, Cog, Car, FileSpreadsheet, Wrench, ClipboardList, Phone, BarChart3, Network, FileCheck, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RenaultPhase {
  title: string
  duration: string
  icon: "cog" | "wrench"
  items: {
    title: string
    icon: "clipboard" | "cog" | "car" | "spreadsheet"
    description: string
  }[]
}

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
    context?: string
    phases?: RenaultPhase[]
    supervisor?: {
      name: string
      title?: string
      linkedIn: string
    }
    companyLink?: string
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
    commercialStrategy?: {
      title: string
      items: {
        title: string
        icon: "phone" | "chart"
        description: string
      }[]
    }
    digitalTransformation?: {
      title: string
      items: {
        title: string
        icon: "network" | "phone"
        description: string
      }[]
    }
    managementHighlight?: {
      title: string
      projectName: string
      description: string
      impact: string
    }
    softSkills?: string[]
  }
}

const experiences: ExperienceData[] = [
  {
    company: "Grupo Arcor",
    role: "International Logistics Intern",
    location: "Argentina",
    period: "Mar 2024 – Aug 2025",
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
        linkedIn: "https://www.linkedin.com/in/juan-cruz-macagno-0b381853/"
      },
      companyLink: "https://www.arcor.com"
    }
  },
  {
    company: "Groupe Renault",
    role: "Performance Engineering Intern",
    location: "Argentina (RTA - Renault Technologie America)",
    period: "Sep 2022 – Mar 2024",
    description: [
      "Part of the Performance Engineering area within RTA, providing competitive intelligence and supporting vehicle testing operations.",
      "Designed process optimization tools and coordinated cross-functional technical analysis."
    ],
    skills: ["Competitive Intelligence", "Process Optimization", "SAP", "Technical Benchmarking", "Workshop Coordination", "Excel"],
    highlight: true,
    expandable: true,
    expandedContent: {
      context: "Renault Technologie America (RTA) - Performance Engineering Area",
      phases: [
        {
          title: "Phase 1: Competitive Analysis Center (CAC)",
          duration: "12 months",
          icon: "cog",
          items: [
            {
              title: "Liaison Role",
              icon: "clipboard",
              description: "Acted as a liaison between different METIERS (Specialties: Comfort, Acoustics, Seats, etc.) to provide competitive intelligence to engineering teams."
            },
            {
              title: "Process Optimization (Milestone)",
              icon: "cog",
              description: "Facing inefficient information flows via email, I designed a Standardized Query Template in Excel. This eliminated ambiguities, drastically reduced email traffic, and accelerated technical report response times."
            },
            {
              title: "Technical Benchmarking",
              icon: "spreadsheet",
              description: "Managed the A2MAC1 platform for global technical data analysis and competitive benchmarking."
            },
            {
              title: "Tear-down Supervision",
              icon: "car",
              description: "Coordinated piece-by-piece teardowns of competitor vehicles with Colegio Técnico Renault. Supervised technical documentation (weight, photos, suppliers) and organized Exploitation Workshops for engineers from each Metier to analyze physical components."
            }
          ]
        },
        {
          title: "Phase 2: Testing Workshop",
          duration: "6 months",
          icon: "wrench",
          items: [
            {
              title: "Operational Management & SAP",
              icon: "clipboard",
              description: "Transitioned to a logistical-technical role. Responsible for purchasing critical supplies and managing racetrack rentals for performance testing using SAP."
            }
          ]
        }
      ],
      supervisor: {
        name: "Vicente Sosa",
        title: "Performance Engineer",
        linkedIn: "https://www.linkedin.com/in/sosavicente/"
      },
      companyLink: "https://www.renault.com.ar"
    }
  },
  {
    company: "Olmer Giusti SRL",
    role: "Sales Executive",
    location: "Argentina",
    period: "Feb 2022 – Sep 2022",
    description: [
      "Managed B2B client portfolio and prospected new markets through outbound campaigns.",
      "Led the creation of Standardized Operating Procedures (POE) to optimize company processes."
    ],
    skills: ["B2B Sales", "CRM (Odoo)", "Process Standardization", "Digital Marketing", "Client Management"],
    highlight: false,
    expandable: true,
    expandedContent: {
      commercialStrategy: {
        title: "Commercial Strategy",
        items: [
          {
            title: "Dual Market Management",
            icon: "phone",
            description: "Maintained active client portfolio while prospecting new B2B markets through targeted outreach campaigns."
          },
          {
            title: "Performance KPIs",
            icon: "chart",
            description: "Achieved daily targets of 10 'effective calls' (conversion to catalog delivery) with metrics tracking for sales team derivation."
          }
        ]
      },
      digitalTransformation: {
        title: "Digital Transformation & Tools",
        items: [
          {
            title: "CRM Implementation",
            icon: "network",
            description: "Daily use of Odoo CRM for lead traceability and comprehensive client management."
          },
          {
            title: "Digital Presence Management",
            icon: "phone",
            description: "Managed social media presence (Meta platforms) and direct prospect communication channels."
          }
        ]
      },
      managementHighlight: {
        title: "Management Milestone",
        projectName: "POE Project (Standardized Operating Procedures)",
        description: "Led the creation and documentation of step-by-step guides for all operational tasks within the SME.",
        impact: "Eliminated task ambiguities, corrected operational errors, and accelerated onboarding process for new team members."
      },
      softSkills: ["Technical Persuasion", "Active Listening", "Organizational Adaptability"],
      supervisor: {
        name: "Alejandro Giusti",
        title: "Director",
        linkedIn: "https://www.linkedin.com/in/alejandrogiusti/"
      },
      companyLink: "https://www.olmergiusti.com.ar"
    }
  }
]

function PhaseIcon({ icon }: { icon: "cog" | "wrench" }) {
  if (icon === "cog") return <Cog className="w-5 h-5" />
  return <Wrench className="w-5 h-5" />
}

function ItemIcon({ icon }: { icon: "clipboard" | "cog" | "car" | "spreadsheet" }) {
  switch (icon) {
    case "clipboard":
      return <ClipboardList className="w-4 h-4 text-primary" />
    case "cog":
      return <Cog className="w-4 h-4 text-primary" />
    case "car":
      return <Car className="w-4 h-4 text-primary" />
    case "spreadsheet":
      return <FileSpreadsheet className="w-4 h-4 text-primary" />
  }
}

function ExperienceCard({ exp }: { exp: ExperienceData }) {
  const [mounted, setMounted] = useState(false)
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleToggle = () => {
    if (mounted && exp.expandable) {
      setIsExpanded(prev => !prev)
    }
  }

  return (
    <div className="relative pl-12 md:pl-16">
      {/* Timeline dot */}
      <div className={`absolute left-2.5 md:left-4.5 w-3 h-3 rounded-full border-2 ${
        exp.highlight 
          ? "bg-primary border-primary" 
          : "bg-card border-muted-foreground/30"
      }`} />

      <div 
        className={`rounded-xl border overflow-hidden transition-all duration-300 ${
          exp.highlight 
            ? "bg-card border-primary/20 shadow-sm" 
            : "bg-card border-border"
        } ${exp.expandable ? "cursor-pointer hover:scale-[1.01]" : ""}`}
        onClick={handleToggle}
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
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
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
                
                {/* Renault Phases Timeline */}
                {exp.expandedContent.phases && (
                  <div className="space-y-4">
                    {exp.expandedContent.context && (
                      <div className="flex items-center gap-2 px-3 py-2 bg-primary/5 border border-primary/10 rounded-lg">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{exp.expandedContent.context}</span>
                      </div>
                    )}
                    
                    {exp.expandedContent.phases.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <PhaseIcon icon={phase.icon} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{phase.title}</h4>
                            <span className="text-xs text-muted-foreground">{phase.duration}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-3 ml-2">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex gap-3 p-3 bg-card border border-border/50 rounded-lg">
                              <div className="shrink-0 mt-0.5">
                                <ItemIcon icon={item.icon} />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-foreground mb-1">{item.title}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Liaison Role - Arcor */}
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

                {/* Global Vision - Arcor */}
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

                {/* Case Study - Arcor */}
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

                {/* TACOP Innovation - Arcor */}
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

                {/* Commercial Strategy - Olmer Giusti */}
                {exp.expandedContent.commercialStrategy && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{exp.expandedContent.commercialStrategy.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {exp.expandedContent.commercialStrategy.items.map((item, i) => (
                        <div key={i} className="flex gap-3 p-3 bg-card border border-border/50 rounded-lg">
                          <div className="shrink-0 mt-0.5">
                            {item.icon === "phone" ? (
                              <Phone className="w-4 h-4 text-primary" />
                            ) : (
                              <BarChart3 className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">{item.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Digital Transformation - Olmer Giusti */}
                {exp.expandedContent.digitalTransformation && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Network className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{exp.expandedContent.digitalTransformation.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {exp.expandedContent.digitalTransformation.items.map((item, i) => (
                        <div key={i} className="flex gap-3 p-3 bg-card border border-border/50 rounded-lg">
                          <div className="shrink-0 mt-0.5">
                            {item.icon === "network" ? (
                              <Network className="w-4 h-4 text-primary" />
                            ) : (
                              <Phone className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground mb-1">{item.title}</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Management Highlight - POE Project */}
                {exp.expandedContent.managementHighlight && (
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <FileCheck className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">{exp.expandedContent.managementHighlight.title}</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 bg-card border border-primary/30 rounded-lg">
                        <p className="text-sm font-semibold text-primary mb-1">{exp.expandedContent.managementHighlight.projectName}</p>
                        <p className="text-sm text-muted-foreground">{exp.expandedContent.managementHighlight.description}</p>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Impact</p>
                          <p className="text-sm text-muted-foreground">{exp.expandedContent.managementHighlight.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Soft Skills - Olmer Giusti */}
                {exp.expandedContent.softSkills && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Soft Skills Developed</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.expandedContent.softSkills.map((skill, i) => (
                        <span key={i} className="px-3 py-1.5 bg-primary/10 rounded-full text-sm font-medium text-primary">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Links */}
                <div className="space-y-3 pt-2">
                  {exp.expandedContent.companyLink && (
                    <div className="flex flex-wrap gap-3">
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
                    </div>
                  )}
                  {exp.expandedContent.supervisor && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Reference Contact</p>
                      <div className="flex flex-wrap gap-3">
                        {exp.expandedContent.supervisor.linkedIn ? (
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
                            {exp.expandedContent.supervisor.title && (
                              <span className="text-xs opacity-80">({exp.expandedContent.supervisor.title})</span>
                            )}
                          </Button>
                        ) : (
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-md text-sm">
                            <span className="font-medium text-foreground">{exp.expandedContent.supervisor.name}</span>
                            {exp.expandedContent.supervisor.title && (
                              <span className="text-muted-foreground">({exp.expandedContent.supervisor.title})</span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
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
