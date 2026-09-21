"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Sparkles, Briefcase, GraduationCap, Globe, ArrowDown } from "lucide-react"

const quickFacts = [
  {
    icon: Briefcase,
    label: "Currently",
    value: "Logistics Intern @ Pininfarina",
  },
  {
    icon: GraduationCap,
    label: "Studying",
    value: "M.Sc. Engineering & Management, PoliTo",
  },
  {
    icon: Globe,
    label: "Languages",
    value: "Spanish · Italian · English · French",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const } },
}

export function HeroSection() {
  return (
    <section className="relative bg-card border-b border-border overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Profile Photo */}
          <motion.div className="shrink-0" variants={item}>
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-primary/20 animate-pulse opacity-20" />
              <div className="relative w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden ring-2 ring-primary/10">
                <Image
                  src="/profile-avatar.jpg"
                  alt="Francisco Ladron de Guevara"
                  fill
                  sizes="(max-width: 768px) 128px, 192px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Available for New Challenges
                </span>
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance mb-2"
              variants={item}
            >
              Francisco Ladron de Guevara
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-primary font-semibold" variants={item}>
              Industrial &amp; Management Engineer — Logistics
            </motion.p>

            <motion.p
              className="mt-4 text-muted-foreground leading-relaxed max-w-2xl text-pretty text-lg"
              variants={item}
            >
              Industrial engineer working in logistics, with automotive experience at{" "}
              <b className="text-foreground">Renault</b> and <b className="text-foreground">Pininfarina</b>, and
              multi-plant international operations at <b className="text-foreground">Arcor</b>. I am used to the
              day-to-day of the role: SAP, delivery performance reporting, chasing the cost of urgent shipments, and
              being the contact point between plants, customers and internal teams. I work in four languages, I am
              based in Turin, and I am available immediately.
            </motion.p>

            {/* Quick facts */}
            <motion.div
              className="mt-8 grid sm:grid-cols-3 gap-3 text-left"
              variants={item}
            >
              {quickFacts.map((fact) => {
                const Icon = fact.icon
                return (
                  <div
                    key={fact.label}
                    className="p-3 rounded-xl border border-border bg-background/60 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        {fact.label}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground leading-snug">{fact.value}</p>
                  </div>
                )
              })}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground"
              variants={item}
            >
              <a
                href="mailto:ladrondeguevarafrancisco2000@gmail.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
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
            </motion.div>

            {/* Scroll cue */}
            <motion.div className="mt-10 flex justify-center md:justify-start" variants={item}>
              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Explore my experience
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
