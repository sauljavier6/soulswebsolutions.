import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-8 md:px-20 py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Souls<span className="text-gray-400">Web</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Desarrollo de sistemas web profesionales diseñados para escalar tu
              negocio.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">
                Sistemas a Medida
              </li>
              <li className="hover:text-white cursor-pointer">Scripts y Automatizaciones</li>
              <li className="hover:text-white cursor-pointer">
                SEO & Performance
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Sistemas</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">ERP</li>
              <li className="hover:text-white cursor-pointer">POS</li>
              <li className="hover:text-white cursor-pointer">CRM</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              ¿Listo para empezar?
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Cuéntanos tu idea y te ayudamos a construirla.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition w-full md:w-auto"
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Souls Web Solutions</span>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Aviso de privacidad
            </span>
            <span className="hover:text-white cursor-pointer">
              Términos y condiciones
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
