import { Link } from 'react-router-dom';
import { DollarSign, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Pre-Footer CTA */}
      <div className="bg-gradient-to-r from-primary-700 to-secondary-700 py-16">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to take control of your finances?</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Join thousands of satisfied customers who have transformed their financial journey with FinanceFlo.</p>
          <Link to="/apply" className="btn bg-white text-primary-700 hover:bg-gray-100 btn-large">
            Apply for a Loan Now
          </Link>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container-custom mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <DollarSign size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FinanceFlo</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing the way you access financial resources with instant, transparent, and customer-focused loan solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/emi-calculator" className="text-gray-400 hover:text-primary-500 transition-colors">EMI Calculator</Link></li>
              <li><Link to="/apply" className="text-gray-400 hover:text-primary-500 transition-colors">Apply for Loan</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Finance Street, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-gray-400">support@financeflo.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 bg-gray-800 text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="submit" 
                className="bg-primary-600 hover:bg-primary-700 text-white py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-8">
        <div className="container-custom mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} FinanceFlo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;