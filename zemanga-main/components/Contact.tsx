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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '60703374-0885-4d4c-91be-907d9cf8423a',
          subject: 'Nouveau message depuis mobutuzemanga.com',
          from_name: formData.name,
          email: formData.email,
          replyto: formData.email,
          'Message': '📩 Nouveau formulaire de contact reçu sur votre site web. Détails ci-dessous:\n\n' + formData.message,
          'Nom du contact': formData.name,
          'Email du contact': formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "", honeypot: "" });
      } else {
        setError(data.message || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent-500 text-center mb-4">
          Contact
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full" />

        <div className="max-w-2xl mx-auto">
          {/* Introduction text */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 mb-4">
              Vous avez une question ou souhaitez collaborer ? N'hésitez pas à nous contacter.
            </p>
            <p className="text-sm text-gray-500">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          {/* Contact form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">

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
              <>
                {error && (
                  <Alert className="bg-red-50 border-red-200 mb-4">
                    <AlertDescription className="text-red-600">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}
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
                  disabled={loading}
                  className="w-full bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
