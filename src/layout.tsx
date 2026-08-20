import { useState } from "react";
import { Menu, X, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import { navLinks } from "./data";
import { useScrolledPast } from "./hooks";
import type { Theme } from "./hooks";
import { EGMark, ThemeToggle } from "./ui";

/* ==================== Navbar ==================== */

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledPast(12);

  return (
    <header className={`navbar surface ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__row">
        <a href="#inicio" className="navbar__brand">
          <EGMark size={34} />
          <span className="navbar__brand-text">
            <span>EVELLYN</span>
            <span>GOMES</span>
          </span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contato" className="btn btn-outline btn-sm navbar__links--desktop">
            Contato
          </a>
          <button
            type="button"
            className="navbar__burger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile ${open ? "is-open" : ""}`}>
        <div className="navbar__mobile-inner">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
            Contato
          </a>
        </div>
      </div>
    </header>
  );
}

/* ==================== Footer ==================== */

export function Footer() {
  return (
    <footer id="contato" className="surface footer">
      <div className="container footer__row">
        <div className="footer__brand">
          <EGMark size={30} />
          <div>
            <div className="footer__name">EVELLYN GOMES</div>
            <div className="font-mono text-secondary footer__tagline">DESIGN • CODE • DIGITAL</div>
          </div>
        </div>

        <nav className="footer__links" aria-label="Links do rodapé">
          {navLinks
            .filter((link) => link.label !== "Contato")
            .map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
        </nav>

        <div className="footer__social">
          <a className="icon-circle icon-circle-sm" href="#" aria-label="Instagram">
            <Instagram size={15} />
          </a>
          <a className="icon-circle icon-circle-sm font-mono footer__behance" href="#" aria-label="Behance">
            Be
          </a>
          <a className="icon-circle icon-circle-sm" href="#" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a className="icon-circle icon-circle-sm" href="mailto:contato@evellyngomes.com" aria-label="E-mail">
            <Mail size={15} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="text-secondary">© 2026 Evellyn Gomes. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}

/* ==================== ScrollTop ==================== */

export function ScrollTop() {
  const show = useScrolledPast(500);

  return (
    <button
      type="button"
      className={`scroll-top ${show ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp size={18} />
    </button>
  );
}
