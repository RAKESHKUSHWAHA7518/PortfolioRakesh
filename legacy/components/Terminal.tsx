import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const Terminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = [
    { text: '$ init --role "AI Engineer"', delay: 500 },
    { text: '> Initializing neural pathways...', delay: 1200 },
    { text: '$ load modules --target "Gen AI"', delay: 800 },
    { text: '> Loading LangChain... [OK]', delay: 600 },
    { text: '> Loading CrewAI... [OK]', delay: 600 },
    { text: '> Loading RAG architectures... [OK]', delay: 800 },
    { text: '$ connect --db VectorDB', delay: 1000 },
    { text: '> Connection established: ChromaDB/Pinecone.', delay: 1200 },
    { text: '$ start multi-agent-system', delay: 700 },
    { text: '> Agents online. Ready for complex orchestrations.', delay: 1500 },
  ];

  useEffect(() => {
    let currentLine = 0;
    let timeout: NodeJS.Timeout;

    const processNextCommand = () => {
      if (currentLine < commands.length) {
        setLines(prev => [...prev, commands[currentLine].text]);
        timeout = setTimeout(() => {
          currentLine++;
          processNextCommand();
        }, commands[currentLine].delay);
      }
    };

    // Start simulation after a brief delay
    timeout = setTimeout(processNextCommand, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="w-full rounded-lg overflow-hidden border border-[rgba(var(--accent-primary),0.3)] bg-[#0A0A0A] shadow-xl mt-8">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-[#1A1A1A] border-b border-[#333]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2 text-xs text-gray-400 font-mono">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>ai_core_init.sh</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="p-4 h-48 overflow-y-auto font-mono text-sm"
      >
        {lines.map((line, i) => (
          <div
            key={i}
            className={`mb-1 ${line.startsWith('$') ? 'text-green-400' : 'text-gray-300'}`}
          >
            {line}
          </div>
        ))}
        {lines.length < commands.length && (
          <div className="animate-pulse w-2 h-4 bg-[rgb(var(--accent-primary))] inline-block mt-1"></div>
        )}
      </div>
    </div>
  );
};
