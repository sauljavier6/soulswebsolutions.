
import { ArrowRight, Check } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";

export default function SystemDetail() {
  return (
    <div className="w-full">
      <Navbar />

      {/* HERO */}
      <section className="pt-16 relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
          alt="Sistema POS"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Sistema POS
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
            Control total de ventas, inventario y reportes en tiempo real para tu negocio.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 w-fit hover:bg-gray-200 transition">
            Cotizar este sistema <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="px-8 md:px-20 py-20">
        <h2 className="text-3xl font-bold mb-10">¿Qué incluye este sistema?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Gestión de ventas y cortes de caja",
            "Control de inventario",
            "Usuarios y roles",
            "Reportes en tiempo real",
            "Compatible con ticket y factura",
            "Soporte y capacitación"
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <Check className="text-green-600 mt-1" />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-8 md:px-20 py-24 bg-black text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para implementar este sistema?
        </h3>
        <p className="text-gray-300 max-w-xl mb-8">
          Solicita una cotización personalizada y comienza a optimizar tu negocio hoy mismo.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
          Solicitar cotización
        </button>
      </section>
    </div>
  );
}
