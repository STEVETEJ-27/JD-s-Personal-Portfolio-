import React, { useState } from 'react';
import { ExternalLink, Github, Star, Zap, Code, ChevronDown, ChevronUp } from 'lucide-react';
import { projects, categories } from '../data/projects';

const ProjectCard = ({ project }) => {
  const isLive    = !!project.liveUrl;
  const hasCode   = !!project.githubUrl;
  const featured  = project.featured;

  return (
    <div
      className={`group relative flex flex-col bg-slate-800/30 backdrop-blur-xl rounded-xl border overflow-hidden transition-all duration-300
        ${featured
          ? 'border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/8'
          : 'border-slate-700/50 hover:border-slate-600/50'
        }`}
    >
      {/* Top gradient bar */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${project.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="flex flex-col flex-1 p-4 sm:p-5">
        {/* Badges */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex gap-1.5 flex-wrap">
            {featured && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-cyan-500/12 border border-cyan-500/25 rounded-md text-cyan-400 text-[10px] font-bold uppercase">
                <Star className="w-2.5 h-2.5" />Featured
              </span>
            )}
            {isLive && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-md text-green-400 text-[10px] font-bold uppercase">
                <Zap className="w-2.5 h-2.5" />Live
              </span>
            )}
            {!hasCode && (
              <span className="flex items-center gap-1 px-2 py-0.5 bg-slate-700/50 border border-slate-600/40 rounded-md text-slate-400 text-[10px] font-bold uppercase">
                <Code className="w-2.5 h-2.5" />Private
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-600 font-mono shrink-0">{project.status}</span>
        </div>

        {/* Title */}
        <h3
          className="text-base sm:text-lg font-bold text-white mb-0.5 group-hover:text-cyan-50 transition-colors"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {project.title}
        </h3>

        {/* Category */}
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
          {project.categoryLabel}
        </p>

        {/* Description */}
        <p className="text-[13px] sm:text-sm text-slate-400 leading-relaxed mb-3 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map(t => (
            <span key={t} className="px-2 py-0.5 bg-slate-700/40 text-slate-400 text-[10px] sm:text-xs rounded-md border border-slate-600/30 font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Actions — full-width on mobile */}
        <div className="flex gap-2">
          {isLive && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`live-${project.id}`}
              className={`flex-1 flex items-center justify-center gap-1.5 h-11 bg-gradient-to-r ${project.gradient} text-white text-xs font-bold rounded-xl hover:opacity-90 transition-all duration-200 shadow-sm`}
            >
              <ExternalLink className="w-3.5 h-3.5" />View Live
            </a>
          )}
          {hasCode && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`code-${project.id}`}
              className={`${isLive ? '' : 'flex-1'} flex items-center justify-center gap-1.5 h-11 px-4 bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold rounded-xl border border-slate-600/40 hover:border-slate-500 transition-all duration-200`}
            >
              <Github className="w-3.5 h-3.5" />{isLive ? '' : 'View Code'}
              {!isLive && <span>View Code</span>}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  // On mobile: show 3 initially (featured first), expand on demand
  const MOBILE_INITIAL = 3;
  const isMobileView   = typeof window !== 'undefined' && window.innerWidth < 640;
  const displayed      = (!isMobileView || showAll) ? sorted : sorted.slice(0, MOBILE_INITIAL);
  const hasMore        = sorted.length > MOBILE_INITIAL;

  return (
    <section
      id="projects"
      className="relative py-6 sm:py-12 md:py-20 px-4 sm:px-6"
      aria-label="Projects section"
    >
      <div className="absolute inset-0 bg-slate-900/40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-4 sm:mb-10">
          <p className="text-cyan-400 font-mono text-[10px] font-semibold tracking-widest uppercase mb-2">
            03 / Projects
          </p>
          <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Things I've Built
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Real projects — deployed or documented on GitHub.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 sm:mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setShowAll(false); }}
              id={`filter-${cat.id}`}
              className={`h-9 px-4 text-xs font-semibold rounded-xl border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500/12 text-cyan-400 border-cyan-500/35'
                  : 'bg-slate-800/40 text-slate-500 border-slate-700/50 hover:text-slate-300 hover:border-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid — 1 col mobile, 2 col sm, 3 col xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {displayed.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show more / less — mobile only */}
        {hasMore && (
          <div className="mt-5 flex justify-center sm:hidden">
            <button
              onClick={() => setShowAll(v => !v)}
              className="flex items-center gap-2 h-11 px-6 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-xl transition-all duration-200 text-sm font-medium"
            >
              {showAll
                ? <><ChevronUp className="w-4 h-4" /> Show Less</>
                : <><ChevronDown className="w-4 h-4" /> View More ({sorted.length - MOBILE_INITIAL} more)</>
              }
            </button>
          </div>
        )}

        {/* GitHub CTA */}
        <div className="mt-6 sm:mt-8 text-center">
          <a
            href="https://github.com/T4x-Dev"
            target="_blank"
            rel="noopener noreferrer"
            id="projects-github-cta"
            className="inline-flex items-center gap-2 h-10 px-5 border border-slate-700/60 hover:border-slate-500 text-slate-500 hover:text-slate-300 rounded-xl transition-all duration-300 text-xs font-medium hover:bg-slate-800/40"
          >
            <Github className="w-4 h-4" />
            All repositories on GitHub
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;