"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-2 gap-0">
          {/* Call Button */}
          <a
            href="tel:+84123456789"
            className="flex flex-col items-center justify-center gap-1 py-4 px-4 bg-ocean-500 hover:bg-ocean-600 active:bg-ocean-700 text-white transition-colors duration-200 cursor-pointer"
          >
            <Phone className="w-6 h-6" />
            <span className="text-sm font-semibold">Call Now</span>
          </a>

          {/* Zalo Button */}
          <a
            href="https://zalo.me/84123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-4 px-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white transition-colors duration-200 cursor-pointer"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm font-semibold">Chat Zalo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
