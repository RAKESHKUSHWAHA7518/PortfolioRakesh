import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, Sun, Moon, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm transition-colors duration-200"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            RK
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#certificates">Certificates</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <SocialIcon icon={<Github />} href="https://github.com/RAKESHKUSHWAHA7518" />
            <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/rakesh-kushwaha-666726212/" />
            <SocialIcon icon={<Mail />} href="mailto:rk7518329420@gmail.com" />
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 mr-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 py-4"
            >
              <div className="flex flex-col space-y-4">
                <MobileNavLink href="#home" onClick={toggleMobileMenu}>Home</MobileNavLink>
                <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
                <MobileNavLink href="#experience" onClick={toggleMobileMenu}>Experience</MobileNavLink>
                <MobileNavLink href="#education" onClick={toggleMobileMenu}>Education</MobileNavLink>
                <MobileNavLink href="#projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
                <MobileNavLink href="#certificates" onClick={toggleMobileMenu}>Certificates</MobileNavLink>
                <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
              </div>
              <div className="flex justify-center space-x-6 mt-6">
                <SocialIcon icon={<Github />} href="https://github.com/RAKESHKUSHWAHA7518" />
                <SocialIcon icon={<Linkedin />} href="https://www.linkedin.com/in/rakesh-kushwaha-666726212/" />
                <SocialIcon icon={<Mail />} href="mailto:rk7518329420@gmail.com" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1 }}
    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <motion.a
    href={href}
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-center text-lg py-2"
  >
    {children}
  </motion.a>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 5 }}
    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
  >
    {icon}
  </motion.a>
);