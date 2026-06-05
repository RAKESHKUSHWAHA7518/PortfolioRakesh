import React, { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'AI Software Developer (Intern → Full-time)',
      company: 'Mindcraft Labs',
      period: 'Feb 2025 – Present',
      description: [
        'Pioneered AI Voice Agent integration using ElevenLabs, Retell, and Vapi APIs, achieving a 20% improvement in voice accuracy and enhanced human-like conversational experiences.',
        'Built and maintained scalable full-stack solutions using React.js, Next.js, Node.js, MongoDB, Express.js, and Firebase.',
        'Developed NextViseAI, integrating AWS Comprehend Medical within a Dockerized Python worker to automate clinical NER tasks and oncology biomarker processing.',
        'Designed a secure "magic link" onboarding flow leveraging AWS Serverless Application Model (SAM) for streamlined user authentication.',
        'Collaborated with cross-functional teams to design, implement, and optimize API-driven workflows for voice AI products.',
      ],
      skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase', 'Retell AI', 'Vapi.ai', 'ElevenLabs', 'AWS Lambda', 'AWS SAM', 'Docker', 'Prompt Engineering'],
    },
    {
      title: 'Frontend Developer Intern',
      company: 'BookNow',
      period: 'Oct 2024 – Mar 2025',
      description: [
        'Created two key panels: the Movie Ticket Booking panel and the Admin panel for uploading movies, incorporating payment integration for seamless transactions.',
        'Achieved a 40% reduction in page load time, significantly enhancing website performance and user experience.',
      ],
      skills: ['React', 'JavaScript', 'Tailwind CSS', 'Shadcn/ui', 'AWS S3', 'Google Maps API'],
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'CCA-Techno Pvt. Ltd',
      period: 'Jun 2024 – Sep 2024',
      description: [
        'Designed UI/UX, developed, and maintained healthcare software (HMS) for hospitals.',
        'Worked on both Frontend (React.js) and Backend (Node.js), handling five modules: Account, HMS, Lab, Pharmacy, and Admin.',
      ],
      skills: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Shadcn/ui', 'Google Translate API', 'Google Speech API'],
    },
    {
      title: 'Founder',
      company: 'Rkcoder.tech',
      period: 'May 2023 – May 2024',
      description: [
        'Founded Rkcoder.tech, a platform for sharing coding tutorials, projects, and tech articles.',
        'Grew the platform to 10k monthly views within 5 months through consistent content creation.',
      ],
      skills: ['Content Creation', 'Web Development', 'SEO', 'Community Building'],
    },
  ];

  useGSAP(() => {
    // Title SplitText animation
    gsap.fromTo('.exp-title-char',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.04,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.exp-header',
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo('.exp-header-desc',
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.exp-header',
          start: 'top 85%',
        },
      }
    );

    // Vertical line drawing progress on scroll
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top',
        ease: 'none',
        scrollTrigger: {
          trigger: '.exp-timeline',
          start: 'top 70%',
          end: 'bottom 70%',
          scrub: true,
        },
      }
    );

    // Cards and dots stagger slide-ins
    const timelineRows = gsap.utils.toArray('.timeline-item');
    timelineRows.forEach((item: any, idx) => {
      const cards = item.querySelectorAll('.timeline-card');
      const dot = item.querySelector('.timeline-dot');
      const isEven = idx % 2 === 0;

      gsap.fromTo(cards,
        {
          x: (i, target) => {
            const isLeft = target.closest('.md\\:flex');
            return isLeft ? -50 : 50;
          },
          autoAlpha: 0
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(dot,
        { scale: 0, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.6,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="exp-header text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            <SplitText text="Professional Experience" charClassName="exp-title-char" />
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto mb-6 exp-header-desc" />
          <p className="text-lg text-slate-600 dark:text-slate-400 exp-header-desc">My engineering journey in tech</p>
        </div>

        {/* Timeline Container */}
        <div className="exp-timeline relative max-w-4xl mx-auto">
          {/* Vertical progress line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 z-0"
          />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className="timeline-item relative flex flex-col md:flex-row items-stretch z-10"
                >
                  {/* Left Column (Desktop) */}
                  <div className={`hidden md:flex flex-1 items-center ${isEven ? 'justify-end pr-12 text-right' : ''}`}>
                    {isEven && (
                      <div className="timeline-card max-w-md bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                        <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold mb-3">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{exp.title}</h3>
                        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">{exp.company}</p>
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 text-left">
                          {exp.description.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5 mt-5 justify-start">
                          {exp.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div className="timeline-dot w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-500 shadow-md z-20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
                    </div>
                  </div>

                  {/* Right Column / Mobile Layout */}
                  <div className={`flex-1 pl-12 md:pl-12 flex items-center ${!isEven ? 'justify-start md:pl-12' : 'md:pl-0'}`}>
                    <div className={`timeline-card max-w-md bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm w-full ${isEven ? 'md:hidden' : ''}`}>
                      <span className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-semibold mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{exp.title}</h3>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">{exp.company}</p>
                      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        {exp.description.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="text-indigo-500 mt-1 flex-shrink-0">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};