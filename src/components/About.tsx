
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

const About = () => {
    const aboutText = [
        'Armando García, mejor conocido como "Butch" es originario de Guadalajara y ha colaborado más de 25 años como guitarrista en la escena musical y ha sido parte de múltiples proyectos como Retrete (1997) Cadáver (2003), B Chaos (2012), DonSr (2006) y Janet Camargo (2018). Además ha compartido escenario con figuras de alto calibre como Nightwish, In Flames, Molotov, Cannibal Corpse, Abbath, Dave Evans (AC/DC), entre muchos otros.',

        'Su experiencia no solo se limita al escenario: fue Director General del campus Guadalajara y luego Vicepresidente del Consejo Nacional en Fermatta, una de las universidades más influyentes de música contemporánea en Latinoamérica, donde se codeo con leyendas como Steve Lukather (Toto), Steve Vai, Marcus Miller (Eric Clapton, Elton John y Miles Davis), Chad Smith, Glenn Hughes, entre muchos otros',

        'Desde 2014, imparte clases de guitarra centradas en el género musical de la elección del alumno. Su enfoque personalizado permite que cada alumno aprenda a su ritmo, con la música de su agrado, desarrollando técnica, expresión y confianza.',
    ]

    const images = ['/images/ButchPlaying.webp', '/images/ButchPlaying2.webp', 'https://res.cloudinary.com/df9znr8oq/image/upload/v1754535229/Imagen_300ppi_a83xab.png'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-12 px-4 max-w-6xl mx-auto text-black border-b-1 border-neutral-400">
            <motion.h2
                className="text-3xl font-bold mb-6 text-center"
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >¿Quién es <span className="text-indigo-600 font-bold">Butch García</span>?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        className="rounded-2xl shadow-2xl h-[536px] relative w-full"
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Image
                            src={images[currentIndex]}
                            alt="About-Butch"
                            fill
                            style={{ objectFit: 'cover' }}
                            className="rounded-2xl"
                        />
                    </motion.div>
                </AnimatePresence>

                <div className="space-y-4">
                    <article className="text-lg space-y-6 font-semibold">
                        {
                            aboutText.map((text, index) => (
                                <motion.p
                                    key={index}
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                >
                                    {text}
                                </motion.p>
                            ))
                        }
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About