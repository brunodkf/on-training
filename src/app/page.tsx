import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Training from "./components/Training";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Calltoaction from "./components/Calltoaction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full bg-global font-montserrat relative">
      <Navbar />
      <Hero/>
      <Services/>
      <Training/>
      <Testimonials/>
      <Pricing/>
      <Calltoaction/>
      <Footer/>
    </main>
  );
}
