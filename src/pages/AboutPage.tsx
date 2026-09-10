import evellynPhoto from "../assets/evellyn.jpeg";
import { ArrowLeftIcon, ArrowUpRightIcon, SparklesIcon } from "@animateicons/react/lucide";
import { SiFigma, SiReact, SiTypescript, SiJavascript, SiGithub, SiGit } from "react-icons/si";

export default function AboutPage() {
  return (
    <div className="inner-page">
      <main>
        <section className="inner-hero">
          <div className="container inner-hero__grid">
            <div>
              <a href="#inicio" className="inner-back-link">
                <ArrowLeftIcon size={15} />
                Voltar ao portfólio
              </a>

              <div className="eyebrow">
                <span>Sobre mim</span>
                <SparklesIcon size={13} />
              </div>

              <h1 className="inner-hero__title">
                DESIGN,
                <br />
                TECNOLOGIA
                <br />
                <span className="text-purple">E IDEIAS.</span>
              </h1>

              <p className="inner-hero__description">
                Sou Evellyn Gomes, designer e desenvolvedora front-end. Minha trajetória passa por
                design, tecnologia, marketing e audiovisual, sempre buscando transformar ideias em
                experiências digitais que façam sentido.
              </p>
            </div>

            <div className="inner-profile">
              <div className="inner-profile__frame">
                <img src={evellynPhoto} alt="Evellyn Gomes" />
              </div>

              <span className="inner-profile__number font-mono">01 / SOBRE</span>
            </div>
          </div>
        </section>

        <section className="inner-section">
          <div className="container">
            <div className="inner-section__heading">
              <span className="font-mono">01</span>
              <div>
                <span className="eyebrow">Minha forma de criar</span>
                <h2>Entre o visual e o funcional.</h2>
              </div>
            </div>

            <div className="about-story">
              <p>
                Eu gosto de entender o projeto como um todo. Antes de pensar em uma tela, uma
                identidade ou uma linha de código, procuro entender o problema, as pessoas e o
                objetivo por trás daquela ideia.
              </p>

              <p>
                O design me ensinou a observar detalhes. O desenvolvimento me ensinou a transformar
                esses detalhes em experiências reais. O marketing me ensinou a pensar em comunicação
                e resultado. E o audiovisual me ensinou a contar histórias.
              </p>

              <p>
                Hoje, essas áreas fazem parte da mesma forma de trabalhar: criar soluções digitais
                que tenham personalidade, clareza e propósito.
              </p>
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--surface">
          <div className="container">
            <div className="inner-section__heading">
              <span className="font-mono">02</span>
              <div>
                <span className="eyebrow">O que faz parte de mim</span>
                <h2>Uma mistura de áreas.</h2>
              </div>
            </div>

            <div className="about-pillars">
              <article className="about-pillar">
                <span className="font-mono">DESIGN</span>
                <h3>Interfaces que comunicam.</h3>
                <p>UI/UX, identidade visual, direção visual, prototipação e criação de experiências.</p>
              </article>

              <article className="about-pillar">
                <span className="font-mono">CODE</span>
                <h3>Ideias que viram produto.</h3>
                <p>HTML, CSS, JavaScript, TypeScript, React e desenvolvimento de interfaces responsivas.</p>
              </article>

              <article className="about-pillar">
                <span className="font-mono">DIGITAL</span>
                <h3>Estratégia além da tela.</h3>
                <p>Marketing digital, conteúdo, campanhas, audiovisual e comunicação para marcas.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="inner-section">
          <div className="container">
            <div className="inner-section__heading">
              <span className="font-mono">03</span>
              <div>
                <span className="eyebrow">Tecnologias</span>
                <h2>Ferramentas que fazem parte da jornada.</h2>
              </div>
            </div>

            <div className="about-tools">
              <div className="about-tool">
                <SiFigma />
                <span>Figma</span>
              </div>

              <div className="about-tool">
                <SiReact />
                <span>React</span>
              </div>

              <div className="about-tool">
                <SiTypescript />
                <span>TypeScript</span>
              </div>

              <div className="about-tool">
                <SiJavascript />
                <span>JavaScript</span>
              </div>

              <div className="about-tool">
                <SiGithub />
                <span>GitHub</span>
              </div>

              <div className="about-tool">
                <SiGit />
                <span>Git</span>
              </div>
            </div>
          </div>
        </section>

        <section className="inner-section inner-section--accent">
          <div className="container about-final">
            <div>
              <span className="font-mono">04 / PRÓXIMO CAPÍTULO</span>
              <h2>Quero continuar criando coisas que tenham significado.</h2>
            </div>

            <a href="mailto:evellynamelia2005@gmail.com" className="btn btn-onlight">
              Entrar em contato
              <ArrowUpRightIcon size={16} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}