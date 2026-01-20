import Navbar from "../components/Navbar/Navbar";
import SystemsGrid from "../components/Systemsgrid/SystemsGrid";
import Footer from "../components/Footer/Footer";
import TrustSection from "../components/TrustSection/TrustSection";
import TargetAudience from "../components/Targetaudience/TargetAudience";
import ProblemSection from "../components/Problemsection/ProblemSection";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import BenefitsSection from "../components/Benefitssection/BenefitsSection";
import FAQSection from "../components/FAQSection/FAQSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";

export default function HomePage() {

  return (
    <div className="w-full">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <ProblemSection />

      {/* Target Audience Section */}
      <TargetAudience />

      {/* Systems Grid Section */}
      <SystemsGrid />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Trust Section */}
      <TrustSection />
      
      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <FinalCTA />
      
      <Footer />

    </div>
  );
}
