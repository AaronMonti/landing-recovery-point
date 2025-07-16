import { CheckCircle, Users, Settings, Star, Shield } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { IMAGES } from '../constants/images';

export default function Services() {
  const services = [
    {
      title: "Rehabilitación Física",
      description: "Programas personalizados para recuperar movilidad y fuerza muscular",
      duration: "45-60 min",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-[#18759F] to-[#17B4BC]",
      bgColor: "from-[#e8f4f8] to-[#d1e9f2]"
    },
    {
      title: "Terapia Manual",
      description: "Técnicas especializadas para aliviar dolor y mejorar movilidad articular",
      duration: "30-45 min",
      icon: <Users className="w-6 h-6" />,
      color: "from-[#17B4BC] to-[#18759F]",
      bgColor: "from-[#d1e9f2] to-[#e8f4f8]"
    },
    {
      title: "Evaluación Funcional",
      description: "Análisis completo de tu condición física y plan de tratamiento",
      duration: "60 min",
      icon: <Settings className="w-6 h-6" />,
      color: "from-[#273851] to-[#18759F]",
      bgColor: "from-[#f0f4f8] to-[#e8f4f8]"
    }
  ];

  return (
    <section id="services" className="bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20">

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#273851] leading-tight mt-4">
            Servicios de Kinesiología{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851]">
              Especializados
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#273851]/80 max-w-3xl mx-auto mt-4 px-2">
            Ofrecemos una amplia gama de servicios de rehabilitación física diseñados para ayudarte a recuperar tu movilidad y mejorar tu calidad de vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Servicios */}
          <div className="space-y-6 order-2 lg:order-1">
            {services.map((service, index) => (
              <div key={index} className={`bg-gradient-to-r ${service.bgColor} rounded-xl p-4 sm:p-6 border border-white/50`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#273851]">{service.title}</h3>
                      <p className="text-sm text-[#273851]/70">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs sm:text-sm text-[#273851]/60 mb-1">{service.duration}</div>
                    <button className="bg-white text-[#273851] px-3 py-2 rounded-lg text-xs sm:text-sm font-medium">
                      Reservar
                    </button>
                  </div>
                </div>

                {/* Extra info */}
                <div className="flex flex-wrap items-center gap-4 mt-4 border-t border-white/30 pt-4">
                  <div className="flex items-center gap-2 text-xs text-[#273851]/70">
                    <CheckCircle className="w-4 h-4" />
                    <span>Personalizado</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#273851]/70">
                    <Shield className="w-4 h-4" />
                    <span>Certificado</span>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="bg-white rounded-xl p-4 sm:p-6 border border-white/50">
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-[#273851] mb-2">¿No encuentras lo que buscas?</h3>
                <p className="text-sm sm:text-base text-[#273851]/70 mb-4">Contáctanos para una consulta personalizada</p>
                <button className="bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white px-4 py-2 rounded-lg font-medium w-full sm:w-auto">
                  Contactanos
                </button>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="order-1 lg:order-2 relative w-full h-64 sm:h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
            <ImageWithFallback
              src={IMAGES.HERO}
              alt="Terapia física profesional"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay opcional en desktop */}
            <div className="hidden sm:block absolute top-4 left-4 right-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#17B4BC] to-[#18759F] rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#273851]">Especialistas</span>
                      <p className="text-xs text-[#273851]/70">Kinesiólogos certificados</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#18759F]">15+ años</div>
                    <div className="text-xs text-[#273851]/60">Experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
