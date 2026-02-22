import {
  TrendingUp,
  Lightbulb,
  Handshake,
  Target,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Conseil en Stratégie",
    description:
      "Accompagnement stratégique pour les entreprises et organisations dans leur croissance et leur transformation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Développement",
    description:
      "Mise en œuvre de solutions innovantes pour relever les défis économiques et sociaux contemporains.",
  },
  {
    icon: Handshake,
    title: "Partenariats Internationaux",
    description:
      "Développement de partenariats stratégiques à l'échelle internationale pour favoriser la coopération et les échanges.",
  },
  {
    icon: Target,
    title: "Gestion de Projets",
    description:
      "Pilotage et coordination de projets complexes, de la conception à la réalisation, dans divers secteurs d'activité.",
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance & Conformité",
    description:
      "Conseil en gouvernance d'entreprise, conformité réglementaire et mise en place de bonnes pratiques organisationnelles.",
  },
  {
    icon: BarChart3,
    title: "Recherche & Analyse",
    description:
      "Études et analyses approfondies pour éclairer la prise de décision et orienter les politiques de développement.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-br from-accent-50/30 via-white to-primary-50/20 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-100/30 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-100/30 to-transparent rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Des prestations sur mesure pour accompagner votre développement et
            répondre à vos enjeux stratégiques.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:scale-[1.02] text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-5 mx-auto group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-accent-600 transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
