import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code2, ArrowRight, Phone, MapPin } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import gsap from 'gsap';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/RAKESHKUSHWAHA7518', label: 'GitHub', color: 'rgb(var(--accent-primary))' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rakesh-kushwaha-666726212/', label: 'LinkedIn', color: 'rgb(var(--accent-secondary))' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/rk7518329420', label: 'Twitter', color: 'rgb(var(--accent-tertiary))' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:rk7518329420@gmail.com', label: 'Email', color: 'rgb(var(--accent-primary))' },
  ];

  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer-section',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: 'footer',
            start: 'top 90%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer className="relative bg-[rgb(var(--bg-primary))] border-t border-[rgba(var(--border-primary),0.3)] overflow-hidden">
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-20" />
      
      <div className="section-container relative z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="footer-section">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))]">
                <Code2 className="w-6 h-6 text-[rgb(var(--text-inverse))]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-tertiary))] to-transparent opacity-20" />
              </div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-[rgb(var(--text-primary))] to-[rgb(var(--accent-primary))] bg-clip-text text-transparent">
                Rakesh Kushwaha
              </span>
            </div>
            <p className="text-[rgb(var(--text-secondary))] mb-8 text-sm sm:text-base leading-relaxed max-w-xs">
              Crafting scalable full-stack applications and autonomous Multi-Agent systems.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => window.open(link.href, '_blank')}
                  className="p-3 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.3)] hover:text-[rgb(var(--accent-primary))] transition-all duration-300 touch-interactive"
                  aria-label={link.label}
                  style={{ touchAction: 'manipulation' }}
                >
                  <span className="relative" style={{ color: link.color }}>
                    {link.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[rgb(var(--text-primary))] mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors duration-200 group"
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" style={{ color: 'rgb(var(--accent-primary))' }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[rgb(var(--text-primary))] mb-5">Contact</h3>
            <ul className="space-y-4 text-sm text-[rgb(var(--text-secondary))] font-medium">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 text-[rgb(var(--accent-tertiary))] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </span>
                Prayagraj, UP, India
              </li>
              <li>
                <a href="mailto:rk7518329420@gmail.com" className="flex items-center gap-3 hover:text-[rgb(var(--accent-primary))] transition-colors duration-200 group">
                  <Mail className="w-5 h-5 text-[rgb(var(--accent-primary))] flex-shrink-0" />
                  rk7518329420@gmail.com
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" style={{ color: 'rgb(var(--accent-primary))' }} />
                </a>
              </li>
              <li>
                <a href="tel:+917518329420" className="flex items-center gap-3 hover:text-[rgb(var(--accent-secondary))] transition-colors duration-200 group">
                  <Phone className="w-5 h-5 text-[rgb(var(--accent-secondary))] flex-shrink-0" />
                  +91 7518329420
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" style={{ color: 'rgb(var(--accent-secondary))' }} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-section border-t border-[rgba(var(--border-primary),0.3)] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider">
          <p>© {currentYear} Rakesh Kushwaha. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(var(--accent-primary),0.1)] border border-[rgba(var(--accent-primary),0.2)] rounded-full text-[rgb(var(--accent-primary))]">
              <Code2 className="w-3 h-3" />
              Built with React, TypeScript & GSAP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};