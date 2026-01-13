"use client";

import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    id: "hoi-an",
    name: "Hoi An Ancient Town",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Historic charm and lantern-lit streets",
  },
  {
    id: "ba-na-hills",
    name: "Ba Na Hills",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Golden Bridge and mountain views",
  },
  {
    id: "marble-mountains",
    name: "Marble Mountains",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Sacred caves and panoramic vistas",
  },
  {
    id: "my-khe-beach",
    name: "My Khe Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80",
    description: "Crystal clear waters and golden sands",
  },
];

export default function TourDestinations() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sandy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore Vietnam&apos;s most beautiful places with comfort and ease
          </p>
        </div>

        {/* Glassmorphism Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${destination.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />

              {/* Glassmorphism Card Content */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex flex-col justify-end transition-all duration-300 group-hover:bg-white/20 group-hover:backdrop-blur-lg">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                  <h3 className="font-heading text-xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
                <p className="text-white/90 mb-4 text-sm">
                  {destination.description}
                </p>
                <div className="flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
