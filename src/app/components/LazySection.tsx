'use client';

import { useState, useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export default function LazySection({ children, className = "", threshold = 0.1 }: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Cargar contenido después de un pequeño delay para mejorar UX
          setTimeout(() => setHasLoaded(true), 100);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div 
      ref={sectionRef} 
      className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {hasLoaded ? children : (
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-64"></div>
          </div>
        </div>
      )}
    </div>
  );
} 