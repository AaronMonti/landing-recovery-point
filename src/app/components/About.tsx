import { Target, UserCheck, Building2, Handshake } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { IMAGES } from '../constants/images';

export default function About() {
  const features = [
    {
      icon: <Target className="w-5 h-5 text-[#17B4BC]" />,
      title: "Enfoque Personalizado",
      description: "Cada tratamiento se adapta a tus necesidades específicas y objetivos de recuperación."
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#17B4BC]" />,
      title: "Profesionales Certificados",
      description: "Equipo de kinesiólogos con más de 15 años de experiencia en rehabilitación física."
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#17B4BC]" />,
      title: "Instalaciones Modernas",
      description: "Centro equipado con tecnología de vanguardia para tu recuperación óptima."
    },
    {
      icon: <Handshake className="w-5 h-5 text-[#17B4BC]" />,
      title: "Acompañamiento Continuo",
      description: "Te acompañamos en todo tu proceso de recuperación con seguimiento personalizado."
    }
  ];

  return (
    <section id="about" className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header centrado */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-4 py-2 rounded-full text-sm font-medium tracking-wide mb-6">
            Nuestra Historia
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#273851] mb-6">
            Más de 15 años <span className="text-[#17B4BC]">cuidando tu salud</span>
          </h2>

          <p className="text-lg text-[#273851]/70 max-w-3xl mx-auto leading-relaxed">
            En Recovery Point, nos especializamos en ayudarte a recuperar tu movilidad y mejorar tu calidad de vida. 
            Nuestro compromiso es brindarte la mejor atención con un enfoque personalizado y profesional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagen (columna izquierda) */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden sm:shadow-lg">
                <ImageWithFallback
                  src={IMAGES.ABOUT}
                  alt="Kinesiólogo profesional en Recovery Point"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl p-3 sm:p-4 border border-gray-100 sm:shadow-lg">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#17B4BC]">15+</div>
                  <div className="text-xs sm:text-sm text-[#273851]/70">Años de experiencia</div>
                </div>
              </div>

              {/* Decorativo */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 bg-[#17B4BC]/10 rounded-full" />
            </div>
          </div>

          {/* Texto (columna derecha) */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#273851]">
                Nuestra Misión
              </h3>

              <p className="text-[#273851]/80 leading-relaxed">
                Nos dedicamos a proporcionar tratamientos de kinesiología de la más alta calidad, 
                utilizando técnicas avanzadas y un enfoque personalizado para cada paciente. 
                Nuestro objetivo es ayudarte a alcanzar tu máximo potencial de recuperación.
              </p>

              <p className="text-[#273851]/80 leading-relaxed">
                Contamos con un equipo de profesionales certificados que se mantiene actualizado 
                con las últimas técnicas y tecnologías en rehabilitación física.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center p-4 bg-[#f8fafc] rounded-xl">
                <div className="text-2xl font-bold text-[#17B4BC]">100%</div>
                <div className="text-sm text-[#273851]/70">Pacientes satisfechos</div>
              </div>
              <div className="text-center p-4 bg-[#f8fafc] rounded-xl">
                <div className="text-2xl font-bold text-[#17B4BC]">5000+</div>
                <div className="text-sm text-[#273851]/70">Casos exitosos</div>
              </div>
            </div>

            {/* Características */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#273851]">¿Por qué elegirnos?</h4>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#17B4BC]/10 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-[#273851] mb-1">
                        {feature.title}
                      </h5>
                      <p className="text-[#273851]/70 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
