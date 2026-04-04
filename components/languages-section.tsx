"use client"

import { Globe, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const languages = [
  {
    name: "Spanish",
    level: "Native",
    proficiency: 100,
    flag: "🇦🇷"
  },
  {
    name: "English",
    level: "IELTS 6.5 (B2)",
    proficiency: 75,
    flag: "🇬🇧",
    certificate: "/documents/IELTScertificate.pdf" // Path to your file
  },
  {
    name: "Italian",
    level: "B2",
    proficiency: 70,
    flag: "🇮🇹"
  },
  {
    name: "French",
    level: "DELF A2",
    proficiency: 35,
    flag: "🇫🇷"
  }
]

export function LanguagesSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sans uppercase tracking-tight">Languages</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {languages.map((lang, index) => (
            <div 
              key={index} 
              className="p-5 bg-card rounded-xl border border-border hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-label={lang.name}>
                    {lang.flag}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{lang.name}</h3>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${lang.proficiency}%` }}
                  />
                </div>
              </div>

              {/* Certificate Button (Only for English) */}
              {lang.certificate && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-2 gap-2 text-xs h-8"
                  onClick={() => window.open(lang.certificate, "_blank")}
                >
                  <FileText className="w-3.5 h-3.5" />
                  View Certificate
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
