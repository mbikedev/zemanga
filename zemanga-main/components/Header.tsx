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
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary-50 transition-colors">
                <Menu className="h-6 w-6 text-primary-600" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              aria-describedby={undefined}
              className="flex flex-col p-0 w-[300px] sm:w-[350px]"
            >
              {/* Header with branding */}
              <SheetHeader className="border-b border-gray-100 bg-gradient-to-br from-primary-100 via-accent-50 to-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
                <div className="relative flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur opacity-40"></div>
                    <img
                      src="/images/ad-majoribus.jpg"
                      alt="Blason"
                      className="relative w-14 h-14 object-contain rounded-full bg-white p-1 shadow-lg"
                    />
                  </div>
                  <div>
                    <SheetTitle className="font-heading text-lg tracking-wide bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                      MOBUTU ZEMANGA
                    </SheetTitle>
                    <p className="font-motto text-xs italic text-primary-600/80 mt-0.5">
                      Ad majoribus dei auxilio
                    </p>
                  </div>
                </div>
              </SheetHeader>

              {/* Navigation links */}
              <nav className="flex-1 px-4 py-6 bg-gradient-to-b from-white to-gray-50">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <SheetClose asChild key={link.href}>
                        <a
                          href={link.href}
                          className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 transition-all duration-300 group border border-transparent hover:border-primary-200 hover:shadow-md hover:scale-[1.02]"
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300 group-hover:scale-110">
                            <Icon className="w-5 h-5 text-primary-600 group-hover:text-accent-600 transition-colors" />
                          </div>
                          <span className="text-base font-semibold flex-1">
                            {link.label}
                          </span>
                        </a>
                      </SheetClose>
                    );
                  })}
                </div>

                <div className="my-6 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                  </div>
                </div>

                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    size="lg"
                  >
                    <a
                      href="#contact"
                    >
                      <Mail className="w-4 h-4" />
                      Nous contacter
                    </a>
                  </Button>
                </SheetClose>
              </nav>

              {/* Footer */}
              <SheetFooter className="border-t border-gray-200 bg-gradient-to-br from-gray-50 to-primary-50/30 px-6 py-5">
                <div className="w-full text-center space-y-2">
                  <p className="text-xs font-medium bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    Mobutu Zemanga
                  </p>
                  <p className="text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} Tous droits réservés
                  </p>
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
