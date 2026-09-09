import { useState } from "react";
import { Menu, X, Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import { navLinks } from "./data";
import { useScrolledPast } from "./hooks";
import type { Theme } from "./hooks";
import { EGMark, ThemeToggle } from "./ui";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolledPast(12);

  return (
    <header className={`site-header page-surface ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__content">
        <a href="#inicio" className="site-header__brand" aria-label="Ir para o início">
          <img
            src="/favicon.svg"
            alt="Evellyn Gomes"
            className="site-header__logo"
          />

          <span className="site-header__brand-name">
            <span>EVELLYN</span>
            <span>GOMES</span>
          </span>
        </a>

        <nav className="site-header__navigation site-header__navigation--desktop" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="https://wa.me/5581997208697" className="btn btn-outline btn-sm site-header__navigation--desktop">
            Contato
          </a>
          <button
            type="button"
            className="site-header__menu-button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={`site-header__mobile-menu ${open ? "is-open" : ""}`}>
        <div className="site-header__mobile-menu-content">
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

export function Footer() {
  return (
    <footer id="contato" className="page-surface site-footer">
      <div className="container site-footer__content">
        <div className="site-footer__brand">
          <EGMark size={30} />
          <div>
            <div className="site-footer__name">EVELLYN GOMES</div>
            <div className="font-poppins text-secondary site-footer__tagline">DESIGN • CODE • DIGITAL</div>
          </div>
        </div>  

        <nav className="site-footer__navigation" aria-label="Links do rodapé">
          {navLinks
            .filter((link) => link.label !== "Contato")
            .map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
        </nav>

        <div className="site-footer__social-links">
          <a className="icon-circle icon-circle-sm" href="https://www.instagram.com/evyngomes/" aria-label="Instagram">
            <Instagram size={15} />
          </a>
          <a className="icon-circle icon-circle-sm font-poppins site-footer__behance-link" href="https://www.behance.net/evellynamélia" aria-label="Behance">
            Be
          </a>
          <a className="icon-circle icon-circle-sm" href="https://br.linkedin.com/in/evellynamélia" aria-label="LinkedIn">
            <Linkedin size={15} />
          </a>
          <a className="icon-circle icon-circle-sm" href="mailto:evellynamelia2005@gmail.com" aria-label="E-mail">
            <Mail size={15} />
          </a>
        </div>
      </div>

      <div className="site-footer__copyright">
        <span className="text-secondary">© 2026 Evellyn Gomes. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}


export function ScrollTop() {
  const show = useScrolledPast(500);

  return (
    <button
      type="button"
      className={`back-to-top ${show ? "is-visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      tabIndex={show ? 0 : -1}
    >
      <ArrowUp size={18} />
    </button>
  );
}
