import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const checkPointer = () => {
      setIsTouchDevice(!mediaQuery.matches);
    };
    checkPointer();
    mediaQuery.addEventListener('change', checkPointer);

    if (!mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', checkPointer);
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, [role="button"], input, textarea, select, [data-cursor="interactive"], [data-cursor="pointer"]'
        );
        setIsHovered(Boolean(interactive));
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth lerp loop for the trailing ring
    const render = () => {
      const lerpFactor = 0.18; // smooth lag
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      mediaQuery.removeEventListener('change', checkPointer);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Precision inner dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-cyan-400 transition-all duration-100 ease-out will-change-transform shadow-[0_0_8px_rgba(0,217,255,0.8)] ${
          isClicking ? 'scale-75 bg-white' : isHovered ? 'scale-150 bg-cyan-300' : 'scale-100'
        }`}
      />

      {/* Trailing subtle ring with smooth expansion */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border border-cyan-400/40 pointer-events-none transition-[width,height,border-color,background-color] duration-200 ease-out will-change-transform ${
          isClicking
            ? 'w-6 h-6 border-cyan-300 bg-cyan-400/20'
            : isHovered
            ? 'w-10 h-10 border-cyan-400/70 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,217,255,0.2)]'
            : 'w-7 h-7 border-slate-500/30'
        }`}
      />
    </div>
  );
};
