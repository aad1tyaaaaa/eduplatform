import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-100 via-purple-50 to-purple-100 relative overflow-hidden shadow-inner rounded-t-lg">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 h-48 bg-purple-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-200/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="animate-slide-up">
            <h3 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              EduPlatform
            </h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Empowering learners worldwide with quality education and practical skills for the digital age.
            </p>
            <div className="flex gap-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-700 hover:bg-purple-300 hover:text-purple-900 hover-lift border border-gray-300 hover:border-purple-600 shadow-lg hover:shadow-purple-400 transition-all duration-300 transform hover:-translate-y-1"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <Icon className="h-6 w-6" />
                </Button>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-600">
              {['About Us', 'Courses', 'Instructors', 'Blog', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                  className="hover:text-purple-700 transition-colors hover-lift inline-block py-1 font-semibold tracking-wide"
                    style={{transitionDelay: `${index * 0.05}s`}}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h4 className="text-lg font-semibold mb-6 text-gray-800 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-indigo-600" />
              Categories
            </h4>
            <ul className="space-y-4 text-gray-600">
              {['Web Development', 'Data Science', 'Design', 'Business', 'Marketing'].map((category, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                  className="hover:text-indigo-700 transition-colors hover-lift inline-block py-1 font-semibold tracking-wide"
                    style={{transitionDelay: `${index * 0.05}s`}}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Contact Info</h4>
            <div className="space-y-5 text-gray-600">
              {[
                { icon: Mail, text: "hello@eduplatform.com" },
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: MapPin, text: "123 Education St, Learning City" }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 hover:text-purple-700 transition-colors hover-lift cursor-pointer font-semibold"
                  style={{transitionDelay: `${index * 0.1}s`}}
                >
                  <contact.icon className="h-6 w-6" />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 text-center text-gray-500 animate-slide-up transition-opacity duration-700" style={{animationDelay: '0.4s'}}>
          <p>&copy; 2024 EduPlatform. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
