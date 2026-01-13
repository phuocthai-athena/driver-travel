"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#tours", label: "Tours" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-2xl font-bold text-ocean-900 cursor-pointer"
          >
            Travel Driver
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-ocean-900 hover:text-ocean-600 font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <a
                href="tel:+84123456789"
                className="flex items-center gap-2 px-4 py-2 bg-ocean-500 hover:bg-ocean-600 text-white rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">Call</span>
              </a>
              <a
                href="https://zalo.me/84123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Zalo</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-ocean-900 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-ocean-900 hover:text-ocean-600 font-medium transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <a
                  href="tel:+84123456789"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-ocean-500 hover:bg-ocean-600 text-white rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">Call Now</span>
                </a>
                <a
                  href="https://zalo.me/84123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="font-semibold">Chat Zalo</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
