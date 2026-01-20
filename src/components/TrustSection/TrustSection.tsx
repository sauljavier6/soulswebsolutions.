import { ShieldCheck, TrendingUp, Users, Zap } from "lucide-react";

export default function TrustSection() {
  return (
    <section
      className="px-8 md:px-20 py-20 bg-white"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADLINE */}
        <header className="text-center mb-16">
          <h2
            id="trust-heading"
            className="text-3xl md:text-4xl font-extrabold mb-4"
          >
            Desarrollo de sistemas web confiables y escalables
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Creamos <strong>sistemas web profesionales</strong> enfocados en
            rendimiento, seguridad y retorno de inversión para empresas que
            buscan crecer.
          </p>
        </header>

        {/* METRICS */}
        <ul
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          role="list"
        >
          <li className="text-center">
            <p className="text-4xl font-extrabold">+20</p>
            <p className="text-gray-600 mt-2">Sistemas desarrollados</p>
          </li>

          <li className="text-center">
            <p className="text-4xl font-extrabold">+5</p>
            <p className="text-gray-600 mt-2">Años de experiencia</p>
          </li>

          <li className="text-center">
            <p className="text-4xl font-extrabold">100%</p>
            <p className="text-gray-600 mt-2">Código propio</p>
          </li>

          <li className="text-center">
            <p className="text-4xl font-extrabold">Soporte</p>
            <p className="text-gray-600 mt-2">Post-entrega incluido</p>
          </li>
        </ul>

        {/* BENEFITS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <article className="p-6 rounded-2xl border hover:shadow-lg transition">
            <ShieldCheck className="mb-4" size={32} aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">
              Seguridad en sistemas web
            </h3>
            <p className="text-gray-600 text-sm">
              Implementamos arquitectura segura, control de accesos y buenas
              prácticas desde el inicio del desarrollo.
            </p>
          </article>

          <article className="p-6 rounded-2xl border hover:shadow-lg transition">
            <TrendingUp className="mb-4" size={32} aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">
              Sistemas escalables
            </h3>
            <p className="text-gray-600 text-sm">
              Plataformas preparadas para crecer junto con tu empresa sin
              rehacer el sistema.
            </p>
          </article>

          <article className="p-6 rounded-2xl border hover:shadow-lg transition">
            <Users className="mb-4" size={32} aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">
              Enfoque en procesos de negocio
            </h3>
            <p className="text-gray-600 text-sm">
              Analizamos tus flujos, clientes y objetivos antes de escribir una
              sola línea de código.
            </p>
          </article>

          <article className="p-6 rounded-2xl border hover:shadow-lg transition">
            <Zap className="mb-4" size={32} aria-hidden="true" />
            <h3 className="font-semibold text-lg mb-2">
              Alto rendimiento y SEO
            </h3>
            <p className="text-gray-600 text-sm">
              Sistemas rápidos, optimizados para SEO técnico, velocidad y
              conversión.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
