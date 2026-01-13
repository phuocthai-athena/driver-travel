"use client";

import { useState } from "react";
import { Phone, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    tourName: "",
    date: "",
    pickupLocation: "",
    passengers: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with email service or API
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you soon.");
    setFormData({
      tourName: "",
      date: "",
      pickupLocation: "",
      passengers: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ocean-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to explore? Contact us to book your tour or ask any questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-ocean-900 mb-6">
              Quick Contact
            </h3>

            {/* Phone */}
            <a
              href="tel:+84123456789"
              className="group flex items-center gap-4 p-4 mb-4 bg-ocean-50 rounded-lg border border-ocean-100 hover:border-ocean-300 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 bg-ocean-500 rounded-lg flex items-center justify-center group-hover:bg-ocean-600 transition-colors">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-ocean-900">Phone</p>
                <p className="text-gray-600">+84 123 456 789</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/84123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 mb-4 bg-green-50 rounded-lg border border-green-100 hover:border-green-300 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-green-900">WhatsApp</p>
                <p className="text-gray-600">Chat with us instantly</p>
              </div>
            </a>

            {/* Zalo */}
            <a
              href="https://zalo.me/84123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">Zalo</p>
                <p className="text-gray-600">Popular in Vietnam</p>
              </div>
            </a>
          </div>

          {/* Quick Inquiry Form */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-ocean-900 mb-6">
              Quick Inquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="tour-name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tour Package
                </label>
                <input
                  type="text"
                  id="tour-name"
                  value={formData.tourName}
                  onChange={handleChange}
                  placeholder="Select a tour or custom"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="pickupLocation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Pickup Location
                </label>
                <input
                  type="text"
                  id="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="Hotel name or address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="passengers"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Number of Passengers
                </label>
                <select
                  id="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all"
                >
                  <option value="">Select...</option>
                  <option value="1">1 Passenger</option>
                  <option value="2">2 Passengers</option>
                  <option value="3">3 Passengers</option>
                  <option value="4">4 Passengers</option>
                  <option value="5">5 Passengers</option>
                  <option value="6">6 Passengers</option>
                  <option value="7+">7+ Passengers</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special requests or questions?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-ocean-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 px-6 py-4 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Send Inquiry
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
