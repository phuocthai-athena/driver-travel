import Hero from "@/components/Hero";
import TourDestinations from "@/components/TourDestinations";
import VehicleFeatures from "@/components/VehicleFeatures";
import ScenicGallery from "@/components/ScenicGallery";
import Testimonials from "@/components/Testimonials";
import BookCTA from "@/components/BookCTA";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TourDestinations />
      <VehicleFeatures />
      <ScenicGallery />
      <Testimonials />
      <BookCTA />
      <FloatingButtons />
    </main>
  );
}
