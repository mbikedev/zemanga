import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const titles = [
  "Chef d'Entreprises",
  "Dirigeant d'ONGs",
  "Directeur de Centres de Recherches",
  "Consultant International",
];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 bg-gradient-to-b from-primary-50 via-white to-bg-light"
    >
      <div className="text-center max-w-3xl mx-auto">
        <div className="relative mb-12 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-primary-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75"></div>
          <div className="relative bg-white p-6 rounded-2xl shadow-2xl ring-1 ring-gray-200 group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-500">
            <img
              src="/images/ad-majoribus.jpg"
              alt="Blason Mobutu Zemanga"
              className="w-full h-auto mx-auto rounded-xl"
            />
          </div>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-6 flex flex-col gap-3">
          <div className="text-lg sm:text-xl lg:text-2xl font-normal tracking-widest text-primary-600 uppercase">
            Monsieur
          </div>
          <div className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-700 bg-clip-text text-transparent leading-tight drop-shadow-lg">
            MOBUTU ZEMANGA
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-600 to-accent-500 mx-auto rounded-full"></div>
        </h1>

        <div className="mb-10">
          <p className="font-motto text-xl sm:text-2xl lg:text-3xl italic font-semibold bg-gradient-to-r from-accent-500 via-primary-600 to-accent-500 bg-clip-text text-transparent leading-relaxed drop-shadow-md">
            &ldquo;Ad majoribus dei auxilio&rdquo;
          </p>
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mt-3"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {titles.map((title, index) => (
            <Badge
              key={title}
              variant="outline"
              className="group px-5 py-2.5 bg-gradient-to-br from-white to-primary-50 border-2 border-primary-400/40 hover:border-primary-500 text-primary-700 font-semibold text-sm sm:text-base rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent group-hover:from-accent-500 group-hover:to-primary-600 transition-all duration-300">
                {title}
              </span>
            </Badge>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20"
        >
          <a href="#a-propos">En savoir plus</a>
        </Button>
      </div>
    </section>
  );
}
