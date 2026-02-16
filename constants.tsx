import { Project, Experience, SkillCategory } from './types';
import { Code2, Server, Database, Terminal, Globe, Workflow, BrainCircuit, ShieldCheck } from 'lucide-react';

export const PORTFOLIO_DATA = {
  name: "Vinicius Miguel",
  title: "E-commerce Tech & Automação",
  tagline: "Operação, integrações e ferramentas web",
  aboutShort: "Atuo em e-commerce com foco em operação, integrações e automação de rotinas, desenvolvendo ferramentas web com JavaScript, React e TypeScript.",
  summary: "Atuo em e-commerce com foco em operação, integração de plataformas e automação de rotinas. Minha trajetória evoluiu de Auxiliar para Analista e, depois, Gerente de E-commerce, assumindo responsabilidades crescentes em marketplaces, processos de venda e gestão de plataformas como Tray, Bling, Tiny e Loja Integrada. Também desenvolvo integrações com JavaScript e Google Sheets para apoiar processos internos e utilizo Excel para análise e acompanhamento de performance.",
  social: {
    github: "https://github.com/Viniciusmm10",
    linkedin: "https://www.linkedin.com/in/vinicius-miguel-/",
    email: "viniciusmigueel12@outlook.com",
    creative: "https://dribbble.com/" // Placeholder para portfolio criativo
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EANForge",
    type: "App Web (Vanilla)",
    description: "App web simples para gerar e exibir um código no formato de EAN, com foco em praticar UI/UX e organização de código em JavaScript puro.",
    context: "Precisei de um gerador rápido de código de exemplo para testes locais e demonstrações, sem depender de frameworks.",
    solution: "Implementei uma interface que gera e exibe o código na tela, simula a ação de copiar via console e mostra um modal de confirmação ao gerar um novo código quando já existe um exibido.",
    technicalDecisions: [
      "JavaScript (Vanilla) com lógica de UI e eventos",
      "Modal de confirmação para evitar sobrescrita acidental do código",
      "Animações e layout responsivo em CSS"
    ],
    tags: ["HTML", "CSS", "JavaScript (Vanilla)", "Google Fonts"],
    imageUrl: "dist/assets/img/logoEANFORGE.png",
    repoUrl: "https://github.com/Viniciusmm10/gerador-ean",
    liveUrl: "https://www.eanforge.online/"
  },
  {
    id: "2",
    title: "Gerador de DRE",
    type: "Em desenvolvimento",
    description: "Aplicação web para gerar e organizar uma Demonstração do Resultado do Exercício (DRE).",
    context: "Quero consolidar um fluxo simples para montar uma DRE de forma visual e organizada, com foco em experiência de uso.",
    solution: "Projeto em desenvolvimento. A estrutura base está sendo feita com componentes em React, tipagem em TypeScript e estilos com Tailwind CSS.",
    technicalDecisions: [
      "Componentização em React para manter o UI modular",
      "TypeScript para tipagem e evolução do código",
      "Tailwind CSS para layout e responsividade"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/600/400?grayscale&random=2"
  },
  {
    id: "3",
    title: "Calculadora de Margem e Precificação",
    type: "Em desenvolvimento",
    description: "Calculadora de margem e precificação voltada para marketplaces como Mercado Livre e Shopee.",
    context: "Preciso de uma ferramenta prática para simular precificação e margem considerando cenários comuns de marketplace.",
    solution: "Projeto em desenvolvimento com React, TypeScript e Tailwind CSS. Ainda não possui links públicos.",
    technicalDecisions: [
      "Componentização em React para separar regras e UI",
      "TypeScript para reduzir erros em cálculos e estados",
      "Tailwind CSS para um layout responsivo e consistente"
    ],
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/600/400?grayscale&random=3"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend & UI",
    icon: Code2,
    items: [
      {
        name: "HTML, CSS e JavaScript",
        description: "Criação e evolução de interfaces e páginas, com foco em estrutura, responsividade e comportamento no navegador."
      },
      {
        name: "React + TypeScript",
        description: "Construção de interfaces componetizadas para ferramentas web, com tipagem para dar previsibilidade aos estados e regras."
      },
      {
        name: "Tailwind CSS",
        description: "Estilização utilitária para layouts consistentes e responsivos, com boa velocidade de iteração em UI."
      },
      {
        name: "UX para e-commerce",
        description: "Ajustes de conteúdo e navegação com foco em clareza no catálogo, suporte ao cliente e experiência de compra."
      }
    ]
  },
  {
    title: "E-commerce & Integrações",
    icon: Server,
    items: [
      {
        name: "Marketplaces",
        description: "Gestão de operação em Mercado Livre e Shopee: anúncios, pedidos e atendimento, com atenção à reputação e padronização."
      },
      {
        name: "Plataformas e ERPs",
        description: "Rotina de e-commerce em Tray, Loja Integrada, Bling e Tiny, incluindo integrações e processos de venda."
      },
      {
        name: "Cadastro e otimização",
        description: "Cadastro e melhoria de anúncios e catálogo, visando consistência, organização e qualidade das informações."
      },
      {
        name: "Integrações com JavaScript",
        description: "Automação e integração de rotinas com JavaScript, incluindo fluxos como Google Sheets + Tiny."
      }
    ]
  },
  {
    title: "Dados & Ferramentas",
    icon: Terminal,
    items: [
      {
        name: "Google Sheets",
        description: "Controle operacional e automações para apoiar rotina de vendas e integração de informações."
      },
      {
        name: "Excel",
        description: "Análise de dados e acompanhamento de performance de vendas para apoiar decisões operacionais."
      },
      {
        name: "Git",
        description: "Versionamento de projetos e organização de entregas com histórico e rastreabilidade."
      },
      {
        name: "Automação de rotinas",
        description: "Padronização de processos e redução de tarefas repetitivas via integrações e controles."
      }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Auxiliar de E-commerce",
    company: "Duchapeu Distribuidora",
    period: "06/2021 – 10/2022",
    description: "Atuei na operação diária de marketplaces (Mercado Livre e Shopee), incluindo cadastro e otimização de anúncios, gestão de pedidos e atendimento ao cliente. Mantive foco em consistência operacional, qualidade do suporte e reputação da loja.",
    technologies: ["Mercado Livre", "Shopee"]
  },
  {
    id: "2",
    role: "Analista de E-commerce",
    company: "Som Potente",
    period: "10/2022 – 04/2023",
    description: "Assumi a gestão completa do e-commerce via Tray, com integração ao ERP Bling e conexão com marketplaces. Estruturei processos de vendas e implementei melhorias voltadas à conversão, com foco em organização operacional e consistência no fluxo de pedidos.",
    technologies: ["Tray", "Bling"]
  },
  {
    id: "3",
    role: "Gerente de E-commerce",
    company: "Kazza das Ferragens",
    period: "10/2023 – 10/2025",
    description: "Liderei a operação digital, coordenando a equipe e a gestão das plataformas Loja Integrada, Bling e Tiny. Criei e evoluí a loja com HTML, CSS e JavaScript, e implementei automações avançadas para apoiar processos internos. Integrei Google Sheets com Tiny via JavaScript e utilizei Excel para análise de dados e acompanhamento de performance de vendas.",
    technologies: ["Loja Integrada", "Bling", "Tiny", "Google Sheets", "Excel", "HTML", "CSS", "JavaScript"]
  }
];
