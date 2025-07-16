'use client';

import { Bone, Zap, Activity, Brain, ClipboardList, Search, Dumbbell, TrendingUp, Clock, FileText, Target, Calendar, Mail } from 'lucide-react';

export default function IssuesAndProcess() {
  const issues = [
    {
      icon: <Bone className="w-6 h-6" />,
      title: "Dolor de Espalda",
      description: "Aliviamos dolores lumbares, cervicales y dorsales con técnicas especializadas.",
      symptoms: ["Dolor constante", "Rigidez", "Limitación de movimiento"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lesiones Deportivas",
      description: "Recuperación de esguinces, desgarros y lesiones musculares deportivas.",
      symptoms: ["Inflamación", "Dolor al moverse", "Pérdida de fuerza"]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Problemas Articulares",
      description: "Tratamiento para artritis, artrosis y problemas de movilidad articular.",
      symptoms: ["Dolor articular", "Rigidez matutina", "Deformidad"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Rehabilitación Neurológica",
      description: "Recuperación post-ACV, lesiones medulares y trastornos neurológicos.",
      symptoms: ["Pérdida de equilibrio", "Debilidad muscular", "Alteración de la marcha"]
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Evaluación completa de tu condición y objetivos de recuperación",
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Diagnóstico",
      description: "Análisis detallado para crear tu plan de tratamiento personalizado",
      icon: <Search className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Tratamiento",
      description: "Sesiones de rehabilitación con técnicas especializadas",
      icon: <Dumbbell className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Seguimiento",
      description: "Monitoreo continuo de tu progreso y ajustes del tratamiento",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="issues-process" className="relative bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Elementos decorativos animados */}
      <div className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-[#17B4BC]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-[#18759F]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#273851]/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      
      {/* Partículas flotantes fijas - ocultas en mobile */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '15%', top: '25%', animationDelay: '0s', animationDuration: '2s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '80%', top: '35%', animationDelay: '0.5s', animationDuration: '2.5s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '30%', top: '75%', animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '75%', top: '20%', animationDelay: '1.5s', animationDuration: '2.2s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '65%', top: '85%', animationDelay: '0.8s', animationDuration: '2.8s' }} />
        <div className="absolute w-2 h-2 bg-[#273851]/30 rounded-full animate-ping" style={{ left: '40%', top: '45%', animationDelay: '1.2s', animationDuration: '2.4s' }} />
        <div className="absolute w-2 h-2 bg-[#17B4BC]/30 rounded-full animate-ping" style={{ left: '20%', top: '65%', animationDelay: '0.3s', animationDuration: '2.6s' }} />
        <div className="absolute w-2 h-2 bg-[#18759F]/30 rounded-full animate-ping" style={{ left: '85%', top: '60%', animationDelay: '1.8s', animationDuration: '2.1s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header principal unificado */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide hover:bg-[#d1e9f2] transition-colors cursor-pointer mb-4 sm:mb-6">
            Especialidades & Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#273851] leading-tight mb-4 sm:mb-6 px-4">
            Tratamos tu Condición con un 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851] animate-gradient">
              Proceso Personalizado
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#273851]/80 max-w-3xl mx-auto leading-relaxed px-4">
            Nuestro equipo especializado está preparado para tratar una amplia variedad de condiciones 
            con un proceso de rehabilitación diseñado para brindarte los mejores resultados.
          </p>
        </div>

        {/* Grid combinado: Condiciones y Proceso */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16">
          {/* Columna izquierda - Condiciones */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#273851] mb-4">
                Condiciones que Tratamos
              </h3>
              <p className="text-[#273851]/70">
                Especialidades en rehabilitación física y neurológica
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {issues.map((issue, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                        {issue.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-[#273851] mb-1 group-hover:text-[#18759F] transition-colors">
                          {issue.title}
                        </h4>
                        <p className="text-xs text-[#273851]/70 leading-relaxed mb-2">
                          {issue.description}
                        </p>
                        <div className="space-y-1">
                          {issue.symptoms.slice(0, 2).map((symptom, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-[#273851]/70">
                              <div className="w-1 h-1 bg-[#17B4BC] rounded-full"></div>
                              {symptom}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha - Proceso */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#273851] mb-4">
                Nuestro Proceso
              </h3>
              <p className="text-[#273851]/70">
                Cómo trabajamos para tu recuperación
              </p>
            </div>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#18759F] to-[#17B4BC] rounded-full flex items-center justify-center text-white text-lg font-bold">
                          {step.number}
                        </div>
                        <div className="text-2xl sm:text-3xl mt-2 group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm sm:text-base font-semibold text-[#273851] mb-1 group-hover:text-[#18759F] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#273851]/70 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Línea conectora */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 top-full w-0.5 h-4 bg-gradient-to-b from-[#17B4BC] to-[#18759F] transform translate-x-1/2"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Información adicional compacta */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
            <div className="text-center">
              <FileText className="w-8 h-8 mx-auto mb-3 text-[#17B4BC]" />
              <h4 className="font-semibold text-[#273851] mb-2">Primera Consulta</h4>
              <p className="text-sm text-[#273851]/70">Evaluación completa gratuita y sin compromiso</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
            <div className="text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-[#17B4BC]" />
              <h4 className="font-semibold text-[#273851] mb-2">Duración</h4>
              <p className="text-sm text-[#273851]/70">4-6 semanas para mejoras significativas</p>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50 sm:col-span-2 lg:col-span-1">
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-3 text-[#17B4BC]" />
              <h4 className="font-semibold text-[#273851] mb-2">Resultados</h4>
              <p className="text-sm text-[#273851]/70">Proceso personalizado con resultados garantizados</p>
            </div>
          </div>
        </div>

        {/* CTA unificado */}
        <div className="text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/50 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#273851] mb-3">¿Listo para comenzar tu recuperación?</h3>
            <p className="text-[#273851]/70 mb-6">
              Cada persona es única. Contáctanos para una evaluación personalizada y encontrar 
              el tratamiento más adecuado para tu caso específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white px-6 py-3 rounded-lg font-medium hover:from-[#17B4BC] hover:to-[#18759F] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </button>
              <button className="flex items-center gap-2 border-2 border-[#18759F] text-[#18759F] px-6 py-3 rounded-lg font-medium hover:bg-[#18759F] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <Mail className="w-4 h-4" />
                Enviar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 