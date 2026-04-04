"use client"

import { useState } from "react"
import { 
  Award, Users, BookOpen, ChevronDown, 
  Target, TrendingUp, Heart, Sparkles, 
  Building2, Globe, FileText, Instagram,
  MapPin, AlertTriangle, GraduationCap, Calculator
} from "lucide-react"
import { Button } from "@/components/ui/button"

const caeiiChapters = [
  {
    id: "challenge",
    title: "The Challenge",
    subtitle: "Context & Obstacles",
    icon: Target,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    content: {
      intro: "Managing sponsorship coordination in one of Argentina's most complex economic contexts.",
      details: [
        "Led fundraising for a national congress for 1,200 engineering students across Argentina.",
        "Target: Secure a €30,000 budget and partnerships with at least 18 leading companies.",
        "Obstacle: Navigating extreme economic instability and corporate budget constraints."
      ]
    }
  },
  {
    id: "strategy",
    title: "The Strategy of Passion",
    subtitle: "The 'Fran' Method",
    icon: Heart,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    content: {
      intro: "Leadership centered on people, not processes. Authenticity over formality.",
      details: [
        "People-First Leadership: Fostering autonomy and trust within a cohesive student unit.",
        "Negotiation Beyond Formality: Breaking rigid contracts to connect through shared passion.",
        "Personal Evolution: Transitioning from zero experience to a professional industrial negotiator."
      ]
    }
  },
  {
    id: "results",
    title: "The Results",
    subtitle: "Real Impact & KPIs",
    icon: TrendingUp,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    content: {
      kpis: [
        { label: "Budget Achieved", value: "100%", detail: "€30,000 raised" },
        { label: "Partnerships", value: "24", detail: "22 private + 2 public" },
        { label: "Top Speakers", value: "Secured", detail: "CEOs of Renault & Ozonizer" }
      ]
    }
  }
]

export function LeadershipSection() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  const roles = [
    {
      id: "caeii",
      title: "Coordinator of Sponsorships",
      organization: "XXIII CAEII Córdoba 2025",
      period: "Sep 2024 - Oct 2025",
      icon: Award,
      summary: "Led the partnership strategy for Argentina's largest Industrial Engineering student congress.",
      quote: "Entered as a student with zero experience, left as a professional negotiating with industry giants."
    },
    {
      id: "galponcito",
      title: "President",
      organization: "El Galponcito Community Center",
      period: "Dec 2022 - Aug 2025",
      icon: Users,
      summary: "Strategic and social management of a volunteer-led center in a vulnerable urban area.",
      quote: "Transforming reality through education: serving as a bridge between the university and the community."
    },
    {
      id: "assistant",
      title: "Teaching Assistant - Industrial Costs",
      organization: "National University of Córdoba",
      period: "Feb 2025 - Jul 2025",
      icon: BookOpen,
      summary: "Academic support in the Industrial Engineering department, focusing on financial efficiency and decision-making.",
      quote: "Empowering the next generation of engineers to master the financial pillars of industrial management."
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-sans uppercase tracking-tight">Leadership & Projects</h2>
        </div>

        <div className="grid gap-6 mb-12">
          {roles.map((role) => (
            <div 
              key={role.id} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                expandedCard === role.id ? "border-primary/40 bg-card shadow-lg" : "border-border bg-card/50 hover:border-primary/20"
              }`}
            >
              {/* --- Homogeneous Card Header --- */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start gap-4">
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl h-fit">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{role.title}</h3>
                    <p className="text-primary font-medium">{role.organization}</p>
                    <p className="text-sm text-muted-foreground mt-1">{role.period}</p>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{role.summary}</p>
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    setExpandedCard(expandedCard === role.id ? null : role.id)
                    setActiveAccordion(null)
                  }}
                  variant="outline" 
                  className="gap-2 shrink-0"
                >
                  {expandedCard === role.id ? "Show less" : "View Deep Dive"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedCard === role.id ? "rotate-180" : ""}`} />
                </Button>
              </div>

              {/* --- Expanded Content --- */}
              {expandedCard === role.id && (
                <div className="px-6 pb-8 md:px-10 border-t border-border animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="pt-8 space-y-6">
                    <p className="italic text-muted-foreground mb-6">"{role.quote}"</p>

                    {/* --- CASE 1: CAEII --- */}
                    {role.id === "caeii" && (
                      <div className="space-y-4">
                        {caeiiChapters.map((chapter) => (
                          <AccordionItem 
                            key={chapter.id} 
                            chapter={chapter} 
                            isOpen={activeAccordion === chapter.id} 
                            onToggle={() => setActiveAccordion(activeAccordion === chapter.id ? null : chapter.id)} 
                          />
                        ))}
                        <div className="flex flex-wrap gap-3 pt-4">
                          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://caeii.com.ar", "_blank")}><Globe className="w-4 h-4" /> Website</Button>
                          <Button variant="default" size="sm" className="gap-2" onClick={() => window.open("/documents/informe_final_caeii_2025.pdf", "_blank")}><FileText className="w-4 h-4" /> Download Report (PDF)</Button>
                        </div>
                      </div>
                    )}

                    {/* --- CASE 2: EL GALPONCITO --- */}
                    {role.id === "galponcito" && (
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="p-4 bg-muted/50 rounded-xl border border-border">
                            <div className="flex items-center gap-2 mb-3 text-amber-600">
                              <MapPin className="w-4 h-4" />
                              <span className="text-xs font-bold uppercase">The Context</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Barrio Chino (Villa Revol Anexo): A community of 500 inhabitants with zero local public services, facing significant social and health challenges.
                            </p>
                          </div>
                          <div className="p-4 bg-muted/50 rounded-xl border border-border">
                            <div className="flex items-center gap-2 mb-3 text-rose-600">
                              <AlertTriangle className="w-4 h-4" />
                              <span className="text-xs font-bold uppercase">The Mission</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              Closing the educational gap where over 50% of youths lacked age-appropriate capabilities, a situation exacerbated by the pandemic.
                            </p>
                          </div>
                        </div>
                        <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
                          <h4 className="font-bold mb-3 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Multi-Dimensional Impact</h4>
                          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                            <li className="text-sm text-muted-foreground flex gap-2"><span>•</span> <b>Education:</b> Tutoring in Mathematics and Science.</li>
                            <li className="text-sm text-muted-foreground flex gap-2"><span>•</span> <b>Social Nexus:</b> Identifying property title and sanitary issues.</li>
                            <li className="text-sm text-muted-foreground flex gap-2"><span>•</span> <b>Community:</b> Managing fundraising and recreational workshops.</li>
                            <li className="text-sm text-muted-foreground flex gap-2"><span>•</span> <b>Advocacy:</b> Addressing public area hygiene and safety.</li>
                          </ul>
                        </div>
                        <div className="flex justify-center pt-2">
                          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://www.instagram.com/elgalponcito.bc/?hl=es", "_blank")}>
                            <Instagram className="w-4 h-4" /> Visit Instagram
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* --- CASE 3: TEACHING ASSISTANT --- */}
                    {role.id === "assistant" && (
                      <div className="space-y-6">
                        <div className="p-5 bg-muted/30 rounded-xl border border-border">
                          <h4 className="font-bold mb-3 flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> Key Responsibilities</h4>
                          <ul className="space-y-2">
                            <li className="text-sm text-muted-foreground flex gap-2"><span>•</span> <b>Evaluation:</b> Grading Practical Works (TPs) to ensure students master core cost methodologies.</li>
                            <li className="text-sm text-muted-foreground flex gap-2"><span>•</span> <b>Guidance:</b> Providing classroom support and resolving complex student inquiries during practical sessions.</li>
                            <li className="text-sm text-muted-foreground flex gap-2"><span>•</span> <b>Strategic Vision:</b> Helping students apply a financial perspective to engineering decision-making[cite: 1984].</li>
                          </ul>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="p-4 border border-border rounded-xl">
                            <h5 className="text-xs font-bold uppercase text-primary mb-2 flex items-center gap-2"><Calculator className="w-3 h-3"/> Cost Management</h5>
                            <p className="text-xs text-muted-foreground">Detailed analysis of direct/indirect costs, variable/fixed costs, and Takt Time-based LEAN manufacturing integration.</p>
                          </div>
                          <div className="p-4 border border-border rounded-xl">
                            <h5 className="text-xs font-bold uppercase text-primary mb-2 flex items-center gap-2"><TrendingUp className="w-3 h-3"/> Financial KPIs</h5>
                            <p className="text-xs text-muted-foreground">Evaluation of ROI, Equity Return, and Economic Value Creation (EVA) for industrial environments.</p>
                          </div>
                        </div>
                        <div className="flex justify-center pt-2">
                          <Button variant="default" size="sm" className="gap-2" onClick={() => window.open("/documents/industrial_costs_syllabus.pdf", "_blank")}>
                            <FileText className="w-4 h-4" /> Download Full Syllabus (PDF)
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AccordionItem({ chapter, isOpen, onToggle }: { chapter: any, isOpen: boolean, onToggle: () => void }) {
  const Icon = chapter.icon
  return (
    <div className={`rounded-xl border ${isOpen ? chapter.borderColor : "border-border"}`}>
      <button onClick={onToggle} className="w-full p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${chapter.bgColor}`}><Icon className={`w-4 h-4 ${chapter.color}`} /></div>
          <span className="font-bold">{chapter.title}</span>
        </div>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-sm font-medium mb-3 text-foreground">{chapter.content.intro}</p>
          {chapter.content.details && (
            <ul className="space-y-2">
              {chapter.content.details.map((d: string, i: number) => <li key={i} className="text-sm text-muted-foreground flex gap-2"><span>•</span>{d}</li>)}
            </ul>
          )}
          {chapter.content.kpis && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              {chapter.content.kpis.map((k: any, i: number) => (
                <div key={i} className="p-3 bg-muted/50 rounded-lg">
                  <p className="text-xs font-bold uppercase text-muted-foreground">{k.label}</p>
                  <p className="text-lg font-bold text-primary">{k.value}</p>
                  <p className="text-xs text-muted-foreground">{k.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
