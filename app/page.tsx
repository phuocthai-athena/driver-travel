import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import TourPackages from "@/components/TourPackages";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MobileFooter from "@/components/MobileFooter";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <TourPackages />
      <WhyChooseMe />
      <Testimonials />
      <Contact />
      <MobileFooter />

      {/* Spacing for mobile footer */}
      <div className="h-24 lg:hidden" />
    </main>
  );
}
