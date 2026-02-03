import React from 'react';
import { CheckCircle, BarChart, Globe, Handshake } from 'lucide-react';

const Sell: React.FC = () => {
  return (
    <div className="bg-light pt-20">
      
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center py-12 md:py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
               <span className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-xs">Exclusivity Assured</span>
               <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-secondary">
                  Exquisite Representation for Your <span className="italic font-normal">Marbella Estate</span>
               </h1>
               <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                  Leverage our hyper-local expertise and elite global network to achieve the optimal market value for your premium property.
               </p>
            </div>
            
            <div className="lg:col-span-5">
               <div className="bg-white p-8 md:p-10 shadow-2xl border border-gray-100">
                  <h3 className="text-2xl font-serif font-bold mb-6 text-secondary">Request a Valuation</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                     <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Property Location</label>
                        <input className="w-full px-4 py-3 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="e.g. Golden Mile" type="text"/>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Bedrooms</label>
                           <select className="w-full px-4 py-3 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary text-sm">
                              <option>3+</option>
                              <option>5+</option>
                              <option>8+</option>
                           </select>
                        </div>
                        <div>
                           <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">Type</label>
                           <select className="w-full px-4 py-3 bg-gray-50 border-none outline-none focus:ring-2 focus:ring-primary text-sm">
                              <option>Villa</option>
                              <option>Penthouse</option>
                           </select>
                        </div>
                     </div>
                     <button className="w-full bg-primary text-white font-bold py-4 mt-4 hover:bg-opacity-90 transition-all">
                        Get Expert Appraisal
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
               <h2 className="text-4xl font-serif font-bold tracking-tight text-secondary">Our Bespoke Selling Process</h2>
               <p className="text-gray-500">A meticulously crafted journey designed to ensure your property reaches the right eyes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
               <div className="text-center space-y-6 group">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-100 group-hover:border-primary transition-colors duration-500">
                     <BarChart className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold font-serif text-secondary">Strategic Valuation</h4>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">Hyper-accurate market analysis and psychological positioning.</p>
               </div>
               <div className="text-center space-y-6 group">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-100 group-hover:border-primary transition-colors duration-500">
                     <Globe className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold font-serif text-secondary">Global Marketing</h4>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">Elite photography, cinematic drone tours, and international placement.</p>
               </div>
               <div className="text-center space-y-6 group">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto border border-gray-100 group-hover:border-primary transition-colors duration-500">
                     <Handshake className="text-primary" size={32} />
                  </div>
                  <h4 className="text-xl font-bold font-serif text-secondary">Seamless Closing</h4>
                  <p className="text-gray-500 text-sm leading-relaxed px-4">Expert negotiation and white-glove legal support.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Feature Split */}
      <section className="py-20 overflow-hidden bg-gray-50">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
               <div className="aspect-[4/5] bg-cover bg-center rounded-none shadow-2xl" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMQkK4ghrVb_dMc8nvtqT-TVesKBn2-zq3g5zeSed96OKG_O9Yc-S_YLcgIDAzT4u80EBFqFW4pooaz0gI5ia2ffaXCdj4vTtSZB1jrhqcjzHXYOpeAlZGzSji3M7UgpaBe4d2-Mm0URXj9cfTB99-MH4ikgMJ8cbDf7M9vEKcj3WZWxgy7mKpg5ABKfWR8_tER-RYLyFf_v-Qzjnc9W3sMcOvem7VyXwgioEV0gML_UNWmYXByj5ObDbF_Rr8WSnlNuGIVz2L4DE')"}}></div>
            </div>
            <div className="space-y-8">
               <h2 className="text-4xl font-serif font-bold leading-tight text-secondary">We don't just list properties. <br/><span className="text-primary italic font-normal">We curate desires.</span></h2>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <CheckCircle className="text-primary shrink-0" />
                     <div>
                        <h5 className="font-bold text-lg text-secondary">Off-Market Network</h5>
                        <p className="text-gray-500 text-sm">Access to an ultra-private database of international investors.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <CheckCircle className="text-primary shrink-0" />
                     <div>
                        <h5 className="font-bold text-lg text-secondary">Concierge Preparation</h5>
                        <p className="text-gray-500 text-sm">From architectural staging to light renovations, we prepare your home.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Sell;