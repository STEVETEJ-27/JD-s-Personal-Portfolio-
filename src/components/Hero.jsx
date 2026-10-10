import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, FileText, ArrowRight } from 'lucide-react';

const ROLES = [
  'AI & ML Developer',
  'Full-Stack Builder',
  'Python Developer',
  'Web Developer',
];

const Hero = ({ scrollY }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping]       = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  // Typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let t;
    if (typing) {
      if (charIndex < current.length) {
        t = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1); }, 75);
      } else {
        t = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        t = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1); }, 40);
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [charIndex, typing, roleIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
  const parallaxY = isMobile ? 0 : Math.min(scrollY * 0.12, 50);
  const fadeOut   = isMobile ? 1 : Math.max(1 - scrollY / 600, 0);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 pt-16 pb-4 sm:pb-8"
      aria-label="Hero section"
    >
      <div
        className="max-w-7xl mx-auto w-full relative z-10"
        style={{ transform: `translateY(${parallaxY}px)`, opacity: fadeOut }}
      >

        {/* ────────────────────────────────────────
            MOBILE LAYOUT  (< lg = < 1024px)
            Vertical stack: text → photo
        ──────────────────────────────────────── */}
        <div className="flex flex-col lg:hidden items-center text-center gap-6 py-2">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/8 border border-cyan-500/20 rounded-full text-cyan-400 text-[11px] font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Open to Opportunities
          </div>

          {/* Name — Syne display font */}
          <div>
            <h1
              className="text-[36px] leading-[1.1] tracking-tight mb-2"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              <span className="text-white">Kaladari</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Teja Swaneeth
              </span>
            </h1>

            {/* Roles (static on mobile — simpler, faster) */}
            <p className="text-sm font-mono text-cyan-400 font-medium">
              AI / ML &nbsp;·&nbsp; Full Stack &nbsp;·&nbsp; Python
            </p>
          </div>

          {/* Profile photo — mobile style */}
          <div className="relative mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/25 to-purple-600/25 blur-xl scale-110" />

            <div className="relative w-[180px] h-[220px]">
              {/* Depth shadow card */}
              <div className="absolute top-2 left-2 w-full h-full rounded-2xl bg-slate-800 border border-slate-700/50" />

              {/* Photo card */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-600/50 bg-slate-800 shadow-xl">
                <img
                  src="/images/profile/profile-photo.png"
                  alt="Kaladari Teja Swaneeth"
                  className={`w-full h-full object-cover object-top transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImgLoaded(true)}
                  loading="eager"
                />
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                    <span className="text-2xl font-bold font-mono text-slate-600">KTS</span>
                  </div>
                )}
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent px-3 pt-6 pb-3">
                  <p className="text-white font-bold text-[11px] tracking-wide">Kaladari Teja Swaneeth</p>
                  <p className="text-cyan-400 text-[10px] font-mono mt-0.5">Developer · AI & ML</p>
                </div>
              </div>

              {/* Available badge */}
              <div className="absolute -top-2 -right-2 bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 shadow-lg">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-semibold text-slate-300">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-[15px] text-slate-400 leading-relaxed max-w-[340px] mx-auto">
            Building practical software — AI-powered apps, ML models, and full-stack web experiences.
          </p>

          {/* CTAs — full width, touch-friendly */}
          <div className="flex flex-col gap-3 w-full max-w-[300px]">
            <button
              onClick={() => scrollTo('projects')}
              id="hero-view-projects"
              className="flex items-center justify-center gap-2 w-full h-12 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all duration-200 text-sm shadow-lg shadow-cyan-500/25"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex gap-3">
              <a
                href="/resume/Kaladari_Teja_Swaneeth_Resume.docx"
                download
                id="hero-download-resume"
                className="flex-1 flex items-center justify-center gap-2 h-12 border border-slate-600 hover:border-slate-400 text-slate-300 font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a
                href="https://github.com/T4x-Dev"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-github"
                className="flex items-center justify-center gap-2 h-12 px-4 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-xl transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ────────────────────────────────────────
            DESKTOP LAYOUT  (>= lg = >= 1024px)
            2-column: text | photo
        ──────────────────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-16 items-center">

          {/* Text — 3 cols */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 bg-cyan-500/8 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Open to Opportunities
            </div>

            <h1
              className="text-5xl xl:text-6xl mb-3 leading-[1.08] tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
            >
              <span className="text-white">Kaladari</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Teja Swaneeth
              </span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-2 mb-5 h-9">
              <span className="text-cyan-500 font-mono text-lg font-semibold">{'>'}</span>
              <span className="text-lg font-mono text-slate-300 font-medium">{displayed}</span>
              <span className="w-[2px] h-5 bg-cyan-400 animate-pulse" />
            </div>

            <p className="text-base text-slate-400 mb-8 max-w-xl leading-relaxed">
              Building practical software — AI-powered applications, intelligent ML models,
              and full-stack web experiences. From idea to deployment.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo('projects')}
                id="hero-view-projects-desk"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all duration-200 text-sm shadow-lg shadow-cyan-500/25"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/resume/Kaladari_Teja_Swaneeth_Resume.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-200 text-sm"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a
                href="https://github.com/T4x-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white rounded-xl transition-all duration-200 text-sm"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Photo — 2 cols */}
          <div className="lg:col-span-2 flex justify-end">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-sm" />
              <div className="absolute top-2 left-2 w-full h-full rounded-2xl bg-slate-800 border border-slate-700/60" />

              <div className="relative w-64 h-80 xl:w-72 xl:h-88 rounded-2xl overflow-hidden border border-slate-600/50 bg-slate-800 shadow-2xl group">
                <img
                  src="/images/profile/profile-photo.png"
                  alt="Kaladari Teja Swaneeth — Developer"
                  className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImgLoaded(true)}
                />
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                    <span className="text-3xl font-bold font-mono text-slate-600">KTS</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cyan-500/5 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent px-4 pt-8 pb-4">
                  <p className="text-white font-bold text-sm tracking-wide">Kaladari Teja Swaneeth</p>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5">Developer · AI & ML</p>
                </div>
              </div>

              <div className="absolute -right-3 top-6 bg-slate-800/95 backdrop-blur border border-slate-700 rounded-xl px-3 py-2 shadow-xl">
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Status</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">Available</span>
                </div>
              </div>
              <div className="absolute -left-3 bottom-16 bg-slate-800/95 backdrop-blur border border-slate-700 rounded-xl px-3 py-2 shadow-xl">
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Stack</p>
                <p className="text-xs font-bold text-cyan-400 font-mono mt-0.5">Python · AI · Web</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-30">
          <span className="text-[10px] text-slate-500 tracking-widest uppercase font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4 text-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;