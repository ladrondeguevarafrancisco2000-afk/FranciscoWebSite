import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-card border-b border-border overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          
          {/* Profile Photo */}
          <div className="shrink-0">
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/20 animate-pulse opacity-20" />
              <div className="relative w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden ring-2 ring-primary/10">
                <Image 
                  src="/profile.jpg" 
                  alt="Francisco Ladron de Guevara"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Available for New Challenges</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-2">
              Francisco Ladron de Guevara
            </h1>
            
            <p className="text-lg md:text-xl text-primary font-semibold">
              Master's Student in Engineering and Management
            </p>
            
            {/* New Summary: Focused on Commercial, Interpersonal, and Social Impact */}
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-pretty text-lg">
              I am an Engineering and Management student pursuing a double degree at <b>Politecnico di Torino</b> and the <b>National University of Córdoba</b>. 
              My passion lies at the intersection of technical excellence and human connection, with a strong focus on <b>commercial strategy</b>, <b>interpersonal relationships</b>, and <b>social impact</b>. 
              I am dedicated to leading with empathy and adaptability, leveraging my background in high-stakes negotiation and community leadership to create value that is both economically and socially sustainable.
            </p>

            {/* Contact Info */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium text-muted-foreground">
              <a href="mailto:ladrondeguevarafrancisco2000@gmail.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>ladrondeguevarafrancisco2000@gmail.com</span>
              </a>
              <a href="tel:+393520212601" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
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
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
