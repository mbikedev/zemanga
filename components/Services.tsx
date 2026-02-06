import { Briefcase, Globe, Microscope, Network } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Chef d'Entreprises",
    description:
      "Direction et gestion de plusieurs entreprises, avec une vision stratégique tournée vers le développement économique durable et la création de valeur.",
  },
  {
    icon: Globe,
    title: "Dirigeant d'ONGs",
    description:
      "Engagement humanitaire et social à travers la direction d'organisations non gouvernementales oeuvrant pour le bien-être des communautés.",
  },
  {
    icon: Microscope,
    title: "Directeur de Centres de Recherches",
    description:
      "Pilotage de centres de recherches dédiés à l'innovation, au progrès scientifique et au développement des connaissances.",
  },
  {
    icon: Network,
    title: "Consultant International",
    description:
      "Expertise-conseil de haut niveau auprès d'institutions et organisations internationales dans des domaines stratégiques variés.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent-500 text-center mb-4">
          Domaines d&apos;Expertise
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-accent-500 mb-3">
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
