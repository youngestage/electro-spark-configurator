
import { Battery, Leaf, DollarSign, Zap } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Zero Emissions",
      description: "100% clean energy with no carbon footprint or harmful byproducts"
    },
    {
      icon: DollarSign,
      title: "Low Operating Cost",
      description: "Minimal maintenance with no fuel costs - significant long-term savings"
    },
    {
      icon: Battery,
      title: "Renewable Energy",
      description: "Harnesses electromagnetic fields for continuous, sustainable power generation"
    },
    {
      icon: Zap,
      title: "Reliable Power",
      description: "Consistent energy output independent of weather conditions"
    }
  ];

  return (
    <section className="py-20 bg-neo-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-6">
              About WMGP Technology
            </h2>
            <p className="text-xl text-neo-600 max-w-3xl mx-auto leading-relaxed">
              WMGP represents a breakthrough in clean energy technology, utilizing advanced 
              electromagnetic induction principles to generate reliable, sustainable power 
              without traditional fuel sources.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title} 
                className="neo-card p-8 text-center hover:shadow-neo-pressed transition-all duration-300 group bg-brand-light"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="neo-card p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:shadow-neo-pressed transition-all duration-300">
                  <benefit.icon className="h-10 w-10 text-neo-700" />
                </div>
                <h3 className="text-xl font-semibold text-neo-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-neo-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Technology Overview */}
          <div className="neo-card p-12 mt-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-neo-800 mb-6">
                  Revolutionary Technology
                </h3>
                <p className="text-neo-600 text-lg leading-relaxed mb-6">
                  Our WMGP generators leverage cutting-edge electromagnetic induction 
                  technology to create a self-sustaining power source. By optimizing 
                  magnetic field interactions and resonance frequencies, we achieve 
                  unprecedented efficiency in clean energy generation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-neo-700 rounded-full mr-4"></div>
                    <span className="text-neo-700">No fossil fuels required</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-neo-700 rounded-full mr-4"></div>
                    <span className="text-neo-700">Minimal moving parts</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-neo-700 rounded-full mr-4"></div>
                    <span className="text-neo-700">Silent operation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
