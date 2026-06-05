import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// React 18 layout effect safe hook
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useGSAP = (
  effect: (context: gsap.Context) => void,
  dependencies: any[] = [],
  scope?: React.RefObject<any>
) => {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(effect, scope);
    return () => ctx.revert();
  }, dependencies);
};
