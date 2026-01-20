import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  index: number;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  image,
  date,
  index,
}: Props) {
  const navigate = useNavigate();

  return (
    <motion.article
      role="link"
      aria-label={`Leer artículo: ${title}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      onClick={() => navigate(`/blog/${id}`)}
      className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition focus:outline-none"
    >
      {/* IMAGE */}
      <div className="h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <p className="text-xs text-gray-500 mb-2">{date}</p>

        <h3 className="text-lg font-semibold mb-3 leading-snug">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {excerpt}
        </p>

        <div className="flex items-center gap-2 text-sm font-semibold text-black">
          Leer artículo completo <ArrowRight size={16} />
        </div>
      </div>
    </motion.article>
  );
}
