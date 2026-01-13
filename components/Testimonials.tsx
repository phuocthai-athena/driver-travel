"use client";

import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    location: "Australia",
    rating: 5,
    text: "Absolutely amazing experience! Our driver was professional, knowledgeable, and made our trip to Ba Na Hills unforgettable. The vehicle was clean and comfortable, and he knew all the best spots for photos. Highly recommend!",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "Best decision we made for our Da Nang trip! Flexible schedule, great English communication, and he took us to hidden local restaurants we would never have found. The Hoi An night tour was magical. Worth every penny!",
  },
  {
    name: "Emma Williams",
    location: "United Kingdom",
    rating: 5,
    text: "Professional, safe, and friendly driver. He went above and beyond to ensure we had a great time. The airport transfer was seamless, and he even helped us with our luggage. Will definitely book again on our next visit!",
  },
  {
    name: "David Kim",
    location: "South Korea",
    rating: 5,
    text: "Perfect service from start to finish! The custom tour was tailored exactly to our interests, and our driver's local knowledge was impressive. Great value for money and a truly personalized experience. Thank you!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ocean-900 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from travelers
            who&apos;ve experienced our service
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-gold-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold-500 text-gold-500"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-ocean-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-ocean-900">
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
