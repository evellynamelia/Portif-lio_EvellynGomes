import type { LucideIcon } from "lucide-react";
import { PenTool, Code2, Megaphone, Video, Lightbulb, Search, Layers, Rocket } from "lucide-react";

/* -------------------- navegação -------------------- */

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

/* -------------------- serviços -------------------- */

export interface Service {
  number: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const services: Service[] = [
  {
    number: "01",
    title: "Design",
    icon: PenTool,
    items: ["UI/UX Design", "Web Design", "Prototipação", "Layouts", "Identidade Visual"],
  },
  {
    number: "02",
    title: "Code",
    icon: Code2,
    items: ["Front-end", "HTML · CSS · JS", "React", "Landing Pages", "Sites Responsivos"],
  },
  {
    number: "03",
    title: "Marketing",
    icon: Megaphone,
    items: [
      "Social Media",
      "Estratégia de Conteúdo",
      "Campanhas",
      "Marketing Digital",
      "Tráfego Pago",
    ],
  },
  {
    number: "04",
    title: "Audiovisual",
    icon: Video,
    items: ["Video Maker", "Edição de Vídeos", "Reels", "Motion Graphics", "Conteúdo Audiovisual"],
  },
];

/* -------------------- processo -------------------- */

export interface ProcessStepData {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

export const processSteps: ProcessStepData[] = [
  { number: "01", title: "Ideia", icon: Lightbulb, description: "Entendo o problema e o objetivo do projeto." },
  { number: "02", title: "Pesquisa", icon: Search, description: "Estudo, analiso e descubro o melhor caminho." },
  { number: "03", title: "Design", icon: Layers, description: "Crio interfaces, protótipos e identidades visuais." },
  { number: "04", title: "Desenvolvimento", icon: Code2, description: "Transformo o design em código funcional." },
  { number: "05", title: "Resultado", icon: Rocket, description: "Entrego experiências digitais completas." },
];

/* -------------------- projetos -------------------- */

export interface Project {
  name: string;
  tag: string;
  category: string;
  description: string;
  image?: string;
  gradientFrom: string;
  gradientTo: string;
  featured?: boolean;
  url?: string;
}

/**
 * Placeholder gradients no lugar de imagens reais.
 * Basta preencher `image` com o asset final (ex: "/projects/tocando-a-vida.jpg")
 * que o gradiente deixa de ser usado automaticamente.
 */
export const projects: Project[] = [
  {
    name: "Tocando a Vida",
    tag: "Campanha completa",
    category: "Marketing · Social Media · Design · Audiovisual",
    description:
      "Campanha completa de marketing e conteúdo para fortalecer a presença digital da marca.",
    gradientFrom: "#F7B733",
    gradientTo: "#B06AB3",
    featured: true,
  },
  {
    name: "EGKR Logística",
    tag: "Identidade visual",
    category: "Branding · Design Gráfico · Aplicações",
    description: "Identidade visual completa aplicada a materiais gráficos e comunicação da marca.",
    gradientFrom: "#3E4C6B",
    gradientTo: "#1B1F2E",
  },
  {
    name: "Do Zero ao MEI",
    tag: "UI/UX · Front-end",
    category: "UI/UX · Prototipação · Front-end",
    description: "Plataforma digital com prototipação de interface e desenvolvimento front-end.",
    gradientFrom: "#6A5ACD",
    gradientTo: "#2C2A4A",
  },
  {
    name: "Projeto Front-end",
    tag: "Web · Front-end",
    category: "Web Design · Front-end · Desenvolvimento",
    description:
      "Landing page desenvolvida com foco em performance, responsividade e boas práticas de código.",
    gradientFrom: "#8E54E9",
    gradientTo: "#4776E6",
  },
];
