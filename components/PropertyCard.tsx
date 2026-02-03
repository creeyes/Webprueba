import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Square } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/properties/${property.id}`} className="group cursor-pointer block">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium">
          €{property.price.toLocaleString()}
        </div>
        {property.isFeatured && (
          <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            Premium Listing
          </div>
        )}
      </div>
      <div className="pt-6 text-left">
        <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors text-gray-900">{property.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{property.location}</p>
        <div className="flex space-x-6 text-gray-500 text-sm border-t border-gray-100 pt-4">
          <span className="flex items-center gap-2">
            <Bed size={16} /> {property.beds}
          </span>
          <span className="flex items-center gap-2">
            <Bath size={16} /> {property.baths}
          </span>
          <span className="flex items-center gap-2">
            <Square size={16} /> {property.sqm} m²
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;