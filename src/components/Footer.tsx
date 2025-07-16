
import { Mail, Phone, MapPin, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/80 p-2 rounded-2xl mr-4 flex-shrink-0">
                  <img 
                    src="/favicon.ico" 
                    alt="WMGP Logo" 
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">WMGP</h3>
                  <p className="text-secondary-foreground/80 text-sm">Wireless Magnetic Generator Power</p>
                </div>
              </div>
              <p className="text-secondary-foreground/80 leading-relaxed mb-6 max-w-md">
                Leading the future of clean energy with revolutionary electromagnetic 
                induction technology. Zero emissions, maximum efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-secondary-foreground/80">
                  <Mail className="h-4 w-4 mr-3" />
                  <span>contact@wmgp.com</span>
                </div>
                <div className="flex items-center text-secondary-foreground/80">
                  <Phone className="h-4 w-4 mr-3" />
                  <span>+1 (555) 123-WMGP</span>
                </div>
                <div className="flex items-center text-secondary-foreground/80">
                  <MapPin className="h-4 w-4 mr-3" />
                  <span>Global Headquarters, Innovation District</span>
                </div>
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="text-lg font-bold mb-6">Products</h4>
              <ul className="space-y-3 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">WMGP-10 (10kW)</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">WMGP-25 (25kW)</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">WMGP-50 (50kW)</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">WMGP-100 (100kW)</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">Industrial Series</a></li>
              </ul>
            </div>
            
            {/* Support */}
            <div>
              <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-3 text-secondary-foreground/80">
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">Installation Guide</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">Maintenance</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">Warranty</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">Technical Support</a></li>
                <li><a href="#" className="hover:text-secondary-foreground transition-colors hover:underline">Documentation</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-secondary-foreground/80 text-sm text-center md:mb-0">
                &copy; 2024 WMGP Technology. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">Terms of Service</a>
                <a href="#" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
