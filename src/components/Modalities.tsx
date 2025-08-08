import { FaMapMarkerAlt, FaVideo, FaFileAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

const Modalities = () => {

    const modalities = [
        { title: "Presencial 1:1", description: "Clases individuales en Guadalajara y alrededores.", icon: <FaMapMarkerAlt className="text-3xl text-indigo-600" />, },
        { title: "Online vía Google Meet", description: "Conéctate desde cualquier parte del mundo.", icon: <FaVideo className="text-3xl text-indigo-600" />, },
        { title: "Cursos Grabados", description: "Accede a clases grabadas para aprender a tu ritmo.", icon: <FaFileAlt className="text-3xl text-indigo-600" />, },
        { title: "Asesoría por WhatsApp", description: "Consulta dudas o recibe retroalimentación rápida.", icon: <FaWhatsapp className="text-3xl text-green-500" />, },
    ];

    return (
        <section className="py-6 px-6 border-b border-neutral-300">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Modalidades de Clase</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {modalities.map((modality, index) => (
                    <motion.div
                        key={index}
                        className="bg-neutral-200 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:scale-[1.10] flex flex-col items-center text-center"
                        viewport={{ once: true, amount: 0.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                        <div className="mb-4">{modality.icon}</div>
                        <h3 className="text-xl font-semibold text-indigo-800 mb-2">{modality.title}</h3>
                        <p className="text-black font-semibold">{modality.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Modalities