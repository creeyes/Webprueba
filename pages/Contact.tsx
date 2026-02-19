import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-light pt-20">
      
      {/* Map Header */}
      <section className="relative h-[50vh] min-h-[400px] w-full bg-gray-100 overflow-hidden">
         <div className="absolute inset-0 bg-cover bg-center grayscale contrast-75 brightness-110 opacity-80" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDE_dXEQOQa4sGyey40PMhNeZW4Ebdtr5ot_h3vHr6Z1RIKbzQVzNNuZuvASkCMMANJvZ1LykI30O7hgrRLYYpKeCzQmC0uwsEW11mKXAajz8xyTmWXb9GKVYq3ik4kU2-zCLAlRa4cQOVaWjrMKFY087Qjuoh_FdwJRgDr7F4NvEi9WhI9GcH2XqfoqwkNe3od4GSgQD9-2mFTg-lb6EUMaDQF62BWFjgwwsx2w0ZDn675pTDd9Crmtf82bVRVwMrd7zDSYN1_yyQ')"}}></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative">
               <div className="absolute -top-12 -left-10 bg-primary text-white px-3 py-1 text-xs font-bold rounded shadow-lg whitespace-nowrap">ELITE LIVING HQ</div>
               <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-xl animate-pulse"></div>
            </div>
         </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-32 relative z-10">
            <div className="p-8 bg-white shadow-xl border-t-4 border-primary">
               <MapPin className="text-primary mb-6" size={32} />
               <h3 className="font-serif text-xl font-bold mb-4 text-secondary">Visit Us</h3>
               <p className="text-gray-500 text-sm leading-relaxed">
                  Calle de Ramón Areces,<br/>
                  Puerto Banús, 29660<br/>
                  Marbella, Spain
               </p>
            </div>
            <div className="p-8 bg-white shadow-xl border-t-4 border-primary">
               <Phone className="text-primary mb-6" size={32} />
               <h3 className="font-serif text-xl font-bold mb-4 text-secondary">Call Us</h3>
               <p className="text-gray-500 text-sm leading-relaxed">
                  Main: +34 951 000 000<br/>
                  Support: +34 711 083 934
               </p>
            </div>
            <div className="p-8 bg-white shadow-xl border-t-4 border-primary">
               <Mail className="text-primary mb-6" size={32} />
               <h3 className="font-serif text-xl font-bold mb-4 text-secondary">Email Us</h3>
               <p className="text-gray-500 text-sm leading-relaxed">
                  info@eliteliving.com<br/>
                  sales@eliteliving.com
               </p>
            </div>
         </div>
      </section>

      {/* Form Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         <div>
            <div className="mb-10">
               <h2 className="font-serif text-4xl font-bold mb-4 text-secondary">Connect with Excellence</h2>
               <p className="text-gray-600">
                  Our real estate advisors are available for discrete and professional advisory. 
                  Complete the form below and we will contact you within 24 hours.
               </p>
            </div>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Full Name</label>
                     <input className="w-full bg-gray-50 border-none rounded-none p-4 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-1">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Email Address</label>
                     <input className="w-full bg-gray-50 border-none rounded-none p-4 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="john@example.com" type="email"/>
                  </div>
               </div>
               <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Message</label>
                  <textarea className="w-full bg-gray-50 border-none rounded-none p-4 text-sm focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="How can we assist you?" rows={4}></textarea>
               </div>
               <button className="w-full bg-primary text-white font-bold uppercase tracking-widest py-5 hover:bg-opacity-90 transition-all">
                  Send Inquiry
               </button>
            </form>
         </div>
         <div className="h-full min-h-[500px] relative">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6GBt8nS-3do-lgo9ozEZaCe5ThPIeQXCpjka6_tFpZvZhRlVzAvqMgPH6fPtKDl0TeiBehfp3MuBRg4_pemO3j-9MGj2sbBt6Ym-5RYbQXlVtxOfiPx2-xWq5NWE-RPsB63xlYS16BXnlH1OdV3_t_4RNipXLiElsi_ak3hI-vw9kQeodc107DtToeAFNx1hBCqxKozGK8HDnkQa-E-yj-eMfNqQtOPgbztjIsvHad8vNgnQxLtpeBejV0a1p5vDYS-bAzKG_ec4" alt="Luxury Home" className="absolute inset-0 w-full h-full object-cover" />
         </div>
      </section>

    </div>
  );
};

export default Contact;