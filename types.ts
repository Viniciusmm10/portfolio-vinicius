import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  type: string; // e.g., "Automação", "Game Dev", "Ferramenta"
  description: string; // Short description for the card
  context: string; // "Contexto do problema"
  solution: string; // "O que foi desenvolvido"
  technicalDecisions: string[]; // "Decisões técnicas"
  tags: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SkillItem {
  name: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
  icon: LucideIcon;
}

export enum SectionId {
  HOME = 'home',
  PROJECTS = 'projetos',
  SKILLS = 'conhecimentos',
  EXPERIENCE = 'sobre',
  CONTACT = 'contato'
}