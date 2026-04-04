"use client"

import { useState } from "react"
import {
  Award,
  Users,
  Target,
  TrendingUp,
  ChevronDown,
  Handshake,
  Mic,
  Building2,
  Heart,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"

const storyChapters = [
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
        "Leading the fundraising efforts for a national congress expecting over 1,200 engineering students from across Argentina.",
        "Target: Secure a budget of €30,000 and partnerships with at least 18 leading companies.",
        "Challenge: Navigate economic instability, currency fluctuations, and corporate budget constraints while maintaining credibility as a student organization."
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
      pillars: [
        {
          title: "People-First Leadership",
          description: "I led my team by fostering autonomy and trust, transforming a group of students into a cohesive unit through brainstorming sessions and team-building activities."
        },
        {
          title: "Negotiation Beyond Formality",
          description: "We broke the rigidity of formal contracts to speak about passion and emotion. Persistence and sincerity were our keys to connecting with decision-makers at major industries."
        },
        {
          title: "Personal Evolution",
          description: "Starting with zero experience, I learned to negotiate every meeting and present myself as a professional in front of industry leaders. Each 'no' became a lesson; each 'yes' became fuel."
        }
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
      intro: "Exceeding every target despite unprecedented challenges.",
      kpis: [
        {
          icon: Target,
          label: "Budget Achieved",
          value: "100%",
          detail: "€30,000 raised despite economic crisis"
        },
        {
          icon: Building2,
          label: "Partnerships Closed",
          value: "24",
          detail: "22 private companies + 2 public entities (exceeding initial target)"
        },
        {
          icon: Mic,
          label: "World-Class Speakers",
          value: "Secured",
          detail: "CEO of Renault Argentina (Pablo Sibilla), CEO of Ozonizer (Gonzalo Fontaine)"
        },
        {
          icon: Handshake,
          label: "Company Fair",
          value: "12+",
          detail: "Companies present at the networking fair"
        }
      ],
      highlights: [
        "Managed the entire sponsorship lifecycle: prospecting, negotiation, contract signing, and relationship maintenance.",
        "Built lasting relationships that extend beyond the event, creating a foundation for future editions."
      ]
    }
  }
]

export function CAEIISection() {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null)

  const toggleChapter = (chapterId: string) => {
    setExpandedChapter(prev => prev === chapterId ? null : chapterId)
  }

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Flagship Leadership Experience</h2>
        </div>

        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-primary/10 mb-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative p-6 md:p-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">XXIII CAEII Córdoba 2025</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
              Leadership in Action: Sponsorship Coordination for 1,200 Students
            </h3>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed">
              National Congress of Industrial Engineering Students - The most significant leadership experience of my journey, alongside the Double Degree program.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
                <p className="text-2xl font-bold text-primary">€30K</p>
                <p className="text-sm text-muted-foreground">Budget Raised</p>
              </div>
              <div className="p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Partners</p>
              </div>
              <div className="p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
                <p className="text-2xl font-bold text-primary">1,200+</p>
                <p className="text-sm text-muted-foreground">Attendees</p>
              </div>
              <div className="p-4 bg-card/80 backdrop-blur-sm rounded-xl border border-border">
                <p className="text-2xl font-bold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Company Fair</p>
              </div>
            </div>

            {/* Role Info */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Coordinator of Sponsorships</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">Mar 2024 - Oct 2025</span>
            </div>
          </div>
        </div>

        {/* Interactive Storytelling */}
        <div className="space-y-4">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            The Story Behind the Numbers
          </p>

          {storyChapters.map((chapter) => {
            const IconComponent = chapter.icon
            const isExpanded = expandedChapter === chapter.id

            return (
              <div
                key={chapter.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded ? `${chapter.borderColor} bg-card` : "border-border bg-card hover:border-primary/20"
                }`}
              >
                {/* Chapter Header */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg ${chapter.bgColor}`}>
                      <IconComponent className={`w-5 h-5 ${chapter.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{chapter.title}</h4>
                      <p className="text-sm text-muted-foreground">{chapter.subtitle}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Chapter Content */}
                <div
                  className={`grid transition-all duration-300 ${
                    isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-0">
                      <div className={`p-4 rounded-lg ${chapter.bgColor} border ${chapter.borderColor} mb-4`}>
                        <p className="text-sm font-medium text-foreground">{chapter.content.intro}</p>
                      </div>

                      {/* Challenge Chapter */}
                      {chapter.id === "challenge" && chapter.content.details && (
                        <ul className="space-y-3">
                          {chapter.content.details.map((detail, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                              <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${chapter.color.replace("text-", "bg-")}`} />
                              <span className="leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Strategy Chapter */}
                      {chapter.id === "strategy" && chapter.content.pillars && (
                        <div className="space-y-4">
                          {chapter.content.pillars.map((pillar, i) => (
                            <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border">
                              <h5 className="font-medium text-foreground mb-2">{pillar.title}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Results Chapter */}
                      {chapter.id === "results" && chapter.content.kpis && (
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-3">
                            {chapter.content.kpis.map((kpi, i) => {
                              const KpiIcon = kpi.icon
                              return (
                                <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border">
                                  <div className="flex items-center gap-2 mb-2">
                                    <KpiIcon className={`w-4 h-4 ${chapter.color}`} />
                                    <span className="text-xs font-medium text-muted-foreground uppercase">{kpi.label}</span>
                                  </div>
                                  <p className={`text-xl font-bold ${chapter.color} mb-1`}>{kpi.value}</p>
                                  <p className="text-sm text-muted-foreground">{kpi.detail}</p>
                                </div>
                              )
                            })}
                          </div>

                          {chapter.content.highlights && (
                            <div className="pt-3 border-t border-border">
                              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Key Highlights</p>
                              <ul className="space-y-2">
                                {chapter.content.highlights.map((highlight, i) => (
                                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                    <span className="text-emerald-500 shrink-0">✓</span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-8 p-6 bg-card rounded-xl border border-border text-center">
          <p className="text-muted-foreground mb-4">
            This experience shaped my understanding of leadership, negotiation, and the power of genuine human connection in professional contexts.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open("https://caeii.com.ar", "_blank")}
          >
            <Award className="w-4 h-4" />
            Visit CAEII Website
          </Button>
        </div>
      </div>
    </section>
  )
}
