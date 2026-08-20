import { useId } from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Compass,
} from "lucide-react";
import { services, projects, processSteps, type Project, type Service, type ProcessStepData } from "./data";
import { Button, EGMark, Reveal } from "./ui";

/* ============================================================ */
/*  HERO                                                         */
/* ============================================================ */

function OrbitLabel() {
  const uid = useId().replace(/:/g, "");

  return (
    <svg width="150" height="150" viewBox="0 0 150 150" className="anim-spin-slow" aria-hidden="true">
      <defs>
        <path id={`orbit-${uid}`} d="M 75,75 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
      </defs>
      <circle cx="75" cy="75" r="60" fill="none" stroke="var(--border)" strokeWidth="1.4" strokeDasharray="2 6" />
      <text fill="var(--text-secondary)" fontSize="9" letterSpacing="2" className="font-mono">
        <textPath href={`#orbit-${uid}`} startOffset="0%">
          DESIGN • CODE • DIGITAL • DESIGN • CODE • DIGITAL •
        </textPath>
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__grid">
        <Reveal>
          <span className="chip font-mono">Olá, eu sou a Evellyn 👋</span>
          <h1 className="hero__title">
            EU TRANSFORMO
            <br />
            IDEIAS EM
            <br />
            <span className="text-purple">EXPERIÊNCIAS.</span>
          </h1>
          <p className="text-secondary hero__subtitle">
            Design, código e estratégia para criar experiências digitais que conectam, comunicam e
            geram resultados.
          </p>
          <div className="hero__actions">
            <Button variant="primary" href="#projetos">
              Ver projetos
            </Button>
            <Button variant="outline" href="#contato">
              Vamos conversar
            </Button>
          </div>
          <div className="hero__social">
            <span className="font-mono text-secondary hero__social-label">REDES SOCIAIS</span>
            <div className="hero__social-icons">
              <a className="icon-circle" href="https://www.instagram.com/evyngomes/" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a className="icon-circle font-mono hero__behance" href="https://www.behance.net/evellynamélia" aria-label="Behance">
                Be
              </a>
              <a className="icon-circle" href="https://br.linkedin.com/in/evellynamélia" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a className="icon-circle" href="mailto:evellynamelia2005@gmail.com" aria-label="E-mail">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="hero__visual">
            <div className="dot-grid anim-pulse hero__dotgrid" aria-hidden="true" />
            <div className="anim-float hero__sparkle" aria-hidden="true">
              <Sparkles size={20} className="text-purple" />
            </div>
            <div className="hero__orbit">
              <OrbitLabel />
            </div>
            <EGMark size={280} animated />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  SERVICES                                                     */
/* ============================================================ */

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="card service-card">
      <div className="service-card__top">
        <span className="font-mono text-secondary">{service.number}</span>
        <div className="service-card__icon">
          <Icon size={19} />
        </div>
      </div>

      <h3 className="service-card__title">{service.title}</h3>

      <ul className="service-card__list">
        {service.items.map((item) => (
          <li key={item}>
            <span className="service-card__dot" />
            {item}
          </li>
        ))}
      </ul>

      <div className="service-card__arrow">
        <div className="icon-circle service-card__arrow-circle">
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="container section">
      <Reveal>
        <div className="eyebrow">
          <span>O que eu faço</span>
          <Sparkles size={13} />
        </div>
      </Reveal>

      <div className="services__grid">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 90}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================ */
/*  PROJECTS                                                     */
/* ============================================================ */

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url ?? "#"}
      className={`card project-card ${project.featured ? "project-card--featured" : ""}`}
    >
      <div className="project-card__thumb">
        {project.image ? (
          <img src={project.image} alt={project.name} className="project-card__thumb-fill" />
        ) : (
          <div
            className="project-card__thumb-fill project-card__thumb-fill--gradient"
            style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
            aria-hidden="true"
          />
        )}
        <span className="project-card__tag font-mono">{project.tag}</span>
        <span className="project-card__view">
          <ArrowUpRight size={16} />
        </span>
      </div>

      <div className="project-card__body">
        <span className="project-card__category font-mono">{project.category}</span>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description text-secondary">{project.description}</p>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projetos" className="surface divider-y">
      <div className="container section">
        <Reveal>
          <div className="projects__header">
            <div className="eyebrow">
              <span>Projetos selecionados</span>
              <Sparkles size={13} />
            </div>
            <a href="#" className="nav-link font-mono projects__all-link">
              Ver todos os projetos <ArrowRight size={13} />
            </a>
          </div>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 90}
              className={project.featured ? "projects__item--featured" : ""}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  PROCESS                                                       */
/* ============================================================ */

function ProcessStep({ step }: { step: ProcessStepData }) {
  const Icon = step.icon;

  return (
    <div className="process-step">
      <div className="process-step__icon">
        <Icon size={19} />
      </div>
      <div>
        <span className="font-mono text-secondary process-step__number">{step.number}</span>
        <h4 className="process-step__title">{step.title}</h4>
        <p className="text-secondary process-step__description">{step.description}</p>
      </div>
    </div>
  );
}

export function Process() {
  return (
    <section id="processo" className="container section">
      <Reveal>
        <div className="eyebrow">
          <span>Meu processo</span>
          <Sparkles size={13} />
        </div>
      </Reveal>

      <div className="process">
        <div className="process__line" aria-hidden="true" />
        <div className="process__grid">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 90}>
              <ProcessStep step={step} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  EXPERIENCES                                                   */
/*  Chamada compacta apontando para uma futura página dedicada,   */
/*  onde hackathons, palestras, certificações etc. vão morar.     */
/* ============================================================ */

export function Experiences() {
  return (
    <section id="experiencias" className="surface divider-y">
      <div className="container experiences__row">
        <Reveal className="experiences__intro">
          <div className="experiences__icon">
            <Compass size={21} />
          </div>
          <div>
            <h3 className="experiences__title">Experiências</h3>
            <p className="text-secondary experiences__subtitle">Além do que eu crio, existe a jornada.</p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <Button variant="outline" size="sm" href="#contato">
            Ver minha jornada
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================ */
/*  ABOUT                                                          */
/* ============================================================ */

export function About() {
  return (
    <section id="sobre" className="container section">
      <div className="about__grid">
        <Reveal>
          <div className="about__photo" role="img" aria-label="Foto de Evellyn Gomes — placeholder">
            <span className="font-mono about__photo-label">Foto — placeholder</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="card about__card">
            <div className="eyebrow">
              <span>Sobre mim</span>
              <Sparkles size={13} />
            </div>
            <p className="about__text">
              Sou Evellyn Gomes, designer e desenvolvedora front-end apaixonada por criar
              experiências digitais que conectam pessoas, marcas e ideias. Transito entre design,
              tecnologia, marketing e audiovisual para transformar conceitos em projetos completos.
            </p>
            <div className="about__cta">
              <Button variant="outline" size="sm" href="#projetos">
                Conhecer mais
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="about__contact">
            <div className="anim-float about__contact-mark" aria-hidden="true">
              <EGMark size={140} />
            </div>
            <h3 className="about__contact-title">VAMOS CRIAR ALGO INCRÍVEL JUNTOS?</h3>
            <p className="about__contact-text">
              Estou disponível para novos projetos, colaborações e ideias.
            </p>
            <div className="about__contact-action">
              <a href="mailto:contato@evellyngomes.com" className="btn btn-onlight">
                Enviar mensagem
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
