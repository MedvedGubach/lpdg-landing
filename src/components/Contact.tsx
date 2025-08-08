import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-12 px-6 text-center">
      <h2 className="mb-8 text-xl text-indigo-600 font-semibold">Agenda tu primera clase con Butch y empieza a tocar lo que más te gusta</h2>

      <a
        href="https://wa.me/523310882137?text=Hola%20Butch!%20Quiero%20tomar%20clases%20de%20guitarra"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar mensaje por WhatsApp a Butch"
      >
        <button className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-120 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer drop-shadow-[0_0_30px_rgba(34,197,94,1)]">
          <FaWhatsapp className="text-2xl" />
          Contactar por WhatsApp
        </button>
      </a>
    </section>
  );
};

export default Contact;
