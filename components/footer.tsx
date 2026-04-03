"use client"

import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Francisco Ladron de Guevara</h2>
          <p className="text-background/70">Industrial & Management Engineer</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a 
            href="mailto:ladrondeguevarafrancisco2000@gmail.com" 
            className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>ladrondeguevarafrancisco2000@gmail.com</span>
          </a>
          <a 
            href="tel:+393520212601" 
            className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+39 352 021 2601</span>
          </a>
          <div className="inline-flex items-center gap-2 text-background/70">
            <MapPin className="w-4 h-4" />
            <span>Via Madama Cristina 1, Turin, Italy</span>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <a 
            href="https://www.linkedin.com/in/franciscoladrondeguevara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-full font-medium hover:bg-background/90 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Francisco Ladron de Guevara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
