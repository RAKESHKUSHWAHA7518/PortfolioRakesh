import React from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  wordClassName?: string;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  charClassName = '',
  wordClassName = '',
}) => {
  const words = text.split(' ');

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className={`inline-block whitespace-nowrap ${wordClassName}`}>
          {word.split('').map((char, charIdx) => (
            <span
              key={charIdx}
              className={`inline-block ${charClassName}`}
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
          {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </span>
  );
};
