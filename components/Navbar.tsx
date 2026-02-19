import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`text-xs uppercase tracking-widest font-medium transition-colors hover:text-primary ${
        isActive(to) ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-600'
      }`}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl tracking-widest text-primary font-bold">ELITE LIVING</span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" label="Home" />
            <NavLink to="/properties" label="Properties" />
            <NavLink to="/sell" label="Sell" />
            <NavLink to="/about" label="About" />
            <NavLink to="/journal" label="Journal" />
            <NavLink to="/contact" label="Contact" />
          </div>

          <div className="hidden lg:flex items-center space-x-4">
             <a href="tel:+34711083934" className="flex items-center gap-2 text-sm font-semibold tracking-tighter hover:text-primary transition-colors">
                <Phone size={16} />
                +34 711 083 934
             </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
          <div className="px-4 pt-4 pb-12 space-y-6 flex flex-col items-center mt-10">
            <NavLink to="/" label="Home" />
            <NavLink to="/properties" label="Properties" />
            <NavLink to="/sell" label="Sell" />
            <NavLink to="/about" label="About" />
            <NavLink to="/journal" label="Journal" />
            <NavLink to="/contact" label="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;