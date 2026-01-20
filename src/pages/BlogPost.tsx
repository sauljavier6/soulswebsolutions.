import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import type { JSX } from "react";

interface BlogPost {
  id: string;
  title: string;
  image: string;
  date: string;
  content: string[];
}

/* POSTS ESTÁTICOS */
const posts: BlogPost[] = [
  {
    id: "sistemas-web-medida",
    title: "¿Por qué un sistema web a medida es mejor que uno genérico?",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "Marzo 2025",
    content: [
      "Un sistema web a medida se adapta exactamente a los procesos reales de tu negocio.",
      "A diferencia del software genérico, no te obliga a cambiar tu forma de trabajar.",
      "Además, es escalable, seguro y puede crecer conforme tu empresa lo necesita.",
      "Invertir en desarrollo a medida es una decisión estratégica, no un gasto."
    ],
  },
  {
    id: "automatizacion-procesos",
    title: "Automatización de procesos: ahorra tiempo y dinero",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    date: "Febrero 2025",
    content: [
      "La automatización elimina tareas repetitivas y reduce errores humanos.",
      "Permite que tu equipo se enfoque en actividades de mayor valor.",
      "Desde facturación hasta reportes, todo puede optimizarse con tecnología."
    ],
  },
  {
    id: "seo-para-empresas",
    title: "SEO para empresas: qué sí funciona en 2025",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "Enero 2025",
    content: [
      "El SEO moderno se basa en experiencia de usuario y contenido real.",
      "No se trata de trucos, sino de estructura, velocidad y valor.",
      "Una web bien desarrollada es la base de cualquier estrategia SEO."
    ],
  },
];

export default function BlogPostPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.id === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl font-bold">Artículo no encontrado</h1>
          <Link
            to="/blog"
            className="mt-6 text-sm underline text-gray-600"
          >
            Volver al blog
          </Link>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[60vh]">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-3xl md:text-5xl font-extrabold text-white"
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-10 text-sm text-gray-500">{post.date}</p>

          <article className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-20 rounded-2xl border border-gray-200 p-10 text-center">
            <h3 className="text-2xl font-bold">
              ¿Quieres implementar esto en tu negocio?
            </h3>
            <p className="mt-4 text-gray-600">
              Desarrollamos sistemas, automatización y soluciones reales.
            </p>

            <Link
              to="/contacto"
              className="inline-block mt-8 rounded-full bg-black px-8 py-4 text-sm font-semibold text-white hover:bg-gray-800 transition"
            >
              Hablar de mi proyecto
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
