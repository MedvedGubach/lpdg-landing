
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 shadow-sm border-b border-neutral-200">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center">
                    <Image src="/images/LPDGLogo.webp" height={40} width={40} alt="LPDG-Logo" className="rounded-xl" />
                    <span className="ml-1 text-sm md:text-lg font-bold text-indigo-600">Lecciones Prácticas de Guitarra</span>
                </div>

                <div className="flex gap-4">
                    <a href="https://www.facebook.com/leccionespracticasdeguitarra" aria-label='Facebook' target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-500 text-xl md:text-3xl hover:opacity-80 transition hover:scale-120" />
                    </a>
                    <a href="https://www.instagram.com/leccionespracticasdeguitarra/" aria-label='Instagram' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 text-xl md:text-3xl hover:opacity-80 transition hover:scale-120" />
                    </a>
                    <a href="https://www.youtube.com/c/LeccionesPr%C3%A1cticasdeGuitarraButchGarc%C3%ADa" aria-label='YouTube' target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-red-500 text-xl md:text-3xl hover:opacity-80 transition hover:scale-120" />
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Navbar