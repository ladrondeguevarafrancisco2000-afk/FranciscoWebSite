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
  Sparkles,
  BookOpen,
  Plane,
  Instagram,
  Linkedin,
  Globe,
  FileText
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
        "Led fundraising for a national congress for 1,200 engineering students across Argentina[cite: 994, 995].",
        "Target: Secure a €30,000 budget and partnerships with at least 18 leading companies.",
        "Obstacle: Navigating extreme economic instability and corporate budget constraints while maintaining organizational credibility."
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
      intro: "Leadership centered on people, not processes. Authenticity over formality[cite: 1194, 1227].",
      pillars: [
        {
          title: "People-First Leadership",
          description: "I led my team by fostering autonomy and trust, transforming a group of students into a cohesive unit through constant brainstorming and team-building[cite: 1226, 1227]."
        },
        {
          title: "Negotiation Beyond Formality",
          description: "We broke the rigidity of formal contracts to speak about passion and emotion. Persistence and sincerity were our keys to connecting with decision-makers at major industries[cite: 1285, 1286]."
        },
        {
          title: "Personal Evolution",
          description: "Starting with zero experience, I evolved into a professional negotiator. As my team noted, my 'brave personality' allowed us to close deals with industry giants[cite: 1222, 1224]."
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
      intro: "Exceeding every target through strategic management and team dedication[cite: 996].",
      kpis: [
        {
          icon: Target,
          label: "Budget Achieved",
          value: "100%",
          detail: "€30,000 raised despite the economic crisis."
        },
        {
          icon: Building2,
          label: "Partnerships Closed",
          value: "24",
          detail: "22 private companies + 2 public entities[cite: 1073, 1074, 1082]."
        },
        {
          icon: Mic,
          label: "Top-Tier Speakers",
          value: "Secured",
          detail: "CEOs of Renault Argentina and Ozonizer[cite: 1120, 1122]."
        },
        {
          icon: Handshake,
          label: "Company Fair",
          value: "12+",
          detail: "Industry leaders including Arcor, Techint, and Stellantis[cite: 1074, 1082, 1083]."
        }
      ]
    }
  }
]

export function LeadershipSection() {
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null)

  const otherLeadership = [
    {
      title: "President",
      organization: "El Galponcito Community Center",
      period: "Dec 2022 - Aug 2025",
      description: "Directed a volunteer group providing educational and social support to children and families. Managed fundraising and community initiatives[cite: 997, 1000].",
      icon: Users
    },
    {
      title: "Teaching Assistant - Industrial Costs",
      organization: "National University of Córdoba",
      period: "Feb 2025 - Jul 2025",
      description: "Selected by official resolution to support course planning and student guidance in complex cost analysis exercises[cite: 1001, 1004].",
      icon: BookOpen
    }
  ]

  const international = [
    {
      title: "Kitchen Assistant - Work and Travel",
      location: "Bordeaux, France",
      period: "Nov 2021 - Mar 2022",
      description: "Extreme adaptability: Job hunting in a new language and maintaining discipline in a high-pressure environment[cite: 1006, 1010]."
    },
    {
      title: "Cultural Exchange - New Zealand",
      location: "Paraparaumu, NZ",
      period: "2018",
      description: "Granted through a merit-based call for applications for an immersive cultural stay[cite: 1011, 1012]."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sans uppercase tracking-tight">Leadership & Projects</h2>
        </div>

        {/* --- CAEII FLAGSHIP CARD --- */}
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-primary/10 mb-8">
          <div className="relative p-6 md:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">XXIII CAEII Córdoba 2025</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-sans">
              Leadership in Action: Sponsorship Coordination for 1,200 Students
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl italic">
              "The most significant leadership experience of my journey. I entered as a student and left as a professional, negotiating face-to-face with industry leaders[cite: 1222, 1224]."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-card/80 rounded-xl border border-border text-center">
                <p className="text-2xl font-bold text-primary">€30K</p>
                <p className="text-xs text-muted-foreground uppercase">Budget Raised</p>
              </div>
              <div className="p-4 bg-card/80 rounded-xl border border-border text-center">
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-xs text-muted-foreground uppercase">Partners</p>
              </div>
              <div className="p-4 bg-card/80 rounded-xl border border-border text-center">
                <p className="text-2xl font-bold text-primary">1,200+</p>
                <p className="text-xs text-muted-foreground uppercase">Attendees</p>
              </div>
              <div className="p-4 bg-card/80 rounded-xl border border-border text-center">
                <p className="text-2xl font-bold text-primary">Sep 24</p>
                <p className="text-xs text-muted-foreground uppercase">Start Date</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- STORY CHAPTERS --- */}
        <div className="space-y-4 mb-16">
          {storyChapters.map((chapter) => (
            <div key={chapter.id} className={`rounded-xl border transition-all duration-300 ${expandedChapter === chapter.id ? chapter.borderColor + " bg-card" : "border-border bg-card/50"}`}>
              <button onClick={() => setExpandedChapter(expandedChapter === chapter.id ? null : chapter.id)} className="w-full p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-2.5 rounded-lg ${chapter.bgColor}`}><chapter.icon className={`w-5 h-5 ${chapter.color}`} /></div>
                  <div className="text-left">
                    <h4 className="font-bold text-foreground">{chapter.title}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{chapter.subtitle}</p>
                  </div>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedChapter === chapter.id ? "rotate-180" : ""}`} />
              </button>
              {expandedChapter === chapter.id && (
                <div className="px-5 pb-5 pt-0 animate-in fade-in slide-in-from-top-2">
                  <div className={`p-4 rounded-lg ${chapter.bgColor} mb-4`}><p className="text-sm font-medium">{chapter.content.intro}</p></div>
                  {chapter.id === "results" ? (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {chapter.content.kpis?.map((kpi, i) => (
                        <div key={i} className="p-4 bg-muted/50 rounded-lg border border-border">
                          <div className="flex items-center gap-2 mb-1"><kpi.icon className="w-4 h-4 text-primary" /><span className="text-xs font-bold uppercase">{kpi.label}</span></div>
                          <p className="text-xl font-bold text-primary">{kpi.value}</p>
                          <p className="text-xs text-muted-foreground">{kpi.detail}</p>
                        </div>
                      ))}
                    </div>
                  ) : chapter.id === "strategy" ? (
                    <div className="space-y-3">
                      {chapter.content.pillars?.map((p, i) => (
                        <div key={i} className="p-4 bg-muted/30 rounded-lg border border-border">
                          <h5 className="text-sm font-bold mb-1">{p.title}</h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      {chapter.content.details?.map((d, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground"><span>•</span>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* --- LINKS & DOWNLOADS --- */}
        <div className="flex flex-wrap gap-3 mb-16 justify-center">
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://www.instagram.com/caeii_oficial/", "_blank")}><Instagram className="w-4 h-4" /> Instagram</Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://www.linkedin.com/company/aareii/", "_blank")}><Linkedin className="w-4 h-4" /> AArEII</Button>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://caeii.com.ar/", "_blank")}><Globe className="w-4 h-4" /> Website</Button>
          <Button variant="default" size="sm" className="gap-2" onClick={() => window.open("/documents/informe_final_caeii_2025.pdf", "_blank")}><FileText className="w-4 h-4" /> Download Report (PDF)</Button>
        </div>

        {/* --- OTHER LEADERSHIP --- */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {otherLeadership.map((item, i) => (
            <div key={i} className="p-6 bg-card rounded-xl border border-border hover:border-primary/20 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg"><item.icon className="w-5 h-5 text-primary" /></div>
                <div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-sm text-primary">{item.organization}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              <p className="mt-4 text-xs font-bold text-muted-foreground uppercase">{item.period}</p>
            </div>
          ))}
        </div>

        {/* --- INTERNATIONAL --- */}
        <div className="pt-8 border-t border-border">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg"><Plane className="w-5 h-5 text-primary" /></div>
            <h3 className="text-xl font-bold">International Experience</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {international.map((item, i) => (
              <div key={i} className="p-5 bg-muted/30 rounded-xl border border-border">
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-primary font-bold mb-2">{item.location} • {item.period}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
