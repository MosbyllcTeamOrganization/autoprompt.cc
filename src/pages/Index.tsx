import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExampleCards } from "@/components/ExampleCards";
import { FeatureSection } from "@/components/FeatureSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ExampleCards />
      <FeatureSection />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
