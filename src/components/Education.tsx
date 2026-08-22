import React from 'react';
import { GraduationCap, Calendar, Star, Code2, Server, Database, ExternalLink } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'Rajkiya Engineering College, Banda',
      period: '2021 – 2025',
      description: 'Major in Computer Science with a focus on Web Development, MERN Stack, and UI/UX Design. Completed coursework in Data Structures, Algorithms, Database Systems, and Software Engineering.',
      achievements: ['7.4 CGPA', '2+ Industry Internships', 'Hackathon Finalist', 'Tech Club Core Member'],
      coursework: ['Data Structures & Algorithms', 'Operating Systems', 'Computer Networks', 'Database Management', 'Software Engineering', 'Web Technologies'],
    },
    {
      degree: 'Senior Secondary (12th)',
      field: 'Physics, Chemistry, Mathematics',
      institution: 'Lala Jangilal Inter College',
      period: '2019 – 2021',
      description: 'Specialized in Physics, Chemistry, and Mathematics with additional focus on Computer Science fundamentals.',
      achievements: ['74.6%', 'School Topper in Mathematics', 'Science Exhibition Winner'],
      coursework: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'English'],
    },
  ];

  const certifications = [
    {
      title: 'Namaste React',
      issuer: 'Akshay Saini',
      year: '2024',
      description: 'In-depth React.js course covering hooks, performance optimization, Redux, and modern React patterns.',
      link: 'https://namastedev.com/',
      color: '#61DAFB',
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: 'Namaste Node.js',
      issuer: 'Akshay Saini',
      year: '2024',
      description: 'Comprehensive Node.js course covering event loop, streams, Express.js, databases, and backend architecture.',
      link: 'https://namastedev.com/',
      color: '#68A063',
      icon: <Server className="w-5 h-5" />,
    },
    {
      title: 'Mastering Data Structures & Algorithms',
      issuer: 'Udemy',
      year: '2023',
      description: 'Complete DSA course covering arrays, trees, graphs, dynamic programming, and problem-solving techniques.',
      link: 'https://www.udemy.com/',
      color: '#EC5252',
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: 'Complete Web Development Bootcamp 2024',
      issuer: 'Udemy',
      year: '2024',
      description: 'Full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and databases.',
      link: 'https://www.udemy.com/',
      color: '#A435F0',
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      title: 'Complete JavaScript Course',
      issuer: 'Udemy',
      year: '2023',
      description: 'Advanced JavaScript course covering ES6+, async/await, closures, prototypes, and modern JS patterns.',
      link: 'https://www.udemy.com/',
      color: '#F7DF1E',
      icon: <Code2 className="w-5 h-5" />,
    },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.edu-title .char',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.03, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: '.edu-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.edu-header .divider, .edu-header .desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.edu-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.edu-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: '.edu-list-container',
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo('.cert-card',
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education"
      className="relative py-24 lg:py-32 bg-[rgb(var(--bg-primary))] overflow-hidden"
      aria-label="Education & Certifications"
    >
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="edu-header text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(var(--accent-primary),0.1)] border border-[rgba(var(--accent-primary),0.2)] text-[rgb(var(--accent-primary))] text-xs font-semibold uppercase tracking-widest mb-6">
            <span>// Education & Certifications</span>
          </div>
          <h2 className="edu-title section-title mb-4">
            <SplitText text="Education & Certifications" charClassName="char" />
          </h2>
          <div className="divider section-divider" />
          <p className="section-description desc">Academic background and continuous learning credentials</p>
        </div>

        <div className="edu-list-container space-y-8 max-w-4xl mx-auto mb-20">
          {education.map((edu, index) => (
            <TiltCard key={index} className="edu-card w-full" maxRotation={6}>
              <div className="surface-elevated p-6 lg:p-8 rounded-2xl flex flex-col lg:flex-row gap-6 lg:gap-8 items-start relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center relative" style={{ background: 'rgba(var(--accent-primary), 0.15)', color: 'rgb(var(--accent-primary))' }}>
                  <GraduationCap className="w-7 h-7" />
                  <div className="absolute -inset-1 rounded-xl border border-[rgba(var(--accent-primary),0.3)] animate-ping opacity-30" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-[rgb(var(--text-primary))] mb-1">{edu.degree}</h3>
                      <p className="text-sm font-semibold text-[rgb(var(--accent-secondary))]">{edu.field}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[rgb(var(--text-secondary))] bg-[rgba(var(--border-primary),0.4)] px-3 py-1.5 rounded-lg border border-[rgba(var(--border-primary),0.3)]">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-[rgb(var(--text-secondary))] text-sm leading-relaxed mb-5">{edu.description}</p>
                  <p className="text-sm font-medium text-[rgb(var(--text-primary))] mb-2">Institution: <span className="font-normal text-[rgb(var(--text-secondary))]">{edu.institution}</span></p>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[rgba(var(--accent-primary),0.1)] text-[rgb(var(--accent-primary))] border border-[rgba(var(--accent-primary),0.2)] rounded-lg text-xs font-semibold"
                      >
                        <Star className="w-3 h-3 mr-1 inline-block" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                  {edu.coursework && (
                    <div className="mt-4 pt-4 border-t border-[rgba(var(--border-primary),0.3)]">
                      <p className="text-xs font-semibold text-[rgb(var(--text-muted))] uppercase tracking-wider mb-2">Relevant Coursework</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="px-2.5 py-1 bg-[rgba(var(--border-primary),0.3)] text-[rgb(var(--text-secondary))] rounded-lg text-xs font-medium">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="certs-section">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[rgb(var(--text-primary))] mb-3">Certifications</h3>
            <div className="section-divider mx-auto" />
            <p className="section-description">Continuous learning and professional credentials</p>
          </div>
          <div className="certs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <TiltCard key={index} className="cert-card h-full" maxRotation={6}>
                <div className="surface p-6 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3.5 rounded-xl flex-shrink-0 relative" style={{ background: `${cert.color}15` }}>
                        {cert.icon}
                        <div className="absolute inset-0 rounded-xl border border-[rgba(var(--accent-primary),0.1)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[rgb(var(--text-primary))] leading-snug">{cert.title}</h3>
                        <p className="text-sm font-semibold text-[rgb(var(--accent-secondary))] mt-0.5">{cert.issuer}</p>
                        <p className="text-xs text-[rgb(var(--text-muted))] mt-1">{cert.year}</p>
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
      </div>
    </section>
  );
};