"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Australia",
    rating: 5,
    text: "Absolutely amazing experience! Our driver was professional, knowledgeable, and made our trip to Ba Na Hills unforgettable. The vehicle was clean and comfortable, and he knew all the best spots for photos.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Best decision we made for our Da Nang trip! Flexible schedule, great English communication, and he took us to hidden local restaurants we would never have found. Worth every penny!",
    avatar: "MC",
  },
  {
    name: "Emma Williams",
    location: "United Kingdom",
    rating: 5,
    text: "Professional, safe, and friendly driver. He went above and beyond to ensure we had a great time. The airport transfer was seamless, and he even helped us with our luggage.",
    avatar: "EW",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Travelers Say
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our happy customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 shadow-lg border-2 border-sky-100 hover:border-sky-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-sky-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-sandy-500 text-sandy-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-sky-200">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
