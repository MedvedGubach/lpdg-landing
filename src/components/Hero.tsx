import { motion } from "framer-motion";

const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
    return (
        <section className="flex flex-col py-32 justify-center items-center text-center px-4 border-b border-neutral-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight text-center"
                        viewport={{ once: true }}
                        variants={container(0.1)}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span className="block">Lecciones Prácticas</motion.span>
                        <motion.span className="block">de Guitarra</motion.span>
                        <motion.span className="block">con</motion.span>
                        <motion.span className="block text-indigo-600">Butch García</motion.span>
                    </motion.h1>

                    <motion.p className="text-lg text-black"
                        viewport={{ once: true }}
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                    >
                        Clases 100% prácticas con <strong>Butch García</strong>, músico con más de 10 años de experiencia como docente.
                        Tú eliges el estilo, el ritmo y las canciones. Desde cero o para mejorar tu técnica.
                        Aprende guitarra <span className="text-indigo-600 font-semibold">tocando la música que amas</span>

                    </motion.p>
                    <motion.div
                        className="flex justify-center md:justify-center gap-4"
                        viewport={{ once: true }}
                        variants={container(0.7)}
                        initial="hidden"
                        animate="visible"
                    >
                        <a
                            href="#reviews"
                            className="bg-indigo-600  text-white py-3 px-6  shadow-lg transition-all duration-300 hover:bg-indigo-800 rounded-full hover:scale-105 focus:outline-none"
                        >
                            Ver testimonios
                        </a>

                        <a
                            href="#contact"
                            className="bg-indigo-600  text-white py-3 px-6 shadow-lg transition-all duration-300 hover:bg-indigo-800 rounded-full hover:scale-105 focus:outline-none"
                        >
                            ¡Agendar clase ahora!
                        </a>
                    </motion.div>
                </div>

                <div className="w-full flex justify-center overflow-hidden">
                    <video
                        controls
                        autoPlay={false}
                        controlsList="nodownload"
                        className="w-[350px] md:w-[300px] lg:w-[450px] max-w-full rounded-lg shadow-lg"
                        src="https://res.cloudinary.com/df9znr8oq/video/upload/v1754417006/Video_de_WhatsApp_2025-08-05_a_las_09.44.05_84b07422_nnbn6s.mp4"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;