import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ProjectHighlightGrid from "./components/ProjectHighlights";
import ContactSection from "./components/ContactSection";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <br/>
        <ProjectHighlightGrid/>
        <br/>
        <br/>
        <AboutSection/>
        <br/>
        <ProjectSection/>
        <AchievementsSection/>
        <br/>
        <br/>
        <EmailSection/>
        </div>
        <ContactSection/>
        <Footer/>
      </main>
  );
}
