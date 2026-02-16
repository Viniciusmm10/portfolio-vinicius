import React, { useState } from 'react';
import { Github, ExternalLink, FolderGit2, X, ChevronRight, CheckCircle2, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';
import { SectionId, Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-slate-900/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-100 mb-2 flex items-center gap-3">
              <FolderGit2 className="text-cyan-500" />
              Projetos em Destaque
            </h2>
            <p className="text-slate-400">Soluções reais para problemas de automação e entretenimento interativo.</p>
          </div>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors">
            Ver GitHub Completo <ExternalLink size={16} />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-slate-900/90 backdrop-blur text-xs font-semibold text-cyan-400 rounded-full border border-slate-700 shadow-lg">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-slate-900 text-slate-400 text-[10px] uppercase tracking-wider font-semibold rounded border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-900 text-slate-500 text-[10px] rounded border border-slate-700">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <button 
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-lg border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-medium transition-all text-sm flex items-center justify-center gap-2 group-hover:bg-slate-700/50"
                >
                  Ver Detalhes
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 shadow-2xl relative animate-in zoom-in-95 duration-200">
            {/* Modal Header Image */}
            <div className="relative h-48 md:h-64 w-full">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/50 hover:bg-slate-800 text-white rounded-full backdrop-blur-md transition-colors border border-slate-700"
              >
                <X size={24} />
              </button>

              <div className="absolute bottom-6 left-6 md:left-10">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold rounded-full mb-3 inline-block">
                  {selectedProject.type}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex gap-4">
                  {selectedProject.repoUrl && (
                    <a href={selectedProject.repoUrl} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm hover:underline">
                      <Github size={16} /> Ver Código
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} className="flex items-center gap-2 text-slate-300 hover:text-white text-sm hover:underline">
                      <ExternalLink size={16} /> Ver Online
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              <div className="lg:col-span-2 space-y-8">
                {/* Context */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                    Contexto do Problema
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.context}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    O que foi desenvolvido
                  </h4>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Technical Decisions */}
                <div>
                   <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Cpu size={20} className="text-purple-400" />
                    Decisões Técnicas
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.technicalDecisions.map((decision, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle2 size={18} className="text-slate-500 mt-1 shrink-0" />
                        <span className="text-sm leading-relaxed">{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar: Stack */}
              <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 h-fit">
                <h4 className="font-semibold text-slate-100 mb-4 border-b border-slate-700 pb-2">Stack Tecnológica</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1.5 bg-slate-900 text-cyan-400 text-xs font-medium rounded-lg border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <p className="text-xs text-slate-500 italic">
                    "Este projeto foi fundamental para consolidar meus conhecimentos em {selectedProject.tags[0]} e arquitetura de software."
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};