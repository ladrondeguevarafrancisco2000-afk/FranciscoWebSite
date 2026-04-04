"use client"

import { useState } from "react"
import { 
  Award, Users, BookOpen, Plane, ChevronDown, 
  Target, TrendingUp, Heart, Sparkles, Mic, 
  Building2, Handshake, Instagram, Linkedin, Globe, FileText 
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function LeadershipSection() {
  const [isCaeiiExpanded, setIsCaeiiExpanded] = useState(false)

  const leadership = [
    {
      title: "President",
      organization: "El Galponcito Community Center",
      subtitle: "Gestión Social e Impacto Comunitario",
      period: "Dec 2022 - Aug 2025",
      description: [
        "Lideré un grupo de voluntarios brindando apoyo escolar y social a niños y familias vulnerables.",
        "Gestioné recursos limitados y organicé eventos de recaudación, programas educativos y logísticos.",
        "Enfoque en responsabilidad social y liderazgo transformador."
      ],
      skills: ["Team Leadership", "Social Responsibility", "Event Organization", "Community Engagement"],
      icon: Users
    },
    {
      title: "Teaching Assistant - Industrial Costs",
      organization: "National University of Córdoba",
      subtitle: "Facultad de Ciencias Exactas, Físicas y Naturales",
      period: "Feb 2025 - Jul 2025",
      description: [
        "Seleccionado por resolución oficial de cátedra basada en mérito académico.",
        "Soporte en la planificación del curso y guía de estudiantes en ejercicios complejos de análisis de costos.",
        "Desarrollo de habilidades de comunicación asertiva y síntesis de conceptos técnicos."
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
      description: "Participé en programas internacionales (Bournemouth, UK y Paraparaumu, NZ). El intercambio en Nueva Zelanda fue otorgado por convocatoria de mérito, forjando mi adaptabilidad global."
    },
    {
      title: "Kitchen Assistant - Work and Travel",
      location: "Bordeaux, France",
      period: "Nov 2021 - Mar 2022",
      description: "Adaptabilidad extrema: busqué trabajo en un idioma que estaba aprendiendo y gestioné la disciplina en una cocina de alto volumen bajo presión constante."
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la Sección */}
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Leadership & Projects</h2>
        </div>

        {/* --- BLOQUE CAEII (EXPANDIBLE) --- */}
        <div className={`mb-12 rounded-2xl border transition-all duration-500 overflow-hidden ${
          isCaeiiExpanded ? "border-primary/40 bg-card shadow-lg" : "border-border bg-card/50 hover:border-primary/20"
        }`}>
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase">Flagship Experience</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Coordinator of Sponsorships — CAEII 2025</h3>
                <p className="text-primary font-medium mb-3">Congreso Argentino de Estudiantes de Ingeniería Industrial</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <span>Sep 2024 - Oct 2025</span>
                  <span>•</span>
                  <span>1,200 Estudiantes</span>
                </div>
              </div>
              <Button 
                onClick={() => setIsCaeiiExpanded(!isCaeiiExpanded)}
                variant="outline" 
                className="gap-2"
              >
                {isCaeiiExpanded ? "Ver menos" : "Ver historia completa"}
                <ChevronDown className={`w-4 h-4 transition-transform ${isCaeiiExpanded ? "rotate-180" : ""}`} />
              </Button>
            </div>

            <p className="text-muted-foreground leading-relaxed italic">
              "Esta fue, junto a la doble titulación, la experiencia más importante de mi vida. Entré como un estudiante sin experiencia y, gracias a una 'personalidad valiente', salí como un profesional que negoció cara a cara con los líderes de la industria."
            </p>

            {/* Contenido que aparece al expandir */}
            {isCaeiiExpanded && (
              <div className="mt-8 pt-8 border-t border-border animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <Target className="w-5 h-5 text-amber-500 mb-2" />
                    <h4 className="font-bold">El Desafío</h4>
                    <p className="text-sm text-muted-foreground">Recaudar €30.000 en un contexto económico complejo para financiar un evento de 1.200 personas.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <Heart className="w-5 h-5 text-rose-500 mb-2" />
                    <h4 className="font-bold">Estrategia</h4>
                    <p className="text-sm text-muted-foreground">Liderazgo de equipo centrado en la autonomía y una negociación basada en la pasión más que en la formalidad.</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                    <h4 className="font-bold">Resultados</h4>
                    <p className="text-sm text-muted-foreground">100% del presupuesto logrado, 22 empresas partners y presencia de CEOs de Renault y Ozonizer.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://www.instagram.com/caeii_oficial/", "_blank")}>
                    <Instagram className="w-4 h-4" /> Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://www.linkedin.com/company/aareii/", "_blank")}>
                    <Linkedin className="w-4 h-4" /> AArEII
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" onClick={() => window.open("https://caeii.com.ar/", "_blank")}>
                    <Globe className="w-4 h-4" /> Website
                  </Button>
                  <Button variant="default" size="sm" className="gap-2" onClick={() => window.open("/documents/informe_final_caeii_2025.pdf", "_blank")}>
                    <FileText className="w-4 h-4" /> Descargar Informe Final (PDF)
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Otros Roles de Liderazgo */}
        <div className="grid gap-6 mb-12">
          {leadership.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit h-fit"><IconComponent className="w-5 h-5 text-primary" /></div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">{item.period}</span>
                    </div>
                    <p className="text-primary font-medium text-sm mb-3">{item.organization}</p>
                    <ul className="space-y-1 mb-4">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-2"><span>•</span>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Experiencia Internacional */}
        <div className="flex items-center gap-3 mb-6 pt-4">
          <div className="p-2 bg-primary/10 rounded-lg"><Plane className="w-5 h-5 text-primary" /></div>
          <h3 className="text-xl font-semibold">International Experience</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {internationalExperience.map((item, index) => (
            <div key={index} className="p-5 bg-muted/30 rounded-xl border border-border">
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-primary text-xs font-medium mb-2 uppercase tracking-wide">{item.location} • {item.period}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
