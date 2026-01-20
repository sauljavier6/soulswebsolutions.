export default function ProblemSection() {
  return (
    <section className="w-full bg-gray-50 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
          El problema no es tu negocio.
          <br />
          <span className="text-gray-500">
            Es la tecnología que lo frena.
          </span>
        </h2>

        {/* Intro */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Muchos negocios crecen… pero su tecnología se queda atrás.
          El resultado: procesos lentos, errores constantes y oportunidades perdidas.
        </p>

        {/* Pain points */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-2">
              Todo se hace a mano
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Cotizaciones, reportes, seguimientos y tareas repetitivas
              que consumen horas y generan errores innecesarios.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-2">
              Sistemas que no escalan
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Software lento, mal diseñado o “parchado” que no soporta
              el crecimiento de tu negocio.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-black mb-2">
              Cero visibilidad real
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Datos dispersos en Excel, WhatsApp y correos,
              sin métricas claras para tomar decisiones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
