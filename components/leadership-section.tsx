"use client"

import { Award, Users, BookOpen, Plane } from "lucide-react"

const leadership = [
  {
    title: "Coordinator of Sponsorships",
    organization: "CAEII 2025",
    subtitle: "National Congress of Industrial Engineering Students",
    period: "Current",
    description: [
      "Leading a team of students to build partnerships for a 1,200-participant national congress.",
      "Managing negotiations and coordinating communication strategies to strengthen institutional relationships."
    ],
    skills: ["Leadership", "Negotiation", "Team Coordination", "Strategic Management"],
    icon: Award
  },
  {
    title: "President",
    organization: "El Galponcito Community Center",
    subtitle: "Volunteer Organization",
    period: "Dec 2022 - Aug 2025",
    description: [
      "Directed a volunteer group providing educational and social support to children and families in need.",
      "Organized community initiatives, fundraising events, and weekly programs focused on education."
    ],
    skills: ["Team Leadership", "Social Responsibility", "Event Organization", "Community Engagement"],
    icon: Users
  },
  {
    title: "Teaching Assistant",
    organization: "Industrial Costs",
    subtitle: "National University of Córdoba",
    period: "Feb 2025 - Jul 2025",
    description: [
      "Supported course planning and student guidance, assisting with exercises in Industrial Costs."
    ],
    skills: ["Academic Support", "Communication", "Organization", "Cost Analysis"],
    icon: BookOpen
  }
]

const internationalExperience = [
  {
    title: "Cultural & Educational Exchanges",
    location: "UK and New Zealand",
    period: "2016 - 2018",
    description: "Participated in international programs at Southbourne School of English (Bournemouth, UK) and Paraparaumu, New Zealand. Developed cross-cultural communication and adaptability skills."
  },
  {
    title: "Kitchen Assistant - Work and Travel",
    location: "Bordeaux, France",
    period: "Nov 2021 - Mar 2022",
    description: "Supported daily kitchen operations in a fast-paced restaurant, collaborating with an international team."
  }
]

export function LeadershipSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Leadership & Projects</h2>
        </div>

        {/* Leadership Roles */}
        <div className="grid gap-6 mb-12">
          {leadership.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div 
                key={index} 
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0 w-fit">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-primary font-medium">{item.organization}</p>
                        <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{item.period}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
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
              </div>
            )
          })}
        </div>

        {/* International Experience */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Plane className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">International Experience</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {internationalExperience.map((item, index) => (
            <div 
              key={index} 
              className="p-5 bg-muted/50 rounded-xl border border-border"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{item.period}</span>
              </div>
              <p className="text-sm text-primary font-medium mb-2">{item.location}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
