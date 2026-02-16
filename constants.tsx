import { Project, Experience, SkillCategory } from './types';
import { Code2, Server, Database, Terminal, Globe, Workflow, BrainCircuit, ShieldCheck } from 'lucide-react';

export const PORTFOLIO_DATA = {
  name: "Vinicius Miguel",
  title: "Frontend & Node.js Developer",
  tagline: "Especialista em React e Ecossistema JavaScript",
  aboutShort: "Desenvolvedor focado em interfaces modernas com React e APIs escaláveis com Node.js.",
  summary: "Minha especialidade é o ecossistema JavaScript de ponta a ponta. No Frontend, crio interfaces reativas e performáticas com React e Next.js. No Backend, utilizo Node.js para construir APIs RESTful seguras e eficientes. Acredito na força do JavaScript para entregar soluções completas, desde a validação de um formulário até a autenticação do usuário no servidor e persistência de dados.",
  social: {
    github: "https://github.com/viniciusmiguel",
    linkedin: "https://linkedin.com/in/viniciusmiguel",
    email: "contato@viniciusmiguel.dev",
    creative: "https://dribbble.com/" // Placeholder para portfolio criativo
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Dashboard SaaS",
    type: "Frontend & Integração",
    description: "Painel administrativo completo com gráficos em tempo real e gestão de dados consumindo API REST.",
    context: "O cliente precisava de uma interface centralizada para visualizar métricas de vendas e gerenciar usuários do sistema.",
    solution: "Desenvolvi uma SPA (Single Page Application) com React, utilizando React Query para gerenciamento de estado do servidor e cache.",
    technicalDecisions: [
      "Uso de React Query para cache e refetch",
      "Context API para estado global de UI",
      "Autenticação via Cookies HttpOnly"
    ],
    tags: ["React", "TypeScript", "Axios"],
    imageUrl: "https://picsum.photos/600/400?grayscale&random=1",
    repoUrl: "#",
    liveUrl: "#"
  },
  {
    id: "2",
    title: "API de Autenticação",
    type: "Backend Node.js",
    description: "Serviço de autenticação robusto com login, registro, recuperação de senha e controle de sessões via JWT.",
    context: "Necessidade de separar o serviço de identidade do monólito principal para permitir login único (SSO) entre aplicações.",
    solution: "Criei uma API isolada com Node.js e Express, implementando estratégias de segurança como hash de senha e validação de tokens.",
    technicalDecisions: [
      "JWT (JSON Web Token) para sessões stateless",
      "Bcrypt para hash de senhas",
      "Middleware de validação de rotas"
    ],
    tags: ["Node.js", "Express", "JWT", "MongoDB"],
    imageUrl: "https://picsum.photos/600/400?grayscale&random=2",
    repoUrl: "#"
  },
  {
    id: "3",
    title: "E-commerce Front",
    type: "E-commerce",
    description: "Interface de loja virtual com carrinho de compras persistente e checkout transparente.",
    context: "Projeto focado em performance e SEO para maximizar conversões em dispositivos móveis.",
    solution: "Implementação de Next.js para renderização híbrida (SSR/SSG) garantindo indexação rápida e carregamento otimizado.",
    technicalDecisions: [
      "Next.js para SEO otimizado",
      "Integração com Gateway de Pagamento",
      "Validação de formulários com Zod"
    ],
    tags: ["Next.js", "React", "Stripe API"],
    imageUrl: "https://picsum.photos/600/400?grayscale&random=3",
    repoUrl: "#",
    liveUrl: "#"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend Moderno",
    icon: Code2,
    items: [
      {
        name: "React & Ecossistema",
        description: "Domínio de Hooks, Context API, Redux e Next.js para aplicações complexas."
      },
      {
        name: "Javascript ES6+",
        description: "Uso avançado de Async/Await, Destructuring, Modules e manipulação de Arrays."
      },
      {
        name: "Consumo de APIs",
        description: "Integração com REST e GraphQL usando Fetch, Axios e React Query."
      },
      {
        name: "Validação & Formulários",
        description: "Experiência com React Hook Form e Zod para validação robusta de dados."
      }
    ]
  },
  {
    title: "Backend & Node.js",
    icon: Server,
    items: [
      {
        name: "Node.js & Express",
        description: "Criação de servidores HTTP, roteamento e middlewares personalizados."
      },
      {
        name: "Autenticação & Segurança",
        description: "Implementação de fluxos de Login, JWT, OAuth e proteção de rotas privadas."
      },
      {
        name: "Banco de Dados",
        description: "Integração com bancos SQL e NoSQL (MongoDB, PostgreSQL) via ORMs."
      },
      {
        name: "Arquitetura API",
        description: "Desenvolvimento de APIs RESTful seguindo padrões de status codes e métodos HTTP."
      }
    ]
  },
  {
    title: "Ferramentas & DevOps",
    icon: Terminal,
    items: [
      {
        name: "Git & Versionamento",
        description: "Fluxo de trabalho com Gitflow, Pull Requests e Code Review."
      },
      {
        name: "Docker",
        description: "Containerização de aplicações Node.js para ambientes de desenvolvimento consistentes."
      },
      {
        name: "CI/CD Básico",
        description: "Configuração de pipelines de deploy automatizado (GitHub Actions)."
      },
      {
        name: "Testing",
        description: "Testes unitários e de integração utilizando Jest e Testing Library."
      }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Desenvolvedor Frontend Pleno",
    company: "TechRetail Solutions",
    period: "2022 - Presente",
    description: "Lidero a squad de checkout do e-commerce. Refatorei o fluxo de pagamento integrando com APIs de gateways financeiros, implementando tratamento de erros robusto e feedback visual em tempo real. Reduzi a taxa de abandono de carrinho em 15% melhorando a UX dos formulários.",
    technologies: ["React", "Node.js (BFF)", "Redux", "Jest"]
  },
  {
    id: "2",
    role: "Desenvolvedor Fullstack",
    company: "SaaS Startup",
    period: "2020 - 2022",
    description: "Responsável pelo desenvolvimento de novas features de ponta a ponta. No backend, criei endpoints em Node.js para relatórios. No frontend, desenvolvi os dashboards de visualização usando React. Implementei o sistema de autenticação JWT utilizado por toda a plataforma.",
    technologies: ["Node.js", "Express", "React", "MongoDB"]
  },
  {
    id: "3",
    role: "Desenvolvedor Web Júnior",
    company: "SoftHouse System",
    period: "2019 - 2020",
    description: "Manutenção de sites institucionais e criação de Landing Pages. Comecei a ter contato com requisições assíncronas (AJAX/Fetch) para carregar conteúdo dinâmico sem recarregar a página e aprendi os fundamentos de autenticação baseada em sessão.",
    technologies: ["JavaScript", "HTML5", "CSS3", "PHP (Legado)"]
  }
];