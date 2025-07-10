
import { Waves, RotateCcw, Sun } from "lucide-react";

const WorkingPrinciples = () => {
  const principles = [
    {
      icon: Waves,
      title: "Electromagnetic Induction",
      description: "Generates electrical power through magnetic field variations without requiring fossil fuels or external energy input",
      details: "Utilizes Faraday's law of electromagnetic induction to convert magnetic flux changes into electrical current"
    },
    {
      icon: RotateCcw,
      title: "Resonance Tuning", 
      description: "Optimizes magnetic field resonance to enhance power output efficiency and stability",
      details: "Fine-tuned frequency matching maximizes energy transfer and minimizes losses in the system"
    },
    {
      icon: Sun,
      title: "Energy Harvesting",
      description: "Captures ambient energy from environmental vibrations and electromagnetic radiation",
      details: "Multi-source energy collection system that harnesses various forms of ambient energy"
    }
  ];

  return (
    <section className="py-20 bg-neo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neo-800 mb-6">
              Working Principles
            </h2>
            <p className="text-xl text-neo-600 max-w-3xl mx-auto">
              Three core technologies work in harmony to deliver consistent, 
              clean energy generation
            </p>
          </div>
          
          {/* Principles Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={principle.title}
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="neo-card p-8 h-full hover:shadow-neo-pressed transition-all duration-500">
                  {/* Icon */}
                  <div className="neo-card p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:shadow-neo-pressed transition-all duration-300">
                    <principle.icon className="h-12 w-12 text-neo-700 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-neo-800 mb-4 text-center">
                    {principle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-neo-600 text-center mb-6 leading-relaxed">
                    {principle.description}
                  </p>
                  
                  {/* Details */}
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <p className="text-sm text-neo-700 text-center italic">
                      {principle.details}
                    </p>
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 neo-card w-12 h-12 flex items-center justify-center">
                    <span className="text-neo-700 font-bold text-lg">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Process Flow */}
          <div className="mt-20">
            <div className="neo-card p-8">
              <h3 className="text-2xl font-bold text-neo-800 mb-8 text-center">
                Energy Generation Process
              </h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                {principles.map((principle, index) => (
                  <div key={principle.title} className="flex items-center">
                    <div className="text-center">
                      <div className="neo-card p-4 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                        <principle.icon className="h-8 w-8 text-neo-700" />
                      </div>
                      <p className="text-sm text-neo-600 font-medium">{principle.title}</p>
                    </div>
                    {index < principles.length - 1 && (
                      <div className="hidden md:block ml-8">
                        <div className="w-8 h-0.5 bg-neo-400"></div>
                        <div className="w-0 h-0 border-l-4 border-l-neo-400 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-6 -mt-0.5"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingPrinciples;
