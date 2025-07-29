import { HeroSection } from "@/components/HeroSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { OfferSection } from "@/components/OfferSection";
import { WhoItsForSection } from "@/components/WhoItsForSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ResultsSection } from "@/components/ResultsSection";
import { FAQSection } from "@/components/FAQSection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { Footer } from "@/components/Footer";
import { PhoneButton } from "@/components/PhoneButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ReviewsSection />
      <OfferSection />
      <WhoItsForSection />
      <WhyChooseUsSection />
      <ResultsSection />
      <FAQSection />
      <ConsultationForm />
      <Footer />
      
      {/* Sticky Mobile Phone Button */}
      <PhoneButton variant="sticky" />
    </div>
  );
};

export default Index;
