// components/FAQSection/FAQSection.tsx
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto cuesta un sistema?",
    answer:
      "El precio de un sistema depende del tipo de plataforma, funcionalidades y nivel de personalización. Contamos con sistemas base y desarrollos a medida según las necesidades de tu negocio.",
  },
  {
    question: "¿Cuánto tiempo tarda el desarrollo de un sistema?",
    answer:
      "Un sistema estándar puede estar listo en pocas semanas. Los desarrollos personalizados se entregan según el alcance, integraciones y complejidad del proyecto.",
  },
  {
    question: "¿Puedo solicitar cambios o mejoras después?",
    answer:
      "Sí. Nuestros sistemas están diseñados para escalar y evolucionar, permitiendo mejoras, nuevas funciones o integraciones en cualquier momento.",
  },
  {
    question: "¿Qué tecnologías utilizan para el desarrollo?",
    answer:
      "Trabajamos con tecnologías modernas y escalables como React, Node.js, PostgreSQL y arquitecturas optimizadas para rendimiento y seguridad.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer:
      "Sí. Ofrecemos soporte, mantenimiento y acompañamiento continuo según el plan contratado.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full bg-white py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-20">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-black"
          >
            Preguntas frecuentes sobre nuestros sistemas
          </h2>
          <p className="mt-4 text-gray-600">
            Resolvemos las dudas más comunes sobre el desarrollo de sistemas web
            para empresas.
          </p>
        </header>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                className="rounded-2xl border border-gray-200 transition"
              >
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-medium text-black">
                      {faq.question}
                    </span>
                    <span
                      className="text-xl text-gray-400"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 text-sm text-gray-600"
                  >
                    {faq.answer}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
