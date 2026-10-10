import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, FileText, MessageSquare } from 'lucide-react';

const contactLinks = [
  {
    id: 'contact-github', icon: Github, label: 'GitHub', value: 'github.com/T4x-Dev',
    href: 'https://github.com/T4x-Dev', external: true,
    color: 'hover:border-slate-500 hover:text-white', iconColor: 'text-slate-400',
  },
  {
    id: 'contact-email', icon: Mail, label: 'Email', value: 'teja.swaneeth2425@gmail.com',
    href: 'mailto:teja.swaneeth2425@gmail.com', external: false,
    color: 'hover:border-cyan-500/50 hover:text-cyan-300', iconColor: 'text-cyan-400',
  },
  {
    id: 'contact-linkedin', icon: Linkedin, label: 'LinkedIn', value: 'Connect with me',
    href: 'https://www.linkedin.com/in/kaladari-teja-swaneeth/', external: true,
    color: 'hover:border-blue-500/50 hover:text-blue-300', iconColor: 'text-blue-400',
  },
];

const Contact = () => (
  <section
    id="contact"
    className="relative py-6 sm:py-12 md:py-20 px-4 sm:px-6"
    aria-label="Contact section"
  >
    <div className="absolute inset-0 bg-slate-900/40 pointer-events-none" />
    <div className="max-w-4xl mx-auto relative z-10">

      {/* Header */}
      <div className="text-center mb-5 sm:mb-12">
        <p className="text-cyan-400 font-mono text-[10px] font-semibold tracking-widest uppercase mb-2">
          05 / Contact
        </p>
        <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-white mb-3">Let's Connect</h2>
        <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
          Open to internships, collaborations, and interesting conversations about AI and software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

        {/* Contact links */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-4">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            Reach out directly
          </h3>

          {contactLinks.map(link => (
            <a
              key={link.id}
              id={link.id}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-3 p-4 min-h-[56px] bg-slate-800/30 border border-slate-700/60 rounded-xl transition-all duration-300 group ${link.color}`}
            >
              <div className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                <link.icon className={`w-4 h-4 ${link.iconColor}`} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{link.label}</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 truncate group-hover:text-inherit transition-colors">{link.value}</p>
              </div>
              {link.external && <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 ml-auto shrink-0" />}
            </a>
          ))}

          {/* Resume download */}
          <a
            id="contact-resume"
            href="/resume/Kaladari_Teja_Swaneeth_Resume.docx"
            download
            className="flex items-center gap-3 p-4 min-h-[56px] bg-slate-800/30 border border-slate-700/60 rounded-xl transition-all duration-300 hover:border-purple-500/50 hover:text-purple-300 group"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-700/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
              <FileText className="w-4 h-4 text-purple-400" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Resume</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-purple-300 transition-colors">Download CV</p>
            </div>
          </a>
        </div>

        {/* Looking for + TechPhilo CTA */}
        <div className="bg-slate-800/25 backdrop-blur-xl border border-slate-700/50 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Currently looking for</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {[
                'Internships in AI / ML',
                'Full-stack web development roles',
                'Open source collaborations',
                'Project partnerships',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-700/50">
            <p className="text-xs text-slate-500 mb-3">See my live work:</p>
            <a
              href="https://techphilo.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-techphilo"
              className="inline-flex items-center gap-2 h-11 px-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              See TechPhilo Live
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;