export default function About() {
  return (
    <section id="a-propos" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-accent-500 text-center mb-4">
          À Propos
        </h2>
        <div className="w-20 h-1 bg-primary-500 mx-auto mb-10 rounded-full" />

        <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            <strong className="text-accent-500">Mobutu Zemanga</strong> est un
            leader visionnaire dont le parcours exceptionnel s&apos;étend sur
            plusieurs domaines stratégiques. Entrepreneur accompli, il dirige
            avec succès plusieurs entreprises, contribuant activement au
            développement économique.
          </p>
          <p>
            En tant que dirigeant d&apos;organisations non gouvernementales, il
            s&apos;engage au quotidien pour des causes humanitaires et sociales
            d&apos;envergure. Sa vision philanthropique et son sens du leadership
            lui permettent de mobiliser des ressources et des équipes autour de
            projets à fort impact.
          </p>
          <p>
            Directeur de centres de recherches, il favorise l&apos;innovation et
            le progrès scientifique. Son expertise reconnue à l&apos;échelle
            internationale fait de lui un consultant de premier plan, sollicité
            par des institutions et organisations du monde entier.
          </p>
          <p className="font-motto text-primary-600 italic text-center text-xl mt-8">
            &ldquo;Avec l&apos;aide de Dieu et des ancêtres&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
