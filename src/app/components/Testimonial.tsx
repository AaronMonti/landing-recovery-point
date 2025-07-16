'use client';

import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Paciente con dolor lumbar",
      content: "Después de meses de dolor de espalda, el tratamiento en RecoveryPoint cambió mi vida. Los ejercicios personalizados y la terapia manual me ayudaron a recuperar mi movilidad completamente.",
      recovery: "100%",
      avatar: "M",
      gradient: "from-[#18759F] to-[#17B4BC]"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Deportista lesionado",
      content: "Como deportista, necesitaba una rehabilitación especializada después de mi lesión. El equipo de RecoveryPoint me ayudó a volver a mi nivel de rendimiento anterior.",
      recovery: "95%",
      avatar: "C",
      gradient: "from-[#17B4BC] to-[#273851]"
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Paciente post-operatoria",
      content: "La rehabilitación post-operatoria fue fundamental para mi recuperación. Los kinesiólogos son muy profesionales y el seguimiento fue excelente.",
      recovery: "90%",
      avatar: "A",
      gradient: "from-[#273851] to-[#18759F]"
    },
    {
      id: 4,
      name: "Roberto Silva",
      role: "Paciente con lesión deportiva",
      content: "Excelente atención y resultados. En pocas semanas pude volver a mis actividades deportivas sin dolor. Altamente recomendado.",
      recovery: "98%",
      avatar: "R",
      gradient: "from-[#18759F] to-[#17B4BC]"
    },
    {
      id: 5,
      name: "Laura Fernández",
      role: "Paciente con problemas de movilidad",
      content: "El tratamiento personalizado y la dedicación del equipo me ayudaron a recuperar mi independencia. Ahora puedo hacer todo lo que antes no podía.",
      recovery: "92%",
      avatar: "L",
      gradient: "from-[#17B4BC] to-[#273851]"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-[#17B4BC]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-[#18759F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#273851]/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      
      {/* Partículas flotantes fijas - ocultas en mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '15%', top: '25%', animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '80%', top: '35%', animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute w-2 h-2 bg-[#273851]/30 rounded-full animate-ping" style={{ left: '30%', top: '75%', animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '75%', top: '20%', animationDelay: '1.5s', animationDuration: '2.2s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '65%', top: '85%', animationDelay: '0.8s', animationDuration: '2.8s' }} />
        <div className="absolute w-2 h-2 bg-[#273851]/30 rounded-full animate-ping" style={{ left: '40%', top: '45%', animationDelay: '1.2s', animationDuration: '2.4s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '20%', top: '65%', animationDelay: '0.3s', animationDuration: '2.6s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '85%', top: '60%', animationDelay: '1.8s', animationDuration: '2.1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:bg-[#d1e9f2] transition-colors cursor-pointer mb-4 sm:mb-6">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#273851] leading-tight mb-4 sm:mb-6 px-4">
            Lo que Dicen Nuestros 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851] animate-gradient">
              Pacientes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#273851]/80 max-w-3xl mx-auto leading-relaxed px-4">
            Descubre las experiencias reales de nuestros pacientes que han recuperado su movilidad 
            y mejorado su calidad de vida con nuestros tratamientos especializados.
          </p>
        </div>

        {/* Carousel de testimonios centrado */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Contenedor del carousel */}
            <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <span className="text-xl sm:text-2xl font-bold text-white">{testimonial.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-sm sm:text-base text-[#273851]/80 leading-relaxed mb-4 sm:mb-6 italic">
                          &ldquo;{testimonial.content}&rdquo;
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-[#273851] text-sm sm:text-base">{testimonial.name}</h4>
                            <p className="text-[#273851]/60 text-xs sm:text-sm">{testimonial.role}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-xs sm:text-sm font-bold text-[#17B4BC]">{testimonial.recovery}</div>
                            <div className="text-xs text-[#273851]/60">Recuperado</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controles del carousel */}
              <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5 text-[#18759F]" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4">
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 transform hover:scale-110 active:scale-95"
                >
                  <ChevronRight className="w-5 h-5 text-[#18759F]" />
                </button>
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 sm:mt-8 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    i === currentSlide 
                      ? 'bg-[#17B4BC] scale-125' 
                      : 'bg-[#18759F]/30 hover:bg-[#18759F]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 