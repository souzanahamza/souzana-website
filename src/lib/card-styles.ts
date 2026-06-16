/**
 * Canonical section-card shell shared across every portfolio section.
 * Keeps cards visually consistent (gradient, radius, hover lift + glow).
 * Add layout-specific classes (grid `flex h-full flex-col`, `sticky`, etc.)
 * per usage via `cn(sectionCardClass, ...)`.
 */
export const sectionCardClass =
  "group relative overflow-hidden rounded-2xl border-border/50 gradient-card p-8 shadow-card transition-smooth hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow";
