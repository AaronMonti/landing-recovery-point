'use client';

import { Activity, ArrowUp, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-[#273851] to-[#18759F] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#18759F] to-[#17B4BC] rounded-xl flex items-center justify-center shadow-lg">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">RECOVERY</span>
                <span className="text-xs font-semibold text-[#17B4BC] -mt-1 tracking-wider">POINT</span>
              </div>
            </div>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Somos kinesiólogos experimentados apasionados por nuestro objetivo de empoderarte físicamente en tu camino de recuperación y bienestar.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#17B4BC]">Nosotros</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Nuestra Historia</span>
              </a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Nuestros Servicios</span>
              </a></li>
              <li><a href="#gallery" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Galería</span>
              </a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Contacto</span>
              </a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#17B4BC]">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Rehabilitación Física</span>
              </a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Terapia Manual</span>
              </a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Evaluación Funcional</span>
              </a></li>
              <li><a href="#contact" className="text-gray-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group">
                <span className="w-1 h-1 bg-[#17B4BC] rounded-full group-hover:scale-150 transition-transform"></span>
                <span>Reservar Turno</span>
              </a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#17B4BC]">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-200">
                <Phone className="w-4 h-4 text-[#17B4BC]" />
                <span>+54 11 4567-8901</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-200">
                <Mail className="w-4 h-4 text-[#17B4BC]" />
                <span>info@recoverypoint.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-200">
                <MapPin className="w-4 h-4 text-[#17B4BC]" />
                <span>Av. Santa Fe 1234, Palermo</span>
              </li>
              <li className="flex items-center space-x-3">
                <a 
                  href="https://instagram.com/recoverypoint" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 text-[#17B4BC] group-hover:scale-110 transition-transform" />
                  <span>@recoverypoint</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2024 RecoveryPoint. Todos los derechos reservados.</p>
          <button 
            onClick={scrollToTop}
            className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 mt-4 md:mt-0 flex items-center space-x-2 backdrop-blur-sm hover:scale-105"
          >
            <span>Volver Arriba</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
} 