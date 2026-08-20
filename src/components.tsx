import { useEffect, useId, useRef, useState, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from "react";
import { ArrowRight, ArrowUp, ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, type Theme } from "./data";

export function EGMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`eg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--purple-light)" />
          <stop offset="100%" stopColor="var(--purple)" />
        </linearGradient>
        <mask id={`mask-${id}`}>
          <rect width="120" height="120" fill="white" />
          <rect x="70" y="40" width="30" height="18" rx="8" fill="black" />
        </mask>
      </defs>
      <circle cx="46" cy="60" r="36" fill="none" stroke="var(--lavender)" strokeWidth="14" strokeLinecap="round" strokeDasharray="176 60" transform="rotate(18 46 60)" />
      <circle cx="72" cy="60" r="38" fill={`url(#eg-${id})`} mask={`url(#mask-${id})`} />
    </svg>
  );
}

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

type ButtonProps = { children: ReactNode; variant?: "primary" | "outline"; size?: "sm" | "md"; href?: string; className?: string; } & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button({ children, variant = "primary", size = "md", href, className = "", ...props }: ButtonProps) {
  const classes = `btn btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${className}`.trim();
  const content = <>{children}<ArrowRight size={size === "sm" ? 14 : 16} /></>;
  return href
    ? <a href={href} className={classes} {...props as AnchorHTMLAttributes<HTMLAnchorElement>}>{content}</a>
    : <button className={classes} {...props as ButtonHTMLAttributes<HTMLButtonElement>}>{content}</button>;
}

export function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}>
      <span className={theme === "light" ? "active" : ""}><Sun size={14} /></span>
      <span className={theme === "dark" ? "active" : ""}><Moon size={14} /></span>
    </button>
  );
}

export function Navbar({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-row">
        <a href="#inicio" className="brand"><EGMark size={34} /><span>EVELLYN<br />GOMES</span></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <a className="btn btn-outline btn-sm desktop-only" href="#contato">Contato <ArrowRight size={14} /></a>
          <button className="menu-btn" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
    </header>
  );
}

export function ProjectCard({ project }: { project: (typeof import("./data").projects)[number] }) {
  return (
    <a href="#" className={`card project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-thumb" style={{ background: project.gradient }}>
        <span className="project-tag">{project.tag}</span><span className="project-arrow"><ArrowUpRight size={16} /></span>
      </div>
      <div className="project-body"><span className="mono">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p></div>
    </a>
  );
}

export function ServiceCard({ service }: { service: (typeof import("./data").services)[number] }) {
  const Icon = service.icon;
  return <article className="card service-card"><div className="service-top"><span className="mono">{service.number}</span><span className="service-icon"><Icon size={19} /></span></div><h3>{service.title}</h3><ul>{service.items.map(item => <li key={item}><i />{item}</li>)}</ul><span className="service-arrow"><ArrowUpRight size={16} /></span></article>;
}

export function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const onScroll = () => setShow(window.scrollY > 500); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <button className={`scroll-top ${show ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo" tabIndex={show ? 0 : -1}><ArrowUp size={18} /></button>;
}

export function Footer() {
  return <footer id="contato" className="footer"><div className="container footer-row"><div className="brand"><EGMark size={30} /><span>EVELLYN<br />GOMES</span></div><nav>{navLinks.filter(([label]) => label !== "Contato").map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="social"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Behance">Be</a><a href="#" aria-label="LinkedIn">in</a><a href="mailto:contato@evellyngomes.com" aria-label="E-mail">@</a></div></div><div className="footer-bottom">© 2026 Evellyn Gomes. Todos os direitos reservados.</div></footer>;
}
