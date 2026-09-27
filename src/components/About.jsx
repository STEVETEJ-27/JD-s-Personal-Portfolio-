import React from 'react';
import { Code2, Brain, Globe, Cpu } from 'lucide-react';

const cards = [
  {
    icon: Brain, iconColor: 'text-cyan-400', accent: 'group-hover:border-cyan-500/40',
    title: 'Developer & Builder',
    body: 'I build real things — ML models, full-stack web apps, and intelligent systems. Every project in my portfolio is something I actually shipped.',
  },
  {
    icon: Code2, iconColor: 'text-purple-400', accent: 'group-hover:border-purple-500/40',
    title: 'AI & Python Focus',
    body: 'My core toolkit is Python — used for ML, NLP, prompt engineering, and backend development. I apply ML practically: classifiers, regression models, text systems.',
  },
  {
    icon: Globe, iconColor: 'text-blue-400', accent: 'group-hover:border-blue-500/40',
    title: 'Full-Stack Capable',
    body: 'From Django-powered backends to JavaScript frontends. I understand the full stack and have deployed real projects that are live and accessible.',
  },
  {
    icon: Cpu, iconColor: 'text-green-400', accent: 'group-hover:border-green-500/40',
    title: 'Learning by Doing',
    body: 'I learn by building. Git workflows, ML pipelines, web deployment, API design — all learned through real project work documented on GitHub.',
  },
];

const About = () => (
  <section
    id="about"
    className="relative py-6 sm:py-12 md:py-20 px-4 sm:px-6"
    aria-label="About section"
  >
    <div className="absolute inset-0 bg-slate-900/40 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative z-10">

      {/* Header */}
      <div className="text-center mb-5 sm:mb-12">
        <p className="text-cyan-400 font-mono text-[10px] font-semibold tracking-widest uppercase mb-2">
          01 / About
        </p>
        <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white">Who I Am</h2>
      </div>

      {/* Intro */}
      <p className="text-[15px] sm:text-base text-slate-400 leading-relaxed text-center max-w-2xl mx-auto mb-8">
        I'm <span className="text-white font-semibold">Kaladari Teja Swaneeth</span> — a developer with a strong focus on
        AI, Machine Learning, and Full-Stack Web Development. I build projects at the intersection of practical software
        engineering and intelligent systems.
      </p>

      {/* Cards — 1 col mobile, 2 col sm, 4 col xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`group bg-slate-800/30 backdrop-blur-xl p-5 rounded-xl border border-slate-700/50 ${card.accent} transition-all duration-300 hover:bg-slate-800/50`}
          >
            <card.icon className={`w-7 h-7 ${card.iconColor} mb-3 group-hover:scale-110 transition-transform duration-200`} />
            <h3 className="text-sm font-bold text-white mb-2">{card.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;