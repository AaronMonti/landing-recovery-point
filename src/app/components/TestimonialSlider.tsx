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

export default function TestimonialSlider({
  testimonials,
  autoPlayInterval = 5000
}: TestimonialSliderProps) {
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

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  const transformStyle = useMemo(() => ({
    transform: `translateX(-${currentSlide * 100}%)`
  }), [currentSlide]);

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4">
      <div className="relative">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-[#e0e0e0]">
          <div className="flex transition-transform duration-300 ease-out" style={transformStyle}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                    {testimonial.avatar}
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex justify-center sm:justify-start gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                      ))}
                    </div>

                    <blockquote className="italic text-sm sm:text-base text-[#273851]/90 mb-4">
                      “{testimonial.content}”
                    </blockquote>

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <h4 className="font-semibold text-[#273851] text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#273851]/70">{testimonial.role}</p>
                      </div>
                      <div className="text-[#17B4BC] font-bold text-sm sm:text-base text-center sm:text-right">
                        {testimonial.recovery}
                        <div className="text-xs text-[#273851]/60 font-normal">Recuperado</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-between mt-4 sm:mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#18759F] active:scale-95"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === currentSlide ? 'bg-[#17B4BC]' : 'bg-[#18759F]/30'
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#18759F] active:scale-95"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
