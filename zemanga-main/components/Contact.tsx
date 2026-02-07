"use client";

import { useState, type FormEvent } from "react";
import { Mail, Globe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
                href="mailto:info@mobutuzemanga.com"
                className="flex items-center gap-4 text-gray-700 hover:text-primary-600 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Mail className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">info@mobutuzemanga.com</p>
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

            <div className="mt-8">
              <Button
                asChild
                className="w-full bg-primary-600 hover:bg-primary-700"
              >
                <a href="mailto:info@mobutuzemanga.com">Envoyer un email</a>
              </Button>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-accent-500 mb-6">
              Envoyer un message
            </h3>

            {submitted ? (
              <Alert className="bg-secondary-500/10 border-secondary-500/30">
                <CheckCircle className="h-5 w-5 text-secondary-500" />
                <AlertTitle className="text-secondary-500 font-medium text-lg">
                  Merci pour votre message !
                </AlertTitle>
                <AlertDescription className="text-gray-600">
                  Nous vous répondrons dans les plus brefs délais.
                </AlertDescription>
              </Alert>
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

                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Votre nom"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="votre@email.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Votre message..."
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20"
                >
                  Envoyer le message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
