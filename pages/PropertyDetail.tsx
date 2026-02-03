import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/mockData';
import { Bed, Bath, Square, MapPin, Share2, Heart, CheckCircle } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-40 text-center pb-40">
        <h2 className="text-3xl font-serif mb-4">Property Not Found</h2>
        <Link to="/properties" className="text-primary underline">Return to Listings</Link>
      </div>
    );
  }

  return (
    <div className="bg-light pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Gallery Grid */}
        <div className="px-6 lg:px-10 py-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px] rounded-xl overflow-hidden">
              <div className="relative group cursor-pointer overflow-hidden h-full">
                 <img src={property.image} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              {/* Resto de la galería... */}
           </div>
        </div>

        {/* Title & Price */}
        <div className="px-6 lg:px-10 flex flex-wrap justify-between items-end gap-6 mb-8 mt-4">
           <div className="max-w-2xl">
              <p className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Exclusively listed</p>
              <h1 className="text-4xl lg:text-5xl font-serif font-black leading-tight tracking-tight text-gray-900">{property.title}</h1>
              <div className="flex items-center gap-2 mt-4 text-gray-500">
                 <MapPin size={18} />
                 <p className="text-base font-normal">{property.location}, Marbella, Spain</p>
              </div>
           </div>
           <div className="flex flex-col items-end gap-4">
              <p className="text-3xl font-serif font-bold text-primary">
                  {/* Corregimos el formato de precio para asegurar que no falle */}
                  {new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(property.price)}
              </p>
              <div className="flex gap-3">
                 <button className="flex items-center gap-2 px-5 py-2.5 rounded-none border border-gray-200 hover:bg-gray-50 transition-all text-sm font-bold text-gray-600">
                    <Heart size={20} /> Save
                 </button>
                 <button className="flex items-center gap-2 px-5 py-2.5 rounded-none border border-gray-200 hover:bg-gray-50 transition-all text-sm font-bold text-gray-600">
                    <Share2 size={20} /> Share
                 </button>
              </div>
           </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 lg:px-10 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-white border border-gray-100 shadow-sm">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Bedrooms</p>
                    <div className="flex items-center gap-2">
                        <Bed className="text-primary" />
                        <p className="text-2xl font-serif font-bold">{property.beds}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Bathrooms</p>
                    <div className="flex items-center gap-2">
                        <Bath className="text-primary" />
                        <p className="text-2xl font-serif font-bold">{property.baths}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Interior</p>
                    <div className="flex items-center gap-2">
                        <Square className="text-primary" />
                        <p className="text-2xl font-serif font-bold">{property.sqm} m²</p>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Property Type</p>
                    <div className="flex items-center gap-2">
                         <p className="text-xl font-serif font-bold">{property.type}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Content Split */}
        <div className="px-6 lg:px-10 flex flex-col lg:flex-row gap-16">
            
            {/* Left Col */}
            <div className="flex-1">
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-6 border-b border-gray-200 pb-4">Architectural Narrative</h2>
                    <div className="prose max-w-none text-lg leading-relaxed text-gray-600">
                        {/* AQUÍ ESTABA EL ERROR: Usamos un fallback si description es undefined */}
                        <p className="mb-6">{property.description || "No description available for this property."}</p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-6 border-b border-gray-200 pb-4">Key Features</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {/* AQUÍ ESTABA EL OTRO ERROR: Usamos ?. para evitar crash si features es undefined */}
                        {property.features?.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-700">
                                <CheckCircle size={18} className="text-primary" />
                                <span>{feature}</span>
                            </div>
                        ))}
                        {(!property.features || property.features.length === 0) && (
                            <p className="text-gray-400 italic">No specific features listed.</p>
                        )}
                    </div>
                </section>
            </div>

            {/* Right Col: Sticky Agent */}
            <aside className="w-full lg:w-[380px]">
                <div className="sticky top-28 space-y-6">
                    <div className="bg-white p-8 border border-gray-100 shadow-sm">
                       <h3 className="font-bold text-lg mb-4">Contact Agent</h3>
                       <p className="text-gray-500 mb-4">Interested in this property? Send us a message.</p>
                       <button className="w-full bg-primary text-white font-bold py-4 hover:bg-opacity-90 transition-all">
                           Request Viewing
                       </button>
                    </div>
                </div>
            </aside>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
