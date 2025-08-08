import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
        <footer className="bg-white/70 backdrop-blur-md border-t border-neutral-200 text-black px-6 py-8 mt-16">
            <div className="max-w-6xl mx-auto text-center ">
                <p className="text-md text-gray-800 font-semibold">Síguelo en sus redes sociales</p>
                <div className="flex justify-center gap-6 text-2xl">
                    <a href="https://www.facebook.com/leccionespracticasdeguitarra" aria-label='Facebook' target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-500 text-3xl hover:opacity-80 transition hover:scale-120" />
                    </a>
                    <a href="https://www.instagram.com/leccionespracticasdeguitarra/" aria-label='Instagram' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 text-3xl hover:opacity-80 transition hover:scale-120" />
                    </a>
                    <a href="https://www.youtube.com/c/LeccionesPr%C3%A1cticasdeGuitarraButchGarc%C3%ADa" aria-label='YouTube' target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-red-500 text-3xl hover:opacity-80 transition hover:scale-120" />
                    </a>
                </div>

                <p className="text-sm text-gray-600">© {year} Armando &quot;Butch&quot; García. Lecciones Prácticas de Guitarra. Todos los derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer