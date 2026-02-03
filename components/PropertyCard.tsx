import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, Heart } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Función para poner bonito el precio (ej: 250000 -> 250.000 €)
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={property.image} 
          alt={property.title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
           <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white text-gray-600 hover:text-red-500 transition-colors shadow-sm">
            <Heart size={20} />
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-sm">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
          <div className="flex items-center text-white/90 text-sm font-medium">
            <MapPin size={16} className="mr-1" />
            {property.location}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        
        {/* Precio Formateado */}
        <div className="text-2xl font-bold text-primary mb-6">
          {formatPrice(property.price)}
        </div>
        
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100 mt-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center text-gray-400 mb-1">
              <Bed size={18} />
            </div>
            <span className="text-sm font-semibold text-gray-700">{property.beds} <span className="text-xs font-normal text-gray-400">Beds</span></span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border-l border-gray-100">
            <div className="flex items-center text-gray-400 mb-1">
              <Bath size={18} />
            </div>
            <span className="text-sm font-semibold text-gray-700">{property.baths} <span className="text-xs font-normal text-gray-400">Baths</span></span>
          </div>
          <div className="flex flex-col items-center justify-center text-center border-l border-gray-100">
            <div className="flex items-center text-gray-400 mb-1">
              <Move size={18} />
            </div>
            <span className="text-sm font-semibold text-gray-700">{property.sqm} <span className="text-xs font-normal text-gray-400">m²</span></span>
          </div>
        </div>

        <Link 
          to={`/properties/${property.id}`}
          className="mt-6 w-full py-3 bg-gray-50 hover:bg-primary text-gray-900 hover:text-white font-medium rounded-lg transition-colors text-center uppercase text-xs tracking-widest"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
