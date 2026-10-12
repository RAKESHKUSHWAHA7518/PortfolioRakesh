import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '../hooks/useGSAP';

export const ScrollProgress: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!progressBarRef.current) return;

    gsap.to(progressBarRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });
  });

  return (
    <div className="fixed left-0 top-0 z-[10000] h-[3px] w-full origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0" ref={progressBarRef} />
  );
};
