import React from 'react';

const skillGroups = [
  {
    label: 'Languages', color: 'cyan',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Web & Full Stack', color: 'blue',
    skills: ['Django', 'React', 'Node.js', 'Vite', 'REST APIs', 'SQLite'],
  },
  {
    label: 'AI & Machine Learning', color: 'purple',
    skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Linear Regression', 'NLP', 'Prompt Engineering', 'Text Classification'],
  },
  {
    label: 'Tools & Platforms', color: 'green',
    skills: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Render', 'Jupyter'],
  },
];

const C = {
  cyan:   { tag: 'bg-cyan-500/8 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/15',     h: 'text-cyan-400',   dot: 'bg-cyan-400' },
  blue:   { tag: 'bg-blue-500/8 text-blue-300 border-blue-500/20 hover:bg-blue-500/15',     h: 'text-blue-400',   dot: 'bg-blue-400' },
  purple: { tag: 'bg-purple-500/8 text-purple-300 border-purple-500/20 hover:bg-purple-500/15', h: 'text-purple-400', dot: 'bg-purple-400' },
  green:  { tag: 'bg-green-500/8 text-green-300 border-green-500/20 hover:bg-green-500/15', h: 'text-green-400',  dot: 'bg-green-400' },
};

const Skills = () => (
  <section
    id="skills"
    className="relative py-6 sm:py-12 md:py-20 px-4 sm:px-6"
    aria-label="Skills section"
  >
    <div className="max-w-7xl mx-auto relative z-10">

      {/* Header */}
      <div className="text-center mb-5 sm:mb-12">
        <p className="text-cyan-400 font-mono text-[10px] font-semibold tracking-widest uppercase mb-2">
          02 / Skills
        </p>
        <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white">Technical Stack</h2>
        <p className="mt-2 text-slate-500 text-sm max-w-lg mx-auto">
          Technologies backed by real project work.
        </p>
      </div>

      {/* Groups — 1 col mobile, 2 sm, 4 xl */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
        {skillGroups.map((group) => {
          const c = C[group.color];
          return (
            <div
              key={group.label}
              className="bg-slate-800/25 backdrop-blur-xl p-4 sm:p-5 rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                <h3 className={`text-[10px] font-bold uppercase tracking-widest ${c.h}`}>{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-lg border transition-all duration-200 cursor-default ${c.tag}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
