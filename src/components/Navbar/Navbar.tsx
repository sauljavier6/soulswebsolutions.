import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-20 h-16 bg-black/70 backdrop-blur-md">
        {/* LOGO */}
        <a
          href="/"
          className="text-white font-bold text-xl tracking-wide"
          aria-label="Ir al inicio - SoulsWeb"
        >
          Souls<span className="text-gray-300">Web</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          <li>
            <Link to="/" className="hover:text-gray-300 cursor-pointer">
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/sistemas" className="hover:text-gray-300 cursor-pointer">
              Sistemas
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-gray-300 cursor-pointer">
              Blog
            </Link>
          </li>

          <li>
            <Link to="/contacto" className="hover:text-gray-300 cursor-pointer">
              Contacto
            </Link>
          </li>
        </ul>

        {/* CTA DESKTOP */}
        <div className="hidden md:block">
          <a
            href="/contacto"
            className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Cotizar
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (

      <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6 space-y-4 text-white">
        <div className="border-b border-white/10 pb-4">
          <Link to="/" className="block hover:text-gray-300">
            Inicio
          </Link>
        </div>

        <div className="border-b border-white/10 pb-4">
          <Link to="/sistemas" className="block hover:text-gray-300">
            Sistemas
          </Link>
        </div>

        <div className="border-b border-white/10 pb-4">
          <Link to="/blog" className="block hover:text-gray-300">
            Blog
          </Link>
        </div>

        <div className="border-b border-white/10 pb-4">
          <Link to="/contacto" className="block hover:text-gray-300">
            Contacto
          </Link>
        </div>

        <Link
          to="/contacto"
          className="block w-full bg-white text-black py-3 rounded-full font-semibold text-center mt-4 hover:bg-gray-200 transition"
        >
          Cotizar proyecto
        </Link>
      </div>

      )}
    </header>
  );
}
