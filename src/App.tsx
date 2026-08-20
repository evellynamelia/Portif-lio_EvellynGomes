import { useEffect, useState } from "react";
import { Compass, Instagram, Linkedin, Mail, Sparkles } from "lucide-react";
import {
  Button,
  EGMark,
  Footer,
  Navbar,
  ProjectCard,
  Reveal,
  ScrollTop,
  ServiceCard,
} from "./components";
import { process, projects, services, type Theme } from "./data";
import "./styles.css";

const THEME_KEY = "eg-portfolio-theme";

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(THEME_KEY);
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme((current) => (current === "dark" ? "light" : "dark"));
  return [theme, toggle] as const;
}

function SectionTitle({ text }: { text: string }) {
  return (
    <div className="eyebrow">
      <span>{text}</span>
      <Sparkles size={13} />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="dot-grid" />
      </div>

      <div className="container hero-grid">
        <Reveal>
          <span className="chip">Olá, eu sou a Evellyn 👋</span>
          <h1>
            EU TRANSFORMO
            <br />
            IDEIAS EM
            <br />
            <strong>EXPERIÊNCIAS.</strong>
          </h1>
          <p>
            Design, código e estratégia para criar experiências digitais que conectam,
            comunicam e geram resultados.
          </p>

          <div className="hero-actions">
            <Button href="#projetos">Ver projetos</Button>
            <Button href="#contato" variant="outline">Vamos conversar</Button>
          </div>

          <div className="social">
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Behance">Be</a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#contato" aria-label="E-mail"><Mail size={16} /></a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="hero-mark">
            <EGMark size={280} />
            <span>DESIGN · CODE · DIGITAL</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="container section">
      <Reveal><SectionTitle text="O que eu faço" /></Reveal>
      <div className="services-grid">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 70}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="surface divider">
      <div className="container section">
        <Reveal>
          <div className="section-head">
            <SectionTitle text="Projetos selecionados" />
            <a href="#" className="text-link">Ver todos →</a>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="processo" className="container section">
      <Reveal><SectionTitle text="Meu processo" /></Reveal>
      <div className="process-grid">
        {process.map(([number, title, Icon, description], index) => (
          <Reveal key={title} delay={index * 60}>
            <div className="process-step">
              <span className="process-icon"><Icon size={19} /></span>
              <span className="mono">{number}</span>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section id="experiencias" className="surface divider">
      <div className="container experience-row">
        <div className="experience-info">
          <span className="experience-icon"><Compass size={21} /></span>
          <div>
            <span className="mono">Experiências</span>
            <h3>Além do que eu crio, existe a jornada.</h3>
          </div>
        </div>
        <Button href="#contato" variant="outline" size="sm">Ver minha jornada</Button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="container section">
      <div className="about-grid">
        <Reveal>
          <div className="photo-placeholder">
            <span className="mono">Foto — placeholder</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="card about-card">
            <SectionTitle text="Sobre mim" />
            <p>
              Sou Evellyn Gomes, designer e desenvolvedora front-end apaixonada por criar
              experiências digitais que conectam pessoas, marcas e ideias. Transito entre design,
              tecnologia, marketing e audiovisual para transformar conceitos em projetos completos.
            </p>
            <Button href="#projetos" variant="outline" size="sm">Conhecer mais</Button>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="contact-card">
            <EGMark size={130} />
            <h3>VAMOS CRIAR ALGO INCRÍVEL JUNTOS?</h3>
            <p>Estou disponível para novos projetos, colaborações e ideias.</p>
            <Button href="mailto:contato@evellyngomes.com" variant="outline">Enviar mensagem</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Experiences />
        <About />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
