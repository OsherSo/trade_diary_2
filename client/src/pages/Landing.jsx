import {
  Navigation,
  HeroSection,
  FeaturesSection,
  BenefitsSection,
  CTASection,
} from "../components/landing";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
    </div>
  );
};

export default Landing;
