import React, { useState, useEffect } from 'react';
import { Menu, X, Github, FileText, Home, User, Code2, Briefcase, Layers, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home',       id: 'home',       icon: Home },
  { label: 'About',      id: 'about',      icon: User },
  { label: 'Skills',     id: 'skills',     icon: Code2 },
  { label: 'Projects',   id: 'projects',   icon: Briefcase },
  { label: 'Experience', id: 'experience', icon: Layers },
  { label: 'Contact',    id: 'contact',    icon: Mail },
];

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [active, setActive]         = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const item of [...navItems].reverse()) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 110) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const goTo = (id) => {
    setDrawerOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  };

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-slate-950/50'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex justify-between items-center">

          {/* Logo */}
          <button
            onClick={() => goTo('home')}
            className="group flex items-center gap-0"
            aria-label="Back to top"
          >
            {/* Mobile: show "TEJA" | Desktop: show "KTS.dev" */}
            <span
              className="md:hidden text-base font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-cyan-400">TEJA</span>
            </span>
            <span
              className="hidden md:inline text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">KTS</span>
              <span className="text-slate-600">.</span>
              <span className="text-slate-400 group-hover:text-white transition-colors">dev</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === item.id
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/T4x-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800/60"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="/resume/Kaladari_Teja_Swaneeth_Resume.docx"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 rounded-lg transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition-all"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Animated gradient divider line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[1px] transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <div className="nav-gradient-line h-full" />
        </div>
      </nav>

      {/* ── MOBILE FULL-SCREEN DRAWER ── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer panel — slides in from right */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[70] w-72 max-w-[85vw] bg-slate-900 border-l border-slate-800/60 transition-transform duration-300 ease-out md:hidden flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-14 border-b border-slate-800/60">
          <span
            className="text-sm font-semibold text-slate-300"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Navigation
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 min-h-[52px] ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-slate-800/70 hover:text-white border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span className="text-sm font-semibold">{item.label}</span>
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>
            );
          })}
        </nav>

        {/* Drawer footer actions */}
        <div className="px-3 pb-6 pt-3 border-t border-slate-800/60 space-y-2">
          <a
            href="https://github.com/T4x-Dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/70 transition-all min-h-[52px]"
            onClick={() => setDrawerOpen(false)}
          >
            <Github className="w-4 h-4 shrink-0" />
            <span className="text-sm font-semibold">GitHub</span>
          </a>
          <a
            href="/resume/Kaladari_Teja_Swaneeth_Resume.docx"
            download
            className="flex items-center justify-center gap-2 w-full px-4 py-3.5 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 rounded-xl font-semibold text-sm hover:bg-cyan-500/20 transition-all min-h-[52px]"
            onClick={() => setDrawerOpen(false)}
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;