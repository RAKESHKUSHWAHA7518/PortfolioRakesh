import React, { useRef } from 'react';
import { CheckCircle2, Building2, Code2, Rocket, ChevronRight, MapPin, Calendar, Star } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'AI Software Developer',
      company: 'Mindcraft Labs',
      companyShort: 'Mindcraft',
      period: 'Feb 2025 – Present',
      duration: '1+ Year',
      type: 'Full-time',
      location: 'Remote / India',
      description: [
        'Pioneered AI Voice Agent integration using ElevenLabs, Retell, and Vapi APIs, achieving a 20% improvement in voice accuracy and enhanced human-like conversational experiences.',
        'Built and maintained scalable full-stack solutions using React.js, Next.js, Node.js, MongoDB, Express.js, and Firebase.',
        'Developed NextViseAI, integrating AWS Comprehend Medical within a Dockerized Python worker to automate clinical NER tasks and oncology biomarker processing.',
        'Designed a secure "magic link" onboarding flow leveraging AWS Serverless Application Model (SAM) for streamlined user authentication.',
        'Collaborated with cross-functional teams to design, implement, and optimize API-driven workflows for voice AI products.',
        'Currently researching autonomous multi-agent frameworks using LangChain and CrewAI for complex task orchestration.',
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase', 'Retell AI', 'Vapi.ai', 'ElevenLabs', 'AWS Lambda', 'AWS SAM', 'Docker', 'Prompt Engineering', 'LangChain', 'CrewAI'],
      highlights: ['Voice AI Production Systems', 'Multi-Agent R&D', 'AWS Serverless Architecture'],
      metrics: [
        { label: 'Voice Accuracy', value: '+20%' },
        { label: 'API Latency', value: '-40%' },
        { label: 'Agents Deployed', value: '12+' },
      ],
      color: 'rgb(var(--accent-primary))',
      bg: 'rgba(var(--accent-primary), 0.1)',
      border: 'rgba(var(--accent-primary), 0.2)',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'BookNow',
      companyShort: 'BookNow',
      period: 'Oct 2024 – Mar 2025',
      duration: '6 Months',
      type: 'Internship',
      location: 'Bangalore, India',
      description: [
        'Created two key panels: the Movie Ticket Booking panel and the Admin panel for uploading movies, incorporating payment integration for seamless transactions.',
        'Achieved a 40% reduction in page load time, significantly enhancing website performance and user experience through code splitting and lazy loading.',
        'Implemented real-time seat selection with WebSocket connections for concurrent user handling.',
        'Integrated Google Maps API for theater location services and AWS S3 for asset management.',
      ],
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Shadcn/UI', 'AWS S3', 'Google Maps API', 'WebSockets', 'Performance Optimization'],
      highlights: ['40% Performance Gain', 'Real-time Features', 'Payment Integration'],
      metrics: [
        { label: 'Load Time', value: '-40%' },
        { label: 'Concurrent Users', value: '10K+' },
        { label: 'Panels Built', value: '2' },
      ],
      color: 'rgb(var(--accent-secondary))',
      bg: 'rgba(var(--accent-secondary), 0.1)',
      border: 'rgba(var(--accent-secondary), 0.2)',
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'CCA-Techno Pvt. Ltd',
      companyShort: 'CCA-Techno',
      period: 'Jun 2024 – Sep 2024',
      duration: '4 Months',
      type: 'Internship',
      location: 'Prayagraj, India',
      description: [
        'Designed UI/UX, developed, and maintained healthcare software (HMS) for hospitals across 5 modules: Account, HMS, Lab, Pharmacy, and Admin.',
        'Worked on both Frontend (React.js) and Backend (Node.js/Express.js), implementing role-based access control and data visualization.',
        'Integrated Google Translate API for multi-language support and Google Speech API for voice-enabled features.',
        'Collaborated with healthcare professionals to gather requirements and iterate on UX.',
      ],
      skills: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Shadcn/UI', 'Google Translate API', 'Google Speech API', 'PostgreSQL'],
      highlights: ['Healthcare Domain', 'Full-Stack Ownership', 'Multi-language Support'],
      metrics: [
        { label: 'Modules Built', value: '5' },
        { label: 'Hospitals', value: '3+' },
        { label: 'Languages', value: '4' },
      ],
      color: 'rgb(var(--accent-secondary))',
      bg: 'rgba(var(--accent-secondary), 0.1)',
      border: 'rgba(var(--accent-secondary), 0.2)',
    },
    {
      title: 'Founder & Developer',
      company: 'Rkcoder.tech',
      companyShort: 'Rkcoder',
      period: 'May 2023 – May 2024',
      duration: '1 Year',
      type: 'Entrepreneurship',
      location: 'Remote',
      description: [
        'Founded Rkcoder.tech, a platform for sharing coding tutorials, projects, and tech articles focused on modern web development.',
        'Grew the platform to 10k+ monthly views within 5 months through consistent content creation and SEO optimization.',
        'Built the platform from scratch using React, Node.js, and MongoDB with a custom CMS for content management.',
        'Created 50+ technical tutorials covering React, Node.js, TypeScript, and AI integration patterns.',
      ],
      skills: ['Content Creation', 'Web Development', 'SEO', 'Community Building', 'React', 'Node.js', 'MongoDB', 'Technical Writing'],
      highlights: ['10K+ Monthly Views', '50+ Tutorials', 'Self-built Platform'],
      metrics: [
        { label: 'Monthly Views', value: '10K+' },
        { label: 'Tutorials', value: '50+' },
        { label: 'Growth Time', value: '5 Months' },
      ],
      color: 'rgb(var(--accent-tertiary))',
      bg: 'rgba(var(--accent-tertiary), 0.1)',
      border: 'rgba(var(--accent-tertiary), 0.2)',
    },
  ];

  const typeIcons = {
    'Full-time': Building2,
    'Internship': Code2,
    'Entrepreneurship': Rocket,
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.exp-title .char',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.03, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: '.exp-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.exp-header .divider, .exp-header .desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.exp-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.exp-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.exp-grid',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo('.exp-metric',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.exp-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[rgb(var(--bg-primary))] overflow-hidden"
      aria-label="Experience"
    >
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(var(--accent-primary),0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="exp-header text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(var(--accent-secondary),0.1)] border border-[rgba(var(--accent-secondary),0.2)] text-[rgb(var(--accent-secondary))] text-xs font-semibold uppercase tracking-widest mb-6">
            <span>// Experience</span>
          </div>
          <h2 className="exp-title section-title mb-4">
            <SplitText text="Professional Experience" charClassName="char" />
          </h2>
          <div className="divider section-divider" />
          <p className="section-description desc">My engineering journey building scalable systems & AI products</p>
        </div>

        <div className="exp-grid grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} typeIcon={typeIcons[exp.type as keyof typeof typeIcons] || Building2} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(var(--accent-primary),0.08)] border border-[rgba(var(--accent-primary),0.15)] rounded-full">
            <Rocket className="w-4 h-4" style={{ color: 'rgb(var(--accent-primary))' }} />
            <p className="text-[rgb(var(--text-muted))] text-sm uppercase tracking-widest font-medium">Always learning. Always building.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ExperienceCardProps {
  exp: typeof experiences[0];
  typeIcon: React.ComponentType<{ className?: string }>;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp, typeIcon: TypeIcon }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 3,
        rotateX: -y * 3,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.5,
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="exp-card group relative"
    >
      <div className="surface-elevated rounded-2xl overflow-hidden relative h-full transition-all duration-500 hover:shadow-[var(--shadow-xl)] animated-gradient-border perspective-1000 preserve-3d"
           style={{ transformStyle: 'preserve-3d' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(var(--accent-primary),0.02)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgb(var(--accent-primary))] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-6 lg:p-7 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl flex-shrink-0 relative overflow-hidden" style={{ background: exp.bg, border: `1px solid ${exp.border}` }}>
                <TypeIcon className="w-5 h-5 relative z-10" style={{ color: exp.color }} />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider" style={{ background: exp.bg, color: exp.color, border: `1px solid ${exp.border}` }}>
                    {exp.type}
                  </span>
                </div>
                <p className="text-xs text-[rgb(var(--text-muted))] mt-0.5">{exp.period}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-[rgb(var(--text-muted))] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

          <div className="pt-2">
            <h3 className="text-xl lg:text-2xl font-bold text-[rgb(var(--text-primary))] leading-snug group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-300">{exp.title}</h3>
            <div className="flex items-center gap-3 mt-2 text-sm text-[rgb(var(--text-secondary))]">
              <span className="font-semibold text-[rgb(var(--accent-secondary))]">{exp.company}</span>
              <span className="flex items-center gap-1" style={{ color: exp.color }}>
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {exp.duration}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[rgba(var(--border-primary),0.3)]">
            {exp.metrics.map((metric, i) => (
              <div key={i} className="exp-metric text-center p-3 rounded-xl relative overflow-hidden" style={{ background: exp.bg, border: `1px solid ${exp.border}` }}>
                <div className="text-2xl lg:text-3xl font-extrabold" style={{ color: exp.color }}>{metric.value}</div>
                <div className="text-xs font-medium text-[rgb(var(--text-secondary))] mt-0.5">{metric.label}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(255,255,255,0.05)] to-transparent" />
              </div>
            ))}
          </div>

          <ul className="space-y-3 text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
            {exp.description.map((pt, pIdx) => (
              <li key={pIdx} className="flex items-start gap-3 group relative pl-1">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" style={{ color: exp.color }} />
                <span className="group-hover:text-[rgb(var(--text-primary))] transition-colors duration-300">{pt}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-[rgba(var(--border-primary),0.3)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5" style={{ color: exp.color }} />
              Key Highlights
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.highlights.map((h, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:scale-[1.02]" style={{ background: exp.bg, color: exp.color, border: `1px solid ${exp.border}` }}>
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[rgba(var(--border-primary),0.3)]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider mb-3">
              <Code2 className="w-3.5 h-3.5" style={{ color: 'rgb(var(--accent-primary))' }} />
              Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-[1.02]"
                  style={{ background: 'rgba(var(--border-primary),0.3)', color: 'rgb(var(--text-secondary))', border: '1px solid rgba(var(--border-primary),0.3)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};