import { Link } from "react-router-dom";

const targetAudience = [
  {
    icon: "🧑‍💼",
    title: "Emprendedores digitales",
    description:
      "Necesitas validar tu idea, vender en línea y automatizar procesos sin depender de mil herramientas.",
    systems: ["Landing", "E-commerce", "Automatizaciones"],
  },
  {
    icon: "🏪",
    title: "Negocios locales",
    description:
      "Quieres controlar ventas, inventario y clientes desde un solo sistema, sin Excel ni procesos manuales.",
    systems: ["Sistema POS", "Inventarios", "Reportes"],
  },
  {
    icon: "🏢",
    title: "Empresas en crecimiento",
    description:
      "Tu operación creció y tus sistemas actuales ya no escalan ni te dan control real.",
    systems: ["ERP", "Administrativo", "Dashboards"],
  },
  {
    icon: "🧑‍💻",
    title: "Agencias y freelancers",
    description:
      "Buscas automatizar tareas internas o crear sistemas personalizados para tus propios clientes.",
    systems: ["CRM", "Automatizaciones", "Sistemas internos"],
  },
  {
    icon: "🚀",
    title: "Startups",
    description:
      "Necesitas lanzar rápido, validar tu producto y escalar sobre una base tecnológica sólida.",
    systems: ["MVP", "Web App", "Backend a medida"],
  },
  {
    icon: "⚙️",
    title: "Negocios con procesos únicos",
    description:
      "Tu operación no encaja en software genérico y requiere una solución totalmente a medida.",
    systems: ["Sistema personalizado"],
  },
];

export default function TargetAudience() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-20">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            ¿Este sistema es para ti?
          </h2>
          <p className="mt-4 text-gray-600">
            Trabajamos con negocios que necesitan tecnología clara,
            funcional y preparada para crecer.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {targetAudience.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 text-3xl">{item.icon}</div>

              <h3 className="mb-2 text-lg font-semibold text-black">
                {item.title}
              </h3>

              <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Systems */}
              <div className="flex flex-wrap gap-2">
                {item.systems.map((system, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            to="/contacto"
            className="inline-flex rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-900"
          >
            Quiero una solución para mi negocio
          </Link>
        </div>
      </div>
    </section>
  );
}
