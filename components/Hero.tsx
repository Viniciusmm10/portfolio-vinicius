import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, Terminal, Palette } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0f172a]">
      {/* Background Elements - Subtle and Professional */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-900/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-slate-800/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-slate-300 font-medium text-xs tracking-wide uppercase">
              Vinicius Miguel
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 mb-8 tracking-tight leading-[1.1]">
            Software Developer focado em <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              interfaces web
            </span>{" "}
            e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              APIs escaláveis
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {PORTFOLIO_DATA.aboutShort}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth'})}
              className="px-8 py-4 bg-slate-100 hover:bg-white text-slate-900 rounded-xl font-semibold transition-all hover:scale-[1.02] flex items-center gap-2 w-full sm:w-auto justify-center shadow-lg shadow-white/5"
            >
              Ver Projetos
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth'})}
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 rounded-xl font-semibold transition-all hover:scale-[1.02] flex items-center gap-2 w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              Entrar em Contato
              <Mail size={18} />
            </button>
            <a 
              href={PORTFOLIO_DATA.social.creative}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-transparent hover:bg-slate-800/30 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 rounded-xl font-semibold transition-all hover:scale-[1.02] flex items-center gap-2 w-full sm:w-auto justify-center backdrop-blur-sm group"
            >
              Portfólio Criativo
              <Palette size={18} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          {/* Social Proof / Links */}
          <div className="flex justify-center gap-8 border-t border-slate-800/50 pt-8">
            <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};