// components/HowItWorks/HowItWorks.tsx
import { motion, type Variants } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Análisis",
      description:
        "Entendemos tu negocio, tus procesos y objetivos para definir la mejor solución tecnológica y automatizada.",
    },
    {
      number: "02",
      title: "Desarrollo",
      description:
        "Diseñamos y desarrollamos sistemas, apps y soluciones digitales con enfoque en rendimiento, seguridad y escalabilidad.",
    },
    {
      number: "03",
      title: "Lanzamiento",
      description:
        "Implementamos, probamos y dejamos tu sistema listo para crecer contigo, optimizando ventas y eficiencia.",
    },
  ];

  // Variants tipados correctamente
  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * custom, duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // cubic-bezier
    }),
  };

  return (
    <section
      className="w-full bg-white py-24"
      aria-labelledby="how-it-works-title"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-20">
        {/* Header */}
        <motion.div
          className="mx-auto mb-20 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        >
          <h2
            id="how-it-works-title"
            className="text-3xl md:text-4xl font-bold text-black"
            itemProp="name"
          >
            Cómo desarrollamos sistemas y apps que impulsan tu negocio
          </h2>
          <p className="mt-4 text-gray-600" itemProp="description">
            Un proceso claro, simple y enfocado en resultados: automatización,
            escalabilidad y aumento de ventas.
          </p>
        </motion.div>

        {/* Steps */}
        <ol className="grid gap-12 md:grid-cols-3" itemProp="step">
          {steps.map((step, index) => (
            <motion.li
              key={index}
              className="text-center"
              itemScope
              itemType="https://schema.org/HowToStep"
              itemProp="itemListElement"
              custom={index} // <-- pasa el índice al variant
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stepVariants} // <-- usamos variants tipados
            >
              <meta itemProp="position" content={(index + 1).toString()} />
              <div className="mb-6 text-5xl font-light text-gray-300">
                {step.number}
              </div>
              <h3
                className="mb-3 text-lg font-semibold text-black"
                itemProp="name"
              >
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed" itemProp="text">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
