
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neo-800 text-neo-100 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-neo-700 p-3 rounded-2xl mr-4">
                  <Zap className="h-8 w-8 text-neo-100" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WMGP</h3>
                  <p className="text-neo-300 text-sm">Wireless Magnetic Generator Power</p>
                </div>
              </div>
              <p className="text-neo-300 leading-relaxed mb-6 max-w-md">
                Leading the future of clean energy with revolutionary electromagnetic 
                induction technology. Zero emissions, maximum efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-neo-300">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>contact@wmgp.com</span>
                </div>
                <div className="flex items-center text-neo-300">
                  <Phone className="h-4 w-4 mr-3" />
                  <span>+1 (555) 123-WMGP</span>
                </div>
                <div className="flex items-center text-neo-300">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>Global Headquarters, Innovation District</span>
                </div>
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="text-lg font-bold mb-6">Products</h4>
              <ul className="space-y-3 text-neo-300">
                <li><a href="#" className="hover:text-neo-100 transition-colors">WMGP-10 (10kW)</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">WMGP-25 (25kW)</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">WMGP-50 (50kW)</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">WMGP-100 (100kW)</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">Industrial Series</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-neo-300">
                <li><a href="#" className="hover:text-neo-100 transition-colors">Installation Guide</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">Maintenance</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">Technical Support</a></li>
                <li><a href="#" className="hover:text-neo-100 transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-neo-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-neo-400 text-sm mb-4 md:mb-0">
                © 2024 WMGP Technology. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-neo-400">
                <a href="#" className="hover:text-neo-200 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-neo-200 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-neo-200 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
