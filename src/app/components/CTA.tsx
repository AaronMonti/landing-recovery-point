'use client';

import { ChevronRight, Phone, CheckCircle, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

// Componente del logo de WhatsApp
const WhatsAppLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20 overflow-hidden">
      

      {/* Botón de WhatsApp flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 text-white p-4 rounded-full sm:shadow-lg sm:hover:shadow-xl transition-colors duration-300">
          <WhatsAppLogo className="w-6 h-6" />
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-4 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-[#d1e9f2] transition-colors cursor-pointer mb-6">
            Contactanos
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#273851] leading-tight mb-6">
            ¿Necesitas Ayuda? 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851] animate-gradient">
              Estamos Aquí
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-[#273851]/80 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo está disponible para responder todas tus consultas. 
            Envíanos un mensaje y te responderemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
          {/* Formulario de contacto */}
          <div className="bg-white sm:bg-white/80 sm:backdrop-blur-sm rounded-2xl p-6 border border-[#e8f4f8] sm:shadow-xl h-fit">
            <h3 className="text-2xl font-bold text-[#273851] mb-4 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-[#17B4BC]" />
              Envíanos un Mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="nombre" className="block text-[#273851]/90 text-sm font-medium mb-1">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white/50 border border-[#e8f4f8] rounded-lg text-[#273851] placeholder-[#273851]/60 focus:outline-none focus:ring-2 focus:ring-[#17B4BC]/50 focus:border-[#17B4BC] transition-all text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#273851]/90 text-sm font-medium mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-white/50 border border-[#e8f4f8] rounded-lg text-[#273851] placeholder-[#273851]/60 focus:outline-none focus:ring-2 focus:ring-[#17B4BC]/50 focus:border-[#17B4BC] transition-all text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="telefono" className="block text-[#273851]/90 text-sm font-medium mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-white/50 border border-[#e8f4f8] rounded-lg text-[#273851] placeholder-[#273851]/60 focus:outline-none focus:ring-2 focus:ring-[#17B4BC]/50 focus:border-[#17B4BC] transition-all text-sm"
                  placeholder="+54 11 1234-5678"
                />
              </div>
              
              <div>
                <label htmlFor="mensaje" className="block text-[#273851]/90 text-sm font-medium mb-1">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-white/50 border border-[#e8f4f8] rounded-lg text-[#273851] placeholder-[#273851]/60 focus:outline-none focus:ring-2 focus:ring-[#17B4BC]/50 focus:border-[#17B4BC] transition-all resize-none text-sm"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full group px-6 py-3 bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white rounded-lg font-semibold text-sm hover:from-[#17B4BC] hover:to-[#18759F] transition-colors sm:hover:scale-105 sm:shadow-lg sm:hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            {/* Información de contacto principal */}
            <div className="bg-white sm:bg-white/80 sm:backdrop-blur-sm rounded-2xl p-6 border border-[#e8f4f8] sm:shadow-xl">
              <h3 className="text-2xl font-bold text-[#273851] mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6 text-[#17B4BC]" />
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#18759F] to-[#17B4BC] p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#273851] mb-1">Teléfono Principal</h4>
                    <p className="text-[#273851]/80">+54 11 4567-8901</p>
                    <p className="text-[#273851]/60 text-sm">Lunes a Viernes 8:00 - 20:00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#17B4BC] to-[#18759F] p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#273851] mb-1">Email</h4>
                    <p className="text-[#273851]/80">info@recoverypoint.com</p>
                    <p className="text-[#273851]/60 text-sm">Respuesta en 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#273851] to-[#18759F] p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#273851] mb-1">Dirección</h4>
                    <p className="text-[#273851]/80">Av. Santa Fe 1234</p>
                    <p className="text-[#273851]/80">Palermo, Ciudad Autónoma de Buenos Aires</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-[#18759F] to-[#273851] p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#273851] mb-1">Horarios de Atención</h4>
                    <p className="text-[#273851]/80">Lunes a Viernes: 8:00 - 20:00</p>
                    <p className="text-[#273851]/80">Sábados: 9:00 - 14:00</p>
                    <p className="text-[#273851]/60 text-sm">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa o ubicación */}
            <div className="bg-white sm:bg-white/80 sm:backdrop-blur-sm rounded-2xl p-6 border border-[#e8f4f8] sm:shadow-xl">
              <h4 className="font-semibold text-[#273851] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#17B4BC]" />
                Nuestra Ubicación
              </h4>
              <div className="bg-gradient-to-br from-[#e8f4f8] to-[#d1e9f2] rounded-lg h-48 flex items-center justify-center border border-[#e8f4f8]">
                <div className="text-center text-[#273851]/60">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-[#17B4BC]" />
                  <p className="text-sm">Mapa interactivo</p>
                  <p className="text-xs">Av. Santa Fe 1234, Palermo</p>
                </div>
              </div>
              <button className="w-full mt-3 bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-[#17B4BC] hover:to-[#18759F] transition-all">
                Ver en Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* Garantía */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-[#273851]/80 text-sm mb-4">
            <CheckCircle className="w-4 h-4 text-[#17B4BC]" />
            <span>100% confidencial y sin compromiso</span>
          </div>
          <p className="text-[#273851]/60 text-sm">
            Todos los datos proporcionados son tratados con absoluta confidencialidad según la Ley de Protección de Datos Personales.
          </p>
        </div>
      </div>
    </section>
  );
} 