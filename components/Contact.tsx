"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (formData.honeypot) return;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent-500 text-center mb-4">
          Contact
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-accent-500 mb-6">
              Coordonnées
            </h3>

            <div className="space-y-5">
              <a
                href="tel:+243852908297"
                className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Phone className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <p className="font-medium">+243 85 290 82 97</p>
                </div>
              </a>

              <a
                href="mailto:Info@MobutuZemanga.com"
                className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">Info@MobutuZemanga.com</p>
                </div>
              </a>

              <a
                href="https://mobutuzemanga.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Globe className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Site web</p>
                  <p className="font-medium">MobutuZemanga.com</p>
                </div>
              </a>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href="tel:+243852908297"
                className="flex-1 text-center px-5 py-3 bg-secondary-500 text-white font-medium rounded-lg hover:bg-secondary-600 transition-colors"
              >
                Appeler
              </a>
              <a
                href="mailto:Info@MobutuZemanga.com"
                className="flex-1 text-center px-5 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Envoyer un email
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-accent-500 mb-6">
              Envoyer un message
            </h3>

            {submitted ? (
              <div className="bg-secondary-500/10 border border-secondary-500/30 rounded-xl p-8 text-center">
                <p className="text-secondary-500 font-medium text-lg mb-2">
                  Merci pour votre message !
                </p>
                <p className="text-gray-600">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData({ ...formData, honeypot: e.target.value })
                  }
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
