import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ErrorPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center bg-white px-6">
        <div className="text-center max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-7xl font-extrabold tracking-tight text-black"
          >
            404
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-2xl font-semibold"
          >
            Página no encontrada
          </motion.h2>

          <p className="mt-4 text-gray-600 text-sm">
            La página que buscas no existe o fue movida.  
            Pero no te preocupes, podemos volver al inicio.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-10 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white hover:bg-gray-900 transition"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
