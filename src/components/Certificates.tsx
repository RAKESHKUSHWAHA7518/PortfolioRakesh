import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'Namaste React',
      issuer: 'Akshay Saini',
      description: 'In-depth React.js course covering hooks, performance optimization, Redux, and modern React patterns.',
      link: 'https://namastedev.com/',
      color: '#61DAFB',
    },
    {
      title: 'Namaste Node.js',
      issuer: 'Akshay Saini',
      description: 'Comprehensive Node.js course covering event loop, streams, Express.js, databases, and backend architecture.',
      link: 'https://namastedev.com/',
      color: '#68A063',
    },
    {
      title: 'Mastering Data Structures & Algorithms (C/C++)',
      issuer: 'Udemy',
      description: 'Complete DSA course covering arrays, trees, graphs, dynamic programming, and problem-solving techniques.',
      link: 'https://www.udemy.com/',
      color: '#EC5252',
    },
    {
      title: 'Complete Web Development Bootcamp 2024',
      issuer: 'Udemy',
      description: 'Full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and databases.',
      link: 'https://www.udemy.com/',
      color: '#A435F0',
    },
    {
      title: 'Complete JavaScript Course',
      issuer: 'Udemy',
      description: 'Advanced JavaScript course covering ES6+, async/await, closures, prototypes, and modern JS patterns.',
      link: 'https://www.udemy.com/',
      color: '#F7DF1E',
    },
  ];

  useGSAP(() => {
    // Title SplitText animation
    gsap.fromTo('.certs-title-char',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.certs-header',
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo('.certs-header-desc',
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.certs-header',
          start: 'top 85%',
        },
      }
    );

    // Cards trigger
    gsap.fromTo('.certs-card',
      { scale: 0.95, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.certs-grid',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="certificates"
      className="py-24 bg-slate-100 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="certs-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            <SplitText text="Certificates" charClassName="certs-title-char" />
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto mb-6 certs-header-desc" />
          <p className="text-lg text-slate-600 dark:text-slate-400 certs-header-desc">Continuous learning and professional credentials</p>
        </div>

        {/* Certificates Grid */}
        <div className="certs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <TiltCard key={index} className="certs-card h-full">
              <div className="glow-card p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="p-3.5 rounded-xl flex-shrink-0"
                      style={{ backgroundColor: `${cert.color}15` }}
                    >
                      <Award className="w-6 h-6" style={{ color: cert.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 leading-snug">{cert.title}</h3>
                      <p className="text-sm font-semibold text-indigo-500 dark:text-indigo-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-405 text-sm leading-relaxed mb-6">{cert.description}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-500 hover:text-indigo-650 dark:hover:text-indigo-400 mt-2 w-fit"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Credentials
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
