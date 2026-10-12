import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
  touchEnabled?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxRotation = 10,
  touchEnabled = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(touch);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotateX = -py * maxRotation;
    const rotateY = px * maxRotation;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.3,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchEnabled || !cardRef.current || !containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    const rotateX = -py * maxRotation * 0.5;
    const rotateY = px * maxRotation * 0.5;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.2,
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchEnabled) return;
    handleTouchMove(e);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.02,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.15,
      });
    }
  };

  const handleTouchEnd = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.5,
    });
  };

  const touchHandlers = isTouchDevice && touchEnabled
    ? {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchEnd,
      }
    : {};

  return (
    <div
      ref={containerRef}
      className={`interactive-hover ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...touchHandlers}
      style={{ perspective: '1000px', touchAction: 'pan-y' }}
    >
      <div
        ref={cardRef}
        className="h-full w-full transition-shadow duration-300"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </div>
    </div>
  );
};
