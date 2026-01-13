"use client";

import {
  Calendar,
  MessageCircle,
  DollarSign,
  MapPin,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description:
      "Available 24/7 to accommodate your travel plans. Book last-minute or plan ahead.",
  },
  {
    icon: MessageCircle,
    title: "English Speaking",
    description:
      "Fluent in English and Vietnamese. Clear communication for a smooth experience.",
  },
  {
    icon: DollarSign,
    title: "No Hidden Costs",
    description:
      "Transparent pricing with no surprises. All fees discussed upfront before booking.",
  },
  {
    icon: MapPin,
    title: "Local Hidden Gems",
    description:
      "Discover authentic local spots, restaurants, and experiences off the tourist trail.",
  },
  {
    icon: Shield,
    title: "Safe Driving Record",
    description:
      "10+ years of accident-free driving. Your safety is our top priority.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ocean-900 mb-4">
            Why Choose Me?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference of traveling with a trusted local expert
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group p-6 bg-ocean-50 rounded-xl border border-ocean-100 hover:border-ocean-300 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-ocean-500 rounded-lg flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-200">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-ocean-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
