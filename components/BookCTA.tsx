"use client";

import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BookCTA() {
  return (
    <section
      id="book"
      className="py-20 bg-gradient-to-br from-sky-500 via-sky-400 to-sandy-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/50">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Explore?
            </h2>
            <p className="text-xl text-gray-700">
              Book your ride today and start your adventure
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Flexible Dates</p>
                <p className="text-sm text-gray-600">Book anytime</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sandy-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-sandy-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Any Location</p>
                <p className="text-sm text-gray-600">Pickup & drop-off</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Up to 7 People</p>
                <p className="text-sm text-gray-600">Spacious vehicle</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="group w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 cursor-pointer"
          >
            Book Your Ride Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
