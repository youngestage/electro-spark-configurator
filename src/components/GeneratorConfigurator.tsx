
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Clock, Zap, Settings, DollarSign } from "lucide-react";

interface GeneratorModel {
  id: string;
  name: string;
  kw: number;
  phase: string;
  voltage: string;
  amps: number;
  price: number;
  deliveryTime: string;
}

const GeneratorConfigurator = () => {
  const models: GeneratorModel[] = [
    { id: 'wmgp10', name: 'WMGP-10', kw: 10, phase: 'Single/Three Phase', voltage: '240V/415V', amps: 42, price: 15000, deliveryTime: '4-6 weeks' },
    { id: 'wmgp25', name: 'WMGP-25', kw: 25, phase: 'Three Phase', voltage: '415V', amps: 36, price: 28000, deliveryTime: '6-8 weeks' },
    { id: 'wmgp50', name: 'WMGP-50', kw: 50, phase: 'Three Phase', voltage: '415V', amps: 72, price: 45000, deliveryTime: '8-10 weeks' },
    { id: 'wmgp100', name: 'WMGP-100', kw: 100, phase: 'Three Phase', voltage: '415V', amps: 144, price: 75000, deliveryTime: '10-12 weeks' },
    { id: 'wmgp250', name: 'WMGP-250', kw: 250, phase: 'Three Phase', voltage: '415V', amps: 361, price: 150000, deliveryTime: '12-16 weeks' },
    { id: 'wmgp500', name: 'WMGP-500', kw: 500, phase: 'Three Phase', voltage: '415V', amps: 722, price: 280000, deliveryTime: '16-20 weeks' },
    { id: 'wmgp1000', name: 'WMGP-1000', kw: 1000, phase: 'Three Phase', voltage: '415V', amps: 1444, price: 500000, deliveryTime: '20-24 weeks' }
  ];

  const [selectedModel, setSelectedModel] = useState<GeneratorModel>(models[1]); // Default to WMGP-25

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="configurator" className="py-20 bg-neo-100">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neo-800 mb-6">
              3D Generator Configurator
            </h2>
            <p className="text-xl text-neo-600 max-w-3xl mx-auto">
              Customize your WMGP generator and see real-time specifications
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* 3D Viewer */}
            <div className="neo-card p-8">
              <div className="aspect-square bg-gradient-to-br from-neo-200 to-neo-300 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* 3D Model Placeholder */}
                <div className="text-center">
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto mb-6 relative">
                      {/* Generator Body */}
                      <div className="absolute inset-4 neo-card rounded-xl"></div>
                      {/* Generator Core */}
                      <div className="absolute inset-12 neo-card-pressed rounded-full flex items-center justify-center">
                        <Zap className="h-16 w-16 text-neo-700 animate-float" />
                      </div>
                      {/* Side panels */}
                      <div className="absolute left-0 top-8 bottom-8 w-8 neo-card rounded-l-xl"></div>
                      <div className="absolute right-0 top-8 bottom-8 w-8 neo-card rounded-r-xl"></div>
                      {/* Control panel */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 neo-card-pressed rounded"></div>
                    </div>
                    <p className="text-neo-700 font-bold text-xl">{selectedModel.name}</p>
                    <p className="text-neo-600 text-sm mt-2">Interactive 3D Model</p>
                  </div>
                </div>
                
                {/* Floating specs */}
                <div className="absolute top-4 right-4 neo-card p-3">
                  <p className="text-neo-700 font-bold">{selectedModel.kw}kW</p>
                </div>
                <div className="absolute bottom-4 left-4 neo-card p-3">
                  <p className="text-neo-700 font-bold">{selectedModel.voltage}</p>
                </div>
              </div>
            </div>
            
            {/* Configuration Panel */}
            <div className="space-y-8">
              {/* Model Selection */}
              <div className="neo-card p-6">
                <h3 className="text-2xl font-bold text-neo-800 mb-4 flex items-center">
                  <Settings className="mr-3 h-6 w-6" />
                  Select Model
                </h3>
                <Select 
                  value={selectedModel.id} 
                  onValueChange={(value) => {
                    const model = models.find(m => m.id === value);
                    if (model) setSelectedModel(model);
                  }}
                >
                  <SelectTrigger className="neo-input h-14 text-lg">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {models.map((model) => (
                      <SelectItem key={model.id} value={model.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>{model.name}</span>
                          <span className="ml-4 text-neo-600">{model.kw}kW</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Specifications */}
              <div className="neo-card p-6">
                <h3 className="text-2xl font-bold text-neo-800 mb-6 flex items-center">
                  <Zap className="mr-3 h-6 w-6" />
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <p className="text-neo-600 text-sm">Power Output</p>
                    <p className="text-neo-800 font-bold text-lg">{selectedModel.kw} kW</p>
                  </div>
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <p className="text-neo-600 text-sm">Phase</p>
                    <p className="text-neo-800 font-bold text-lg">{selectedModel.phase}</p>
                  </div>
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <p className="text-neo-600 text-sm">Voltage</p>
                    <p className="text-neo-800 font-bold text-lg">{selectedModel.voltage}</p>
                  </div>
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <p className="text-neo-600 text-sm">Current</p>
                    <p className="text-neo-800 font-bold text-lg">{selectedModel.amps}A</p>
                  </div>
                </div>
              </div>
              
              {/* Pricing & Delivery */}
              <div className="neo-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-neo-800 flex items-center">
                    <DollarSign className="mr-3 h-6 w-6" />
                    Pricing
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-neo-800">{formatPrice(selectedModel.price)}</p>
                    <p className="text-sm text-neo-600">Starting price</p>
                  </div>
                </div>
                
                <div className="neo-card-pressed p-4 rounded-xl mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-neo-600 mr-3" />
                    <div>
                      <p className="text-neo-600 text-sm">Estimated Delivery</p>
                      <p className="text-neo-800 font-bold">{selectedModel.deliveryTime}</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="neo-button w-full py-4 text-lg font-semibold text-neo-800 hover:text-neo-900 group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <ShoppingCart className="mr-3 h-5 w-5" />
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorConfigurator;
