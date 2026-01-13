"use client";

import { Shield, Languages, Car, Wifi, Award } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
                }}
              />
            </div>
            {/* Vehicle Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-200">
              <div className="flex items-center gap-3">
                <Car className="w-8 h-8 text-ocean-500" />
                <div>
                  <p className="font-heading font-semibold text-ocean-900">
                    Premium 7-Seater SUV
                  </p>
                  <p className="text-sm text-gray-600">Free WiFi & Water</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-ocean-900 mb-6">
              Your Trusted Local Driver
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over 10 years of experience driving tourists around Da Nang
              and Central Vietnam, I combine professional driving skills with
              local knowledge to give you an unforgettable journey. Safety,
              comfort, and your satisfaction are my top priorities.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-ocean-50 rounded-lg p-4 border border-ocean-100">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-gold-500" />
                  <span className="font-heading font-semibold text-ocean-900">
                    10+ Years
                  </span>
                </div>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
              <div className="bg-ocean-50 rounded-lg p-4 border border-ocean-100">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-6 h-6 text-gold-500" />
                  <span className="font-heading font-semibold text-ocean-900">
                    5.0 Rating
                  </span>
                </div>
                <p className="text-sm text-gray-600">Safety Record</p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Languages className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-ocean-900">
                    Fluent English & Vietnamese
                  </p>
                  <p className="text-gray-600 text-sm">
                    Clear communication for a smooth experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Car className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-ocean-900">
                    Premium Vehicle Fleet
                  </p>
                  <p className="text-gray-600 text-sm">
                    Clean, comfortable, and well-maintained SUVs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wifi className="w-5 h-5 text-ocean-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-ocean-900">
                    Modern Amenities
                  </p>
                  <p className="text-gray-600 text-sm">
                    Free WiFi, charging ports, and refreshments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
