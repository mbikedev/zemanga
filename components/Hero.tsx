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
        <img
          src="/images/ad-majoribus.jpg"
          alt="Blason Mobutu Zemanga"
          className="w-48 h-auto sm:w-56 lg:w-64 mx-auto mb-8"
        />

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-500 tracking-wide mb-4">
          MOBUTU ZEMANGA
        </h1>

        <p className="font-motto text-lg sm:text-xl lg:text-2xl italic text-primary-600 mb-8">
          &ldquo;Ad majoribus dei auxilio&rdquo;
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {titles.map((title) => (
            <Badge
              key={title}
              variant="outline"
              className="px-4 py-2 bg-white border-primary-500/30 text-accent-500 text-sm sm:text-base rounded-full shadow-sm"
            >
              {title}
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
