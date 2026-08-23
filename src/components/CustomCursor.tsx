import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Add/remove class on html element for CSS cursor handling
    if (isTouchDevice) {
      document.documentElement.classList.add('touch-device');
      return;
    } else {
      document.documentElement.classList.remove('touch-device');
    }

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Small dot follows mouse directly
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.05,
        ease: 'power2.out',
      });

      // Outline ring follows with delay (inertia)
      gsap.to(outlineRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Event listeners to detect hovering clickable items
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .interactive-hover');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };

    const handleMouseEnterInteractive = () => {
      document.body.classList.add('cursor-hover');
    };

    const handleMouseLeaveInteractive = () => {
      document.body.classList.remove('cursor-hover');
    };

    // Watch for DOM changes to attach listeners to dynamically rendered items
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      observer.disconnect();

      const interactives = document.querySelectorAll('a, button, select, input, textarea, [role="button"], .interactive-hover');
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive);
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2" />
      <div ref={outlineRef} className="custom-cursor-outline pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};
