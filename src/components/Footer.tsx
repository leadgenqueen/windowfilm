import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">
              Emerald Coast Window Films
            </h3>
            <p className="text-coastal-blue-light mb-4">
              Serving the Gulf Coast for over 30 years with premium window film solutions 
              that reduce heat, block UV rays, and enhance comfort while maintaining your views.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>(850) 747-9994</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@emeraldcoastwindowfilms.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Serving Panama City, Destin, Santa Rosa Beach & Beyond</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-coastal-blue-light">
              <li>Residential Window Film</li>
              <li>Commercial Window Film</li>
              <li>Solar Heat Rejection Film</li>
              <li>Privacy & Security Film</li>
              <li>UV Protection Film</li>
              <li>Decorative Window Film</li>
              <li>Hurricane Protection Film</li>
              <li>Energy Efficiency Consulting</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-coastal-blue-light">
              <li>Panama City</li>
              <li>Panama City Beach</li>
              <li>Destin</li>
              <li>Santa Rosa Beach</li>
              <li>Seaside</li>
              <li>WaterColor</li>
              <li>Port St. Joe</li>
              <li>Mexico Beach</li>
              <li>Crestview</li>
              <li>Fort Walton Beach</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-coastal-blue-light/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-coastal-blue-light">
                © 2025 Emerald Coast Window Films. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-coastal-blue-light">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-coastal-blue-light">
              Licensed & Insured in Florida | BBB A+ Rating | 30+ Years Experience
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};