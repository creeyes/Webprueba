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
              <div className="grid grid-rows-2 gap-4 h-full">
                  <div className="relative group cursor-pointer overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzvBNDcsFmYlfile8kW1rfq6pho3rcncL0NVztCAHJvnraeMuLQH6mWjoL95b9xRHgOnQ8pVyDo8hmkG2zAmHK4d-AaOAAdI63EQUhP0oGkZggc3E_eM73dwyHf3aA9ch4FgONgswSOlrHyepnBj2XE7Lxw4JKfzR21vB-9C51g7Z3vVHSF4VYAnyGItBzwKlRe-WfE8VlDNztz2IV3XZRDkekKlybRsaVQri9XdUBoxlnc8YjQENGxUjLNtGZA-k_qpHLvjmY_Rk" alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="relative group cursor-pointer overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1PxMEGU6JS8sMtJnxhOg477yqZnXZQTuAq1J4RGn9iKaciWgFqDpU-kisLalUkDqe37rZufP08rWU4DbccPsSqND6km51_8P2ztNeMVsuu_DzF4ppAhWBGkJCY1gdqmTCM_Myh-Gv5xJl_b7vQ0EvNW6g7H3E1a8KaSaUSm0AOvubIQ1-5X6ekhfLqAxt9XRmjFAeAyBQ2LgFXrxYPp2P8eMLn6hKQL5p74XOojoebB2M29g5ymOQYU43eJ0qhVlwUdOWXofTd-k" alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                        View All Photos
                    </div>
                  </div>
              </div>
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
              <p className="text-3xl font-serif font-bold text-primary">€{property.price.toLocaleString()}</p>
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
                        <p className="mb-6">{property.description}</p>
                        <p>Every detail has been carefully considered to provide the ultimate luxury living experience. From the high-quality materials used in construction to the meticulously landscaped gardens, this property represents the pinnacle of Marbella real estate.</p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-6 border-b border-gray-200 pb-4">Key Features</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {property.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-700">
                                <CheckCircle size={18} className="text-primary" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Right Col: Sticky Agent */}
            <aside className="w-full lg:w-[380px]">
                <div className="sticky top-28 space-y-6">
                    <div className="bg-white p-8 border border-gray-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC8-77dWbBQMZCj2JCG_dtgIJiS41fFrzFk02f3KZithBE4bRKuQVgJzSReDrgxrOvnlMG7Zg7zBmplmfshWenaAJbIq0NeSqeRcWhJB0PaiQa7b7caCiQwTF5oT-jYgl4xu-7DCcjhw2SFUqOpYuDYC3JZYSU1TM1djffE6KMZea12G_jxDNW1m_LRAve7gpU51Deg5E5VFMotYk9bZ3-RzMESebCS09eZuBEsCSpLdCnH4MTSgQ1AuTFodJWqdjKlq_JM26LNrA" alt="Agent" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                            <div>
                                <h3 className="font-bold text-lg">Julian Vance</h3>
                                <p className="text-xs font-bold text-primary uppercase tracking-tighter">Senior Portfolio Director</p>
                            </div>
                        </div>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <input className="w-full bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-primary" placeholder="Your Name" type="text" />
                            <input className="w-full bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-primary" placeholder="Email Address" type="email" />
                            <textarea className="w-full bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-primary" placeholder="I am interested in..." rows={4}></textarea>
                            <button className="w-full bg-primary text-white font-bold py-4 hover:bg-opacity-90 transition-all">
                                Request Viewing
                            </button>
                        </form>
                    </div>
                </div>
            </aside>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;