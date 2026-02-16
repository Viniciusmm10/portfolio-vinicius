import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA, PROJECTS, SKILLS, EXPERIENCE } from "../constants";

// Construct a context string based on the portfolio data
const buildSystemContext = () => {
  // Enhanced project context with technical details
  const projectsStr = PROJECTS.map(p => `
    Projeto: ${p.title} (${p.type})
    Resumo: ${p.description}
    Contexto: ${p.context}
    Solução: ${p.solution}
    Decisões Técnicas: ${p.technicalDecisions.join('; ')}
    Tecnologias: ${p.tags.join(', ')}
  `).join('\n---\n');

  // Updated to handle SkillItem structure
  const skillsStr = SKILLS.map(s => `
    Categoria: ${s.title}
    Itens: ${s.items.map(i => `${i.name} (${i.description})`).join(', ')}
  `).join('\n');

  const expStr = EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n');

  return `
    Você é o assistente virtual do portfólio de Vinicius Miguel.
    Seu objetivo é responder perguntas de recrutadores e visitantes sobre a carreira de Vinicius.
    Responda de forma profissional, porém leve e direta (em Português do Brasil).
    
    Aqui estão os dados sobre Vinicius:
    
    Resumo Profissional:
    ${PORTFOLIO_DATA.summary}
    
    Perfil Curto:
    ${PORTFOLIO_DATA.aboutShort}
    
    Habilidades Técnicas e Práticas:
    ${skillsStr}
    
    Experiência Profissional:
    ${expStr}
    
    Detalhes dos Projetos (Use isso para explicar como ele resolve problemas):
    ${projectsStr}
    
    Se lhe perguntarem algo que não consta nestes dados, diga educadamente que não tem essa informação específica, mas sugira entrar em contato pelo e-mail ${PORTFOLIO_DATA.social.email}.
    Não invente informações. Mantenha o tom de um desenvolvedor focado em Frontend (React) e Backend (Node.js). Não mencione Unity, C# ou desenvolvimento de jogos.
  `;
};

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      // Return a simulated response if no API key is present (for demo purposes in environments without env vars)
      return "Olá! Como estou em modo de demonstração (sem chave de API configurada), não posso processar perguntas dinâmicas agora. Mas sinta-se à vontade para explorar as seções do site para ver minhas habilidades!";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: buildSystemContext(),
        thinkingConfig: { thinkingBudget: 0 } // Low latency preferred for simple chat
      }
    });

    return response.text || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao tentar contatar a IA. Por favor, tente novamente mais tarde.";
  }
};