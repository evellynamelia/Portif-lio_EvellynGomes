import { useState } from "react";
import { ArrowLeftIcon, ArrowUpRightIcon, GithubIcon, SparklesIcon } from "@animateicons/react/lucide";

type ProjectCategory = "Todos" | "Design" | "Front-end" | "Marketing" | "Audiovisual";

interface PortfolioProject {
  name: string;
  category: ProjectCategory[];
  type: string;
  description: string;
  image: string;
  gradient: string;
  url: string;
}

const portfolioProjects: PortfolioProject[] = [
  {
    name: "Tocando a Vida",
    category: ["Marketing", "Design", "Audiovisual"],
    type: "Campanha completa",
    description: "Estratégia, criação visual, conteúdo e audiovisual para campanhas digitais.",
    image: "/projects/tocando-a-vida.webp",
    gradient: "linear-gradient(135deg, #7042ff, #c9bcff)",
    url: "https://www.instagram.com/evyngomes/",
  },
  {
    name: "Do Zero ao MEI",
    category: ["Design", "Front-end"],
    type: "UI/UX · Front-end",
    description: "Plataforma digital pensada para tornar a jornada do microempreendedor mais simples.",
    image: "/projects/do-zero-ao-mei.webp",
    gradient: "linear-gradient(135deg, #6a5acd, #2c2a4a)",
    url: "https://github.com/evellynamelia/Portif-lio_EvellynGomes",
  },
  {
    name: "Hyphen Community",
    category: ["Design", "Front-end", "Marketing"],
    type: "Comunidade · Tecnologia",
    description: "Projeto voltado para tecnologia, criatividade, acessibilidade e desenvolvimento.",
    image: "/projects/hyphen.webp",
    gradient: "linear-gradient(135deg, #8e54e9, #4776e6)",
    url: "https://github.com/evellynamelia",
  },
  {
    name: "EGKR Logística",
    category: ["Design"],
    type: "Identidade visual",
    description: "Construção de identidade visual e aplicações para comunicação de marca.",
    image: "/projects/egkr.webp",
    gradient: "linear-gradient(135deg, #3e4c6b, #1b1f2e)",
    url: "https://www.behance.net/evellynamélia",
  },
  {
    name: "Recife Frontend Community Ideathon",
    category: ["Front-end", "Design"],
    type: "Ideathon",
    description: "Projeto desenvolvido em equipe a partir de um desafio relacionado à acessibilidade digital.",
    image: "/projects/recife-frontend.webp",
    gradient: "linear-gradient(135deg, #7042ff, #171422)",
    url: "https://www.linkedin.com/",
  },
  {
    name: "Ideathon Saúde Digital UPE 2026",
    category: ["Design", "Front-end"],
    type: "Ideathon",
    description: "Experiência de pesquisa, planejamento e desenvolvimento de uma solução para saúde digital.",
    image: "/projects/upe-saude.webp",
    gradient: "linear-gradient(135deg, #9b7bff, #2c2a4a)",
    url: "https://www.linkedin.com/",
  },
];

const linkedinPosts = [
  {
    image: "/linkedin/post-01.webp",
    title: "Projeto, aprendizado e construção.",
    text: "Um pouco dos bastidores da minha jornada em tecnologia e criação.",
    url: "https://www.linkedin.com/",
  },
  {
    image: "/linkedin/post-02.webp",
    title: "Projetos que saíram do papel.",
    text: "Experiências, eventos e projetos que fizeram parte da minha trajetória.",
    url: "https://www.linkedin.com/",
  },
  {
    image: "/linkedin/post-03.webp",
    title: "Continuar aprendendo também faz parte.",
    text: "Tecnologia, design e novas experiências em constante movimento.",
    url: "https://www.linkedin.com/",
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category.includes(activeCategory));

  return (
    <div className="inner-page">
      <main>
        <section className="inner-hero inner-hero--projects">
          <div className="container">
            <a href="#inicio" className="inner-back-link">
              <ArrowLeftIcon size={15} />
              Voltar ao portfólio
            </a>

            <div className="eyebrow">
              <span>Projetos</span>
              <SparklesIcon size={13} />
            </div>

            <h1 className="inner-hero__title">
              IDEIAS QUE
              <br />
              VIRARAM
              <br />
              <span className="text-purple">PROJETOS.</span>
            </h1>

            <p className="inner-hero__description">
              Uma seleção de projetos, experiências e trabalhos que mostram um pouco da forma como
              eu penso, crio e desenvolvo.
            </p>
          </div>
        </section>

        <section className="inner-section">
          <div className="container">
            <div className="project-filters">
              {(["Todos", "Design", "Front-end", "Marketing", "Audiovisual"] as ProjectCategory[]).map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    className={`project-filter ${activeCategory === category ? "is-active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            <div className="project-gallery">
              {filteredProjects.map((project, index) => (
                <a
                  href={project.url}
                  key={project.name}
                  className={`project-gallery__card ${index === 0 ? "project-gallery__card--featured" : ""}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-gallery__image" style={{ background: project.gradient }}>
                    <img
                      src={project.image}
                      alt={project.name}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    <span className="project-gallery__tag font-mono">{project.type}</span>

                    <span className="project-gallery__arrow">
                      <ArrowUpRightIcon size={18} />
                    </span>
                  </div>

                  <div className="project-gallery__body">
                    <span className="font-mono text-secondary">
                      {project.category.join(" · ")}
                    </span>

                    <h2>{project.name}</h2>

                    <p className="text-secondary">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--surface">
          <div className="container">
            <div className="inner-section__heading">
              <span className="font-mono">03</span>
              <div>
                <span className="eyebrow">LinkedIn</span>
                <h2>Projetos, eventos e momentos da jornada.</h2>
              </div>
            </div>

            <div className="linkedin-gallery">
              {linkedinPosts.map((post) => (
                <a
                  href={post.url}
                  key={post.title}
                  className="linkedin-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="linkedin-card__image">
                    <img
                      src={post.image}
                      alt={post.title}
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="linkedin-card__body">
                    <span className="font-mono text-purple">LINKEDIN</span>
                    <h3>{post.title}</h3>
                    <p className="text-secondary">{post.text}</p>

                    <span className="linkedin-card__link">
                      Ver publicação
                      <ArrowUpRightIcon size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="projects-page__linkedin">
              <a
                href="https://br.linkedin.com/in/evellynamélia"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                <GithubIcon size={16} />
                Ver minha jornada no LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}