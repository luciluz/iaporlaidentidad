import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MisionSection from "./components/MisionSection";
import AbuelasSection from "./components/AbuelasSection";
import PorQueIASection from "./components/PorQueIASection";
import ProyectosSection from "./components/ProyectosSection";
import EquipoSection from "./components/EquipoSection";
import ContactoSection from "./components/ContactoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <MisionSection />
        <AbuelasSection />
        <PorQueIASection />
        <ProyectosSection />
        <EquipoSection />
        <ContactoSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
