import React from 'react';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { SectionId } from '../types';

export const Contact: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Main Contact Card */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm shadow-2xl relative overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 relative z-10">
              Pronto para integrar sua equipe?
            </h2>
            
            <p className="text-slate-400 mb-10 max-w-lg mx-auto relative z-10 text-lg leading-relaxed">
              Estou disponível para atuar em projetos de <strong>Frontend (React)</strong> ou <strong>Backend (Node.js)</strong>. 
              Entre em contato para agendarmos uma conversa técnica.
            </p>

            {/* Primary Action: Email */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 mb-12">
              <a 
                href={`mailto:${PORTFOLIO_DATA.social.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                <Mail size={20} />
                Enviar E-mail
              </a>
              
              <button 
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl font-medium transition-colors border border-slate-600"
                title="Copiar endereço de e-mail"
              >
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                {copied ? "Copiado!" : "Copiar E-mail"}
              </button>
            </div>

            {/* Secondary Actions: Social Links */}
            <div className="border-t border-slate-700 pt-8">
              <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider font-semibold">
                Outros Canais
              </p>
              <div className="flex justify-center gap-6">
                <a 
                  href={PORTFOLIO_DATA.social.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group p-3 rounded-lg hover:bg-slate-700/50"
                >
                  <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-[#0077b5] transition-colors border border-slate-700 group-hover:border-[#0077b5]">
                    <Linkedin size={20} className="text-white" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a 
                  href={PORTFOLIO_DATA.social.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group p-3 rounded-lg hover:bg-slate-700/50"
                >
                  <div className="p-2 bg-slate-900 rounded-lg group-hover:bg-gray-100 transition-colors border border-slate-700 group-hover:border-white">
                    <Github size={20} className="text-white group-hover:text-black" />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-16 text-slate-600 text-sm">
            <p>© {new Date().getFullYear()} Vinicius Miguel. Code is Poetry.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};