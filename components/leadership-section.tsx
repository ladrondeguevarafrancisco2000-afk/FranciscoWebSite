"use client"

import { useState } from "react"
import { 
  Award, Users, BookOpen, Plane, ChevronDown, 
  Target, TrendingUp, Heart, Sparkles, Mic, 
  Building2, Handshake, Instagram, Linkedin, Globe, FileText 
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
  const [activeCaeiiChapter, setActiveCaeiiChapter] = useState<string | null>(null)

  const roles = [
    {
      id: "caeii",
      title: "Coordinator of Sponsorships",
      organization: "XXIII CAEII Córdoba 2025",
      period: "Sep 2024 - Oct 2025",
      icon: Award,
      summary: "Led the partnership strategy for Argentina's largest Industrial Engineering student congress.",
      isExpandable: true
    },
    {
      id: "galponcito",
      title: "President",
      organization: "El Galponcito Community Center",
      period: "Dec 2022 - Aug 2025",
      icon: Users,
      summary: "Directed a volunteer group providing educational and social support to families in need.",
      description: [
        "Organized community initiatives and fundraising events.",
        "Managed weekly educational support programs."
      ]
    },
    {
      id: "assistant",
      title: "Teaching Assistant - Industrial Costs",
      organization: "National University of Córdoba",
      period: "Feb 2025 - Jul 2025",
      icon: BookOpen,
      summary: "Selected by official academic resolution to support course planning and student exercises.",
      description: [
        "Guided students through complex industrial cost analysis.",
        "Assisted in technical material development."
      ]
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
                  onClick={() => setExpandedCard(expandedCard === role.id ? null : role.id)}
                  variant="outline" 
                  className="gap-2 shrink-0"
                >
                  {expandedCard === role.id ? "Show less" : "View Details"}
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedCard === role.id ? "rotate-180" : ""}`} />
                </Button>
              </div>

              {/* --- Expanded Content --- */}
              {expandedCard === role.id && (
                <div className="px-6 pb-8 md:px-10 border-t border-border animate-in fade-in slide-in-from-top-4 duration-500">
                  {role.id === "caeii" ? (
                    /* Detailed CAEII Information with Chapters */
                    <div className="pt-8 space-y-6">
                      <p className="italic text-muted-foreground mb-6">
                        "Entered as a student with zero experience, left as a professional negotiating with industry giants." 
                      </p>
                      <div className="space-y-4">
                        {caeiiChapters.map((chapter) => (
                          <div key={chapter.id} className={`rounded-xl border ${activeCaeiiChapter === chapter.id ? chapter.borderColor : "border-border"}`}>
                            <button 
                              onClick={() => setActiveCaeiiChapter(activeCaeiiChapter === chapter.id ? null : chapter.id)}
                              className="w-full p-4 flex items-center justify-between"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${chapter.bgColor}`}><chapter.icon className={`w-4 h-4 ${chapter.color}`} /></div>
                                <span className="font-bold">{chapter.title}</span>
                              </div>
                              <ChevronDown className={`w-4 h-4 transition-transform ${activeCaeiiChapter === chapter.id ? "rotate-180" : ""}`} />
                            </button>
                            {activeCaeiiChapter === chapter.id && (
                              <div className="px-4 pb-4">
                                {chapter.content.details && (
                                  <ul className="space-y-2">
                                    {chapter.content.details.map((d, i) => <li key={i} className="text-sm text-muted-foreground flex gap-2"><span>•</span>{d}</li>)}
                                  </ul>
                                )}
                                {chapter.content.kpis && (
                                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                                    {chapter.content.kpis.map((k, i) => (
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
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://caeii.com.ar", "_blank")}><Globe className="w-4 h-4" /> Website</Button>
                        <Button variant="default" size="sm" className="gap-2" onClick={() => window.open("/documents/informe_final_caeii_2025.pdf", "_blank")}><FileText className="w-4 h-4" /> Download PDF Report</Button>
                      </div>
                    </div>
                  ) : (
                    /* Standard Description for other roles */
                    <div className="pt-8">
                      <ul className="space-y-3">
                        {role.description?.map((desc, i) => (
                          <li key={i} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{desc} [cite: 999, 1004]</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
