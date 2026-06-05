import React, { useState, useRef, useEffect } from 'react';
import { Code2, Database, Download, Briefcase, ArrowRight, X, Bot, Cloud } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { SplitText } from './SplitText';
import { useGSAP } from '../hooks/useGSAP';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);

  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1IwfE1M8QKRtD_4CC5Fi-st8Lp1FnfD_1/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  // Roles to cycle through for Typewriter effect
  const roles = [
    'AI Software Developer',
    'Full Stack Engineer',
    'Voice Agent Builder',
    'Multi-Agent System Researcher',
  ];

  const jobHighlights = [
    'Full Stack Development',
    'AI Voice Agents',
    'LLM Integration',
    'Agile Methodology',
    'Performance Optimization',
  ];

  // Typewriter implementation
  useEffect(() => {
    let activeIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const currentRole = roles[activeIndex];
      if (!typewriterRef.current) return;

      if (isDeleting) {
        typewriterRef.current.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterRef.current.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 120;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of word
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        activeIndex = (activeIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next word
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, 1000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    // Entrance animations for text and content elements
    const tl = gsap.timeline();

    tl.fromTo('.hero-avatar-container',
      { scale: 0.5, autoAlpha: 0, rotation: -15 },
      {
        scale: 1,
        autoAlpha: 1,
        rotation: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)',
      }
    )
      .fromTo(
        '.hero-title-char',
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.7)',
        },
        '-=0.6'
      )
      .fromTo(
        '.hero-subtitle',
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .fromTo(
        '.hero-cta',
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.4'
      )
      .fromTo(
        '.hero-badge',
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.5,
          ease: 'back.out(1.5)',
        },
        '-=0.4'
      )
      .fromTo(
        '.hero-desc',
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
        },
        '-=0.3'
      )
      .fromTo(
        '.hero-skill-card',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );

    // Parallax mouse movements for decorative floating circles
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xOffset1 = (clientX - window.innerWidth / 2) * 0.03;
      const yOffset1 = (clientY - window.innerHeight / 2) * 0.03;
      const xOffset2 = (clientX - window.innerWidth / 2) * -0.02;
      const yOffset2 = (clientY - window.innerHeight / 2) * -0.02;

      gsap.to('.float-blob-1', { x: xOffset1, y: yOffset1, duration: 0.6, ease: 'power2.out' });
      gsap.to('.float-blob-2', { x: xOffset2, y: yOffset2, duration: 0.8, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate modal open/close
  useGSAP(() => {
    if (showJobModal) {
      gsap.fromTo(
        '.modal-backdrop',
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        '.modal-content',
        { scale: 0.9, y: 20 },
        { scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.5)' }
      );
    }
  }, [showJobModal]);

  return (
    <>
      <section
        id="home"
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
      >
        {/* Floating gradient background blobs */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] float-blob-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] float-blob-2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side details */}
            <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="hero-avatar-container relative mb-6 p-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
                <img
                  ref={avatarRef}
                  src="https://avatars.githubusercontent.com/u/RAKESHKUSHWAHA7518"
                  alt="Rakesh Kushwaha"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Rakesh+Kushwaha&background=6366f1&color=fff&size=160';
                  }}
                  className="w-36 h-36 rounded-full object-cover border-4 border-slate-50 dark:border-slate-950"
                />
                <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 ring-4 ring-slate-50 dark:ring-slate-950">
                  <span className="h-3 w-3 animate-ping rounded-full bg-white opacity-75" />
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                <SplitText text="Rakesh Kushwaha" charClassName="hero-title-char" />
              </h1>

              <div className="hero-subtitle text-lg sm:text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2 h-8 flex items-center">
                <span ref={typewriterRef}></span>
                <span className="inline-block w-[3px] h-[1.2em] bg-indigo-600 dark:bg-indigo-400 ml-1 animate-pulse" />
              </div>

              <p className="hero-desc text-slate-600 dark:text-slate-400 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
                Transforming complex ideas into polished web interfaces and production-ready Multi-Agent systems. Based in India.
              </p>

              <div className="hero-cta flex flex-wrap gap-4 justify-center lg:justify-start">
                <MagneticButton
                  onClick={downloadResume}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:opacity-95 flex items-center space-x-2 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </MagneticButton>

                <a href="#contact">
                  <MagneticButton
                    className="px-6 py-3 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200"
                  >
                    <span>Let's Talk</span>
                  </MagneticButton>
                </a>
              </div>
            </div>

            {/* Right side stats and cards */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex justify-center lg:justify-start mb-6">
                <button
                  onClick={() => setShowJobModal(true)}
                  className="hero-badge px-4 py-2 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 flex items-center gap-2 border border-indigo-200/50 dark:border-indigo-900/50 hover:bg-indigo-200 dark:hover:bg-indigo-900/80 transition-all duration-200"
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Available for Full-time Roles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="hero-desc text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-8 text-center lg:text-left leading-relaxed">
                Building modern web apps & multi-agent AI systems — from responsive frontends to complex LLM workflows. Currently pushing boundaries at <span className="font-semibold text-indigo-500 dark:text-indigo-400">Mindcraft Labs</span>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="hero-skill-card bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500 dark:text-indigo-400 w-fit mb-4">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Frontend Stack</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">React.js, Next.js, TypeScript, Tailwind CSS, GSAP</p>
                </div>

                <div className="hero-skill-card bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500 dark:text-purple-400 w-fit mb-4">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Backend & Database</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Node.js, Express.js, MongoDB, REST APIs, Webhooks</p>
                </div>

                <div className="hero-skill-card bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
                  <div className="p-3 bg-pink-500/10 rounded-xl text-pink-500 dark:text-pink-400 w-fit mb-4">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI Agents & LLMs</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Multi-agent systems, Retell AI, Vapi, ElevenLabs, OpenAI, Gemini</p>
                </div>

                <div className="hero-skill-card bg-white/50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md">
                  <div className="p-3 bg-sky-500/10 rounded-xl text-sky-500 dark:text-sky-400 w-fit mb-4">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Cloud & Deployment</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">AWS (Lambda, EC2, S3, Cognito), Firebase, Docker, Git</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available for work modal */}
      {showJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setShowJobModal(false)}
            className="modal-backdrop absolute inset-0 bg-slate-950/40 dark:bg-slate-950/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="modal-content relative bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 z-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold">Open to Work</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Available for new opportunities</p>
              </div>
              <button
                onClick={() => setShowJobModal(false)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {jobHighlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-900/50 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Preferred Roles</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    AI Software Developer
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Full Stack Developer
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Voice Agent Engineer
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    Conversational AI Developer
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Availability</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ready to join immediately. Open to remote contracts or on-site positions in India.
                </p>
              </div>

              <div className="flex gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={downloadResume}
                  className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors duration-200"
                >
                  Download Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setShowJobModal(false)}
                  className="flex-1 py-3 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold text-center transition-colors duration-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
