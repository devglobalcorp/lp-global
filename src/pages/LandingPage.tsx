"use client";

import BenefitsSection from "@/components/landing/BenefitsSection";
import FaqSection from "@/components/landing/FaqSection";
import FooterSection from "@/components/landing/FooterSection";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import RecognitionSection from "@/components/landing/RecognitionSection";
import SecondaryCtaSection from "@/components/landing/SecondaryCtaSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-900">
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <RecognitionSection />
      <SecondaryCtaSection />
      <FaqSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default LandingPage;