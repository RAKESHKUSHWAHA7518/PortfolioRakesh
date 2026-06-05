import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Rajkiya Engineering College, Banda',
      period: '2021 - 2025',
      description: 'Major in Computer Science with a focus on Web Development, MERN Stack, and UI/UX Design.',
      achievements: ['7.4 CGPA', '2+ Internships'],
    },
    {
      degree: '12th PCM',
      institution: 'Lala Jangilal Inter College',
      period: '2019 - 2021',
      description: 'Specialized in Physics, Chemistry, and Mathematics.',
      achievements: ['74.6%'],
    },
  ];

  useGSAP(() => {
    // Title SplitText animation
    gsap.fromTo('.edu-title-char',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.edu-header',
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo('.edu-header-desc',
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.edu-header',
          start: 'top 85%',
        },
      }
    );

    // Staggered slide in for cards
    gsap.fromTo('.edu-card',
      { y: 35, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.edu-list-container',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="education"
      className="py-24 bg-slate-100 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="edu-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            <SplitText text="Education" charClassName="edu-title-char" />
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto mb-6 edu-header-desc" />
          <p className="text-lg text-slate-600 dark:text-slate-400 edu-header-desc">Academic Background</p>
        </div>

        {/* Education List Container */}
        <div className="edu-list-container space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <TiltCard key={index} className="edu-card w-full">
              <div className="glow-card p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="p-3.5 bg-indigo-500/10 rounded-xl text-indigo-500 dark:text-indigo-400 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1.5 rounded-lg border border-slate-200/30 dark:border-slate-700/30">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100/50 dark:border-indigo-900/50 rounded-lg text-xs font-semibold"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
