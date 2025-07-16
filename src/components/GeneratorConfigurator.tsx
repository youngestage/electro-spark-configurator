
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
    { id: 'wmpg5', name: 'WMPG5.0SERIES', kw: 5, phase: 'Single Phase', voltage: '220V', amps: 22, price: 5500000, deliveryTime: '4-6 weeks' },
    { id: 'wmpg10', name: 'WMPG10SERIES', kw: 10, phase: 'Single Phase', voltage: '220V', amps: 45, price: 9000000, deliveryTime: '6-8 weeks' },
    { id: 'wmpg25', name: 'WMPG25SERIES', kw: 25, phase: '3-Phase', voltage: '480V', amps: 30, price: 12000000, deliveryTime: '6-8 weeks' },
    { id: 'wmpg50', name: 'WMPG50SERIES', kw: 50, phase: '3-Phase', voltage: '480V', amps: 60, price: 20000000, deliveryTime: '8-10 weeks' },
    { id: 'wmpg100', name: 'WMPG100SERIES', kw: 100, phase: '3-Phase', voltage: '480V', amps: 120, price: 37000000, deliveryTime: '10-12 weeks' },
    { id: 'wmpg250', name: 'WMPG250SERIES', kw: 250, phase: '3-Phase', voltage: '480V', amps: 300, price: 93000000, deliveryTime: '12-16 weeks' },
    { id: 'wmpg500', name: 'WMPG500SERIES', kw: 500, phase: '3-Phase', voltage: '480V', amps: 600, price: 165000000, deliveryTime: '16-20 weeks' },
    { id: 'wmpg1000', name: 'WMPG1000SERIES', kw: 1000, phase: '3-Phase', voltage: '480V', amps: 1200, price: 250000000, deliveryTime: '20-24 weeks' }
  ];

  const [selectedModel, setSelectedModel] = useState<GeneratorModel>(models[1]); // Default to WMPG10SERIES

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
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
            <div className="neo-card p-4 sm:p-6 h-[400px] md:h-[500px] w-full">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <GeneratorModel />
                </div>
                {/* Floating specs */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/80 dark:bg-neo-800/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 z-10 shadow-sm">
                  <p className="text-sm sm:text-base font-bold text-neo-800 dark:text-neo-100">{selectedModel.kw}kW</p>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/80 dark:bg-neo-800/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 z-10 shadow-sm">
                  <p className="text-sm sm:text-base font-bold text-neo-800 dark:text-neo-100">{selectedModel.voltage}</p>
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
