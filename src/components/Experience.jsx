import React from 'react';
import { GraduationCap, Code, BookOpen, Layers } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap, iconColor: 'text-cyan-400', bar: 'from-cyan-500 to-blue-500',
    title: 'AIML / CS Student',
    org: 'Pursuing B.Tech / B.E.',
    period: '2022 – Present',
    desc: 'Studying AI, ML, and Computer Science fundamentals. Building real projects alongside coursework.',
  },
  {
    icon: Code, iconColor: 'text-blue-400', bar: 'from-blue-500 to-indigo-500',
    title: 'Full-Stack Web Developer',
    org: 'Self-taught · Project-based',
    period: '2023 – Present',
    desc: 'Built web apps with Django, JavaScript, and React. TechPhilo (live), TwitterLite, AgriMoksh, and this portfolio.',
  },
  {
    icon: BookOpen, iconColor: 'text-purple-400', bar: 'from-purple-500 to-pink-500',
    title: 'ML & NLP Practitioner',
    org: 'Project-driven learning',
    period: '2023 – Present',
    desc: 'Taxi Fare Prediction (Linear Regression), Spam Shield (NLP text classification), prompt engineering experiments.',
  },
  {
    icon: Layers, iconColor: 'text-green-400', bar: 'from-green-500 to-teal-500',
    title: 'Open Source · GitHub',
    org: 'github.com/STEVETEJ-27',
    period: '2023 – Present',
    desc: 'All projects publicly documented with clean commits, structured repos, and READMEs.',
  },
];

const Experience = () => (
  <section
    id="experience"
    className="relative py-6 sm:py-12 md:py-20 px-4 sm:px-6"
    aria-label="Experience section"
  >
    <div className="max-w-3xl mx-auto relative z-10">

      {/* Header */}
      <div className="text-center mb-5 sm:mb-12">
        <p className="text-cyan-400 font-mono text-[10px] font-semibold tracking-widest uppercase mb-2">
          04 / Journey
        </p>
        <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white">Learning & Building</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="hidden sm:block absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-green-500/20" />

        <div className="space-y-3 sm:space-y-4">
          {timeline.map((item, idx) => (
            <div key={idx} className="group flex gap-3 sm:gap-5">
              {/* Icon */}
              <div className="shrink-0 z-10">
                <div className="w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-slate-600 flex items-center justify-center transition-all duration-200">
                  <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 relative bg-slate-800/25 border border-slate-700/50 rounded-xl p-4 hover:border-slate-600/50 hover:bg-slate-800/40 transition-all duration-200">
                <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r ${item.bar} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <h3
                    className="text-sm font-bold text-white leading-snug"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-slate-600 font-mono shrink-0 mt-0.5">{item.period}</span>
                </div>
                <p className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${item.iconColor}`}>{item.org}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;