import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { 
  Command, X, ChevronRight, ExternalLink, 
  Github, Linkedin, Mail, MapPin, Phone, 
  Bot, Zap, Sparkles, Globe, Code2, Server, Database,
  Copy, Brain, Terminal
} from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import gsap from 'gsap';

interface CommandAction {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  category: 'navigation' | 'project' | 'contact' | 'skill' | 'action' | 'social';
  keywords: string[];
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentActions, setRecentActions] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const hintTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const hasSeenHint = localStorage.getItem('cmd-palette-hint');
    if (!hasSeenHint) {
      hintTimeoutRef.current = setTimeout(() => {
        setShowHint(true);
        localStorage.setItem('cmd-palette-hint', 'true');
      }, 3000);
    }
    return () => clearTimeout(hintTimeoutRef.current);
  }, []);

  const allActions = useMemo<CommandAction[]>(() => [
    {
      id: 'nav-home',
      label: 'Home',
      description: 'Go to hero section',
      icon: <Bot className="w-4 h-4" />,
      category: 'navigation',
      keywords: ['home', 'hero', 'intro', 'about me', 'landing'],
      action: () => scrollToSection('home'),
      shortcut: '⌘1'
    },
    {
      id: 'nav-about',
      label: 'About Me',
      description: 'Professional journey, stats, achievements',
      icon: <Sparkles className="w-4 h-4" />,
      category: 'navigation',
      keywords: ['about', 'journey', 'bio', 'stats', 'achievements', 'skills'],
      action: () => scrollToSection('about'),
      shortcut: '⌘2'
    },
    {
      id: 'nav-experience',
      label: 'Experience',
      description: 'Work history, roles, metrics',
      icon: <Zap className="w-4 h-4" />,
      category: 'navigation',
      keywords: ['experience', 'work', 'jobs', 'career', 'mindcraft', 'booknow', 'cca'],
      action: () => scrollToSection('experience'),
      shortcut: '⌘3'
    },
    {
      id: 'nav-education',
      label: 'Education & Certs',
      description: 'Degree, certifications, coursework',
      icon: <Globe className="w-4 h-4" />,
      category: 'navigation',
      keywords: ['education', 'degree', 'certification', 'certs', 'university', 'college'],
      action: () => scrollToSection('education'),
      shortcut: '⌘4'
    },
    {
      id: 'nav-projects',
      label: 'Projects',
      description: 'Featured projects with live demos',
      icon: <Code2 className="w-4 h-4" />,
      category: 'navigation',
      keywords: ['projects', 'portfolio', 'work', 'github', 'demo', 'live'],
      action: () => scrollToSection('projects'),
      shortcut: '⌘5'
    },
    {
      id: 'nav-contact',
      label: 'Contact',
      description: 'Get in touch, hire me',
      icon: <Mail className="w-4 h-4" />,
      category: 'navigation',
      keywords: ['contact', 'hire', 'email', 'phone', 'location', 'freelance'],
      action: () => scrollToSection('contact'),
      shortcut: '⌘6'
    },
    {
      id: 'proj-agentic',
      label: 'Agentic AI Multi-Agent Research',
      description: 'LangChain, CrewAI, autonomous agents',
      icon: <Brain className="w-4 h-4" />,
      category: 'project',
      keywords: ['agentic', 'multi-agent', 'langchain', 'crewai', 'autonomous', 'ai research'],
      action: () => highlightProject(0),
    },
    {
      id: 'proj-nextvise',
      label: 'NextViseAI',
      description: 'AWS Comprehend Medical, clinical NER, oncology',
      icon: <Bot className="w-4 h-4" />,
      category: 'project',
      keywords: ['nextvise', 'aws', 'medical', 'ner', 'oncology', 'healthcare', 'comprehend'],
      action: () => highlightProject(1),
    },
    {
      id: 'proj-skillswap',
      label: 'SkillSwap',
      description: 'Full-stack skill exchange platform',
      icon: <Sparkles className="w-4 h-4" />,
      category: 'project',
      keywords: ['skillswap', 'skill exchange', 'fullstack', 'mongodb', 'express'],
      action: () => highlightProject(2),
    },
    {
      id: 'proj-shopnow',
      label: 'ShopNow E-Commerce',
      description: '3-panel e-commerce with RBAC',
      icon: <Zap className="w-4 h-4" />,
      category: 'project',
      keywords: ['shopnow', 'ecommerce', 'e-commerce', 'shop', 'admin', 'superadmin'],
      action: () => highlightProject(3),
    },
    {
      id: 'proj-askmydoc',
      label: 'AskMyDoc RAG',
      description: 'Gemini API, Vector DB, PDF Q&A',
      icon: <Brain className="w-4 h-4" />,
      category: 'project',
      keywords: ['askmydoc', 'rag', 'gemini', 'vector', 'pdf', 'qa', 'chat'],
      action: () => highlightProject(4),
    },
    {
      id: 'proj-coding-assistant',
      label: 'AI Coding Assistant',
      description: 'Real-time code suggestions, Gemini',
      icon: <Code2 className="w-4 h-4" />,
      category: 'project',
      keywords: ['coding assistant', 'ai code', 'gemini', 'developer tools'],
      action: () => highlightProject(5),
    },
    {
      id: 'proj-swiggy',
      label: 'Food App (Swiggy Clone)',
      description: 'Live Swiggy APIs, Redux cart',
      icon: <Globe className="w-4 h-4" />,
      category: 'project',
      keywords: ['swiggy', 'food', 'clone', 'redux', 'api', 'restaurant'],
      action: () => highlightProject(6),
    },
    {
      id: 'contact-email',
      label: 'Email Me',
      description: 'rk7518329420@gmail.com',
      icon: <Mail className="w-4 h-4" />,
      category: 'contact',
      keywords: ['email', 'mail', 'message', 'write'],
      action: () => window.open('mailto:rk7518329420@gmail.com', '_blank'),
    },
    {
      id: 'contact-phone',
      label: 'Call Me',
      description: '+91 7518329420',
      icon: <Phone className="w-4 h-4" />,
      category: 'contact',
      keywords: ['phone', 'call', 'mobile', 'number'],
      action: () => window.open('tel:+917518329420', '_blank'),
    },
    {
      id: 'contact-location',
      label: 'Location',
      description: 'Prayagraj, UP, India',
      icon: <MapPin className="w-4 h-4" />,
      category: 'contact',
      keywords: ['location', 'address', 'where', 'prayagraj', 'india'],
      action: () => window.open('https://maps.app.goo.gl/bxWp5vXC72kSTVeK6', '_blank'),
    },
    {
      id: 'social-github',
      label: 'GitHub',
      description: 'github.com/RAKESHKUSHWAHA7518',
      icon: <Github className="w-4 h-4" />,
      category: 'social',
      keywords: ['github', 'code', 'repos', 'open source'],
      action: () => window.open('https://github.com/RAKESHKUSHWAHA7518', '_blank'),
    },
    {
      id: 'social-linkedin',
      label: 'LinkedIn',
      description: 'linkedin.com/in/rakesh-kushwaha',
      icon: <Linkedin className="w-4 h-4" />,
      category: 'social',
      keywords: ['linkedin', 'linked in', 'profile', 'network'],
      action: () => window.open('https://www.linkedin.com/in/rakesh-kushwaha-666726212/', '_blank'),
    },
    {
      id: 'social-twitter',
      label: 'Twitter/X',
      description: 'x.com/rk7518329420',
      icon: <Globe className="w-4 h-4" />,
      category: 'social',
      keywords: ['twitter', 'x', 'tweet', 'social'],
      action: () => window.open('https://x.com/rk7518329420', '_blank'),
    },
    {
      id: 'action-resume',
      label: 'Download Resume',
      description: 'Get my latest resume (PDF)',
      icon: <ExternalLink className="w-4 h-4" />,
      category: 'action',
      keywords: ['resume', 'cv', 'download', 'pdf'],
      action: () => window.open('https://drive.google.com/file/d/1IwfE1M8QKRtD_4CC5Fi-st8Lp1FnfD_1/view?usp=sharing', '_blank'),
    },
    {
      id: 'action-copy-email',
      label: 'Copy Email',
      description: 'Copy rk7518329420@gmail.com to clipboard',
      icon: <Copy className="w-4 h-4" />,
      category: 'action',
      keywords: ['copy', 'email', 'clipboard'],
      action: () => {
        navigator.clipboard.writeText('rk7518329420@gmail.com');
        showToast('Email copied!');
      },
    },
    {
      id: 'action-theme',
      label: 'Toggle Theme',
      description: 'Switch between dark/light mode',
      icon: <Sparkles className="w-4 h-4" />,
      category: 'action',
      keywords: ['theme', 'dark', 'light', 'mode', 'toggle'],
      action: () => {
        const event = new CustomEvent('toggle-theme');
        window.dispatchEvent(event);
      },
    },
    {
      id: 'skill-voice-ai',
      label: 'Voice AI Stack',
      description: 'Retell, Vapi, ElevenLabs, 20% accuracy boost',
      icon: <Bot className="w-4 h-4" />,
      category: 'skill',
      keywords: ['voice', 'retell', 'vapi', 'elevenlabs', 'tts', 'stt', 'conversational'],
      action: () => filterSkills(),
    },
    {
      id: 'skill-fullstack',
      label: 'Full Stack',
      description: 'React, Next.js, Node.js, TypeScript, MongoDB',
      icon: <Code2 className="w-4 h-4" />,
      category: 'skill',
      keywords: ['fullstack', 'react', 'nextjs', 'nodejs', 'typescript', 'mongodb'],
      action: () => filterSkills(),
    },
    {
      id: 'skill-ai-ml',
      label: 'AI & ML',
      description: 'LangChain, CrewAI, RAG, LLMs, Python, FastAPI',
      icon: <Brain className="w-4 h-4" />,
      category: 'skill',
      keywords: ['ai', 'ml', 'langchain', 'crewai', 'rag', 'llm', 'python', 'fastapi'],
      action: () => filterSkills(),
    },
    {
      id: 'skill-cloud',
      label: 'Cloud & DevOps',
      description: 'AWS, Docker, Firebase, Vercel, CI/CD',
      icon: <Server className="w-4 h-4" />,
      category: 'skill',
      keywords: ['aws', 'docker', 'firebase', 'vercel', 'cicd', 'cloud', 'devops', 'lambda'],
      action: () => filterSkills(),
    },
    {
      id: 'skill-data',
      label: 'Data & Databases',
      description: 'MongoDB, PostgreSQL, Redis, ChromaDB, Vector DBs',
      icon: <Database className="w-4 h-4" />,
      category: 'skill',
      keywords: ['database', 'mongodb', 'postgres', 'redis', 'chromadb', 'vector db'],
      action: () => filterSkills(),
    },
  ], []);

  const categoryOrder = useMemo(() => ['navigation', 'project', 'skill', 'contact', 'social', 'action'], []);
  const categoryLabels = useMemo((): Record<string, { label: string; icon: React.ReactNode }> => ({
    navigation: { label: 'Navigate', icon: <Bot className="w-4 h-4" /> },
    project: { label: 'Projects', icon: <Code2 className="w-4 h-4" /> },
    skill: { label: 'Skills', icon: <Sparkles className="w-4 h-4" /> },
    contact: { label: 'Contact', icon: <Mail className="w-4 h-4" /> },
    social: { label: 'Social', icon: <Globe className="w-4 h-4" /> },
    action: { label: 'Actions', icon: <Zap className="w-4 h-4" /> },
  }), []);

  const filteredActions = useMemo(() => {
    if (!query.trim()) {
      return allActions
        .filter(a => recentActions.includes(a.id))
        .sort((a, b) => recentActions.indexOf(a.id) - recentActions.indexOf(b.id));
    }

    const lowerQuery = query.toLowerCase();
    return allActions
      .map(action => {
        let score = 0;
        
        if (action.label.toLowerCase().startsWith(lowerQuery)) score += 100;
        if (action.label.toLowerCase().includes(lowerQuery)) score += 50;
        if (action.description.toLowerCase().includes(lowerQuery)) score += 30;
        action.keywords.forEach(kw => {
          if (kw.startsWith(lowerQuery)) score += 40;
          if (kw.includes(lowerQuery)) score += 20;
        });
        if (recentActions.includes(action.id)) score += 10;
        
        return { action, score };
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ action }) => action);
  }, [query, recentActions, allActions]);

  const groupedActions = useMemo(() => {
    const groups: Record<string, CommandAction[]> = {};
    filteredActions.forEach(action => {
      if (!groups[action.category]) groups[action.category] = [];
      groups[action.category].push(action);
    });
    return categoryOrder
      .filter(cat => groups[cat]?.length)
      .map(cat => ({ ...categoryLabels[cat], actions: groups[cat]! }));
  }, [filteredActions, categoryOrder, categoryLabels]);

  const closePalette = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const addToRecent = useCallback((actionId: string) => {
    setRecentActions(prev => {
      const filtered = prev.filter(id => id !== actionId);
      return [actionId, ...filtered].slice(0, 5);
    });
  }, []);

  const executeAction = useCallback((action: CommandAction) => {
    action.action();
    addToRecent(action.id);
    closePalette();
  }, [addToRecent, closePalette]);

  const openPalette = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setSelectedIndex(0);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const totalItems = filteredActions.length;
    if (totalItems === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, totalItems - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          executeAction(filteredActions[selectedIndex]);
        }
        break;
      case 'Escape':
        closePalette();
        break;
    }
  }, [filteredActions, selectedIndex, executeAction, closePalette]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      highlightSection(element);
    }
  };

  const highlightSection = (element: HTMLElement) => {
    element.style.transition = 'box-shadow 0.3s ease, border-color 0.3s ease';
    element.style.boxShadow = '0 0 0 3px rgba(0, 212, 170, 0.4)';
    element.style.borderColor = 'rgba(0, 212, 170, 0.6)';
    setTimeout(() => {
      element.style.boxShadow = '';
      element.style.borderColor = '';
    }, 2000);
  };

  const highlightProject = (index: number) => {
    scrollToSection('projects');
    setTimeout(() => {
      const cards = document.querySelectorAll('.proj-card, [class*="proj-carousel"] > div');
      const card = cards[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        highlightSection(card);
      }
    }, 500);
  };

  const filterSkills = () => {
    scrollToSection('about');
    // Could emit custom event for skills filtering
  };

  const showToast = (message: string) => {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed; bottom: 100px; right: 24px; z-index: 10000;
      background: rgba(10,10,14,0.95); border: 1px solid rgba(0,212,170,0.3);
      padding: 12px 20px; border-radius: 10px; color: #00D4AA;
      font-size: 14px; font-weight: 500; backdrop-filter: blur(20px);
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s ease-in forwards';
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (!isOpen) openPalette();
      }
      if (e.key === 'Escape' && isOpen) {
        closePalette();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, openPalette, closePalette]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo('.cmd-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.2, ease: 'power2.out' });
      gsap.fromTo('.cmd-panel', { scale: 0.96, opacity: 0, y: 16 }, { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'expo.out' });
      gsap.fromTo('.cmd-group', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.04, duration: 0.25, ease: 'power2.out', delay: 0.1 });
      gsap.fromTo('.cmd-item', { opacity: 0, x: -10 }, { opacity: 1, x: 0, stagger: 0.02, duration: 0.2, ease: 'power2.out', delay: 0.15 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(10px); } }
      `}</style>
      
      <div className="cmd-backdrop fixed inset-0 z-[9999] bg-[rgba(10,10,14,0.7)] backdrop-blur-sm" onClick={closePalette} />
      
      <div className="cmd-panel fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 z-[10000] w-full max-w-2xl rounded-2xl border border-[rgba(var(--border-primary),0.6)] bg-[rgba(var(--bg-secondary),0.95)] backdrop-blur-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden animated-gradient-border">
        <div className="p-4 border-b border-[rgba(var(--border-primary),0.4)] bg-[rgba(var(--bg-primary),0.5)]">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgb(var(--text-muted))]">
              <Command className="w-5 h-5" />
            </div>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search projects, skills, navigate... (⌘K to open)"
              className="w-full pl-12 pr-4 py-3 bg-[rgba(var(--bg-tertiary),0.8)] border border-[rgba(var(--border-primary),0.4)] rounded-xl text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] text-lg outline-none transition-all"
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <kbd className="px-2 py-1 text-[10px] font-mono bg-[rgba(var(--border-primary),0.3)] rounded text-[rgb(var(--text-muted))]">⌘K</kbd>
              <button onClick={closePalette} className="p-2 rounded-xl hover:bg-[rgba(var(--border-primary),0.3)] text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-4">
          {filteredActions.length === 0 && query.trim() ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Brain className="w-12 h-12 text-[rgba(var(--accent-primary),0.5)] mb-4 animate-pulse-slow" />
              <p className="text-[rgb(var(--text-secondary))] mb-2">No matches for "<span className="text-[rgb(var(--accent-primary))]">{query}</span>"</p>
              <p className="text-sm text-[rgb(var(--text-muted))]">Try: "voice ai", "react project", "contact", "resume"</p>
            </div>
          ) : (
            groupedActions.map((group) => (
              <div key={group.label} className="cmd-group mb-6">
                <div className="flex items-center gap-2 px-2 py-1 mb-3">
                  <span className="text-[rgb(var(--accent-primary))]">{group.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--text-muted))]">{group.label}</span>
                  <div className="w-full h-px bg-[rgba(var(--border-primary),0.3)]" />
                </div>
                <div className="space-y-1" role="listbox">
                  {group.actions.map((action) => {
                    const globalIndex = filteredActions.indexOf(action);
                    const isSelected = globalIndex === selectedIndex;
                    return (
                      <button
                        key={action.id}
                        onClick={() => executeAction(action)}
                        onMouseEnter={() => setSelectedIndex(globalIndex)}
                        className={`cmd-item w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150 ${
                          isSelected 
                            ? 'bg-[rgba(var(--accent-primary),0.15)] border border-[rgba(var(--accent-primary),0.3)]' 
                            : 'hover:bg-[rgba(var(--border-primary),0.3)]'
                        }`}
                        role="option"
                        aria-selected={isSelected}
                        style={{ 
                          background: isSelected ? 'rgba(var(--accent-primary),0.1)' : 'transparent',
                          borderColor: isSelected ? 'rgba(var(--accent-primary),0.3)' : 'transparent',
                        }}
                      >
                        <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${isSelected ? 'bg-[rgba(var(--accent-primary),0.2)]' : 'bg-[rgba(var(--border-primary),0.2)]'}`}>
                          {action.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-[rgb(var(--text-primary))] truncate">{action.label}</span>
                            {action.shortcut && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[rgba(var(--border-primary),0.3)] rounded text-[rgb(var(--text-muted))]">{action.shortcut}</span>
                            )}
                          </div>
                          <p className="text-xs text-[rgb(var(--text-secondary))] truncate mt-0.5">{action.description}</p>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-[rgb(var(--text-muted))] transition-transform ${isSelected ? 'translate-x-1 text-[rgb(var(--accent-primary))]' : ''}`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))
          )}
          
          {!query.trim() && recentActions.length === 0 && (
            <div className="text-center py-8">
              <Terminal className="w-12 h-12 mx-auto text-[rgba(var(--accent-primary),0.3)] mb-4" />
              <p className="text-[rgb(var(--text-secondary))] mb-1">Press <kbd className="px-2 py-1 text-sm font-mono bg-[rgba(var(--border-primary),0.3)] rounded">⌘K</kbd> anywhere to open</p>
              <p className="text-sm text-[rgb(var(--text-muted))]">Type naturally: "show me AI projects", "email me", "skills"</p>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-[rgba(var(--border-primary),0.3)] bg-[rgba(var(--bg-primary),0.3)]">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[rgb(var(--text-muted))]">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Command className="w-3.5 h-3.5" />
                <span>⌘K</span>
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5" />
                <span>Navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5" />
                <span>Enter</span>
              </span>
              <span className="flex items-center gap-1">
                <X className="w-3.5 h-3.5" />
                <span>Esc</span>
              </span>
            </div>
            <span>Built with ❤️ by Rakesh</span>
          </div>
        </div>
      </div>

      {showHint && !isOpen && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9998] animate-slide-up" onClick={() => setShowHint(false)}>
          <div className="flex items-center gap-2 px-4 py-2 bg-[rgba(var(--bg-secondary),0.95)] backdrop-blur-xl border border-[rgba(var(--accent-primary),0.3)] rounded-full shadow-lg text-sm">
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-[rgba(var(--accent-primary),0.2)] rounded text-[rgb(var(--accent-primary))]">⌘K</kbd>
            <span className="text-[rgb(var(--text-secondary))]">Open Command Palette</span>
            <button onClick={() => setShowHint(false)} className="ml-2 p-1 text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))]">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};