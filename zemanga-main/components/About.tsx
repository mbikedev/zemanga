import { Building2, Heart, Lightbulb, Globe } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Building2,
      title: "Entrepreneur",
      description: "Dirige avec succès plusieurs entreprises, contribuant au développement économique",
    },
    {
      icon: Heart,
      title: "Philanthrope",
      description: "S'engage pour des causes humanitaires et sociales d'envergure internationale",
    },
    {
      icon: Lightbulb,
      title: "Innovateur",
      description: "Directeur de centres de recherches favorisant l'innovation et le progrès scientifique",
    },
    {
      icon: Globe,
      title: "Consultant International",
      description: "Expertise reconnue mondialement, sollicité par des institutions internationales",
    },
  ];

  return (
    <section id="a-propos" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-accent-100/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-100/30 to-primary-100/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-accent-600 via-primary-600 to-accent-500 bg-clip-text text-transparent">
            À Propos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Un parcours exceptionnel au service de l&apos;excellence et de l&apos;impact
          </p>
        </div>

        {/* Main content with image */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Coat of arms */}
          <div className="lg:col-span-1 flex justify-center items-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <img
                  src="/images/ad-majoribus.jpg"
                  alt="Blason Mobutu Zemanga"
                  className="w-full h-auto object-contain rounded-lg"
                />
                <p className="font-motto text-center text-primary-600 italic text-sm mt-4">
                  Ad majoribus dei auxilio
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg text-center lg:text-left">
            <p className="text-xl font-semibold text-gray-800">
              <strong className="text-accent-600 font-bold">
                Mobutu Zemanga
              </strong>{" "}
              est un leader visionnaire dont le parcours exceptionnel s&apos;étend sur plusieurs domaines stratégiques.
            </p>
            <p>
              Entrepreneur accompli, il dirige avec succès plusieurs entreprises, contribuant activement au développement économique. Sa capacité à identifier et saisir les opportunités de croissance fait de lui un acteur majeur du monde des affaires.
            </p>
            <p>
              En tant que dirigeant d&apos;organisations non gouvernementales, il s&apos;engage au quotidien pour des causes humanitaires et sociales d&apos;envergure. Sa vision philanthropique et son sens du leadership lui permettent de mobiliser des ressources et des équipes autour de projets à fort impact.
            </p>
            <p>
              Directeur de centres de recherches, il favorise l&apos;innovation et le progrès scientifique. Son expertise reconnue à l&apos;échelle internationale fait de lui un consultant de premier plan, sollicité par des institutions et organisations du monde entier.
            </p>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mb-4 mx-auto group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary-600 group-hover:text-accent-600 transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Motto */}
        <div className="text-center bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 p-8 rounded-2xl border border-primary-100 shadow-lg">
          <p className="font-motto text-primary-600 italic text-xl sm:text-2xl font-semibold">
            &ldquo;Avec l&apos;aide de Dieu et des ancêtres&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
