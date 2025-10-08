import React from 'react';
import { Package, Instagram, Twitter, Facebook, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#22c55e]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#00ff9d]/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <Package className="h-8 w-8 text-[#00ff9d]" />
                <div className="absolute -inset-1 bg-[#22c55e] blur-sm opacity-50 rounded-full"></div>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#22c55e] text-transparent bg-clip-text">
                SendSafe
              </h2>
            </div>
            
            <p className="text-white/70 mb-6">
              Revolutionizing delivery services with privacy-focused, username-based shipping. The future of delivery is here.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00ff9d]/20 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#22c55e]/20 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#16a34a]/20 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#00ff9d]/20 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'How It Works', 'Our Story', 'FAQ', 'Support', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/70 hover:text-[#00ff9d] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {['Username Delivery', 'Same Day Shipping', 'Bulk Orders', 'International', 'Business Solutions', 'Package Tracking', 'Customer Support'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-white/70 hover:text-[#22c55e] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00ff9d] mt-1" />
                <p className="text-white/70">support@sendsafe.app</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#22c55e] mt-1" />
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
              
              <form className="mt-4">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="w-full bg-white/5 border border-white/10 rounded-full px-4 py-2 focus:outline-none focus:border-[#22c55e] transition-colors"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-1 top-1 bg-gradient-to-r from-[#00ff9d] to-[#22c55e] rounded-full px-4 py-1 text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} SendSafe. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/terms" className="hover:text-[#00ff9d] transition-colors duration-300">Terms & Privacy</Link>
            <a href="#" className="hover:text-[#00ff9d] transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;