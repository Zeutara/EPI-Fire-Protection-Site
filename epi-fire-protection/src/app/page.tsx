import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Process />
      <CaseStudies />
      <CTASection />
      <Footer />
    </main>
  );
}
