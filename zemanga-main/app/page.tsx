import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mobutu Zemanga",
  url: "https://mobutuzemanga.com",
  image: "https://mobutuzemanga.com/images/ad-majoribus.webp",
  jobTitle: [
    "Chef d'Entreprises",
    "Dirigeant d'ONGs",
    "Directeur de Centres de Recherches",
    "Consultant International",
  ],
  description:
    "Chef d'Entreprises, Dirigeant d'ONGs, Directeur de Centres de Recherches et Consultant International.",
  email: "info@mobutuzemanga.com",
  sameAs: ["https://mobutuzemanga.com"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        {/* <About /> */}
        {/* <Services /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
