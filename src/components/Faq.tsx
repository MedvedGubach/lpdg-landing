import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Faq = () => {

    const questions = [
        {
            question: "¿Necesito tener experiencia previa con la guitarra?",
            answer: "No, puedes empezar desde cero. Las clases se adaptan a tu nivel, incluso si nunca has tocado un instrumento.",
        },
        {
            question: "¿Qué necesito para tomar clases en línea?",
            answer: "Solo necesitas una guitarra, conexión a internet y una cuenta de Google Meet. Las clases se pueden tomar desde cualquier dispositivo.",
        },
        {
            question: "¿Cuánto duran las clases?",
            answer: "Cada sesión tiene una duración aproximada de 1 hora, sin embargo durante la clase se cumple el objetivo de ciertos temas, se dejan actividades para toda la semana.",
        },
        {
            question: "¿Puedo elegir las canciones que quiero aprender?",
            answer: "¡Por supuesto! La metodología está centrada en que aprendas tocando la música que te gusta.",
        },
    
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggle = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <section className="max-w-4xl mx-auto py-12 px-4">
            <div className="space-y-4">
                {questions.map((q, index) => (
                    <div
                        key={index}
                        className="bg-neutral-100 rounded-xl shadow transition-all"
                    >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center p-4 text-left text-lg font-bold text-indigo-600"
                        >
                            {q.question}
                            {activeIndex === index ? (
                                <FaChevronUp className="text-indigo-600" />
                            ) : (
                                <FaChevronDown className="text-indigo-600" />
                            )}
                        </button>
                        <AnimatePresence>
                            {activeIndex === index && (
                                <motion.div
                                    className="px-4 pb-4 text-black text-base font-semibold overflow-hidden"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.1, ease: "easeInOut" }}
                                >
                                    {q.answer}
                                </motion.div>

                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Faq