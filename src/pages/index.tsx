
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyLearnWMe from "@/components/WhyLearnWMe";
import ButchFeats from "@/components/ButchFeats";
import Modalities from "@/components/Modalities";
import ContactFaqTabs from "@/components/ContactFaqTabs";
import Footer from "@/components/Footer";
import ReviewsTabs from "@/components/ReviewsTabs";
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
    <>
      <Head>

        <link rel="icon" type="image/webp" href="/images/LPDGLogo.webp" />
        <title>Lecciones Prácticas de Guitarra - Butch García</title>
        <meta name="description" content="Aprende a tocar guitarra acústica o eléctrica con Butch García. Lecciones prácticas y personalizadas, tocando la música que amas." />
        <meta name="keywords" content="lecciones de guitarra, guitarra eléctrica, guitarra acústica, clases de guitarra, Butch García, maestro de guitarra, maestro de guitarra en Guadalajara" />
        <meta name="author" content="Butch García" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lecciones Prácticas de Guitarra - Butch García" />
        <meta property="og:description" content="Aprende a tocar la guitarra con Butch García. Clases prácticas, personalizadas y enfocadas en la música que te gusta." />
        <meta property="og:image" content="https://res.cloudinary.com/dvqnxq5g5/image/upload/v1754505654/LPDGThumbnail_vyvutp.webp" />
        <meta property="og:url" content="https://leccionespracticasdeguitarra.vercel.app" />
        <meta property="og:site_name" content="Lecciones Prácticas de Guitarra" />
      </Head>

      <main>
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 left-0 h-full w-full bg-white" />
          <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_70%_70%_at_50%_30%,rgba(255,200,150,0.2),transparent)]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_50%_50%_at_30%_80%,rgba(150,200,255,0.1),transparent)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg, rgba(0,0,0,0.03) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0.03) 75%, transparent 75%, transparent)] bg-size-[30px_30px]" />
        </div>
        <Analytics />
        <Navbar />
        <Hero />
        <About />
        <WhyLearnWMe />
        <ReviewsTabs />
        <ButchFeats />
        <Modalities />
        <ContactFaqTabs />
        <Footer />

      </main>
    </>
  );
}
