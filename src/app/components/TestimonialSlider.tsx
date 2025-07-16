'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  recovery: string;
  avatar: string;
  gradient: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function TestimonialSlider({ testimonials, autoPlayInterval = 5000 }: TestimonialSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-play optimizado - solo en desktop
  useEffect(() => {
    if (window.innerWidth < 768) return; // No auto-play en móviles
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  // Memoizar el estilo de transformación
  const transformStyle = useMemo(() => ({
    transform: `translateX(-${currentSlide * 100}%)`
  }), [currentSlide]);

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4">
      <div className="relative">
        {/* Contenedor del carousel - Optimizado para móviles */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-white/50 shadow-xl">
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={transformStyle}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8">
                  {/* Avatar - Centrado en móviles */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{testimonial.avatar}</span>
                  </div>
                  
                  {/* Contenido - Mejorado para móviles */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    {/* Estrellas - Centradas en móviles */}
                    <div className="flex items-center justify-center sm:justify-start gap-1 mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>
                    
                    {/* Texto del testimonio - Mejorado para móviles */}
                    <blockquote className="text-sm sm:text-base md:text-lg text-[#273851]/90 leading-relaxed mb-4 sm:mb-6 italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    
                    {/* Información del autor - Reorganizado para móviles */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-[#273851] text-sm sm:text-base md:text-lg truncate">
                          {testimonial.name}
                        </h4>
                        <p className="text-[#273851]/70 text-xs sm:text-sm md:text-base">
                          {testimonial.role}
                        </p>
                      </div>
                      
                      {/* Estado de recuperación - Centrado en móviles */}
                      <div className="text-center sm:text-right sm:ml-4 flex-shrink-0">
                        <div className="text-xs sm:text-sm md:text-base font-bold text-[#17B4BC]">
                          {testimonial.recovery}
                        </div>
                        <div className="text-xs text-[#273851]/60">
                          Recuperado
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles de navegación - Optimizados para móviles */}
        <div className="flex items-center justify-between mt-4 sm:mt-6">
          <button
            onClick={prevSlide}
            className="group w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform active:scale-95 border border-gray-100"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[#18759F] group-hover:text-[#17B4BC] transition-colors" />
          </button>
          
          <div className="flex gap-1.5 sm:gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                  i === currentSlide 
                    ? 'bg-[#17B4BC] scale-110' 
                    : 'bg-[#18759F]/30 hover:bg-[#18759F]/50'
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="group w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform active:scale-95 border border-gray-100"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#18759F] group-hover:text-[#17B4BC] transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
} 