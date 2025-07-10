
import { Check } from "lucide-react";

const SpecsTable = () => {
  const models = [
    { name: 'WMPG5.0SERIES', kw: 5, phase: 'Single Phase', voltage: '220V', amps: 22, price: '₦5,500,000', delivery: '4-6 weeks' },
    { name: 'WMPG10SERIES', kw: 10, phase: 'Single Phase', voltage: '220V', amps: 45, price: '₦9,000,000', delivery: '6-8 weeks' },
    { name: 'WMPG25SERIES', kw: 25, phase: '3-Phase', voltage: '480V', amps: 30, price: '₦12,000,000', delivery: '6-8 weeks' },
    { name: 'WMPG50SERIES', kw: 50, phase: '3-Phase', voltage: '480V', amps: 60, price: '₦20,000,000', delivery: '8-10 weeks' },
    { name: 'WMPG100SERIES', kw: 100, phase: '3-Phase', voltage: '480V', amps: 120, price: '₦37,000,000', delivery: '10-12 weeks' },
    { name: 'WMPG250SERIES', kw: 250, phase: '3-Phase', voltage: '480V', amps: 300, price: '₦93,000,000', delivery: '12-16 weeks' },
    { name: 'WMPG500SERIES', kw: 500, phase: '3-Phase', voltage: '480V', amps: 600, price: '₦165,000,000', delivery: '16-20 weeks' },
    { name: 'WMPG1000SERIES', kw: 1000, phase: '3-Phase', voltage: '480V', amps: 1200, price: '₦250,000,000', delivery: '20-24 weeks' }
  ];

  const features = [
    'Electromagnetic Induction',
    'Zero Emissions',
    'Low Maintenance',
    'Silent Operation',
    '24/7 Power Generation',
    'Weather Independent',
    'Modular Design',
    '25-Year Warranty'
  ];

  return (
    <section className="py-20 bg-neo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neo-800 mb-6">
              Complete Specifications
            </h2>
            <p className="text-xl text-neo-600 max-w-3xl mx-auto">
              Compare all WMGP models and find the perfect generator for your needs
            </p>
          </div>
          
          {/* Desktop Table */}
          <div className="hidden lg:block neo-card p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neo-300">
                  <th className="text-left py-4 px-4 text-neo-800 font-bold">Model</th>
                  <th className="text-center py-4 px-4 text-neo-800 font-bold">Power (kW)</th>
                  <th className="text-center py-4 px-4 text-neo-800 font-bold">Phase</th>
                  <th className="text-center py-4 px-4 text-neo-800 font-bold">Voltage</th>
                  <th className="text-center py-4 px-4 text-neo-800 font-bold">Current (A)</th>
                  <th className="text-center py-4 px-4 text-neo-800 font-bold">Price</th>
                  <th className="text-center py-4 px-4 text-neo-800 font-bold">Delivery</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr key={model.name} className={`border-b border-neo-200 ${index % 2 === 0 ? 'bg-neo-50' : 'bg-neo-100'} hover:bg-neo-200 transition-colors`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="neo-card p-2 w-10 h-10 flex items-center justify-center mr-3">
                          <span className="text-neo-700 font-bold text-sm">{model.kw}</span>
                        </div>
                        <span className="font-bold text-neo-800">{model.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4 text-neo-700 font-semibold">{model.kw}</td>
                    <td className="text-center py-4 px-4 text-neo-700">{model.phase}</td>
                    <td className="text-center py-4 px-4 text-neo-700">{model.voltage}</td>
                    <td className="text-center py-4 px-4 text-neo-700">{model.amps}</td>
                    <td className="text-center py-4 px-4 text-neo-800 font-bold">{model.price}</td>
                    <td className="text-center py-4 px-4 text-neo-600">{model.delivery}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {models.map((model) => (
              <div key={model.name} className="neo-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-neo-800">{model.name}</h3>
                  <div className="neo-card p-2 w-12 h-12 flex items-center justify-center">
                    <span className="text-neo-700 font-bold">{model.kw}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-neo-600">Power</p>
                    <p className="text-neo-800 font-bold">{model.kw} kW</p>
                  </div>
                  <div>
                    <p className="text-neo-600">Phase</p>
                    <p className="text-neo-800 font-bold">{model.phase}</p>
                  </div>
                  <div>
                    <p className="text-neo-600">Voltage</p>
                    <p className="text-neo-800 font-bold">{model.voltage}</p>
                  </div>
                  <div>
                    <p className="text-neo-600">Current</p>
                    <p className="text-neo-800 font-bold">{model.amps}A</p>
                  </div>
                  <div>
                    <p className="text-neo-600">Price</p>
                    <p className="text-neo-800 font-bold text-lg">{model.price}</p>
                  </div>
                  <div>
                    <p className="text-neo-600">Delivery</p>
                    <p className="text-neo-800 font-bold">{model.delivery}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Features Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-neo-800 mb-8 text-center">
              Standard Features (All Models)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature) => (
                <div key={feature} className="neo-card p-4 flex items-center">
                  <div className="neo-card p-2 w-8 h-8 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-neo-700" />
                  </div>
                  <span className="text-neo-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsTable;
