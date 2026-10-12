import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Mic, MicOff, Bot, X, Calendar, Briefcase, HelpCircle, Volume2, VolumeX, Send, ChevronRight, ExternalLink, Info, Sparkles } from 'lucide-react';
import { useGSAP } from '../hooks/useGSAP';
import { MagneticButton } from './MagneticButton';
import gsap from 'gsap';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'booking' | 'action' | 'knowledge';
  actionData?: {
    type: 'job' | 'freelance' | 'guidance';
    title: string;
    description: string;
    calendlyLink?: string;
  };
}

interface SessionType {
  id: 'job' | 'freelance' | 'guidance';
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  border: string;
  textColor: string;
  textMuted: string;
}

export const VoiceAIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showSessionCards, setShowSessionCards] = useState(true);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [showKnowledge, setShowKnowledge] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const sessionTypes: SessionType[] = [
    {
      id: 'job',
      title: 'Job Opportunities',
      description: 'Full-time roles, interview prep, career transitions',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'rgb(var(--accent-primary))',
      bg: 'rgba(var(--accent-primary), 0.18)',
      border: 'rgba(var(--accent-primary), 0.35)',
      textColor: 'rgb(var(--accent-primary))',
      textMuted: 'rgba(var(--accent-primary), 0.85)',
    },
    {
      id: 'freelance',
      title: 'Freelance Projects',
      description: 'Contract work, project scoping, client matching',
      icon: <HelpCircle className="w-5 h-5" />,
      color: 'rgb(var(--accent-secondary))',
      bg: 'rgba(var(--accent-secondary), 0.18)',
      border: 'rgba(var(--accent-secondary), 0.35)',
      textColor: 'rgb(var(--accent-secondary))',
      textMuted: 'rgba(var(--accent-secondary), 0.85)',
    },
    {
      id: 'guidance',
      title: 'Technical Guidance',
      description: 'Architecture review, tech stack, mentorship',
      icon: <Bot className="w-5 h-5" />,
      color: 'rgb(var(--accent-tertiary))',
      bg: 'rgba(var(--accent-tertiary), 0.18)',
      border: 'rgba(var(--accent-tertiary), 0.35)',
      textColor: 'rgb(var(--accent-tertiary))',
      textMuted: 'rgba(var(--accent-tertiary), 0.85)',
    },
  ];

  // Initialize voices for TTS
  useEffect(() => {
    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    return () => { window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  // Get available voices for display
  const getAvailableVoices = useCallback(() => {
    return voicesRef.current.filter(v => v.lang.startsWith('en')).slice(0, 5);
  }, []);

  // Speak function using Web Speech API
  const speak = useCallback((text: string) => {
    if (isMuted || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.volume = 0.9;
    
    const preferredVoice = voicesRef.current.find(v => 
      v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Alex') || v.name.includes('Samantha') || v.name.includes('Daniel')
    ) || voicesRef.current[0];
    
    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [isMuted]);

  // Auto-speak assistant messages
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.role === 'assistant' && conversationStarted) {
      const cleanText = lastMessage.content.replace(/\[.*?\]/g, '').trim();
      if (cleanText) speak(cleanText);
    }
  }, [messages, conversationStarted, speak]);

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        role: 'assistant',
        content: `Hi! I'm Rakesh's AI career assistant. I know all about his background in AI, full-stack development, and voice agents. I can help you book sessions for jobs, freelance work, or technical guidance. What are you looking for today?`,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      setShowSessionCards(true);
      setConversationStarted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo('.voice-ai-panel',
        { scale: 0.95, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'expo.out' }
      );
      gsap.fromTo('.voice-ai-message',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.3, ease: 'power2.out', delay: 0.2 }
      );
      gsap.fromTo('.session-card',
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'back.out(1.5)', delay: 0.3 }
      );
    }
  }, [isOpen]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: crypto.randomUUID(),
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    setConversationStarted(true);
  };

  const handleSessionSelect = (type: 'job' | 'freelance' | 'guidance') => {
    setShowSessionCards(false);
    
    const selected = sessionTypes.find(s => s.id === type);
    if (!selected) return;

    addMessage({
      role: 'user',
      content: `I'm interested in ${selected.title.toLowerCase()}`,
    });

    setTimeout(() => {
      addMessage({
        role: 'assistant',
        content: `Perfect! I'll help you with ${selected.title.toLowerCase()}. Please click the "Book Session" button below to schedule your appointment on Calendly.`,
        type: 'booking',
        actionData: {
          type,
          title: selected.title,
          description: selected.description,
          calendlyLink: `https://calendly.com/rk7518329420/${type}-session`,
        },
      });
    }, 500);
  };

  const handleKnowledgeQuery = useCallback((query: string) => {
    const lowerQuery = query.toLowerCase();
    let response = '';
    
    if (lowerQuery.includes('who') && (lowerQuery.includes('rakesh') || lowerQuery.includes('you') || lowerQuery.includes('developer'))) {
      response = `Rakesh Kushwaha is an AI Software Developer at Neurodrift INC with 2.5+ years experience. He specializes in multi-agent systems, voice AI (Retell, Vapi, ElevenLabs), and full-stack development. He's built 15+ AI agents and 25+ projects.`;
    } else if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('stack') || lowerQuery.includes('know')) {
      response = `Rakesh's tech stack: React, Next.js, TypeScript, Node.js, MongoDB, Python, FastAPI, AWS (Lambda, EC2, S3), Docker, Firebase, LangChain, CrewAI, Retell AI, Vapi, ElevenLabs, Redis, ChromaDB.`;
    } else if (lowerQuery.includes('project') || lowerQuery.includes('built') || lowerQuery.includes('work')) {
      response = `Key projects: Agentic AI Multi-Agent Research (LangChain/CrewAI), NextViseAI (AWS Comprehend Medical), SkillSwap (full-stack), ShopNow (e-commerce), AskMyDoc (RAG with Gemini), AI Coding Assistant, Swiggy Clone.`;
    } else if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
      response = `Current: AI Software Developer at Neurodrift INC (Mar 2025-present). Previous: AI Software Developer at Mindcraft Labs, Frontend Intern at BookNow (40% performance gain), Full Stack Intern at CCA-Techno (healthcare HMS), Founder of Rkcoder.tech (10K+ monthly views).`;
    } else if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('study')) {
      response = `B.Tech in Computer Science from Rajkiya Engineering College, Banda (2021-2025), 7.4 CGPA. Certifications: Namaste React, Namaste Node.js, Mastering DSA, Complete Web Dev Bootcamp, Complete JavaScript Course.`;
    } else if (lowerQuery.includes('voice') || lowerQuery.includes('agent') || lowerQuery.includes('ai')) {
      response = `Rakesh builds voice AI agents using Retell AI, Vapi, and ElevenLabs. He achieved 20%+ voice accuracy improvements in production at Mindcraft Labs and Neurodrift INC. Currently researching autonomous multi-agent frameworks with LangChain and CrewAI.`;
    } else if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
      response = `You can reach Rakesh at: rk7518329420@gmail.com, +91 7518329420, or book a session via the buttons below. LinkedIn: linkedin.com/in/rakesh-kushwaha-666726212, GitHub: github.com/RAKESHKUSHWAHA7518.`;
    } else if (lowerQuery.includes('voice option') || lowerQuery.includes('elevenlabs') || lowerQuery.includes('bubble') || lowerQuery.includes('premium voice') || lowerQuery.includes('tts')) {
      response = `For voice options: This assistant uses your browser's built-in SpeechSynthesis (free). Available voices: ${getAvailableVoices().map(v => v.name).join(', ') || 'System default'}. For premium voices like ElevenLabs, you'd need an API key integration. I can't switch to ElevenLabs or other premium TTS without API credentials.`;
    } else {
      response = `I know about Rakesh's background, skills, projects, and experience. You can ask me about his: tech stack, projects, experience, education, voice AI work, or contact info. Or choose a session type below to book time with him.`;
    }
    
    addMessage({ role: 'assistant', content: response, type: 'knowledge' });
  }, [getAvailableVoices, addMessage]);

  const handleSendMessage = useCallback(() => {
    if (!inputValue.trim()) return;
    
    const userMessage = inputValue;
    setInputValue('');
    
    addMessage({ role: 'user', content: userMessage });
    setShowSessionCards(false);
    
    setTimeout(() => {
      const lowerMsg = userMessage.toLowerCase();
      let response = '';
      let actionType: Message['type'] = 'text';
      let actionData: Message['actionData'] = undefined;

      // Check for booking intent
      if (lowerMsg.includes('job') || lowerMsg.includes('career') || lowerMsg.includes('hiring') || lowerMsg.includes('interview') || lowerMsg.includes('full.time') || lowerMsg.includes('full time')) {
        response = 'I can help you find job opportunities! Please click the "Book Session" button below to schedule your career consultation on Calendly.';
        actionType = 'booking';
        actionData = { type: 'job', title: 'Job Opportunities', description: 'Discuss full-time roles and interview prep', calendlyLink: 'https://calendly.com/rk7518329420/job-session' };
      } else if (lowerMsg.includes('freelance') || lowerMsg.includes('contract') || lowerMsg.includes('project') || lowerMsg.includes('client') || lowerMsg.includes('gig')) {
        response = 'Perfect! Let me set up a freelance project discussion for you. Please click "Book Session" below to schedule on Calendly.';
        actionType = 'booking';
        actionData = { type: 'freelance', title: 'Freelance Projects', description: 'Explore contract work and project scoping', calendlyLink: 'https://calendly.com/rk7518329420/freelance-session' };
      } else if (lowerMsg.includes('guidance') || lowerMsg.includes('mentor') || lowerMsg.includes('advice') || lowerMsg.includes('architecture') || lowerMsg.includes('tech stack') || lowerMsg.includes('review') || lowerMsg.includes('help')) {
        response = 'I\'d be happy to provide technical guidance. Please click "Book Session" below to schedule your mentorship session on Calendly.';
        actionType = 'booking';
        actionData = { type: 'guidance', title: 'Technical Guidance', description: 'Architecture review and tech stack decisions', calendlyLink: 'https://calendly.com/rk7518329420/guidance-session' };
      } else {
        // Knowledge query - answer from knowledge base
        handleKnowledgeQuery(userMessage);
        return;
      }

      addMessage({ role: 'assistant', content: response, type: actionType, actionData });
    }, 800);
  }, [inputValue, handleKnowledgeQuery]);

  const handleVoiceStart = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser. Please use text input or try Chrome/Edge.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;

    let finalTranscript = '';

    recognition.onstart = () => setIsListening(true);
    recognition.onerror = (e) => { 
      console.error('Speech recognition error:', e.error);
      setIsListening(false); 
    };
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
      setInputValue(finalTranscript + interimTranscript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, []);

  const handleVoiceStop = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  const toggleMute = () => {
    setIsMuted(prev => {
      const next = !prev;
      if (next) window.speechSynthesis.cancel();
      return next;
    });
  };

  const closePanel = () => {
    window.speechSynthesis.cancel();
    recognitionRef.current?.stop();
    gsap.to('.voice-ai-panel', {
      scale: 0.95,
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        setIsOpen(false);
        setIsListening(false);
        setIsSpeaking(false);
      },
    });
  };

  const formatTime = (date: Date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const getDisplayContent = (msg: Message) => {
    if (msg.type === 'booking' && msg.actionData) {
      return msg.content;
    }
    return msg.content;
  };

  return (
    <>
      <MagneticButton
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 sm:p-4 rounded-2xl bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] text-[rgb(var(--text-inverse))] shadow-[0_8px_32px_rgba(var(--accent-primary),0.4)] hover:shadow-[0_12px_40px_rgba(var(--accent-primary),0.5)] transition-all duration-300 animate-pulse-slow ${isTouchDevice ? 'p-5' : ''}`}
        range={60}
        strength={0.35}
        aria-label="Open Voice AI Assistant"
      >
        <div className="flex items-center gap-2">
          <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(255,255,255,0.2)] flex items-center justify-center ${isListening ? 'animate-ping' : isSpeaking ? 'animate-bounce-subtle' : ''}`}>
            {isSpeaking ? (
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            ) : (
              <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
            {(isListening || isSpeaking) && (
              <div className="absolute inset-0 rounded-xl bg-[rgb(var(--accent-primary))] opacity-30 animate-ping" />
            )}
          </div>
          <span className="hidden sm:block text-sm font-semibold">
            {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'AI Assistant'}
          </span>
        </div>
      </MagneticButton>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-6 lg:p-0">
          <div
            className="absolute inset-0 bg-[rgba(10,10,14,0.6)] backdrop-blur-sm"
            onClick={closePanel}
          />
          
          <div className={`voice-ai-panel relative surface-elevated w-full max-w-md lg:max-w-lg flex flex-col rounded-2xl border border-[rgba(var(--border-primary),0.6)] shadow-[var(--shadow-xl)] overflow-hidden animated-gradient-border ${isTouchDevice ? 'h-[90vh] lg:h-[70vh] max-h-[90vh] rounded-t-2xl rounded-b-none' : 'h-[60vh] lg:h-[70vh]'}`}>
            <div className="flex items-center justify-between p-4 lg:p-5 border-b border-[rgba(var(--border-primary),0.4)] bg-gradient-to-r from-[rgba(var(--accent-primary),0.08)] to-[rgba(var(--accent-secondary),0.08)]">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-[rgba(var(--accent-primary),0.2)] ${isSpeaking ? 'animate-pulse' : ''}`}>
                  <Bot className="w-5 h-5" style={{ color: 'rgb(var(--accent-primary))' }} />
                </div>
                <div>
                  <h3 className="font-bold text-[rgb(var(--text-primary))]">Rakesh's AI Assistant</h3>
                  <p className="text-xs font-medium text-[rgb(var(--text-secondary))]">
                    {isListening ? '🎤 Listening...' : isSpeaking ? '🔊 Speaking...' : 'Knows Rakesh\'s background • Voice-enabled'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <MagneticButton
                  onClick={() => setShowKnowledge(!showKnowledge)}
                  className="p-2 rounded-xl hover:bg-[rgba(var(--border-primary),0.4)] transition-colors"
                  range={30}
                  strength={0.2}
                  aria-label="Show knowledge base"
                >
                  <Info className={`w-5 h-5 ${showKnowledge ? 'text-[rgb(var(--accent-primary))]' : 'text-[rgb(var(--text-secondary))]'}`} />
                </MagneticButton>
                <MagneticButton
                  onClick={toggleMute}
                  className="p-2 rounded-xl hover:bg-[rgba(var(--border-primary),0.4)] transition-colors"
                  range={30}
                  strength={0.2}
                >
                  {isMuted ? <VolumeX className="w-5 h-5 text-[rgb(var(--text-secondary))]" /> : <Volume2 className="w-5 h-5 text-[rgb(var(--text-primary))]" />}
                </MagneticButton>
                <MagneticButton
                  onClick={closePanel}
                  className="p-2 rounded-xl hover:bg-[rgba(var(--border-primary),0.4)] transition-colors"
                  range={30}
                  strength={0.2}
                >
                  <X className="w-5 h-5 text-[rgb(var(--text-secondary))]" />
                </MagneticButton>
              </div>
            </div>

            {showKnowledge && (
              <div className="p-4 lg:p-5 border-b border-[rgba(var(--border-primary),0.3)] bg-[rgba(var(--accent-primary),0.05)] animate-slide-down">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-sm text-[rgb(var(--text-primary))] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" style={{ color: 'rgb(var(--accent-primary))' }} />
                    What I Know About Rakesh
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { label: 'Role', value: 'AI Software Developer' },
                    { label: 'Company', value: 'Neurodrift INC' },
                    { label: 'Experience', value: '2.5+ years' },
                    { label: 'Specialty', value: 'Voice AI & Multi-Agent' },
                    { label: 'Stack', value: 'React, Node, Python, AWS' },
                    { label: 'Agents', value: '12+ deployed' },
                    { label: 'Projects', value: '25+ shipped' },
                    { label: 'Location', value: 'Prayagraj, India' },
                  ].map((item, i) => (
                    <div key={i} className="p-2 rounded-lg bg-[rgba(var(--border-primary),0.3)]">
                      <p className="font-medium text-[rgb(var(--accent-primary))]">{item.label}</p>
                      <p className="text-[rgb(var(--text-secondary))]">{item.value}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[rgb(var(--text-muted))] mt-3 text-center">
                  Ask me anything about Rakesh's background, skills, projects, or experience!
                </p>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-4 lg:p-5 space-y-4" role="log" aria-live="polite">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`voice-ai-message flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center ${msg.role === 'user' ? 'bg-[rgba(var(--accent-primary),0.25)]' : 'bg-[rgba(var(--accent-secondary),0.2)]'}`}>
                    {msg.role === 'user' ? (
                      <svg className="w-4 h-4 text-[rgb(var(--accent-primary))]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    ) : (
                      <Bot className="w-4 h-4" style={{ color: 'rgb(var(--accent-secondary))' }} />
                    )}
                  </div>
                  <div className={`max-w-[85%] ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block px-4 py-2.5 rounded-2xl ${msg.role === 'user' 
                      ? 'bg-gradient-to-br from-[rgb(var(--accent-primary))] to-[rgb(var(--accent-secondary))] text-[rgb(var(--text-inverse))] shadow-lg' 
                      : 'bg-[rgb(var(--bg-card))] text-[rgb(var(--text-primary))] border border-[rgba(var(--border-card),0.8)] shadow-md'
                    }`}>
                      {msg.type === 'booking' && msg.actionData && (
                        <div className="mb-2 p-3 rounded-xl border relative overflow-hidden shadow-sm" style={{ background: msg.actionData.bg, borderColor: msg.actionData.border }}>
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(255,255,255,0.05)] to-transparent" />
                          <div className="relative flex items-center gap-2 mb-2">
                            {sessionTypes.find(s => s.id === msg.actionData?.type)?.icon}
                            <span className="font-semibold text-[rgb(var(--text-primary))]">{msg.actionData.title}</span>
                          </div>
                          <p className="text-sm font-medium text-[rgb(var(--text-secondary))] mb-3 relative">{msg.actionData.description}</p>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-[rgb(var(--text-muted))] flex items-center gap-1">
                              <ExternalLink className="w-3 h-3" />
                              Opens Calendly
                            </span>
                          </div>
                          <MagneticButton
                            onClick={() => window.open(msg.actionData?.calendlyLink || '#', '_blank')}
                            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all relative shadow-sm w-full"
                            style={{ background: msg.actionData.color, color: 'rgb(var(--text-inverse))' }}
                            range={30}
                            strength={0.25}
                          >
                            <Calendar className="w-4 h-4 mr-1.5" />
                            Book Session on Calendly
                          </MagneticButton>
                        </div>
                      )}
                      <p className="whitespace-pre-wrap relative text-base leading-relaxed">{getDisplayContent(msg)}</p>
                    </div>
                    <p className="text-xs font-medium text-[rgb(var(--text-secondary))] mt-1 px-1">{formatTime(msg.timestamp)}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {showSessionCards && (
              <div className="px-4 pb-4 animate-slide-up">
                <p className="text-xs font-semibold text-[rgb(var(--text-secondary))] text-center mb-4 uppercase tracking-wider">Book a Session</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {sessionTypes.map((session) => (
                    <button
                      key={session.id}
                      onClick={() => handleSessionSelect(session.id)}
                      className="session-card group p-4 rounded-xl text-left transition-all duration-300 border-2 relative overflow-hidden hover:-translate-y-1 hover:shadow-xl touch-interactive"
                      style={{ background: session.bg, borderColor: session.border, color: session.textColor }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(255,255,255,0.08)] to-transparent group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg" style={{ background: session.color, color: 'rgb(var(--text-inverse))' }}>
                          {session.icon}
                        </div>
                      </div>
                      <h4 className="font-bold text-sm relative">{session.title}</h4>
                      <p className="text-[11px] font-medium relative" style={{ color: session.textMuted }}>{session.description}</p>
                      <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                        <ChevronRight className="w-4 h-4" style={{ color: session.textColor }} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 lg:p-5 border-t border-[rgba(var(--border-primary),0.4)] bg-[rgb(var(--bg-card))]">
              <div className="flex items-end gap-3">
                <button
                  onClick={isListening ? handleVoiceStop : handleVoiceStart}
                  disabled={isListening || isSpeaking}
                  className={`p-3 rounded-xl flex-shrink-0 transition-all duration-300 touch-interactive ${isListening 
                    ? 'bg-[rgb(var(--accent-tertiary))] text-[rgb(var(--text-inverse))] animate-pulse shadow-lg' 
                    : isSpeaking
                    ? 'bg-[rgb(var(--accent-secondary))] text-[rgb(var(--text-inverse))] animate-bounce-subtle shadow-lg'
                    : 'bg-[rgb(var(--bg-tertiary))] text-[rgb(var(--text-primary))] border border-[rgba(var(--border-card),0.6)] hover:bg-[rgba(var(--accent-primary),0.15)] hover:text-[rgb(var(--accent-primary))] hover:border-[rgba(var(--accent-primary),0.3)] shadow-md'
                  }`}
                  aria-label={isListening ? 'Stop listening' : 'Start voice input'}
                >
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={isListening ? 'Listening...' : isSpeaking ? 'Assistant speaking...' : 'Ask about Rakesh or book a session...'}
                    className="input-field w-full pr-12 text-[rgb(var(--text-primary))] placeholder:text-[rgb(var(--text-muted))] text-base"
                    disabled={isListening || isSpeaking}
                    style={{ fontSize: '16px' }}
                  />
                  {!isListening && !isSpeaking && inputValue && (
                    <button
                      onClick={handleSendMessage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-[rgb(var(--accent-primary))] text-[rgb(var(--text-inverse))] hover:opacity-90 hover:shadow-lg transition-all touch-interactive"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <p className="text-xs font-medium text-[rgb(var(--text-secondary))] text-center mt-3">
                Click mic to speak, type questions about Rakesh, or book a session. Assistant speaks automatically.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    maxAlternatives: number;
    start(): void;
    stop(): void;
    onstart: (() => void) | null;
    onend: (() => void) | null;
    onerror: ((event: ErrorEvent) => void) | null;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
  }
  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
    resultIndex: number;
  }
  interface SpeechRecognitionResultList {
    [index: number]: SpeechRecognitionResult;
    length: number;
  }
  interface SpeechRecognitionResult {
    [index: number]: SpeechRecognitionAlternative;
    isFinal: boolean;
    length: number;
  }
  interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
  }
}