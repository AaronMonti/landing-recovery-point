import { Bone, Zap, Activity, Brain, ClipboardList, Search, Dumbbell, TrendingUp, Clock, FileText, Target, Calendar, Mail } from 'lucide-react';

export default function IssuesAndProcess() {
  const issues = [
    { icon: <Bone className="w-6 h-6" />, title: "Dolor de Espalda", description: "Aliviamos dolores lumbares, cervicales y dorsales con técnicas especializadas.", symptoms: ["Dolor constante", "Rigidez", "Limitación de movimiento"] },
    { icon: <Zap className="w-6 h-6" />, title: "Lesiones Deportivas", description: "Recuperación de esguinces, desgarros y lesiones musculares deportivas.", symptoms: ["Inflamación", "Dolor al moverse", "Pérdida de fuerza"] },
    { icon: <Activity className="w-6 h-6" />, title: "Problemas Articulares", description: "Tratamiento para artritis, artrosis y problemas de movilidad articular.", symptoms: ["Dolor articular", "Rigidez matutina", "Deformidad"] },
    { icon: <Brain className="w-6 h-6" />, title: "Rehabilitación Neurológica", description: "Recuperación post-ACV, lesiones medulares y trastornos neurológicos.", symptoms: ["Pérdida de equilibrio", "Debilidad muscular", "Alteración de la marcha"] }
  ];

  const steps = [
    { number: "01", title: "Consulta Inicial", description: "Evaluación completa de tu condición y objetivos de recuperación", icon: <ClipboardList className="w-6 h-6" /> },
    { number: "02", title: "Diagnóstico", description: "Análisis detallado para crear tu plan de tratamiento personalizado", icon: <Search className="w-6 h-6" /> },
    { number: "03", title: "Tratamiento", description: "Sesiones de rehabilitación con técnicas especializadas", icon: <Dumbbell className="w-6 h-6" /> },
    { number: "04", title: "Seguimiento", description: "Monitoreo continuo de tu progreso y ajustes del tratamiento", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <section id="issues-process" className="bg-gradient-to-br from-[#f7f7f7] via-[#e8f4f8] to-[#d1e9f2] py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[#18759F] bg-[#e8f4f8] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Especialidades & Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#273851] leading-tight mb-4 px-4">
            Tratamos tu Condición con un{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18759F] via-[#17B4BC] to-[#273851]">
              Proceso Personalizado
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#273851]/80 max-w-3xl mx-auto px-4">
            Nuestro equipo especializado está preparado para tratar una amplia variedad de condiciones con un proceso de rehabilitación diseñado para brindarte los mejores resultados.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Condiciones */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#273851] text-center mb-6">Condiciones que Tratamos</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {issues.map((issue, index) => (
                <div key={index} className="bg-white rounded-xl p-4 border border-white/50">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl text-[#17B4BC]">{issue.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-base font-semibold text-[#273851] mb-1">{issue.title}</h4>
                      <p className="text-sm text-[#273851]/70 mb-2">{issue.description}</p>
                      {issue.symptoms.slice(0, 2).map((s, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#273851]/70">
                          <span className="w-1 h-1 bg-[#17B4BC] rounded-full" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proceso */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#273851] text-center mb-6">Nuestro Proceso</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="relative bg-white rounded-xl p-4 border border-white/50">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#18759F] to-[#17B4BC] rounded-full flex items-center justify-center text-white font-bold">
                        {step.number}
                      </div>
                      <div className="mt-2 text-[#17B4BC]">{step.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#273851] mb-1">{step.title}</h4>
                      <p className="text-sm text-[#273851]/70">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-4 bg-gradient-to-b from-[#17B4BC] to-[#18759F] translate-x-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info extra */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[{ icon: FileText, title: "Primera Consulta", text: "Evaluación completa gratuita y sin compromiso" },
            { icon: Clock, title: "Duración", text: "4-6 semanas para mejoras significativas" },
            { icon: Target, title: "Resultados", text: "Proceso personalizado con resultados garantizados" }
          ].map(({ icon: Icon, title, text }, i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-white/50">
              <div className="text-center">
                <Icon className="w-8 h-8 mx-auto mb-3 text-[#17B4BC]" />
                <h4 className="font-semibold text-[#273851] mb-2">{title}</h4>
                <p className="text-sm text-[#273851]/70">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-white/50 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#273851] mb-3">¿Listo para comenzar tu recuperación?</h3>
            <p className="text-[#273851]/70 mb-6">
              Cada persona es única. Contáctanos para una evaluación personalizada y encontrar el tratamiento más adecuado para tu caso específico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white px-6 py-3 rounded-lg font-medium">
                <Calendar className="w-4 h-4" />
                Agendar Consulta
              </button>
              <button className="flex items-center gap-2 border-2 border-[#18759F] text-[#18759F] px-6 py-3 rounded-lg font-medium hover:bg-[#18759F] hover:text-white transition-colors">
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
