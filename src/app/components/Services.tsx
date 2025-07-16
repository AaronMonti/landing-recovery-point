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
    <section id="services" className="relative bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20 overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header de la sección */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:bg-[#d1e9f2] transition-colors cursor-pointer mb-4 sm:mb-6">
            Nuestros Servicios
          </span>
          <h2 className="text-wrap text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#273851] leading-tight mb-4 sm:mb-6 px-4">
            Servicios de Kinesiología{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851]">
              Especializados
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#273851]/80 max-w-3xl mx-auto leading-relaxed px-4">
            Ofrecemos una amplia gama de servicios de rehabilitación física diseñados para 
            ayudarte a recuperar tu movilidad y mejorar tu calidad de vida.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Columna izquierda - Servicios */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              {services.map((service, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className={`bg-gradient-to-r ${service.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${service.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                          {service.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-[#273851] mb-1">{service.title}</h3>
                          <p className="text-sm text-[#273851]/70">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="text-center sm:text-right">
                          <div className="text-xs sm:text-sm text-[#273851]/60">{service.duration}</div>
                        </div>
                        <button className="bg-white/80 backdrop-blur-md text-[#273851] px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium hover:bg-white transition-colors duration-200 w-full sm:w-auto">
                          Reservar
                        </button>
                      </div>
                    </div>
                    
                    {/* Información adicional */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-4 border-t border-white/30 mt-4">
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#273851]/70">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Personalizado</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#273851]/70">
                          <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Certificado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA adicional */}
            <div className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/50">
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold text-[#273851] mb-2">¿No encuentras lo que buscas?</h3>
                <p className="text-sm sm:text-base text-[#273851]/70 mb-4">Contáctanos para una consulta personalizada</p>
                <button className="bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:from-[#17B4BC] hover:to-[#18759F] transition-all duration-200 transform hover:-translate-y-1 shadow-lg w-full sm:w-auto">
                  Contactanos
                </button>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full h-64 sm:h-80 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group">
            <ImageWithFallback
              src={IMAGES.HERO}
              alt="Terapia física profesional en Recovery Point"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              {/* Overlay con información */}
              <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-[#17B4BC] to-[#18759F] rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-[#273851]">Especialistas</span>
                        <p className="text-xs text-[#273851]/70">Kinesiólogos certificados</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-bold text-[#18759F]">15+ años</div>
                      <div className="text-xs text-[#273851]/60">Experiencia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags flotantes */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <div className="bg-white/90 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#273851]">
                    RECUPERAR
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#273851]">
                    FORTALECER
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#273851]">
                    MOVILIZAR
                  </div>
                  <div className="bg-white/90 backdrop-blur-md px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-[#273851]">
                    SANAR
                  </div>
                </div>
              </div>
            </div>

            {/* Sello de confianza mejorado - oculto en mobile */}
            <div className="hidden lg:block absolute -bottom-8 -right-8 bg-white border border-[#e8f4f8] rounded-xl p-5 shadow-xl w-72 hover:shadow-2xl transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-r from-[#17B4BC] to-[#18759F] rounded-full flex items-center justify-center relative">
                  <CheckCircle className="w-7 h-7 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#17B4BC] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#273851]">Profesionales certificados</p>
                  <p className="text-[#273851]/70 text-sm">Más de 15 años acompañando personas</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-[#17B4BC]" fill="currentColor" />
                    ))}
                    <span className="text-xs text-[#273851]/70 ml-1">5.0</span>
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