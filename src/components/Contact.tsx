import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';
import { SplitText } from './SplitText';
import gsap from 'gsap';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const formRef = useRef<HTMLFormElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simple reset
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'rk7518329420@gmail.com',
      link: 'mailto:rk7518329420@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91 7518329420',
      link: 'tel:+91 7518329420',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Prayagraj, UP, India',
      link: 'https://maps.app.goo.gl/bxWp5vXC72kSTVeK6',
    },
  ];

  useGSAP(() => {
    // Title SplitText animation
    gsap.fromTo('.contact-title-char',
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 85%',
        },
      }
    );

    gsap.fromTo('.contact-header-desc',
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 85%',
        },
      }
    );

    // Left info items
    gsap.fromTo(leftColRef.current?.children || [],
      { x: -30, autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 80%',
        },
      }
    );

    // Right form inputs
    gsap.fromTo(formRef.current?.children || [],
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="contact-header text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-slate-50">
            <SplitText text="Get in Touch" charClassName="contact-title-char" />
          </h2>
          <div className="h-1.5 w-20 bg-indigo-500 rounded-full mx-auto mb-6 contact-header-desc" />
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto contact-header-desc">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info cards */}
          <div ref={leftColRef} className="lg:col-span-4 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <TiltCard>
                  <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-2xl flex items-center gap-4 hover:shadow-sm transition-all duration-300">
                    <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-500 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-350">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{info.title}</h3>
                      <p className="text-base font-bold text-slate-700 dark:text-slate-200 mt-0.5 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-250">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent focus:bg-white dark:focus:bg-slate-900 outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent focus:bg-white dark:focus:bg-slate-900 outline-none transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent focus:bg-white dark:focus:bg-slate-900 outline-none transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent focus:bg-white dark:focus:bg-slate-900 outline-none transition-all duration-200 resize-none"
                />
              </div>

              <div className="pt-2">
                <MagneticButton
                  type="submit"
                  className="w-full sm:w-fit px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-colors shadow-md shadow-indigo-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};