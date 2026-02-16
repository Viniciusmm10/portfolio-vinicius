import React from 'react';
import { Briefcase, User } from 'lucide-react';
import { EXPERIENCE, PORTFOLIO_DATA } from '../constants';
import { SectionId } from '../types';

export const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <User className="text-cyan-500" />
            Sobre & Experiência
          </h2>
          
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm max-w-4xl">
            <p className="text-slate-300 leading-relaxed text-lg">
              {PORTFOLIO_DATA.summary}
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-10 flex items-center gap-2">
            <Briefcase size={20} className="text-slate-400" />
            Experiência Profissional
          </h3>

          <div className="space-y-12 relative max-w-4xl ml-2 md:ml-4">
            {/* Vertical Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-800"></div>

            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative flex flex-col md:flex-row gap-8 group pl-8">
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-slate-900 border-2 border-cyan-500 rounded-full z-10 group-hover:bg-cyan-500 transition-colors"></div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h4 className="text-xl font-bold text-slate-100">{job.role}</h4>
                    <span className="text-sm font-mono text-cyan-400 whitespace-nowrap">{job.period}</span>
                  </div>
                  
                  <div className="text-slate-400 font-medium mb-4">{job.company}</div>

                  <p className="text-slate-300 mb-4 leading-relaxed max-w-2xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map(tech => (
                      <span key={tech} className="text-xs text-slate-500 font-mono bg-slate-900/50 px-2 py-1 rounded border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
