import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, Sun, Moon, X, Code2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { MagneticButton } from './MagneticButton';
import { useGSAP } from '../hooks/useGSAP';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    gsap.fromTo(headerRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      }
    );

    gsap.fromTo('.nav-link, .header-action-btn',
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    ScrollTrigger.create({
      trigger: 'body',
      start: '100 top',
      onToggle: (self) => {
        setIsScrolled(self.isActive);
      },
    });

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top 30%',
        end: 'bottom 30%',
        onToggle: (self) => {
          if (self.isActive) {
            setActiveSection(item.id);
          }
        },
      });
    });
  }, []);

  useGSAP(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
      );
      gsap.from('.mobile-nav-link', {
        x: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[rgba(var(--bg-glass),0.9)] backdrop-blur-md shadow-lg border-b border-[rgba(var(--border-primary),0.5)] py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="section-container">
        <div className="flex justify-between items-center h-16 lg:h-18">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2" aria-label="Rakesh Kushwaha - Home">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))]">
                <Code2 className="w-5 h-5 text-[rgb(var(--text-inverse))]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent-tertiary))] to-transparent opacity-20" />
              </div>
              <span className="text-xl lg:text-2xl font-extrabold bg-gradient-to-r from-[rgb(var(--text-primary))] to-[rgb(var(--accent-primary))] bg-clip-text text-transparent">
                RK
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link relative px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-[rgb(var(--accent-primary))] bg-[rgba(var(--accent-primary),0.1)]'
                    : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgba(var(--border-primary),0.3)]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgb(var(--accent-primary))' }} />
                )}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <MagneticButton
              onClick={toggleTheme}
              className="header-action-btn p-2.5 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.3)] hover:text-[rgb(var(--accent-primary))] transition-all duration-200"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              range={30}
              strength={0.25}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('https://github.com/RAKESHKUSHWAHA7518', '_blank')}
              className="header-action-btn p-2.5 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.3)] hover:text-[rgb(var(--accent-primary))] transition-all duration-200"
              range={30}
              strength={0.25}
            >
              <Github className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('https://www.linkedin.com/in/rakesh-kushwaha-666726212/', '_blank')}
              className="header-action-btn p-2.5 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-secondary),0.1)] hover:border-[rgba(var(--accent-secondary),0.3)] hover:text-[rgb(var(--accent-secondary))] transition-all duration-200"
              range={30}
              strength={0.25}
            >
              <Linkedin className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('mailto:rk7518329420@gmail.com', '_blank')}
              className="header-action-btn p-2.5 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-tertiary),0.1)] hover:border-[rgba(var(--accent-tertiary),0.3)] hover:text-[rgb(var(--accent-tertiary))] transition-all duration-200"
              range={30}
              strength={0.25}
            >
              <Mail className="w-5 h-5" />
            </MagneticButton>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="header-action-btn p-2.5 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.3)] hover:text-[rgb(var(--accent-primary))] transition-all duration-200 touch-interactive"
              aria-label="Toggle Theme"
              style={{ touchAction: 'manipulation' }}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="header-action-btn p-2.5 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.3)] hover:text-[rgb(var(--accent-primary))] transition-all duration-200 touch-interactive"
              aria-label="Toggle Mobile Menu"
              style={{ touchAction: 'manipulation' }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden glass-panel-strong rounded-2xl mt-3 overflow-hidden px-4 py-6 shadow-xl border border-[rgba(var(--border-primary),0.6)]"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={toggleMobileMenu}
                  className={`mobile-nav-link px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-[rgb(var(--accent-primary))] bg-[rgba(var(--accent-primary),0.15)] font-semibold'
                      : 'text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgba(var(--border-primary),0.3)]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex justify-center space-x-5 mt-6 pt-6 border-t border-[rgba(var(--border-primary),0.3)]">
              <button
                onClick={() => window.open('https://github.com/RAKESHKUSHWAHA7518', '_blank')}
                className="p-2.5 rounded-xl text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] transition-colors touch-interactive"
                style={{ touchAction: 'manipulation' }}
              >
                <Github className="w-6 h-6" />
              </button>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/rakesh-kushwaha-666726212/', '_blank')}
                className="p-2.5 rounded-xl text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-secondary))] transition-colors touch-interactive"
                style={{ touchAction: 'manipulation' }}
              >
                <Linkedin className="w-6 h-6" />
              </button>
              <button
                onClick={() => window.open('mailto:rk7518329420@gmail.com', '_blank')}
                className="p-2.5 rounded-xl text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-tertiary))] transition-colors touch-interactive"
                style={{ touchAction: 'manipulation' }}
              >
                <Mail className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};