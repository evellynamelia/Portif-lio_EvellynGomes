import type { LucideIcon } from "lucide-react";
import { Code2, Layers, Lightbulb, Megaphone, PenTool, Rocket, Search, Video } from "lucide-react";

export type Theme = "dark" | "light";

export const navLinks = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Serviços", "#servicos"],
  ["Projetos", "#projetos"],
  ["Processo", "#processo"],
  ["Experiências", "#experiencias"],
  ["Contato", "#contato"],
] as const;

export interface Service {
  number: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const services: Service[] = [
  { number: "01", title: "Design", icon: PenTool, items: ["UI/UX Design", "Web Design", "Prototipação", "Layouts", "Identidade Visual"] },
  { number: "02", title: "Code", icon: Code2, items: ["Front-end", "HTML · CSS · JS", "React", "Landing Pages", "Sites Responsivos"] },
  { number: "03", title: "Marketing", icon: Megaphone, items: ["Social Media", "Estratégia de Conteúdo", "Campanhas", "Marketing Digital", "Tráfego Pago"] },
  { number: "04", title: "Audiovisual", icon: Video, items: ["Video Maker", "Edição de Vídeos", "Reels", "Motion Graphics", "Conteúdo Audiovisual"] },
];

export interface Project {
  name: string;
  tag: string;
  category: string;
  description: string;
  gradient: string;
  featured?: boolean;
}

export const projects: Project[] = [
  { name: "Tocando a Vida", tag: "Campanha completa", category: "Marketing · Social Media · Design · Audiovisual", description: "Campanha completa de marketing e conteúdo para fortalecer a presença digital da marca.", gradient: "linear-gradient(135deg, #f7b733, #b06ab3)", featured: true },
  { name: "EGKR Logística", tag: "Identidade visual", category: "Branding · Design Gráfico · Aplicações", description: "Identidade visual completa aplicada a materiais gráficos e comunicação da marca.", gradient: "linear-gradient(135deg, #3e4c6b, #1b1f2e)" },
  { name: "Do Zero ao MEI", tag: "UI/UX · Front-end", category: "UI/UX · Prototipação · Front-end", description: "Plataforma digital com prototipação de interface e desenvolvimento front-end.", gradient: "linear-gradient(135deg, #6a5acd, #2c2a4a)" },
  { name: "Projeto Front-end", tag: "Web · Front-end", category: "Web Design · Front-end · Desenvolvimento", description: "Landing page desenvolvida com foco em performance, responsividade e boas práticas.", gradient: "linear-gradient(135deg, #8e54e9, #4776e6)" },
];

export const process = [
  ["01", "Ideia", Lightbulb, "Entendo o problema e o objetivo do projeto."],
  ["02", "Pesquisa", Search, "Estudo, analiso e descubro o melhor caminho."],
  ["03", "Design", Layers, "Crio interfaces, protótipos e identidades visuais."],
  ["04", "Desenvolvimento", Code2, "Transformo o design em código funcional."],
  ["05", "Resultado", Rocket, "Entrego experiências digitais completas."],
] as const;
