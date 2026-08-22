import React, { useRef } from 'react';
import { Target, Zap, Award, Code2, Database, Bot, Cloud, Users, Briefcase, Globe, Layers } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, value: 2.5, suffix: '+', label: 'Years Experience' },
    { icon: <Users className="w-5 h-5" />, value: 15, suffix: '+', label: 'Clients & Teams' },
    { icon: <Globe className="w-5 h-5" />, value: 25, suffix: '+', label: 'Projects Delivered' },
    { icon: <Layers className="w-5 h-5" />, value: 30, suffix: '+', label: 'Technologies' },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Redux', 'Shadcn/UI', 'Framer Motion'],
      icon: <Code2 className="w-5 h-5" />,
      color: 'rgb(var(--accent-primary))',
      bg: 'rgba(var(--accent-primary), 0.1)',
      border: 'rgba(var(--accent-primary), 0.2)',
    },
    {
      category: 'Backend & Cloud',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Python', 'FastAPI', 'AWS Lambda', 'AWS EC2', 'Docker', 'Firebase'],
      icon: <Cloud className="w-5 h-5" />,
      color: 'rgb(var(--accent-secondary))',
      bg: 'rgba(var(--accent-secondary), 0.1)',
      border: 'rgba(var(--accent-secondary), 0.2)',
    },
    {
      category: 'AI & Voice Agents',
      items: ['Multi-Agent Systems', 'LangChain', 'CrewAI', 'RAG', 'OpenAI API', 'ElevenLabs', 'Retell AI', 'Vapi.ai'],
      icon: <Bot className="w-5 h-5" />,
      color: 'rgb(var(--accent-tertiary))',
      bg: 'rgba(var(--accent-tertiary), 0.1)',
      border: 'rgba(var(--accent-tertiary), 0.2)',
    },
    {
      category: 'Database & DevOps',
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'ChromaDB', 'Git', 'GitHub Actions', 'Vercel', 'Linux'],
      icon: <Database className="w-5 h-5" />,
      color: 'rgb(var(--accent-primary))',
      bg: 'rgba(var(--accent-primary), 0.1)',
      border: 'rgba(var(--accent-primary), 0.2)',
    },
  ];

  const achievements = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Voice AI Pioneer',
      description: 'Achieved 20% improvement in voice accuracy via ElevenLabs, Retell & Vapi integration at Mindcraft Labs.',
      metric: '20% ↑',
      color: 'rgb(var(--accent-primary))',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Expert',
      description: 'Reduced page load time by 40% at BookNow through React optimization and code splitting.',
      metric: '40% ↓',
      color: 'rgb(var(--accent-secondary))',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Content Creator',
      description: 'Founded Rkcoder.tech — grew to 10k monthly views within 5 months sharing dev tutorials.',
      metric: '10K+',
      color: 'rgb(var(--accent-tertiary))',
    }
  ];

  const journey = [
    {
      year: '2025',
      title: 'AI Software Developer',
      company: 'Mindcraft Labs',
      desc: 'Pioneering voice AI agents & multi-agent systems. Built production systems using Retell, Vapi, ElevenLabs. Leading R&D on autonomous agent frameworks.',
    },
    {
      year: '2024',
      title: 'Frontend Developer Intern',
      company: 'BookNow',
      desc: 'Built movie ticket booking & admin panels. Achieved 40% performance gains through optimization. Integrated payment systems & Google Maps.',
    },
    {
      year: '2024',
      title: 'Full Stack Developer Intern',
      company: 'CCA-Techno Pvt. Ltd',
      desc: 'Developed healthcare management software (HMS). 5 modules: Account, Lab, Pharmacy, Admin. React + Node.js full-stack.',
    },
    {
      year: '2023',
      title: 'Founder',
      company: 'Rkcoder.tech',
      desc: 'Launched developer education platform. Scaled to 10K+ monthly visits in 5 months. Tutorials on React, Node.js, AI.',
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-title .char',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.03, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: '.about-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.about-header .divider, .about-header .desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.journey-item',
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: '.journey-container', start: 'top 80%' }
        }
      );

      gsap.fromTo('.stat-card',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'back.out(1.4)',
          scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' }
        }
      );

      gsap.utils.toArray('.stat-number').forEach((el: HTMLElement) => {
        const targetValue = parseFloat(el.getAttribute('data-val') || '0');
        const isFloat = targetValue % 1 !== 0;
        const count = { val: 0 };
        gsap.to(count, {
          val: targetValue,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.stats-grid', start: 'top 80%' },
          onUpdate: () => {
            el.textContent = isFloat ? count.val.toFixed(1) : Math.floor(count.val);
          },
        });
      });

      gsap.fromTo('.achievement-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: '.achievements-grid', start: 'top 80%' }
        }
      );

      gsap.fromTo('.skill-category',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' }
        }
      );

      gsap.fromTo('.skill-tag',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, stagger: 0.03, duration: 0.4, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.skills-grid', start: 'top 80%' }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[rgb(var(--bg-secondary))] border-y border-[rgba(var(--border-primary),0.3)] overflow-hidden"
      aria-label="About"
    >
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="about-header text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(var(--accent-primary),0.1)] border border-[rgba(var(--accent-primary),0.2)] text-[rgb(var(--accent-primary))] text-xs font-semibold uppercase tracking-widest mb-6">
            <span>// About Me</span>
          </div>
          <h2 className="about-title section-title mb-4">
            <SplitText text="Who I Am" charClassName="char" />
          </h2>
          <div className="divider section-divider" />
          <p className="section-description desc">
            Software Developer specializing in full-stack web applications and AI-powered multi-agent workflow automation systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          <div className="journey-container lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-[rgb(var(--text-primary))] mb-8">Professional Journey</h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] opacity-30" />
              {journey.map((item, index) => (
                <div key={index} className="journey-item relative pl-16 pb-10 last:pb-0">
                  <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-[rgb(var(--bg-primary))] border-3 border-[rgb(var(--accent-primary))] z-10 
                    {index === 0 ? 'bg-[rgb(var(--accent-primary))]' : 'group-hover:bg-[rgb(var(--accent-primary))] transition-colors'}" />
                  <div className="surface-elevated p-6 rounded-2xl group">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <span className="text-xs font-mono font-bold text-[rgb(var(--accent-primary))]">{item.year}</span>
                      <span className="text-2xl font-bold text-[rgb(var(--text-primary))]">{item.title}</span>
                    </div>
                    <p className="text-sm font-semibold text-[rgb(var(--accent-secondary))] mb-3">{item.company}</p>
                    <p className="text-[rgb(var(--text-secondary))] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="stats-grid grid grid-cols-2 gap-4 sticky top-24">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card surface-elevated p-5 rounded-2xl text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center">
                    <div className="p-3 rounded-xl mb-3" style={{ background: `rgba(var(--accent-primary), 0.15)`, color: 'rgb(var(--accent-primary))' }}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[rgb(var(--text-primary))] mb-1 flex items-baseline">
                      <span className="stat-number" data-val={stat.value}>0</span>
                      <span className="text-[rgb(var(--accent-primary))]">{stat.suffix}</span>
                    </div>
                    <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="achievements-grid mb-20">
          <div className="text-center mb-12">
            <h3 className="section-title mb-3">Key Achievements</h3>
            <div className="section-divider mx-auto" />
            <p className="section-description">Measurable impact across AI, performance, and community building</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <TiltCard key={index} className="achievement-card h-full max-rotation-8">
                <div className="surface-elevated p-6 rounded-2xl h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-transparent via-[rgba(var(--accent-primary),0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-start gap-4 mb-4">
                    <div className="p-3.5 rounded-xl flex-shrink-0" style={{ background: `${achievement.color}15`, color: achievement.color }}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-[rgb(var(--text-primary))] mb-1">{achievement.title}</h4>
                      <span className="text-sm font-semibold" style={{ color: achievement.color }}>{achievement.metric}</span>
                    </div>
                  </div>
                  <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed flex-grow">{achievement.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          <div className="text-center mb-12">
            <h3 className="section-title mb-3">Tech Stack & Tooling</h3>
            <div className="section-divider mx-auto" />
            <p className="section-description">Production-ready technologies I use to build scalable systems</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="skill-category surface p-6 rounded-2xl h-full flex flex-col group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative mb-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg flex-shrink-0" style={{ background: skill.bg, color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-bold text-[rgb(var(--text-primary))]">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="skill-tag px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 group-hover:scale-105"
                        style={{ 
                          background: skill.bg, 
                          color: skill.color,
                          borderColor: skill.border,
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};