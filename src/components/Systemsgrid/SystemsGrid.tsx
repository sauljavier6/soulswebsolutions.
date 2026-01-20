import SystemCard from "../Systemcard/SystemCard";

const systems = [
  {
    id: "erp",
    title: "Sistema ERP",
    description:
      "Centraliza ventas, inventarios y reportes para reducir errores y tener control total de tu negocio.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "Tiendas online rápidas, seguras y optimizadas para convertir visitas en ventas reales.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: "crm",
    title: "Sistema CRM",
    description:
      "Gestiona clientes, automatiza seguimientos y aumenta tus ventas con información centralizada.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
];

export default function SystemsGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="px-6 md:px-20 max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Sistemas diseñados para escalar tu negocio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Desarrollamos soluciones tecnológicas a medida que optimizan procesos,
            aumentan ventas y te dan control total.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {systems.map((system) => (
            <SystemCard key={system.id} {...system} />
          ))}
        </div>
      </div>
    </section>
  );
}
