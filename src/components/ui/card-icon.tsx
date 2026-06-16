import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * Accent top bar revealed on card hover. Render as the first child inside a
 * `group relative overflow-hidden` card (see `sectionCardClass`).
 */
export const CardAccentBar = () => (
  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 gradient-accent transition-smooth group-hover:scale-x-100" />
);

const iconVariants = {
  primary:
    "bg-primary/10 ring-primary/10 group-hover:bg-primary/15 group-hover:ring-primary/30",
  accent:
    "bg-accent/10 ring-accent/10 group-hover:bg-accent/15 group-hover:ring-accent/30",
} as const;

interface CardIconProps {
  icon: LucideIcon;
  variant?: keyof typeof iconVariants;
  className?: string;
}

/**
 * Uniform square icon box used across all section cards.
 * Defaults to the primary (blue) accent; pass `variant="accent"` for purple.
 */
export const CardIcon = ({ icon: Icon, variant = 'primary', className }: CardIconProps) => (
  <div
    className={cn(
      "rounded-xl p-3 ring-1 ring-inset transition-smooth group-hover:scale-110",
      iconVariants[variant],
      className,
    )}
  >
    <Icon className={cn("h-6 w-6", variant === 'accent' ? "text-accent" : "text-primary")} />
  </div>
);
