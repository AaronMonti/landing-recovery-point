'use client';

import { ChevronRight, Phone, CheckCircle, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { useState } from 'react';

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
      {/* Elementos decorativos animados */}
      <div className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-[#17B4BC]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-[#18759F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#273851]/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      
      {/* Partículas flotantes fijas - ocultas en mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '15%', top: '25%', animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '80%', top: '35%', animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '30%', top: '75%', animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '75%', top: '20%', animationDelay: '1.5s', animationDuration: '2.2s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '65%', top: '85%', animationDelay: '0.8s', animationDuration: '2.8s' }} />
        <div className="absolute w-2 h-2 bg-[#273851]/30 rounded-full animate-ping" style={{ left: '40%', top: '45%', animationDelay: '1.2s', animationDuration: '2.4s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '20%', top: '65%', animationDelay: '0.3s', animationDuration: '2.6s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '85%', top: '60%', animationDelay: '1.8s', animationDuration: '2.1s' }} />
      </div>

      {/* Botón de WhatsApp flotante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <div className="text-2xl">📱</div>
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl h-fit">
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
                className="w-full group px-6 py-3 bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white rounded-lg font-semibold text-sm hover:from-[#17B4BC] hover:to-[#18759F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl">
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