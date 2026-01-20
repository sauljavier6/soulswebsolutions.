// components/FinalCTA/FinalCTA.tsx
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section
      className="relative w-full bg-black py-28"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-20 text-center">
        {/* Headline */}
        <h2
          id="cta-heading"
          className="text-3xl md:text-5xl font-bold tracking-tight text-white"
        >
          Desarrollamos el sistema que tu negocio necesita
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Analizamos tus procesos, entendemos tu operación y diseñamos un sistema
          web escalable, seguro y enfocado en resultados reales.
        </p>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition hover:bg-gray-200"
            aria-label="Agenda una asesoría gratuita para tu sistema"
          >
            Agenda una asesoría gratuita <ArrowRight size={16} />
          </Link>
        </div>

        {/* Microcopy */}
        <p className="mt-6 text-sm text-gray-400">
          Sin compromiso • Atención personalizada • Propuesta clara y honesta
        </p>
      </div>
    </section>
  );
}
