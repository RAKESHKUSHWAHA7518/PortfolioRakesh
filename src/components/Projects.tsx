import React, { useState, useRef } from 'react';
import { ExternalLink, Github, Code2, Layout, Database, ChevronDown, Bot } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Agentic AI Multi-Agent Research',
      description: 'Advanced orchestration framework research enabling autonomous, multi-agent task execution and planning.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=60',
      tags: ['LangChain', 'CrewAI', 'Python', 'LLM Chains', 'VectorDB', 'FastAPI'],
      github: 'https://github.com/RAKESHKUSHWAHA7518',
      demo: 'https://github.com/RAKESHKUSHWAHA7518',
      featured: true,
      badge: '🔬 Research / In Development',
      details: {
        overview: 'Researching and prototyping an autonomous multi-agent framework. The system orchestrates specialized AI agents (e.g., Code Researcher, Tester, Coordinator) executing complex planning, reflection, and debugging cycles. Built to model distributed cognitive tasks locally.',
        features: [
          'Goal-oriented hierarchal planning and task delegation',
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
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=60',
      tags: ['Python', 'AWS Comprehend Medical', 'Docker', 'Node.js', 'React', 'Firebase'],
      github: 'https://github.com/RAKESHKUSHWAHA7518',
      demo: 'https://github.com/RAKESHKUSHWAHA7518',
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
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=60',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js'],
      github: 'https://github.com/RAKESHKUSHWAHA7518',
      demo: 'https://github.com/RAKESHKUSHWAHA7518',
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
      description: 'Real-time Answer according to your Documents',
      image: 'https://iili.io/Fhtlf2V.png',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Gemini API'],
      github: 'https://github.com/RAKESHKUSHWAHA7518/Rag-application-with-VectorDB',
      demo: 'https://askmydoc-ten.vercel.app/',
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
      title: 'Food Application',
      description: 'Real-time collaborative Cart management system Swiggy clone',
      image: 'https://i.postimg.cc/9fWNmy6z/Food-Application.png',
      tags: ['React', 'Redux', 'Tailwind CSS', 'Swiggy API'],
      github: 'https://github.com/RAKESHKUSHWAHA7518/swigy-project',
      demo: 'https://vocal-kataifi-155663.netlify.app/',
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
    // Title SplitText animation
    gsap.fromTo('.proj-title-char',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.04,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.proj-header',
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo('.proj-header-desc',
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.proj-header',
          start: 'top 85%',
        },
      }
    );

    // Cards staggered entry
    gsap.fromTo('.proj-card',
      { y: 40, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.proj-grid',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="proj-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            <SplitText text="Featured Projects" charClassName="proj-title-char" />
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto mb-6 exp-header-desc proj-header-desc" />
          <p className="text-lg text-slate-600 dark:text-slate-400 proj-header-desc">
            Showcasing my expertise in full-stack development and Agentic AI
          </p>
        </div>

        {/* Projects Grid */}
        <div className="proj-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
    if (detailsRef.current) {
      if (!isExpanded) {
        gsap.fromTo(
          detailsRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.4, ease: 'power3.out' }
        );
      } else {
        gsap.to(detailsRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power3.in' });
      }
    }
  };

  return (
    <TiltCard className="proj-card h-full">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm overflow-hidden flex flex-col h-full group hover:shadow-md transition-shadow">
        {/* Card Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {project.badge && (
            <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full shadow-lg">
              {project.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50">{project.title}</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Details Toggle */}
          <button
            onClick={toggleDetails}
            className="w-full flex items-center justify-between text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4 border-t border-slate-100 dark:border-slate-800 pt-4"
          >
            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>

          {/* Collapsible details wrapper */}
          <div ref={detailsRef} className="h-0 opacity-0 overflow-hidden">
            <div className="space-y-4 pb-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Overview</h4>
                <p className="text-xs text-slate-600 dark:text-slate-450 leading-relaxed">
                  {project.details.overview}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Key Features</h4>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-450">
                  {project.details.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h4>
                <div className="space-y-1.5">
                  <TechStackRow icon={<Layout className="w-3.5 h-3.5" />} title="Frontend" items={project.details.techStack.frontend} />
                  <TechStackRow icon={<Database className="w-3.5 h-3.5" />} title="Backend" items={project.details.techStack.backend} />
                </div>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="flex space-x-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <Github className="w-4 h-4 mr-1.5" />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4 mr-1.5" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

const TechStackRow = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
  <div className="flex items-center gap-1.5 text-xs text-slate-650 dark:text-slate-400">
    <span className="text-indigo-500">{icon}</span>
    <span className="font-semibold">{title}:</span>
    <span>{items.join(', ')}</span>
  </div>
);