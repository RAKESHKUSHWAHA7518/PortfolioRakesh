import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Download, ArrowRight, Briefcase, Sparkles, Zap, Bot, Globe } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { SplitText } from './SplitText';
import { useGSAP } from '../hooks/useGSAP';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1IwfE1M8QKRtD_4CC5Fi-st8Lp1FnfD_1/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  const jobHighlights = [
    'Full Stack Development',
    'AI Voice Agents',
    'LLM Integration',
    'Agile Methodology',
    'Performance Optimization',
  ];

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  useEffect(() => {
    const roles = [
      'AI Software Developer',
      'Full Stack Engineer',
      'Voice Agent Builder',
      'Multi-Agent Researcher',
    ];
    
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
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        activeIndex = (activeIndex + 1) % roles.length;
        typingSpeed = 500;
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, 1000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-avatar-wrap',
        { scale: 0.8, opacity: 0, rotate: -8 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1.4, ease: 'elastic.out(1, 0.6)' }
      )
      .fromTo('.hero-title .char',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.025, duration: 0.9, ease: 'expo.out' }, '-=0.7'
      )
      .fromTo('.hero-role-wrap',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }, '-=0.5'
      )
      .fromTo('.hero-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }, '-=0.4'
      )
      .fromTo('.hero-cta .btn',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'back.out(1.4)' }, '-=0.3'
      )
      .fromTo('.hero-badge',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.3'
      )
      .fromTo('.hero-stat',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'expo.out' }, '-=0.4'
      )
      .fromTo('.hero-float-item',
        { y: 40, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 1, ease: 'expo.out' }, '-=0.6'
      );

      const handleMouseMove = (e: MouseEvent) => {
        if (isTouchDevice) return;
        const { clientX, clientY } = e;
        const xRatio = (clientX - window.innerWidth / 2) / (window.innerWidth / 2);
        const yRatio = (clientY - window.innerHeight / 2) / (window.innerHeight / 2);

        gsap.to('.float-orb-1', { x: xRatio * 40, y: yRatio * 40, duration: 1.2, ease: 'power2.out' });
        gsap.to('.float-orb-2', { x: -xRatio * 30, y: -yRatio * 30, duration: 1.5, ease: 'power2.out' });
        gsap.to('.float-orb-3', { x: xRatio * 20, y: -yRatio * 20, duration: 1.8, ease: 'power2.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, [isTouchDevice]);

  useGSAP(() => {
    if (showJobModal) {
      gsap.fromTo('.modal-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' });
      gsap.fromTo('.modal-content', { scale: 0.92, y: 20 }, { scale: 1, y: 0, duration: 0.5, ease: 'expo.out' });
    }
  }, [showJobModal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 60;
    const maxDistance = isMobile ? 80 : 120;
    const lineWidth = isMobile ? 0.3 : 0.5;
    const maxAlpha = isMobile ? 0.1 : 0.15;

    const particles: Array<{x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string}> = [];
    const colors = ['#00D4AA', '#8B5CF6', '#FF6B6B'];
    
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          vy: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.3),
          size: Math.random() * (isMobile ? 1.5 : 2) + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    let animationId: number;
    let lastFrame = 0;
    const targetFPS = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (timestamp: number) => {
      if (timestamp - lastFrame < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastFrame = timestamp;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0) p.x = canvas.offsetWidth;
        if (p.x > canvas.offsetWidth) p.x = 0;
        if (p.y < 0) p.y = canvas.offsetHeight;
        if (p.y > canvas.offsetHeight) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      
      particles.forEach((p, i) => {
        particles.forEach((p2, j) => {
          if (i >= j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / maxDistance) * maxAlpha;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        });
      });
      ctx.globalAlpha = 1;
      
      animationId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();
    
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resize();
        initParticles();
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const handleAvatarTap = useCallback(() => {
    if (avatarRef.current) {
      gsap.to(avatarRef.current, {
        scale: 1.1,
        rotate: 5,
        duration: 0.2,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
      });
    }
  }, []);

  return (
    <>
      <section
        id="home"
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden bg-[rgb(var(--bg-primary))] noise-overlay"
        aria-label="Home"
      >
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: isTouchDevice ? 0.4 : 0.6 }}
        />
        
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[rgba(var(--accent-primary),0.06)] blur-[120px] float-orb-1 pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[rgba(var(--accent-secondary),0.05)] blur-[150px] float-orb-2 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[rgba(var(--accent-tertiary),0.04)] blur-[100px] float-orb-3 pointer-events-none" />

        <div className="section-container relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start min-h-[calc(100vh-5rem)]">
            <div className="col-span-1 lg:col-span-6 order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="hero-avatar-wrap relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-br from-[rgb(var(--accent-primary))] via-[rgb(var(--accent-secondary))] to-[rgb(var(--accent-tertiary))] rounded-full opacity-20 blur-2xl animate-pulse-slow" />
                <div className="relative p-1.5 bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] rounded-full">
                  <img
                    ref={avatarRef}
                    src="https://avatars.githubusercontent.com/u/RAKESHKUSHWAHA7518"
                    alt="Rakesh Kushwaha"
                    onClick={isTouchDevice ? handleAvatarTap : undefined}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Rakesh+Kushwaha&background=00D4AA&color=0a0a0e&size=160&bold=true';
                    }}
                    className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-[rgb(var(--bg-primary))] transition-transform duration-300 touch-interactive"
                    style={{ touchAction: 'manipulation' }}
                  />
                  <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 ring-4 ring-[rgb(var(--bg-primary))]">
                    <span className="h-2.5 w-2.5 animate-ping rounded-full bg-white opacity-80" />
                  </div>
                </div>
              </div>

              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
                <SplitText text="Rakesh Kushwaha" charClassName="char" />
              </h1>

              <div className="hero-role-wrap mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                  <span className="relative px-4 py-1.5 bg-[rgba(var(--accent-primary),0.1)] border border-[rgba(var(--accent-primary),0.2)] rounded-full text-[rgb(var(--accent-primary))] text-sm font-semibold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 mr-1.5 inline-block" />
                    Open to Opportunities
                  </span>
                  <span className="relative px-4 py-1.5 bg-[rgba(var(--accent-secondary),0.1)] border border-[rgba(var(--accent-secondary),0.2)] rounded-full text-[rgb(var(--accent-secondary))] text-sm font-semibold uppercase tracking-wider">
                    <Zap className="w-4 h-4 mr-1.5 inline-block" />
                    Available for Contract
                  </span>
                </div>
                <div className="hero-subtitle text-lg sm:text-xl font-medium text-[rgb(var(--text-secondary))] min-h-[2.5rem] flex items-center justify-center lg:justify-start gap-2">
                  <span ref={typewriterRef} className="text-[rgb(var(--text-primary))]" />
                  <span className="w-[2px] h-[1.2em] bg-[rgb(var(--accent-primary))] animate-pulse" />
                </div>
              </div>

              <p className="hero-desc text-[rgb(var(--text-secondary))] max-w-xl mb-10 text-base sm:text-lg leading-relaxed text-balance">
                Crafting autonomous AI agents & scalable full-stack systems. 
                <span className="text-gradient-primary font-semibold">Multi-agent architectures</span> to production-ready voice AI.
              </p>

              <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full">
                <MagneticButton
                  onClick={downloadResume}
                  className="btn btn-primary group w-full sm:w-auto"
                  range={50}
                  strength={0.4}
                >
                  <Download className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  <span>Download Resume</span>
                </MagneticButton>

                <a href="#contact" className="btn btn-secondary group w-full sm:w-auto">
                  <span>Let&apos;s Collaborate</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <button
                onClick={() => setShowJobModal(true)}
                className="hero-badge flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(var(--bg-tertiary),0.8)] border border-[rgba(var(--border-primary),0.6)] text-sm font-semibold text-[rgb(var(--text-secondary))] backdrop-blur-md hover:border-[rgba(var(--accent-primary),0.4)] hover:text-[rgb(var(--accent-primary))] transition-all duration-300 w-full sm:w-auto"
              >
                <Briefcase className="w-4 h-4" />
                <span>Available for Full-time Roles</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="col-span-1 lg:col-span-6 order-2">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4">
                <div className="hero-stat surface-elevated p-4 lg:p-6 rounded-2xl group relative overflow-hidden touch-interactive">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-3">
                    <div className="p-3 bg-[rgba(var(--accent-primary),0.15)] rounded-xl text-[rgb(var(--accent-primary))]">
                      <Bot className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl sm:text-4xl font-extrabold text-[rgb(var(--text-primary))]">12+</div>
                      <div className="text-xs sm:text-sm text-[rgb(var(--text-secondary))]">AI Agents Deployed</div>
                    </div>
                  </div>
                </div>

                <div className="hero-stat surface-elevated p-4 lg:p-6 rounded-2xl group relative overflow-hidden touch-interactive">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-secondary),0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-3">
                    <div className="p-3 bg-[rgba(var(--accent-secondary),0.15)] rounded-xl text-[rgb(var(--accent-secondary))]">
                      <Globe className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl sm:text-4xl font-extrabold text-[rgb(var(--text-primary))]">25+</div>
                      <div className="text-xs sm:text-sm text-[rgb(var(--text-secondary))]">Projects Shipped</div>
                    </div>
                  </div>
                </div>

                <div className="hero-stat surface-elevated p-4 lg:p-6 rounded-2xl group relative overflow-hidden touch-interactive">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-tertiary),0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-3">
                    <div className="p-3 bg-[rgba(var(--accent-tertiary),0.15)] rounded-xl text-[rgb(var(--accent-tertiary))]">
                      <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl sm:text-4xl font-extrabold text-[rgb(var(--text-primary))]">2.5+</div>
                      <div className="text-xs sm:text-sm text-[rgb(var(--text-secondary))]">Years Experience</div>
                    </div>
                  </div>
                </div>

                <div className="hero-stat surface-elevated p-4 lg:p-6 rounded-2xl group relative overflow-hidden touch-interactive">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.1)] via-[rgba(var(--accent-secondary),0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-[rgba(var(--accent-primary),0.15)] to-[rgba(var(--accent-secondary),0.15)] rounded-xl">
                      <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-[rgb(var(--accent-primary))]" />
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl sm:text-4xl font-extrabold text-gradient-primary">∞</div>
                      <div className="text-xs sm:text-sm text-[rgb(var(--text-secondary))]">Curiosity Level</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 hero-float-item">
                {[
                  { icon: Bot, color: 'rgb(var(--accent-primary))', label: 'Voice AI', desc: 'Retell, Vapi, ElevenLabs' },
                  { icon: Globe, color: 'rgb(var(--accent-secondary))', label: 'Full Stack', desc: 'React, Next.js, Node.js' },
                  { icon: Sparkles, color: 'rgb(var(--accent-tertiary))', label: 'Agentic AI', desc: 'LangChain, CrewAI, RAG' },
                ].map((item, i) => (
                  <div key={i} className="surface p-4 lg:p-5 rounded-2xl group relative overflow-hidden flex flex-col items-center text-center touch-interactive">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-3" style={{ background: `rgba(${item.color.replace('rgb(', '').replace(')', '')}, 0.15)` }}>
                      <item.icon className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: item.color }} />
                    </div>
                    <div className="relative font-semibold text-[rgb(var(--text-primary))] text-sm lg:text-base">{item.label}</div>
                    <div className="relative text-xs text-[rgb(var(--text-muted))] mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[rgb(var(--text-muted))] text-xs animate-bounce-subtle">
          <span className="uppercase tracking-widest">Scroll to Explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-[rgba(var(--border-primary),0.4)] rounded border border-[rgba(var(--border-primary),0.4)] inline-flex items-center gap-1">
            <span className="text-[rgb(var(--accent-primary))]">⌘K</span>
            <span>Command Palette</span>
          </kbd>
        </div>
      </section>

      {showJobModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setShowJobModal(false)}
            className="modal-backdrop absolute inset-0 bg-[rgba(10,10,14,0.7)] backdrop-blur-sm"
          />
          <div className="modal-content relative surface-elevated w-full max-w-lg rounded-2xl p-6 sm:p-8 z-10 animated-gradient-border">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold">Open to Work</h3>
                <p className="text-sm text-[rgb(var(--text-secondary))] mt-1">Available for new opportunities</p>
              </div>
              <button
                onClick={() => setShowJobModal(false)}
                className="p-2 rounded-xl hover:bg-[rgba(var(--border-primary),0.5)] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors touch-interactive"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-3">Key Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {jobHighlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] border border-[rgba(var(--accent-primary),0.2)] rounded-full text-xs font-medium touch-interactive"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-2">Preferred Roles</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[rgb(var(--text-secondary))]">
                  <li className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-[rgba(var(--accent-primary),0.05)] transition-colors touch-interactive">
                    <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-primary))]" />
                    AI Software Developer
                  </li>
                  <li className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-[rgba(var(--accent-primary),0.05)] transition-colors touch-interactive">
                    <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-primary))]" />
                    Full Stack Developer
                  </li>
                  <li className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-[rgba(var(--accent-primary),0.05)] transition-colors touch-interactive">
                    <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-primary))]" />
                    Voice Agent Engineer
                  </li>
                  <li className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-[rgba(var(--accent-primary),0.05)] transition-colors touch-interactive">
                    <span className="w-2 h-2 rounded-full bg-[rgb(var(--accent-primary))]" />
                    Conversational AI Developer
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-1">Availability</h4>
                <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                  Ready to join immediately. Open to remote contracts or on-site positions in India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[rgba(var(--border-primary),0.5)]">
                <button
                  onClick={downloadResume}
                  className="flex-1 py-3 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] hover:opacity-90 text-[rgb(var(--text-inverse))] rounded-xl text-sm font-semibold transition-all duration-200 touch-interactive"
                >
                  Download Resume
                </button>
                <a
                  href="#contact"
                  onClick={() => setShowJobModal(false)}
                  className="flex-1 py-3 border border-[rgba(var(--border-primary),0.6)] hover:bg-[rgba(var(--border-primary),0.3)] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] rounded-xl text-sm font-semibold text-center transition-colors duration-200 touch-interactive"
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