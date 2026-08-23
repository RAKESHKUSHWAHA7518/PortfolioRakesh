import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setFormStatus('idle'), 4000);
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
      color: 'rgb(var(--accent-primary))',
      bg: 'rgba(var(--accent-primary), 0.15)',
      border: 'rgba(var(--accent-primary), 0.3)',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91 7518329420',
      link: 'tel:+917518329420',
      color: 'rgb(var(--accent-secondary))',
      bg: 'rgba(var(--accent-secondary), 0.15)',
      border: 'rgba(var(--accent-secondary), 0.3)',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Location',
      value: 'Prayagraj, UP, India',
      link: 'https://maps.app.goo.gl/bxWp5vXC72kSTVeK6',
      color: 'rgb(var(--accent-tertiary))',
      bg: 'rgba(var(--accent-tertiary), 0.15)',
      border: 'rgba(var(--accent-tertiary), 0.3)',
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/RAKESHKUSHWAHA7518', label: 'GitHub', color: 'rgb(var(--accent-primary))' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/rakesh-kushwaha-666726212/', label: 'LinkedIn', color: 'rgb(var(--accent-secondary))' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/rk7518329420', label: 'Twitter', color: 'rgb(var(--accent-tertiary))' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:rk7518329420@gmail.com', label: 'Email', color: 'rgb(var(--accent-primary))' },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title .char',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.03, duration: 0.8, ease: 'expo.out',
          scrollTrigger: { trigger: '.contact-header', start: 'top 85%' }
        }
      );

      gsap.fromTo('.contact-header .divider, .contact-header .desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-header', start: 'top 85%' }
        }
      );

      gsap.fromTo(leftColRef.current?.children || [],
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: leftColRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(formRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-[rgb(var(--bg-secondary))] border-y border-[rgba(var(--border-primary),0.3)] overflow-hidden"
      aria-label="Contact"
    >
      <div className="absolute inset-0 gradient-mesh pointer-events-none opacity-50" />
      
      <div className="section-container relative z-10">
        <div className="contact-header text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(var(--accent-tertiary),0.1)] border border-[rgba(var(--accent-tertiary),0.2)] text-[rgb(var(--accent-tertiary))] text-xs font-semibold uppercase tracking-widest mb-6">
            <span>// Contact</span>
          </div>
          <h2 className="contact-title section-title mb-4">
            <SplitText text="Let's Collaborate" charClassName="char" />
          </h2>
          <div className="divider section-divider" />
          <p className="section-description desc">Have a project in mind? Let's build something remarkable together.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div ref={leftColRef} className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <TiltCard maxRotation={5} touchEnabled={!isTouchDevice}>
                    <div className="surface p-5 rounded-2xl flex items-center gap-4 group-hover:border-[rgba(var(--border-primary),0.8)] transition-all duration-300 relative overflow-hidden touch-interactive">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(var(--accent-primary),0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-3.5 rounded-xl flex-shrink-0" style={{ background: info.bg, color: info.color }}>
                        {info.icon}
                      </div>
                      <div className="relative">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-[rgb(var(--text-muted))] mb-1">{info.title}</h3>
                        <p className="text-base font-bold text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-primary))] transition-colors duration-250">
                          {info.value}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[rgb(var(--text-muted))] group-hover:text-[rgb(var(--accent-primary))] group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                    </div>
                  </TiltCard>
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[rgba(var(--border-primary),0.3)]">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[rgb(var(--text-muted))] mb-4">Connect Socially</h4>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => window.open(link.href, '_blank')}
                    className="p-3 rounded-xl border border-[rgba(var(--border-primary),0.4)] text-[rgb(var(--text-secondary))] hover:bg-[rgba(var(--accent-primary),0.1)] hover:border-[rgba(var(--accent-primary),0.3)] hover:text-[rgb(var(--accent-primary))] transition-all duration-300 touch-interactive"
                    aria-label={link.label}
                    style={{ touchAction: 'manipulation' }}
                  >
                    <span className="relative" style={{ color: link.color }}>
                      {link.icon}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="surface p-5 rounded-2xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0" style={{ background: 'rgba(var(--accent-primary), 0.15)', color: 'rgb(var(--accent-primary))' }}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-1">Typically replies within 24 hours</h4>
                  <p className="text-sm text-[rgb(var(--text-secondary))]">Available for freelance, full-time, and consulting opportunities. Let's discuss your project!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="surface-elevated p-6 lg:p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--accent-primary),0.03)] via-transparent to-[rgba(var(--accent-secondary),0.03)] pointer-events-none" />
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="label">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={formStatus === 'submitting'}
                      className="input-field"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={formStatus === 'submitting'}
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={formStatus === 'submitting'}
                    className="input-field"
                    placeholder="Project Inquiry / Collaboration / Just saying hi"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={formStatus === 'submitting'}
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Tell me about your project, goals, timeline, and how I can help..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full sm:w-fit px-8 py-3.5 bg-gradient-to-r from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] hover:opacity-90 text-[rgb(var(--text-inverse))] rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed touch-interactive"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : formStatus === 'success' ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-[rgb(var(--text-muted))] text-center">
                  By submitting this form, you agree to receive email communication from me. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};