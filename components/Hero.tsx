import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 bg-gradient-to-b from-primary-50 via-white to-bg-light"
    >
      <div className="text-center max-w-3xl mx-auto">
        <Image
          src="/images/ad-majoribus.jpg"
          alt="Blason Mobutu Zemanga"
          width={256}
          height={320}
          priority
          className="w-48 h-auto sm:w-56 lg:w-64 mx-auto mb-8"
        />

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-500 tracking-wide mb-4">
          MOBUTU ZEMANGA
        </h1>

        <p className="font-motto text-lg sm:text-xl lg:text-2xl italic text-primary-600 mb-8">
          &ldquo;Ad majoribus dei auxilio&rdquo;
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            "Chef d'Entreprises",
            "Dirigeant d'ONGs",
            "Directeur de Centres de Recherches",
            "Consultant International",
          ].map((title) => (
            <span
              key={title}
              className="px-4 py-2 bg-white border border-primary-500/30 text-accent-500 text-sm sm:text-base rounded-full shadow-sm"
            >
              {title}
            </span>
          ))}
        </div>

        <a
          href="#a-propos"
          className="inline-flex items-center px-8 py-3.5 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
        >
          En savoir plus
        </a>
      </div>
    </section>
  );
}
