import { motion } from "framer-motion";

export default function HeroToProblemTransition() {
  return (
    <div className="relative w-full bg-white">
      {/* Fade oscuro → blanco */}
      <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-black/60 to-white" />

      {/* Indicador de scroll */}
      <div className="relative z-10 flex flex-col items-center py-16">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-widest text-gray-400"
        >
          Descubre más
        </motion.span>

        <motion.div
          animate={{ y: [0, 14, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="h-10 w-[2px] rounded-full bg-gray-300"
        />
      </div>
    </div>
  );
}
