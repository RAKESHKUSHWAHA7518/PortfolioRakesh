import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { VoiceAIAssistant } from './components/VoiceAIAssistant';

import { CommandPalette } from './components/CommandPalette';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[rgb(var(--bg-primary))] text-[rgb(var(--text-primary))] overflow-x-hidden transition-colors duration-300">
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <VoiceAIAssistant />

        <CommandPalette />
      </div>
    </ThemeProvider>
  );
}

export default App;