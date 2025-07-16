import { ChevronRight, Search, CheckCircle, Star, Calendar } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';
import { IMAGES } from '../constants/images';

export default function Hero() {
  const stats = [
    { number: "500+", label: "Pacientes" },
    { number: "15+", label: "Años" },
    { number: "100%", label: "Satisfacción" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] min-h-screen flex items-center overflow-hidden pt-16 md:pt-0">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16 z-10 relative">
        {/* Columna izquierda - Texto */}
        <div className="space-y-6 text-center lg:text-left sm:animate-fadeInUp">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-4 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-[#d1e9f2] transition-colors">
            Centro de Kinesiología Recovery Point
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#273851] leading-tight">
            Volvé a moverte con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17B4BC] via-[#18759F] to-[#273851] animate-gradient">
              libertad y confianza
            </span>
          </h1>

          <p className="text-lg text-[#273851]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Nos especializamos en ayudarte a recuperar tu movilidad y bienestar físico, con un enfoque humano y profesional que transforma vidas.
          </p>

          {/* Estadísticas */}
          <div className="grid grid-cols-3 gap-4 py-3 max-w-md mx-auto lg:mx-0">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl font-bold text-[#18759F] sm:group-hover:scale-110 sm:transition-transform duration-300">{stat.number}</div>
                <div className="text-sm text-[#273851]/70">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white rounded-full font-semibold text-base hover:from-[#17B4BC] hover:to-[#18759F] sm:transition-transform sm:duration-300 sm:hover:scale-105 sm:shadow-lg sm:hover:shadow-xl">
              <span className="flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Reservar turno
                <ChevronRight className="w-4 h-4 sm:group-hover:translate-x-1 sm:transition-transform" />
              </span>
            </button>
            <button className="group px-8 py-4 border-2 border-[#18759F] text-[#18759F] rounded-full font-semibold text-base hover:bg-[#18759F] hover:text-white sm:transition-transform sm:duration-300 sm:hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                Ver tratamientos
                <ChevronRight className="w-4 h-4 sm:group-hover:rotate-12 sm:transition-transform" />
              </span>
            </button>
          </div>

          {/* Badges adicionales */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <div className="flex items-center gap-2 bg-white sm:bg-white/80 sm:backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-[#273851] sm:shadow-lg">
              <div className="w-2 h-2 bg-[#17B4BC] rounded-full"></div>
              Disponible hoy
            </div>
            <div className="flex items-center gap-2 bg-white sm:bg-white/80 sm:backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-[#273851] sm:shadow-lg">
              <div className="w-2 h-2 bg-[#18759F] rounded-full"></div>
              Sin compromiso
            </div>
            <div className="flex items-center gap-2 bg-white sm:bg-white/80 sm:backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium text-[#273851] sm:shadow-lg">
              <div className="w-2 h-2 bg-[#273851] rounded-full"></div>
              Certificados
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="relative sm:animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden sm:shadow-2xl group">
            <ImageWithFallback
              src={IMAGES.HERO}
              alt="Terapia física profesional en Recovery Point"
              fill
              className="object-cover sm:group-hover:scale-105 sm:transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Overlay con información */}
            <div className="absolute bottom-6 left-6 right-6 bg-white sm:bg-white/95 sm:backdrop-blur-sm rounded-xl p-4 sm:transform sm:translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 sm:transition-transform duration-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#17B4BC] to-[#18759F] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#273851]">Tratamiento personalizado</p>
                  <p className="text-[#273851]/70 text-sm">Adaptado a tus necesidades específicas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sello de confianza */}
          <div className="hidden lg:block absolute -top-8 -right-8 bg-white border border-[#e8f4f8] rounded-xl p-5 shadow-xl w-72 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-r from-[#17B4BC] to-[#18759F] rounded-full flex items-center justify-center relative">
                <CheckCircle className="w-7 h-7 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#17B4BC] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#273851]">Consulta inicial gratuita</p>
                <p className="text-[#273851]/70 text-sm">Sin compromiso ni obligación</p>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-[#17B4BC]" fill="currentColor" />
                  ))}
                  <span className="text-xs text-[#273851]/70 ml-1">5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Elementos flotantes decorativos */}
          <div className="hidden lg:block absolute -top-4 -left-4 w-16 h-16 bg-[#17B4BC]/20 rounded-full blur-xl animate-pulse" />
          <div className="hidden lg:block absolute -bottom-4 -right-4 w-12 h-12 bg-[#18759F]/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  );
}
