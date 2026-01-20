import { motion } from "framer-motion";

const solutions = [
  {
    title: "Sistemas Web a Medida",
    description:
      "Desarrollo de sistemas personalizados alineados a los procesos reales de tu negocio.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Sistemas de Ventas y POS",
    description:
      "Control total de ventas, productos, inventario, clientes y reportes en tiempo real.",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4",
  },
  {
    title: "Sistemas de Crédito y Pagos",
    description:
      "Plataformas para ventas a crédito, control de pagos, abonos y cobranza.",
    image:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
  },
  {
    title: "CRM y Gestión de Clientes",
    description:
      "Administra clientes, historial, oportunidades y comunicación desde un solo lugar.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Paneles de Control y Reportes",
    description:
      "Dashboards claros con métricas clave para decisiones estratégicas.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Automatización de Procesos",
    description:
      "Reducimos tareas manuales y optimizamos flujos internos del negocio.",
    image:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    title: "SEO y Posicionamiento Web",
    description:
      "Optimizamos tu sitio para aparecer en Google, atraer tráfico calificado y convertir visitas en clientes.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    title: "Soporte y Evolución Continua",
    description:
      "Mantenimiento, mejoras y crecimiento continuo de tus sistemas.",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980",
  },
];

export default function SolutionsGrid() {
  return (
    <section
      className="w-full bg-gray-50 py-24"
      aria-labelledby="solutions-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2
            id="solutions-heading"
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Sistemas y soluciones digitales
          </h2>
          <p className="mt-4 text-gray-600">
            Tecnología diseñada para crecer, escalar y vender mejor.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative h-[340px] overflow-hidden rounded-3xl shadow-sm"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/70" />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
