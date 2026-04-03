"use client"

import { Mail, Phone, MapPin, Linkedin, User } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-card border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Profile Photo Placeholder */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-muted border-4 border-primary/10 flex items-center justify-center shadow-lg">
              <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground/50" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Francisco Ladron de Guevara
            </h1>
            <p className="mt-2 text-lg md:text-xl text-primary font-medium">
              Industrial & Management Engineer
            </p>
            
            {/* Summary */}
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-pretty">
              Industrial and Management Engineering student pursuing a double degree between the 
              National University of Córdoba and Politecnico di Torino. Strongly oriented toward 
              management, strategy, and leadership within industrial environments. Recognized for 
              teamwork, adaptability, and the ability to lead cross-functional teams to achieve 
              continuous improvement and organizational goals.
            </p>

            {/* Contact Info */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <a 
                href="mailto:ladrondeguevarafrancisco2000@gmail.com" 
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">ladrondeguevarafrancisco2000@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a 
                href="tel:+393520212601" 
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+39 352 021 2601</span>
              </a>
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Turin, Italy</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/franciscoladrondeguevara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
