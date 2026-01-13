"use client";

import { Clock, MapPin, ArrowRight } from "lucide-react";

interface Tour {
  id: string;
  title: string;
  image: string;
  duration: string;
  highlights: string[];
  price: string;
}

const tours: Tour[] = [
  {
    id: "full-day-city",
    title: "Full Day City Tour",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    duration: "8 Hours",
    highlights: [
      "Dragon Bridge & Han River",
      "Marble Mountains",
      "My Khe Beach",
      "Linh Ung Pagoda",
      "Local Market Visit",
    ],
    price: "Starting from $80",
  },
  {
    id: "airport-transfer",
    title: "Airport Transfer",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    duration: "30-45 Minutes",
    highlights: [
      "Door-to-door service",
      "Flight tracking",
      "Meet & greet",
      "Luggage assistance",
    ],
    price: "Contact for Quote",
  },
  {
    id: "ba-na-hills",
    title: "Ba Na Hills Trip",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    duration: "Full Day",
    highlights: [
      "Golden Bridge",
      "French Village",
      "Cable car ride",
      "Fantasy Park",
      "Mountain views",
    ],
    price: "Starting from $100",
  },
  {
    id: "hoi-an-night",
    title: "Hoi An Ancient Town Night Tour",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    duration: "4 Hours",
    highlights: [
      "Ancient Town walk",
      "Lantern lighting",
      "Local street food",
      "Japanese Bridge",
      "Night market",
    ],
    price: "Starting from $60",
  },
  {
    id: "hue-day-trip",
    title: "Hue Imperial City Day Trip",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    duration: "Full Day",
    highlights: [
      "Imperial Citadel",
      "Thien Mu Pagoda",
      "Royal Tombs",
      "Perfume River cruise",
      "Local cuisine",
    ],
    price: "Starting from $120",
  },
  {
    id: "custom-tour",
    title: "Custom Tour Package",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=2021&q=80",
    duration: "Flexible",
    highlights: [
      "Tailored itinerary",
      "Your preferred destinations",
      "Flexible schedule",
      "Personalized experience",
    ],
    price: "Contact for Quote",
  },
];

export default function TourPackages() {
  const handleBookTour = (tourId: string, tourTitle: string) => {
    // Scroll to contact form and pre-fill tour name
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const tourInput = document.getElementById(
        "tour-name"
      ) as HTMLInputElement;
      if (tourInput) {
        tourInput.value = tourTitle;
      }
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ocean-900 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our popular tours or create your own custom adventure
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                  style={{ backgroundImage: `url('${tour.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">
                    {tour.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{tour.duration}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-ocean-900 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gold-500" />
                    Itinerary Highlights
                  </h4>
                  <ul className="space-y-2">
                    {tour.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 text-sm"
                      >
                        <span className="text-gold-500 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-ocean-900 mb-4">
                    {tour.price}
                  </p>
                  <button
                    onClick={() => handleBookTour(tour.id, tour.title)}
                    className="w-full group inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-lg transition-all duration-200 cursor-pointer"
                  >
                    Book This Tour
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
