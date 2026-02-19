import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, Heart } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Formateador: Convierte 4500000 en "4.500.000 €"
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
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 line-clamp-1">
          {property.title}
        </h3>

        {/* AQUÍ ESTÁ EL CAMBIO CLAVE: Usamos formatPrice */}
        <div className="text-2xl font-bold text-primary mb-6">
          {formatPrice(property.price)}
        </div>

        <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100 mt-auto">
          <div className="text-center"><span className="font-bold">{property.beds}</span> Beds</div>
          <div className="text-center"><span className="font-bold">{property.sqm}</span> m²</div>
        </div>

        <Link to={`/properties/${property.id}`} className="mt-6 block w-full py-3 bg-gray-50 hover:bg-primary text-gray-900 hover:text-white text-center rounded-lg transition-colors uppercase text-xs font-bold tracking-widest">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
