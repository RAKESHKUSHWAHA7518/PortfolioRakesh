import React, { useState, useRef } from 'react';
import { ExternalLink, Github, ChevronDown, Code, Database, Server, Layers, CheckCircle2 } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Agentic AI Multi-Agent Research',
      description: 'Advanced orchestration framework enabling autonomous, multi-agent task execution and planning.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80',
      tags: ['LangChain', 'CrewAI', 'Python', 'LLM Chains', 'VectorDB', 'FastAPI'],
      github: 'https://github.com/RAKESHKUSHWAHA7518',
      demo: 'https://github.com/RAKESHKUSHWAHA7518',
      featured: true,
      badge: 'Research / In Development',
      category: 'AI Research',
      details: {
        overview: 'Researching and prototyping an autonomous multi-agent framework. The system orchestrates specialized AI agents (e.g., Code Researcher, Tester, Coordinator) executing complex planning, reflection, and debugging cycles. Built to model distributed cognitive tasks locally.',
        features: [
          'Goal-oriented hierarchical planning and task delegation',
          'Intra-agent messaging loops and conflict resolution',
          'Self-correction and error reflecting loops',
          'Vector database search (RAG) for localized contextual memories',
          'Extensible tool interface for executing custom code environments',
        ],
        techStack: {
          frontend: ['React.js (Dashboard Mockup)', 'Tailwind CSS'],
          backend: ['Python', 'CrewAI', 'LangChain', 'OpenAI / Anthropic APIs', 'ChromaDB', 'FastAPI'],
          deployment: ['Localhost Research Environment', 'Docker'],
        },
      },
    },
    {
      title: 'NextViseAI',
      description: 'AI-powered clinical NER tool for oncology biomarker processing using AWS Comprehend Medical',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      tags: ['Python', 'AWS Comprehend Medical', 'Docker', 'Node.js', 'React', 'Firebase'],
      github: 'https://github.com/RAKESHKUSHWAHA7518',
      demo: 'https://github.com/RAKESHKUSHWAHA7518',
      category: 'Healthcare AI',
      details: {
        overview: 'Developed NextViseAI at Mindcraft Labs — integrating AWS Comprehend Medical within a Dockerized Python worker to automate clinical Named Entity Recognition (NER) tasks and oncology biomarker processing. Also designed a secure "magic link" onboarding flow using AWS Serverless Application Model (SAM).',
        features: [
          'AWS Comprehend Medical for clinical NER',
          'Dockerized Python worker for biomarker processing',
          'Magic link authentication via AWS SAM',
          'Serverless architecture with AWS Lambda',
          'Oncology data pipeline automation',
        ],
        techStack: {
          frontend: ['React', 'TypeScript', 'Tailwind CSS'],
          backend: ['Python', 'Node.js', 'AWS Lambda', 'AWS SAM', 'Docker'],
          deployment: ['AWS ECS', 'AWS EC2'],
        },
      },
    },
    {
      title: 'SkillSwap',
      description: 'Full-stack platform to exchange skills mutually without monetary transactions',
      image: 'https://i.postimg.cc/RCkq99LP/Screenshot-2026-09-13-150904.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'],
      github: 'https://github.com/RAKESHKUSHWAHA7518/ProjectCom',
      demo: 'https://skillexchange.fun/',
      category: 'Full Stack',
      details: {
        overview: 'Developed SkillSwap, a full-stack web application that connects users to exchange skills mutually without monetary transactions (e.g., Python for Graphic Design). Features skill-matching cards, gamification with credits and badges, and a clean responsive UI.',
        features: [
          'User authentication and profile management',
          'Skill listing and discovery system',
          'Skill-matching algorithm',
          'Gamification: credits and badges',
          'Responsive UI with smooth navigation',
        ],
        techStack: {
          frontend: ['React.js', 'Tailwind CSS'],
          backend: ['Node.js', 'Express.js', 'MongoDB'],
          deployment: ['Vercel'],
        },
      },
    },
    {
      title: 'ShopNow',
      description: 'A comprehensive e-commerce platform designed for scalability and performance',
      image: 'https://i.postimg.cc/HsdS4wLz/shopNow.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Express.js', 'GitHub'],
      github: 'https://github.com/RAKESHKUSHWAHA7518/E-com-Full-Stack-Project',
      demo: 'https://e-com-full-stack-project-9jpg.vercel.app',
      category: 'E-Commerce',
      details: {
        overview: 'A full-stack e-commerce solution built with modern technologies. An E-commerce platform with 3 panels: User, Admin, and Superadmin. Users can browse, add to cart, and purchase while admins manage products and inventory. Built with role-based access control.',
        features: [
          'User authentication and authorization',
          'Product catalog with advanced filtering',
          'Real-time shopping cart updates',
          'Multi-role access (User, Admin, SuperAdmin)',
          'Dashboard analytics for inventory control',
        ],
        techStack: {
          frontend: ['React', 'Redux', 'Tailwind CSS'],
          backend: ['Node.js', 'Express', 'MongoDB'],
          deployment: ['Vercel'],
        },
      },
    },
    {
      title: 'AskMyDoc',
      description: 'RAG-powered document Q&A system using Gemini API and Vector DB',
      image: 'https://iili.io/Fhtlf2V.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Gemini API'],
      github: 'https://github.com/RAKESHKUSHWAHA7518/Rag-application-with-VectorDB',
      demo: 'https://askmydoc-ten.vercel.app/',
      category: 'RAG Application',
      details: {
        overview: "An application that allows users to upload a PDF document, processes and embeds its content, and enables a chat-based Q&A interface to query the document's knowledge base using a large language model.",
        features: [
          'Real-time Answer according to your Documents',
          'Gen AI Vector DB embeddings',
          'PDF Upload and Processing pipelines',
          'Chat-based Q&A Interface',
          'Gemini API Integration',
        ],
        techStack: {
          frontend: ['React', 'Context API', 'Tailwind CSS', 'Gemini API'],
          backend: ['Firebase', 'Cloud Functions'],
          deployment: ['Vercel'],
        },
      },
    },
    {
      title: 'AI Coding Assistant',
      description: 'AI-powered coding assistant for real-time code help and explanations',
      image: 'https://iili.io/FhtjzHG.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Gemini API'],
      github: 'https://github.com/RAKESHKUSHWAHA7518/coding-assistant',
      demo: 'https://coding-assistant-seven.vercel.app/',
      category: 'Developer Tools',
      details: {
        overview: 'An AI-powered coding assistant that provides real-time code suggestions, explanations, and debugging help. Built with React and powered by the Gemini API to help developers write better code faster.',
        features: [
          'Real-time AI code suggestions',
          'Code explanation and debugging help',
          'Gemini API integration for intelligent responses',
          'Syntax highlighting and code formatting',
        ],
        techStack: {
          frontend: ['React', 'Context API', 'Tailwind CSS', 'Gemini API'],
          backend: ['Firebase', 'Cloud Functions'],
          deployment: ['Vercel'],
        },
      },
    },
    {
      title: 'Food Application (Swiggy Clone)',
      description: 'Real-time collaborative Cart management system using live Swiggy APIs',
      image: 'https://i.postimg.cc/9fWNmy6z/Food-Application.png',
      tags: ['React', 'Redux', 'Tailwind CSS', 'Swiggy API'],
      github: 'https://github.com/RAKESHKUSHWAHA7518/swigy-project',
      demo: 'https://vocal-kataifi-155663.netlify.app/',
      category: 'Food Tech',
      details: {
        overview: 'Designed a Swiggy-like application using React.js. Features restaurant displays, menu rendering with live Swiggy APIs (handling CORS requests), and custom Redux cart updates.',
        features: [
          'Real-time restaurant listing displays',
          'CORS proxy integrations for official Swiggy API data',
          'Cart additions and subtractions via Redux Toolkit',
        ],
        techStack: {
          frontend: ['React', 'Redux Toolkit', 'Tailwind CSS'],
          backend: ['Firebase (Mock API)'],
          deployment: ['Netlify'],
        },
      },
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.proj-title .char',
        { y: '100%', opacity: 0 },
        {
          y: '0%', opacity: 1, stagger: 0.03, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: '.proj-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.proj-header .divider, .proj-header .desc',
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.proj-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.proj-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.proj-grid',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[rgb(var(--bg-secondary))] border-y border-[rgba(var(--border-primary),0.3)] overflow-hidden"
      aria-label="Projects"
    >
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-50" />

      <div className="section-container relative z-10">
        <div className="proj-header text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(var(--accent-tertiary),0.1)] border border-[rgba(var(--accent-tertiary),0.2)] text-[rgb(var(--accent-tertiary))] text-xs font-semibold uppercase tracking-widest mb-6">
            <span>// Projects</span>
          </div>
          <h2 className="proj-title section-title mb-4">
            <SplitText text="Featured Projects" charClassName="char" />
          </h2>
          <div className="divider section-divider" />
          <p className="section-description desc">Showcasing expertise in full-stack development and Agentic AI</p>
        </div>

        <div className="proj-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo: string;
    featured?: boolean;
    badge?: string;
    category: string;
    details: {
      overview: string;
      features: string[];
      techStack: { frontend: string[]; backend: string[]; deployment: string[] };
    };
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
    if (detailsRef.current) {
      if (!isExpanded) {
        gsap.fromTo(
          detailsRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
        );
      } else {
        gsap.to(detailsRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in' });
      }
    }
  };

  return (
    <TiltCard className="proj-card h-full" maxRotation={8}>
      <div
        ref={cardRef}
        className="surface h-full flex flex-col rounded-2xl overflow-hidden group relative animated-gradient-border"
      >
        <div className="relative h-52 md:h-56 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg-primary))] via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />

          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
            <span className="px-3 py-1.5 bg-[rgba(var(--bg-primary),0.95)] backdrop-blur-sm text-[rgb(var(--text-primary))] border border-[rgba(var(--border-primary),0.3)] rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1.5 bg-[rgba(var(--accent-tertiary),0.95)] backdrop-blur-sm text-white border border-[rgba(var(--accent-tertiary),0.3)] rounded-full text-[10px] font-bold tracking-widest uppercase shadow-lg">
                {project.badge}
              </span>
            )}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-[rgb(var(--text-primary))] mb-3 group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300">{project.title}</h3>
          <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] rounded-lg text-xs font-semibold hover:text-[rgb(var(--accent-primary))] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.2)] border transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={toggleDetails}
            className="w-full flex items-center justify-between text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] text-xs font-bold uppercase tracking-wider mb-4 border-t border-[rgba(var(--border-primary),0.3)] pt-4 transition-colors duration-200 touch-interactive"
          >
            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          <div ref={detailsRef} className="h-0 opacity-0 overflow-hidden">
            <div className="space-y-5 pb-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--text-muted))] mb-2 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" style={{ color: 'rgb(var(--accent-primary))' }} />
                  Overview
                </h4>
                <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
                  {project.details.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--text-muted))] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'rgb(var(--accent-primary))' }} />
                  Key Features
                </h4>
                <ul className="space-y-1.5 text-xs text-[rgb(var(--text-secondary))]">
                  {project.details.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[rgb(var(--accent-primary))] mt-0.5 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[rgb(var(--text-muted))] mb-3">Tech Stack</h4>
                <div className="space-y-2">
                  <TechStackRow icon={<Code className="w-3.5 h-3.5" />} title="Frontend" items={project.details.techStack.frontend} />
                  <TechStackRow icon={<Server className="w-3.5 h-3.5" />} title="Backend" items={project.details.techStack.backend} />
                  <TechStackRow icon={<Database className="w-3.5 h-3.5" />} title="Deployment" items={project.details.techStack.deployment} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4 border-t border-[rgba(var(--border-primary),0.3)]">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[rgba(var(--border-primary),0.3)] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.3)] border text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent-primary))] rounded-xl text-xs font-semibold transition-all duration-200 touch-interactive"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] hover:opacity-90 text-[rgb(var(--text-inverse))] rounded-xl text-xs font-semibold transition-all duration-200 touch-interactive"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

const TechStackRow = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
  <div className="flex items-center gap-2 text-xs text-[rgb(var(--text-secondary))]">
    <span className="text-[rgb(var(--accent-primary))]">{icon}</span>
    <span className="font-semibold text-[rgb(var(--text-primary))]">{title}:</span>
    <span>{items.join(', ')}</span>
  </div>
);