import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import { useId } from "react";
import { ArrowRight, Sun, Moon } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useReveal } from "./hooks";
import type { Theme } from "./hooks";

/* ==================== Button ====================
   Botão reutilizável que renderiza como <a> quando recebe `href`,
   ou como <button> caso contrário. */

type Variant = "primary" | "outline" | "onlight";
type Size = "md" | "sm";

interface SharedButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon | null;
}

type ButtonProps =
  | (SharedButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (SharedButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon = ArrowRight,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`.trim();
  const content = (
    <>
      {children}
      {Icon && <Icon size={size === "sm" ? 14 : 16} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

/* ==================== EGMark ====================
   O monograma "EG" — assinatura visual do site. Um arco lavanda ("E") se
   entrelaça com um disco em gradiente roxo com um recorte ("G"). Reusado
   em várias escalas: navbar, hero, footer e fundos decorativos. */

interface EGMarkProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function EGMark({ size = 40, animated = false, className = "" }: EGMarkProps) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={`${animated ? "anim-float-slow" : ""} ${className}`.trim()}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`egfill-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--purple-light)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
        <mask id={`egmask-${uid}`}>
          <rect x="0" y="0" width="120" height="120" fill="white" />
          <rect x="70" y="40" width="30" height="18" rx="8" fill="black" />
        </mask>
      </defs>
      <circle
        cx="46"
        cy="60"
        r="36"
        fill="none"
        stroke="var(--lavender)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray="176 60"
        transform="rotate(18 46 60)"
      />
      <g mask={`url(#egmask-${uid})`}>
        <circle cx="72" cy="60" r="38" fill={`url(#egfill-${uid})`} />
      </g>
    </svg>
  );
}

/* ==================== Reveal ====================
   Envolve o conteúdo e aplica a transição de fade + subida quando ele
   entra na viewport (ver hook useReveal). */

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: RevealProps) {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

/* ==================== ThemeToggle ====================
   Alternância claro/escuro exibida na navbar. */

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      <span className={`theme-toggle__option ${theme === "light" ? "is-active" : ""}`}>
        <Sun size={14} />
      </span>
      <span className={`theme-toggle__option ${theme === "dark" ? "is-active" : ""}`}>
        <Moon size={14} />
      </span>
    </button>
  );
}
