import TestimonialSlider from './TestimonialSlider';

export default function Testimonial() {
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

  return (
    <section className="relative bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:bg-[#d1e9f2] transition-colors cursor-pointer mb-4 sm:mb-6">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#273851] leading-tight mb-4 sm:mb-6 px-4">
            Lo que Dicen Nuestros{' '}
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
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
} 