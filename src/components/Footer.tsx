import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useGSAP } from '../hooks/useGSAP';
import gsap from 'gsap';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/RAKESHKUSHWAHA7518', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rakesh-kushwaha-666726212/', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/rk7518329420', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:rk7518329420@gmail.com', label: 'Email' },
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
    // Footer entry animations
    gsap.fromTo('.footer-section',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <footer className="bg-white dark:bg-slate-950 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div className="footer-section">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Rakesh Kushwaha
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm sm:text-base leading-relaxed">
              Crafting scalable full-stack applications and autonomous Multi-Agent systems.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <MagneticButton
                  key={index}
                  onClick={() => window.open(link.href, '_blank')}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-section">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li>Prayagraj, UP, India</li>
              <li>
                <a href="mailto:rk7518329420@gmail.com" className="hover:text-indigo-500 transition-colors">
                  rk7518329420@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917518329420" className="hover:text-indigo-500 transition-colors">
                  +91 7518329420
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copy */}
        <div className="footer-section border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          <p>© {currentYear} Rakesh Kushwaha. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};