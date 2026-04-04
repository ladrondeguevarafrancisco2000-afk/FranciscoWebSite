"use client"

import { useState } from "react"
import { Plane, ChevronDown, FileText, Globe, Footprints, Bike, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InternationalSection() {
  const [isFranceExpanded, setIsFranceExpanded] = useState(false)

  const exchanges = {
    title: "Cultural & Educational Exchanges",
    period: "2016 - 2018",
    location: "UK and New Zealand",
    description: "Participated in international programs at Southbourne School of English (Bournemouth, UK) and Paraparaumu, New Zealand. Developed cross-cultural communication and adaptability skills."
  }

  const workAndTravel = {
    title: "Kitchen Assistant - Work and Travel",
    period: "Nov 2021 - Mar 2022",
    location: "Bordeaux, France",
    summary: "Supported daily kitchen operations in a fast-paced restaurant, collaborating with an international team."
  }

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Plane className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-3xl font-bold font-sans uppercase tracking-tight">International Experience</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          
          {/* --- CARD 1: EXCHANGES --- */}
          <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{exchanges.title}</h3>
                <p className="text-primary font-medium text-sm">{exchanges.location}</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{exchanges.period}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {exchanges.description}
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => window.open("/documents/nz_certificate.pdf", "_blank")}
            >
              <FileText className="w-4 h-4" /> Download Certificate (NZ)
            </Button>
          </div>

          {/* --- CARD 2: FRANCE (EXPANDABLE) --- */}
          <div className={`p-6 bg-card rounded-2xl border transition-all duration-300 ${isFranceExpanded ? "border-primary/40 shadow-lg" : "border-border hover:border-primary/20"}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">{workAndTravel.title}</h3>
                <p className="text-primary font-medium text-sm">{workAndTravel.location}</p>
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{workAndTravel.period}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {workAndTravel.summary}
            </p>
            
            <Button 
              onClick={() => setIsFranceExpanded(!isFranceExpanded)}
              variant="ghost" 
              size="sm" 
              className="gap-2 p-0 h-auto font-bold text-primary hover:bg-transparent"
            >
              {isFranceExpanded ? "Read less" : "Read the Human Story"}
              <ChevronDown className={`w-4 h-4 transition-transform ${isFranceExpanded ? "rotate-180" : ""}`} />
            </Button>

            {isFranceExpanded && (
              <div className="mt-6 pt-6 border-t border-border animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  <div className="flex gap-3">
                    <Trophy className="w-5 h-5 text-amber-500 shrink-0" />
                    <p>
                      In 2021, inspired by Argentina's Copa América win, I dreamed of reaching the 2022 Qatar World Cup. As a student with no savings, I decided to spend my summer break working in <b>Bordeaux, France</b>, staying with a cousin to save every euro possible.
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Footprints className="w-5 h-5 text-blue-500 shrink-0" />
                    <p>
                      Language was my biggest hurdle. Despite high school French and a crash course, I arrived knowing very little. Armed with a cousin's speech, I walked an average of <b>25km per day</b> through the streets of Bordeaux, handing out CVs to every bar and restaurant I found.
                    </p>
                  </div>

                  <div className="p-4 bg-muted/50 rounded-xl italic border-l-4 border-primary">
                    "My nervous introduction 'Avez-vous boison de quelqu’un?' actually asked managers if they <b>'drank anyone'</b> instead of if they <b>'needed anyone'</b> (besoin). After two weeks of strange looks, I landed a job at a hotel restaurant, only realizing my mistake when a colleague finally offered me a 'boison' (drink)!"
                  </div>

                  <div className="flex gap-3">
                    <Bike className="w-5 h-5 text-emerald-500 shrink-0" />
                    <p>
                      Though I eventually spent my savings traveling across Europe and didn't make it to Qatar, I returned to Argentina and bought a motorcycle—a loyal companion for years to come. In the end, I got to celebrate our World Cup victory at home, a memory I wouldn't trade for anything.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
