import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, DollarSign } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `font-medium text-lg transition-colors duration-300 hover:text-primary-600 ${
      isActive ? 'text-primary-600' : 'text-gray-700'
    }`;
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg">
            <DollarSign size={28} className="text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">FinanceFlo</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/emi-calculator" className={navLinkClass}>EMI Calculator</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/apply" className="btn btn-primary">Apply Now</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-primary-600 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-6 px-4 flex flex-col space-y-4 transition-all duration-300">
          <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>About</NavLink>
          <NavLink to="/emi-calculator" className={navLinkClass} onClick={toggleMenu}>EMI Calculator</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>Contact</NavLink>
          <Link 
            to="/apply" 
            className="btn btn-primary w-full text-center"
            onClick={toggleMenu}
          >
            Apply Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;