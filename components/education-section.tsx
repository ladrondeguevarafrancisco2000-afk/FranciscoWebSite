"use client"

import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Politecnico di Torino",
    degree: "Master Degree in Engineering and Management",
    location: "Turin, Italy",
    period: "Sep 2025 - Present",
    details: "Double Degree Program - English Course",
    highlight: true
  },
  {
    institution: "National University of Córdoba",
    degree: "Industrial Engineering",
    location: "Córdoba, Argentina",
    period: "Feb 2020 - Present",
    details: "GPA: 7.8/10",
    highlight: true
  }
]

export function EducationSection() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-2 bg-primary/10 rounded-lg">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education</h2>
        </div>

        {/* Double Degree Banner */}
        <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <p className="text-center text-primary font-medium">
            🎓 Double Degree Program between Argentina & Italy
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary font-medium mb-2">{edu.institution}</p>
              <p className="text-sm text-muted-foreground">{edu.location}</p>
              {edu.details && (
                <p className="mt-3 text-sm font-medium text-muted-foreground bg-muted px-3 py-1.5 rounded-md inline-block">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
