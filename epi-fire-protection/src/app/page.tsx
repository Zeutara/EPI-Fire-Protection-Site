import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import MidCTA from "@/components/MidCTA";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import LocationsCTA from "@/components/LocationsCTA";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <TrustBar />
      <Services />
      <Industries />
      <MidCTA />
      <WhyChooseUs />
      <Process />
      <CaseStudies />
      <Testimonials />
      <LocationsCTA />
      <CTASection />
      <Footer />
    </main>
  );
}
