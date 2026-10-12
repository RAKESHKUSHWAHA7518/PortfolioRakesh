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
    gsap.fromTo('.certs-title .char',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, stagger: 0.03, duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: '.certs-header', start: 'top 85%' }
      }
    );

    gsap.fromTo('.certs-header .divider, .certs-header .desc',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.certs-header', start: 'top 85%' }
      }
    );

    gsap.fromTo('.certs-card',
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        ease: 'back.out(1.3)',
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
      className="relative py-24 lg:py-32 bg-[rgb(var(--bg-secondary))] border-y border-[rgba(var(--border-primary),0.3)] overflow-hidden"
    >
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="certs-header text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(var(--accent-tertiary),0.1)] border border-[rgba(var(--accent-tertiary),0.2)] text-[rgb(var(--accent-tertiary))] text-xs font-semibold uppercase tracking-widest mb-6">
            <span>// Certifications</span>
          </div>
          <h2 className="certs-title section-title mb-4">
            <SplitText text="Certifications" charClassName="char" />
          </h2>
          <div className="divider section-divider" />
          <p className="section-description desc">Continuous learning and professional credentials</p>
        </div>

        <div className="certs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <TiltCard key={index} className="certs-card h-full" maxRotation={6}>
              <div className="surface p-6 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3.5 rounded-xl flex-shrink-0 relative" style={{ background: `${cert.color}15` }}>
                      <Award className="w-6 h-6" style={{ color: cert.color }} />
                      <div className="absolute inset-0 rounded-xl border border-[rgba(var(--accent-primary),0.1)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[rgb(var(--text-primary))] leading-snug">{cert.title}</h3>
                      <p className="text-sm font-semibold text-[rgb(var(--accent-secondary))] mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed mb-6">{cert.description}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[rgb(var(--accent-primary))] hover:text-[rgb(var(--accent-secondary))] mt-2 w-fit transition-colors duration-200 group"
                >
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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