
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShoppingCart, Clock, Zap, Settings, DollarSign } from "lucide-react";
import GeneratorModel from "./GeneratorModel";

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
    { id: 'wmgp20', name: 'WMGP-20', kw: 20, phase: 'Single/Three Phase', voltage: '240V/415V', amps: 84, price: 25000, deliveryTime: '6-8 weeks' },
    { id: 'wmgp30', name: 'WMGP-30', kw: 30, phase: 'Single/Three Phase', voltage: '240V/415V', amps: 126, price: 35000, deliveryTime: '6-8 weeks' },
    { id: 'wmgp50', name: 'WMGP-50', kw: 50, phase: 'Three Phase', voltage: '415V', amps: 72, price: 45000, deliveryTime: '8-10 weeks' },
    { id: 'wmgp75', name: 'WMGP-75', kw: 75, phase: 'Three Phase', voltage: '415V', amps: 108, price: 60000, deliveryTime: '10-12 weeks' },
    { id: 'wmgp100', name: 'WMGP-100', kw: 100, phase: 'Three Phase', voltage: '415V', amps: 144, price: 75000, deliveryTime: '10-12 weeks' },
    { id: 'wmgp150', name: 'WMGP-150', kw: 150, phase: 'Three Phase', voltage: '415V', amps: 216, price: 100000, deliveryTime: '12-16 weeks' },
    { id: 'wmgp200', name: 'WMGP-200', kw: 200, phase: 'Three Phase', voltage: '415V', amps: 289, price: 125000, deliveryTime: '12-16 weeks' },
    { id: 'wmgp250', name: 'WMGP-250', kw: 250, phase: 'Three Phase', voltage: '415V', amps: 361, price: 150000, deliveryTime: '12-16 weeks' },
    { id: 'wmgp300', name: 'WMGP-300', kw: 300, phase: 'Three Phase', voltage: '415V', amps: 433, price: 180000, deliveryTime: '16-20 weeks' },
    { id: 'wmgp400', name: 'WMGP-400', kw: 400, phase: 'Three Phase', voltage: '415V', amps: 578, price: 240000, deliveryTime: '16-20 weeks' },
    { id: 'wmgp500', name: 'WMGP-500', kw: 500, phase: 'Three Phase', voltage: '415V', amps: 722, price: 280000, deliveryTime: '16-20 weeks' },
    { id: 'wmgp750', name: 'WMGP-750', kw: 750, phase: 'Three Phase', voltage: '415V', amps: 1083, price: 400000, deliveryTime: '20-24 weeks' },
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
            <div className="neo-card p-6 h-full">
              <div className="relative h-full">
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <GeneratorModel />
                </div>
                {/* Floating specs */}
                <div className="absolute top-4 right-4 neo-card p-3 z-10">
                  <p className="text-neo-700 font-bold">{selectedModel.kw}kW</p>
                </div>
                <div className="absolute bottom-4 left-4 neo-card p-3 z-10">
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
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="neo-card-pressed p-4 rounded-xl">
                      <p className="text-neo-600 text-sm">Power Output</p>
                      <p className="text-neo-800 font-bold text-lg">{selectedModel.kw} kW</p>
                    </div>
                    <div className="neo-card-pressed p-4 rounded-xl">
                      <p className="text-neo-600 text-sm">Phase</p>
                      <p className="text-neo-800 font-bold text-lg">{selectedModel.phase}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="neo-card-pressed p-4 rounded-xl">
                      <p className="text-neo-600 text-sm">Voltage</p>
                      <p className="text-neo-800 font-bold text-lg">{selectedModel.voltage}</p>
                    </div>
                    <div className="neo-card-pressed p-4 rounded-xl">
                      <p className="text-neo-600 text-sm">Current (Amps)</p>
                      <p className="text-neo-800 font-bold text-lg">{selectedModel.amps}A</p>
                    </div>
                  </div>
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <p className="text-neo-600 text-sm">Price per kW</p>
                    <p className="text-neo-800 font-bold text-lg">
                      {formatPrice(selectedModel.price / selectedModel.kw)}/kW
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Pricing & Delivery */}
              <div className="neo-card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-neo-800 flex items-center">
                    <DollarSign className="mr-3 h-6 w-6" />
                    Pricing & Delivery
                  </h3>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-neo-800">{formatPrice(selectedModel.price)}</p>
                    <p className="text-sm text-neo-600">Total Price</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-neo-600 mr-3 flex-shrink-0" />
                      <div>
                        <p className="text-neo-600 text-sm">Estimated Delivery Time</p>
                        <p className="text-neo-800 font-bold">{selectedModel.deliveryTime}</p>
                      </div>
                    </div>
                  </div>
                  <div className="neo-card-pressed p-4 rounded-xl">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-neo-600 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-neo-600 text-sm">Note</p>
                        <p className="text-neo-800 text-sm">
                          Prices include shipping and installation. Contact us for bulk order discounts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  variant="neo"
                  size="lg" 
                  className="w-full py-4 text-lg font-semibold group"
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
