import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full pt-16 overflow-hidden">
      {/* Background image */}
      <motion.img
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        src="https://images.unsplash.com/photo-1518770660439-4636190af475"
        alt="Desarrollo de sistemas web y software a medida para empresas"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-20 max-w-6xl pt-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Sistemas y software
          <br />
          <span className="text-gray-300">
            que hacen crecer tu negocio
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-10"
        >
          Diseñamos sistemas, apps y soluciones digitales
          que automatizan procesos, aumentan ventas
          y escalan tu operación sin fricción.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* Primary CTA */}
          <Link
            to="/contacto"
            className="bg-white text-black px-7 py-3 rounded-full font-semibold transition hover:bg-gray-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Hablar de mi proyecto
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/sistemas"
            className="border border-white/60 text-white/80 px-7 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition hover:bg-white hover:text-black hover:border-white hover:scale-[1.03] active:scale-[0.98]"
            aria-label="Ver sistemas y soluciones digitales"
          >
            Ver soluciones digitales <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 text-sm text-gray-400"
        >
          Sistemas web a medida · Escalables · Soporte real
        </motion.p>
      </div>
    </section>
  );
}
