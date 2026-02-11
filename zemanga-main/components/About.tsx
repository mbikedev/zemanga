import { Briefcase, Globe, BookOpen, Users } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Chef d'Entreprises",
    description:
      "Fondateur et dirigeant de plusieurs entreprises dans des secteurs stratégiques, avec une vision axée sur l'innovation et le développement durable.",
  },
  {
    icon: Users,
    title: "Dirigeant d'ONGs",
    description:
      "Engagé dans l'action humanitaire et le développement social à travers la direction d'organisations non gouvernementales à vocation internationale.",
  },
  {
    icon: BookOpen,
    title: "Directeur de Centres de Recherches",
    description:
      "À la tête de centres de recherches dédiés à l'avancement des connaissances et à la résolution de défis contemporains.",
  },
  {
    icon: Globe,
    title: "Consultant International",
    description:
      "Expertise-conseil auprès d'institutions et d'entreprises à l'échelle internationale, dans les domaines de la stratégie et du développement.",
  },
];

export default function About() {
  return (
    <section
      id="apropos"
      className="py-20 px-4 bg-gradient-to-br from-white via-primary-50/20 to-accent-50/30 relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100/30 to-transparent rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-500 bg-clip-text text-transparent">
            À propos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Mobutu Zemanga est un entrepreneur, dirigeant et consultant
            international dont le parcours s&apos;inscrit dans une dynamique
            d&apos;excellence, d&apos;engagement et d&apos;impact à travers
            plusieurs domaines d&apos;activité.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-5 group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-accent-600 transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
