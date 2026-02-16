import React, { useState } from 'react';
import { Github, ExternalLink, FolderGit2, X, ChevronRight, CheckCircle2, Cpu } from 'lucide-react';
import { PROJECTS } from '../constants';
import { SectionId, Project } from '../types';

type ProjectCoverVariant = 'card' | 'modal';

const getCoverTheme = (project: Project) => {
  if (project.id === '1') return { from: 'from-cyan-400', to: 'to-blue-500', ring: 'ring-cyan-500/20', dot: 'bg-cyan-400/20' };
  if (project.id === '2') return { from: 'from-emerald-400', to: 'to-lime-400', ring: 'ring-emerald-500/20', dot: 'bg-emerald-400/20' };
  if (project.id === '3') return { from: 'from-fuchsia-400', to: 'to-pink-500', ring: 'ring-fuchsia-500/20', dot: 'bg-fuchsia-400/20' };
  return { from: 'from-slate-200', to: 'to-slate-400', ring: 'ring-slate-500/20', dot: 'bg-slate-400/20' };
};

const ProjectCover: React.FC<{ project: Project; variant: ProjectCoverVariant }> = ({ project, variant }) => {
  const theme = getCoverTheme(project);
  const isModal = variant === 'modal';

  const titleSize = isModal ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-3xl';
  const subtitleSize = isModal ? 'text-xs sm:text-sm' : 'text-[10px]';
  const padding = isModal ? 'px-8' : 'px-6';

  const hasDre = project.title.toLowerCase().includes('dre');
  const dreSplit = hasDre ? project.title.split(/dre/i) : null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${isModal ? '' : 'group-hover:scale-[1.02]'} transition-transform duration-500`}>
      <div className={`absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950`} />
      <div className={`absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl ${theme.dot}`} />
      <div className={`absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl ${theme.dot}`} />
      <div className={`absolute inset-0 ring-1 ${theme.ring}`} />

      <div className={`relative h-full w-full flex items-center justify-center ${padding}`}>
        <div className="text-center">
          <div className={`font-extrabold tracking-tight ${titleSize} leading-none`}>
            {project.id === '1' ? (
              <>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.from} ${theme.to}`}>EAN</span>
                <span className="text-slate-100">Forge</span>
              </>
            ) : hasDre && dreSplit ? (
              <>
                <span className="text-slate-100">{dreSplit[0]}</span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.from} ${theme.to}`}>DRE</span>
                <span className="text-slate-100">{dreSplit[1]}</span>
              </>
            ) : (
              <>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.from} ${theme.to}`}>
                  {project.title.split(' ')[0]}
                </span>
                <span className="text-slate-100">{project.title.slice(project.title.split(' ')[0].length)}</span>
              </>
            )}
          </div>

          <div className={`mt-3 font-semibold uppercase tracking-[0.35em] text-slate-300/70 ${subtitleSize}`}>
            {project.type}
          </div>
        </div>
      </div>
    </div>
  );
};

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
          <a href="https://github.com/Viniciusmm10" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors">
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
                <ProjectCover project={project} variant="card" />
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
              <ProjectCover project={selectedProject} variant="modal" />
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
                <div className="flex flex-wrap gap-3 pt-2">
                  {selectedProject.repoUrl ? (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/70 hover:bg-slate-800 text-slate-100 text-sm font-medium border border-slate-700 transition-colors"
                    >
                      <Github size={16} />
                      Repositório
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/40 text-slate-500 text-sm font-medium border border-slate-800 cursor-not-allowed"
                    >
                      <Github size={16} />
                      Repositório (em breve)
                    </button>
                  )}

                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600/90 hover:bg-cyan-500 text-white text-sm font-semibold border border-cyan-500/40 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Projeto em produção
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600/20 text-cyan-200/60 text-sm font-semibold border border-cyan-500/20 cursor-not-allowed"
                    >
                      <ExternalLink size={16} />
                      Projeto em produção (em breve)
                    </button>
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
                    Projeto em desenvolvimento — detalhes e links serão adicionados quando estiver pronto.
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
