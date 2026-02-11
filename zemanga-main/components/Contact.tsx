import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary-50/30 via-white to-accent-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-100/40 to-primary-100/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-100/30 to-accent-100/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Vous avez une question ou souhaitez collaborer ? Nous sommes à votre écoute.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-100 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-6 mx-auto">
            <Mail className="w-10 h-10 text-primary-600" />
          </div>

          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
            Écrivez-nous
          </h3>
          <p className="text-gray-600 mb-2 text-lg">
            Contactez-nous directement par email
          </p>
          <a
            href="mailto:info@mobutuzemanga.com"
            className="text-primary-700 hover:text-accent-500 font-semibold text-lg transition-colors underline underline-offset-4"
          >
            info@mobutuzemanga.com
          </a>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-12 px-8 text-base font-bold"
            >
              <a href="mailto:info@mobutuzemanga.com" className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Envoyer un email
              </a>
            </Button>
          </div>

          {/* Info Box */}
          <div className="mt-8 bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-primary-700 font-semibold">Réponse rapide</strong>
              <br />
              Nous nous engageons à vous répondre dans les meilleurs délais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
