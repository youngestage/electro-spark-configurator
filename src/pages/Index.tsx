
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorkingPrinciples from "@/components/WorkingPrinciples";
import GeneratorConfigurator from "@/components/GeneratorConfigurator";
import SpecsTable from "@/components/SpecsTable";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import DemoVideosSection from "@/components/DemoVideosSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WorkingPrinciples />
      <DemoVideosSection />
      <GeneratorConfigurator />
      <SpecsTable />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
