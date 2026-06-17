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
    "bg-touch-light ring-touch/20 group-hover:bg-touch-light group-hover:ring-touch/40",
} as const;

interface CardIconProps {
  icon: LucideIcon;
  variant?: keyof typeof iconVariants;
  className?: string;
}

/**
 * Uniform square icon box used across all section cards.
 * Defaults to the primary navy accent; pass `variant="accent"` for coral pink touches.
 */
export const CardIcon = ({ icon: Icon, variant = 'primary', className }: CardIconProps) => (
  <div
    className={cn(
      "rounded-xl p-3 ring-1 ring-inset transition-smooth group-hover:scale-110",
      iconVariants[variant],
      className,
    )}
  >
    <Icon className={cn("h-6 w-6", variant === 'accent' ? "text-touch" : "text-primary")} />
  </div>
);
