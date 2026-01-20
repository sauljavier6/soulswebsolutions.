import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Sistemas Web a Medida",
    description:
      "Desarrollamos plataformas personalizadas para automatizar y escalar tu negocio.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Scripts y Automatizaciones",
    description:
      "Optimizamos tus procesos con soluciones automatizadas que ahorran tiempo y recursos.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "SEO & Performance",
    description:
      "Posicionamos tu negocio en Google con sitios rápidos y optimizados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
];      
      
      {/* SERVICES */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-10">Soluciones</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="font-semibold flex items-center gap-2">
                  Ver más <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>