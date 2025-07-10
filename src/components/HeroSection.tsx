
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-neo-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="bg-neo-800 rounded-full w-2 h-2 animate-glow" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-8">
            <div className="neo-card p-6">
              <Zap className="h-12 w-12 text-neo-800 animate-float" />
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-neo-800 mb-6 leading-tight">
            <span className="block">WMGP</span>
            <span className="block text-4xl md:text-5xl font-normal text-neo-600 mt-2">
              Wireless Magnetic Generator Power
            </span>
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-neo-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionary fuel-less generators powered by 
            <span className="font-semibold text-neo-800"> Electromagnetic Induction</span>
            <br />
            Zero emissions • Low cost • Renewable energy
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="neo-button px-12 py-6 text-lg font-semibold text-neo-800 hover:text-neo-900 group"
              onClick={() => document.getElementById('configurator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Customize Yours Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Zero Emissions', 'Low Maintenance', '24/7 Power', 'Scalable'].map((feature) => (
              <div key={feature} className="neo-card px-6 py-3">
                <span className="text-neo-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
