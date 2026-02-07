"use client";

import { Menu, Home, User, Briefcase, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#accueil", label: "Accueil", icon: Home },
  { href: "#a-propos", label: "À Propos", icon: User },
  { href: "#services", label: "Services", icon: Briefcase },
  { href: "#contact", label: "Contact", icon: Mail },
];

export default function Header() {
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
            <Button asChild className="bg-primary-600 hover:bg-primary-700">
              <a
                href="#contact"
              >
                Nous contacter
              </a>
            </Button>
          </nav>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby={undefined}
              className="flex flex-col p-0"
            >
              {/* Header with branding */}
              <SheetHeader className="border-b border-gray-100 bg-gradient-to-br from-primary-50 to-white p-6">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/ad-majoribus.jpg"
                    alt="Blason"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <SheetTitle className="font-heading text-lg tracking-wide text-accent-500">
                      MOBUTU ZEMANGA
                    </SheetTitle>
                    <p className="font-motto text-xs italic text-primary-600 mt-0.5">
                      Ad majoribus dei auxilio
                    </p>
                  </div>
                </div>
              </SheetHeader>

              {/* Navigation links */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors group"
                        >
                          <Icon className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                          <span className="text-base font-medium">
                            {link.label}
                          </span>
                        </a>
                      </SheetClose>
                    );
                  })}
                </div>

                <div className="my-6 border-t border-gray-100" />

                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-primary-600 hover:bg-primary-700 gap-2"
                    size="lg"
                  >
                    <a
                      href="#contact"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Nous contacter
                    </a>
                  </Button>
                </SheetClose>
              </nav>

              {/* Footer */}
              <SheetFooter className="border-t border-gray-100 bg-gray-50 px-6 py-4">
                <p className="text-xs text-gray-400 text-center">
                  &copy; {new Date().getFullYear()} Mobutu Zemanga
                </p>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
