import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
}

export default function SystemCard({
  id,
  title,
  description,
  image,
}: Props) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer bg-black shadow-md hover:shadow-2xl transition"
      onClick={() => navigate(`/sistema/${id}`)}
    >
      {/* IMAGEN */}
      <motion.img
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* GRADIENTE */}
      <motion.div
        variants={{
          rest: { opacity: 0.3 },
          hover: { opacity: 0.6 },
        }}
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
      />

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        {/* TÍTULO */}
        <motion.h3
          variants={{
            rest: { y: 0 },
            hover: { y: -10 },
          }}
          className="text-2xl font-bold text-white mb-2"
        >
          {title}
        </motion.h3>

        {/* DESCRIPCIÓN / MICRO-BENEFICIOS */}
        <motion.p
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.4 }}
          className="text-sm text-gray-200 mb-4 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-white font-semibold text-sm bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition"
        >
          Ver sistema <ArrowRight size={16} />
        </motion.div>
      </div>
    </motion.div>
  );
}
