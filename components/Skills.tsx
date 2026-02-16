import React from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { SKILLS } from '../constants';
import { SectionId } from '../types';

export const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 relative bg-slate-900">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <Cpu className="text-cyan-500" />
            Conhecimentos Técnicos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Foco em aplicação prática e resolução de problemas reais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/50 transition-colors duration-300 flex flex-col h-full">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 shadow-lg shadow-cyan-900/10">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">{category.title}</h3>
                </div>
                
                {/* List */}
                <div className="space-y-6 flex-1">
                  {category.items.map((skill) => (
                    <div key={skill.name} className="relative pl-6 group">
                      {/* Bullet point line */}
                      <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors"></div>
                      <div className="absolute left-[3px] top-4 bottom-[-12px] w-[1px] bg-slate-800 group-last:hidden"></div>
                      
                      <h4 className="text-slate-200 font-semibold text-sm mb-1 group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};