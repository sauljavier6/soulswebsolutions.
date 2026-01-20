import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BlogCard from "../components/BlogCard/BlogCard";

const posts = [
  {
    id: "sistemas-web-medida",
    title: "¿Por qué un sistema web a medida es mejor que uno genérico?",
    excerpt:
      "Descubre cuándo conviene desarrollar un sistema personalizado y cómo impacta en el crecimiento de tu negocio.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "Marzo 2025",
  },
  {
    id: "automatizacion-procesos",
    title: "Automatización de procesos: ahorra tiempo y dinero",
    excerpt:
      "Cómo eliminar tareas manuales y optimizar flujos internos con tecnología.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    date: "Febrero 2025",
  },
  {
    id: "seo-para-empresas",
    title: "SEO para empresas: qué sí funciona en 2025",
    excerpt:
      "Estrategias reales de posicionamiento para negocios que quieren clientes, no solo visitas.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "Enero 2025",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Blog de tecnología y sistemas
          </motion.h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Artículos sobre sistemas web, automatización, software a medida y
            tecnología aplicada a negocios reales.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogCard key={post.id} {...post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          ¿Quieres aplicar esto a tu negocio?
        </h2>
        <p className="mt-4 text-gray-300">
          Agenda una asesoría gratuita y veamos tu caso.
        </p>

        <a
          href="/contacto"
          className="inline-block mt-8 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-gray-200 transition"
        >
          Hablar de mi proyecto
        </a>
      </section>

      <Footer />
    </>
  );
}
