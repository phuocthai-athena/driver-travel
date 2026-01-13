"use client";

import { Shield, Wind, Wifi, Droplets, Car, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "10+ years accident-free driving record. Fully insured vehicle with regular maintenance checks.",
    color: "sky",
  },
  {
    icon: Car,
    title: "Premium Vehicle",
    description:
      "Spacious 7-seater SUV with comfortable leather seats. Perfect for families and groups.",
    color: "sandy",
  },
  {
    icon: Wind,
    title: "Climate Control",
    description:
      "Full air conditioning system to keep you cool and comfortable throughout your journey.",
    color: "sky",
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description:
      "Stay connected with complimentary high-speed internet during your entire trip.",
    color: "sandy",
  },
  {
    icon: Droplets,
    title: "Refreshments",
    description:
      "Complimentary bottled water and snacks provided for your convenience.",
    color: "sky",
  },
  {
    icon: Users,
    title: "Expert Guide",
    description:
      "Fluent in English and Vietnamese. Local knowledge to enhance your travel experience.",
    color: "sandy",
  },
];

export default function VehicleFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comfort & Safety Features
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Your comfort and safety are our top priorities
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isSky = feature.color === "sky";
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-sky-300 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                    isSky
                      ? "bg-sky-100 group-hover:bg-sky-200"
                      : "bg-sandy-100 group-hover:bg-sandy-200"
                  } transition-colors duration-300`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isSky ? "text-sky-600" : "text-sandy-600"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
