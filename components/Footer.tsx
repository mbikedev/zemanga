import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent-500 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/ad-majoribus.jpg"
            alt="Blason Mobutu Zemanga"
            width={64}
            height={80}
            className="w-16 h-auto mb-4 opacity-80"
          />

          <h3 className="font-heading text-xl font-bold tracking-wide mb-2">
            MOBUTU ZEMANGA
          </h3>

          <p className="font-motto text-primary-500 italic text-sm mb-6">
            &ldquo;Ad majoribus dei auxilio&rdquo;
          </p>

          <a
            href="https://mobutuzemanga.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2.5 border border-primary-500 text-primary-500 text-sm font-medium rounded-lg hover:bg-primary-500 hover:text-white transition-colors mb-8"
          >
            MobutuZemanga.com
          </a>

          <div className="w-full border-t border-white/10 pt-6">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Mobutu Zemanga. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
