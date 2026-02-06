"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À Propos" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo + Name */}
          <a href="#accueil" className="flex items-center gap-3">
            <img
              src="/images/ad-majoribus.jpg"
              alt="Blason Mobutu Zemanga"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="font-heading text-lg sm:text-xl font-bold text-accent-500 tracking-wide">
              MOBUTU ZEMANGA
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://mobutuzemanga.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Visiter le site principal
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://mobutuzemanga.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 mt-2 text-center px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Visiter le site principal
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
