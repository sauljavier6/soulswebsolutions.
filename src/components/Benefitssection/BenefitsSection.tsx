// components/BenefitsSection/BenefitsSection.tsx
export default function BenefitsSection() {
  const benefits = [
    {
      title: "Sistemas diseñados para vender y crecer",
      description:
        "Desarrollamos sistemas web, apps y software enfocados en resultados reales: más ventas, mejor control y procesos optimizados.",
    },
    {
      title: "Escalables desde el primer día",
      description:
        "Creamos soluciones tecnológicas preparadas para crecer contigo, sin rehacer el sistema cuando tu negocio avanza.",
    },
    {
      title: "Tecnología profesional y mantenible",
      description:
        "Código limpio, seguro y bien estructurado que facilita mantenimiento, mejoras y nuevas integraciones.",
    },
    {
      title: "Acompañamiento real y soporte continuo",
      description:
        "Te guiamos desde la idea inicial hasta el lanzamiento y evolución del sistema, sin desaparecer después.",
    },
  ];

  return (
    <section
      className="w-full bg-gray-50 py-24"
      aria-labelledby="benefits-title"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-20">
        {/* Header */}
        <header className="mx-auto mb-20 max-w-2xl text-center">
          <h2
            id="benefits-title"
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Beneficios de trabajar con nosotros
          </h2>
          <p className="mt-4 text-gray-600">
            Desarrollo de sistemas, software y soluciones digitales
            pensadas para negocios que quieren crecer con tecnología.
          </p>
        </header>

        {/* Benefits grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-black">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
