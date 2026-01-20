import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSuccess(true);
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="w-full bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-20">
          {/* HERO */}
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black">
              Desarrollo de sistemas y software a medida
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Cuéntanos tu idea y te ayudamos a crear un sistema web profesional
              que impulse tu negocio.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-gray-200 p-8 shadow-sm"
            >
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-xl font-semibold mb-6">
                      Solicita una asesoría gratuita
                    </h2>

                    <div className="space-y-4">
                      <input
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black"
                      />

                      <input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black"
                      />

                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Empresa (opcional)"
                        className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black"
                      />

                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu proyecto"
                        className="w-full rounded-lg border px-4 py-3 text-sm focus:ring-2 focus:ring-black"
                      />

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white flex items-center justify-center gap-2 hover:bg-gray-900 transition disabled:opacity-60"
                      >
                        {loading && <Loader2 className="animate-spin" size={16} />}
                        {loading ? "Enviando..." : "Enviar y recibir asesoría"}
                      </button>
                    </div>

                    <p className="mt-4 text-xs text-gray-500">
                      Respondemos normalmente en menos de 24 horas.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10"
                  >
                    <CheckCircle
                      size={48}
                      className="mx-auto mb-6 text-black"
                    />
                    <h3 className="text-xl font-semibold mb-3">
                      ¡Mensaje enviado con éxito!
                    </h3>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      Hemos recibido tu mensaje. En breve te contactaremos para
                      analizar tu proyecto y darte una propuesta clara.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* INFO */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6">
                ¿Qué pasa después?
              </h3>

              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1" />
                  Analizamos tu negocio y procesos reales.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1" />
                  Te proponemos una solución clara y viable.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1" />
                  Definimos tiempos, alcance y siguientes pasos.
                </li>
              </ul>

              <div className="mt-10 space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail size={16} /> soulsw4@gmail.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} /> (+52) 664-394-5360
                </div>
              </div>
            </div>
          </div>

          {/* SEO TEXT */}
          <div className="mt-24 max-w-3xl mx-auto text-center text-sm text-gray-500">
            Especialistas en desarrollo de sistemas web, software a medida,
            automatización de procesos y soluciones digitales para empresas que
            buscan crecer con tecnología sólida.
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
