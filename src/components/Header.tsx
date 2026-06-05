import React, { useState, useRef, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, Sun, Moon, X } from 'lucide-react';
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
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  // Reset mobile menu on screen resize to desktop width
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
    // Header entry animation
    gsap.fromTo(headerRef.current,
      { y: -80, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power4.out',
      }
    );

    // Animate navigation items and action buttons
    gsap.fromTo('.nav-link, .header-action-btn',
      { y: -20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    // Scroll trigger for scrolled background & shadow class toggling
    ScrollTrigger.create({
      trigger: 'body',
      start: '100 top',
      onToggle: (self) => {
        setIsScrolled(self.isActive);
      },
    });

    // Scroll trigger for tracking active sections
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

  // Animate mobile menu open/close
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
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md border-b border-slate-200/50 dark:border-slate-800/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              RK
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link text-sm font-medium transition-colors relative py-1.5 ${
                  activeSection === item.id
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-500 dark:bg-indigo-400 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Actions (Toggle Theme, Social Links) */}
          <div className="hidden md:flex items-center space-x-4">
            <MagneticButton
              onClick={toggleTheme}
              className="header-action-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('https://github.com/RAKESHKUSHWAHA7518', '_blank')}
              className="header-action-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('https://www.linkedin.com/in/rakesh-kushwaha-666726212/', '_blank')}
              className="header-action-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open('mailto:rk7518329420@gmail.com', '_blank')}
              className="header-action-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </MagneticButton>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="header-action-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="header-action-btn p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden glass-panel rounded-2xl mt-2 overflow-hidden px-4 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={toggleMobileMenu}
                  className={`mobile-nav-link text-center text-lg font-medium py-2 rounded-xl transition-colors ${
                    activeSection === item.id
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20 font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-900/50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex justify-center space-x-6 mt-8 pt-6 border-t border-slate-100 dark:border-slate-900">
              <a href="https://github.com/RAKESHKUSHWAHA7518" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/rakesh-kushwaha-666726212/" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:rk7518329420@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-indigo-500">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};