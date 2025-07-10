
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, User, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedModel: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const models = [
    'WMGP-10 (10kW)',
    'WMGP-25 (25kW)',
    'WMGP-50 (50kW)',
    'WMGP-100 (100kW)',
    'WMGP-250 (250kW)',
    'WMGP-500 (500kW)',
    'WMGP-1000 (1000kW)'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 24 hours with detailed information.",
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '', selectedModel: '', notes: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-neo-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neo-800 mb-6">
              Request Your Quote
            </h2>
            <p className="text-xl text-neo-600 max-w-2xl mx-auto">
              Get detailed pricing and delivery information for your WMGP generator
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="neo-card p-8">
                <h3 className="text-2xl font-bold text-neo-800 mb-6">
                  Why Choose WMGP?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="neo-card p-2 w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="w-3 h-3 bg-neo-700 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neo-800">Expert Engineering</h4>
                      <p className="text-neo-600 text-sm">25+ years of electromagnetic research and development</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="neo-card p-2 w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="w-3 h-3 bg-neo-700 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neo-800">Global Support</h4>
                      <p className="text-neo-600 text-sm">Worldwide installation and maintenance network</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="neo-card p-2 w-8 h-8 flex items-center justify-center mr-4 mt-1">
                      <span className="w-3 h-3 bg-neo-700 rounded-full"></span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neo-800">Proven Results</h4>
                      <p className="text-neo-600 text-sm">1000+ successful installations across 50+ countries</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="neo-card p-8">
                <h3 className="text-2xl font-bold text-neo-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-neo-700 mr-3" />
                    <span className="text-neo-600">sales@wmgp.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-neo-700 mr-3" />
                    <span className="text-neo-600">+1 (555) 123-WMGP</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="neo-card p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-neo-700 font-medium mb-2">
                    <User className="inline h-4 w-4 mr-2" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="neo-input h-12"
                    placeholder="Enter your full name"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-neo-700 font-medium mb-2">
                    <Mail className="inline h-4 w-4 mr-2" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="neo-input h-12"
                    placeholder="Enter your email address"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-neo-700 font-medium mb-2">
                    <Phone className="inline h-4 w-4 mr-2" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="neo-input h-12"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                {/* Model Selection */}
                <div>
                  <label className="block text-neo-700 font-medium mb-2">
                    Selected Model
                  </label>
                  <Select 
                    value={formData.selectedModel} 
                    onValueChange={(value) => setFormData({...formData, selectedModel: value})}
                  >
                    <SelectTrigger className="neo-input h-12">
                      <SelectValue placeholder="Choose a WMGP model" />
                    </SelectTrigger>
                    <SelectContent>
                      {models.map((model) => (
                        <SelectItem key={model} value={model}>
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Notes */}
                <div>
                  <label className="block text-neo-700 font-medium mb-2">
                    <MessageSquare className="inline h-4 w-4 mr-2" />
                    Additional Notes
                  </label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="neo-input min-h-[100px] resize-none"
                    placeholder="Tell us about your power requirements, installation location, or any specific questions..."
                  />
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="neo-button w-full py-4 text-lg font-semibold text-neo-800 hover:text-neo-900 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      Submit Quote Request
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
