"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-400 via-sky-300 to-sandy-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 mb-8 bg-white/80 backdrop-blur-md rounded-full border border-white/50 shadow-lg">
            <MapPin className="w-5 h-5 text-sky-600" />
            <span className="font-semibold text-gray-800">
              Professional Tour Driver
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight text-gray-900">
            Your Trusted
            <br />
            <span className="text-sky-600">Travel Companion</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl mb-10 text-gray-800 max-w-3xl mx-auto text-balance font-medium">
            Safe, comfortable, and unforgettable journeys across Vietnam
          </p>

          {/* CTA Button */}
          <Link
            href="#book"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
          >
            Book Your Ride
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
