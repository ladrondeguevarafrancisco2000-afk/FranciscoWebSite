import type { ReactNode } from "react"

export function SectionHeading({
  icon,
  title,
  subtitle,
}: {
  icon: ReactNode
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg shrink-0">{icon}</div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{title}</h2>
      </div>
      {subtitle && (
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl text-pretty">{subtitle}</p>
      )}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />
    </div>
  )
}
