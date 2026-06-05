import React, { useRef } from 'react';
import { Code2, Database, Globe, Users, Briefcase, CheckCircle2, Zap, Target, Bot, Cloud } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, value: 2, suffix: '+', label: 'Years Experience' },
    { icon: <Users className="w-5 h-5" />, value: 3, suffix: '+', label: 'Happy Clients' },
    { icon: <Globe className="w-5 h-5" />, value: 10, suffix: '+', label: 'Projects Shipped' },
    { icon: <Code2 className="w-5 h-5" />, value: 20, suffix: '+', label: 'Technologies' },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Shadcn/ui', 'Tailwind CSS', 'Redux', 'GSAP', 'HTML5/CSS3'],
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      category: 'Backend & Cloud',
      items: ['Node.js', 'Express.js', 'MongoDB', 'Python', 'Firebase', 'AWS Lambda', 'AWS EC2', 'AWS S3', 'AWS Cognito', 'Docker'],
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      category: 'AI & Voice Agents',
      items: ['Multi-Agent systems', 'OpenAI APIs', 'Gemini', 'RAG', 'ElevenLabs', 'Retell AI', 'Vapi.ai', 'Voiceflow', 'LLM Chains'],
      icon: <Bot className="w-5 h-5" />,
    },
    {
      category: 'Database & Tools',
      items: ['MongoDB', 'Firebase', 'Git', 'GitHub', 'Postman', 'Jira', 'VS Code', 'Bolt.new', 'V0'],
      icon: <Database className="w-5 h-5" />,
    },
  ];

  const achievements = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Voice AI Pioneer',
      description: 'Achieved 20% improvement in voice accuracy via ElevenLabs, Retell & Vapi integration at Mindcraft Labs.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Expert',
      description: 'Reduced page load time by 40% at BookNow through React optimization and code splitting.'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Content Creator',
      description: 'Founded Rkcoder.tech — grew to 10k monthly views within 5 months sharing dev tutorials.'
    }
  ];

  useGSAP(() => {
    // Title SplitText animation
    gsap.fromTo('.about-title-char',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.04,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.about-header',
          start: 'top 85%',
        },
      }
    );

    // Header divider and description reveal
    gsap.fromTo('.about-header-item',
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-header',
          start: 'top 85%',
        },
      }
    );

    // Scroll reveal for journey content
    gsap.fromTo('.about-journey',
      { x: -30, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-journey',
          start: 'top 85%',
        },
      }
    );

    // Stat cards trigger
    const statsTrigger = {
      trigger: '.about-stats-container',
      start: 'top 85%',
    };

    gsap.fromTo('.about-stat-card',
      { scale: 0.9, autoAlpha: 0 },
      {
        scale: 1,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.5)',
        scrollTrigger: statsTrigger,
      }
    );

    // Stagger counters using reliable onUpdate
    gsap.utils.toArray('.about-stat-num').forEach((el: any) => {
      const targetValue = parseInt(el.getAttribute('data-val') || '0', 10);
      const count = { val: 0 };
      gsap.to(count, {
        val: targetValue,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: statsTrigger,
        onUpdate: () => {
          el.textContent = Math.floor(count.val);
        },
      });
    });

    // Achievements animations
    gsap.fromTo('.about-achievement-card',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-achievements-container',
          start: 'top 85%',
        },
      }
    );

    // Skills staggered list
    gsap.fromTo('.about-skill-card',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-skills-container',
          start: 'top 85%',
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 bg-slate-100 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="about-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            <SplitText text="About Me" charClassName="about-title-char" />
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto mb-6 about-header-item" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed about-header-item">
            Software Developer specializing in full-stack web applications and AI-powered multi-agent workflow automation systems.
          </p>
        </div>

        {/* Profile Stats and Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="about-journey lg:col-span-6 space-y-6 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50 mb-2">Professional Journey</h3>
            <p>
              With over <span className="font-semibold text-indigo-500 dark:text-indigo-400">2+ Years</span> of hands-on expertise, I create modular, fast-loading, and intelligent digital products. My core focus lies in integrating complex Large Language Models (LLMs) to construct production-ready conversational and multi-agent frameworks.
            </p>
            <p>
              Currently, at <span className="font-semibold text-indigo-500 dark:text-indigo-400">Mindcraft Labs</span>, I design real-time AI solutions including advanced voice agents utilizing ElevenLabs, Vapi, and Retell AI. My integrations have successfully boosted accuracy rates by over 20%.
            </p>
            <p>
              I am also deeply passionate about developer relations. I founded Rkcoder.tech to share tutorials, which scaled to 10,000+ monthly visits within 5 months of launch.
            </p>
          </div>

          <div className="about-stats-container lg:col-span-6 grid grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="about-stat-card glow-card p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex flex-col justify-between items-center text-center shadow-sm"
              >
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500 dark:text-indigo-400 mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-1 flex items-center">
                  <span className="about-stat-num" data-val={stat.value}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="about-achievements-container mb-24">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50 text-center mb-10">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <TiltCard key={index} className="about-achievement-card h-full">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm h-full flex flex-col">
                  <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500 dark:text-indigo-400 w-fit mb-4">
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-50">{achievement.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{achievement.description}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="about-skills-container">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50 text-center mb-10">Tech Stack & Tooling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="about-skill-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col h-full"
              >
                <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-500 dark:text-indigo-400">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-50">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-350 rounded-lg text-xs font-semibold hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors duration-250 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
