import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h3 className="font-serif text-4xl mb-2 italic text-white">We're here for you</h3>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-8">CONTACT US TODAY</p>
            <span className="font-serif text-2xl tracking-widest text-primary font-bold">ELITE LIVING</span>
          </div>
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-300">Subscribe to receive our latest listings</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="w-full bg-gray-900 border border-gray-800 px-4 py-4 text-sm focus:ring-1 focus:ring-primary outline-none text-white rounded-none" 
                placeholder="Full Name" 
                type="text" 
              />
              <input 
                className="w-full bg-gray-900 border border-gray-800 px-4 py-4 text-sm focus:ring-1 focus:ring-primary outline-none text-white rounded-none" 
                placeholder="Email *" 
                required 
                type="email" 
              />
              <button className="bg-primary text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-opacity-90 transition-all w-full sm:w-auto" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 text-[10px] uppercase tracking-widest font-bold border-b border-gray-800">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/properties" className="hover:text-primary transition-colors">Our Properties</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/sell" className="hover:text-primary transition-colors">Sell</Link>
          <Link to="/journal" className="hover:text-primary transition-colors">Journal</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="pt-12 flex flex-col items-center">
          <div className="flex space-x-4 mb-8">
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:border-primary">
              <Facebook size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:border-primary">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white transition-all hover:border-primary">
              <Camera size={16} />
            </a>
          </div>
          <div className="text-[10px] text-gray-500 uppercase tracking-widest text-center">
            <p className="mb-2">Privacy Policy | Terms and Conditions</p>
            <p>© 2024 Elite Living Homes - All rights reserved</p>
          </div>
        </div>
      </div>
      <div className="bg-primary py-8 text-center">
        <p className="text-white/80 text-[10px] uppercase tracking-[0.2em]">Luxury Real Estate Experts in the Heart of Marbella</p>
      </div>
    </footer>
  );
};

export default Footer;