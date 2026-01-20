import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppFloating() {
  const [visible, setVisible] = useState(true);

  const phoneNumber = "526643945360"; // sin +
  const message = encodeURIComponent(
    "Hola, me interesa cotizar un sistema web 8)"
  );

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      >
        {/* Botón cerrar */}
        <button
          onClick={() => setVisible(false)}
          className="bg-black/70 text-white rounded-full p-1 hover:bg-black transition"
          aria-label="Cerrar WhatsApp"
        >
          <X size={14} />
        </button>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-14 h-14 rounded-full
            flex items-center justify-center
            bg-[#25D366]
            shadow-lg hover:shadow-xl
            transition
          "
          aria-label="Contactar por WhatsApp"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-8 h-8"
          />
        </a>
      </motion.div>
    </AnimatePresence>
  );
}
