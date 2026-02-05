import React from 'react';

// DATOS ESTÁTICOS DEL EQUIPO (Movidos desde mockData)
const team = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'With over 15 years in luxury real estate, Sarah founded Elite Living to provide a bespoke service.'
  },
  {
    id: '2',
    name: 'Marc Ferran',
    role: 'Senior Agent',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    bio: 'Specializing in the Costa Brava region, Marc has an unparalleled knowledge of the local market.'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Interior Design Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Elena helps clients visualize the potential of every property, offering expert advice on renovation.'
  }
];

const About: React.FC = () => {
  return (
    <div className="pt-20">
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDctdlP6E12TAjfrHvthfA2PXZ-bvZAcyVLuAhqKWPvTk8bBnf3Erw4wFT9ESdn-ZdcJD3tiWf5Vo720lOb3YBE7dHm3ZUoqdGAPLlRUnThLmEUQzDpHpNQ1xlzXiY-L0eFvPdzjRGh6YK3DnVSfAW4VQlM5MKNsco89Rr48MJrCswFoCpS_Ab3Ktv-ZciMMkCfF3e_9CHJaLAtEJJkLVcFm-s4liuQsFY4D-VoqUW7uzBumq4M2s3l9wD2xMLLEzr4Q8gavtg3NU0" alt="Marbella View" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-4xl">
           <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Established 2002</span>
           <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">The Art of Living <br/>in Marbella</h1>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-24 px-6 lg:px-12 bg-light">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIga7kWIUPd6U8bJ6fUJPFyBqM3iJsFxBZ-cOrGz34hkNbI4me61tK2YhvjNSCS7yULZqDqubaHJTkNmKQXOt93KO0d-YY1ejytSRvgVDUVA5ncHQ5LFSvZPFqG4S3hadVqyfkFK3m2-6u_3_5ty1_Dxu9ZK8086NQiE2k5wRot4_lVszW1TvwZXIbplcdZY_3NCj1Z5l8v6N3X-Qg8ErHpZnhI4bbikGMcPh2jNdH1BHXtrg6Nih6slvxnwdMRwd02YqK5YfAAew" alt="Founder" className="w-full aspect-[4/5] object-cover rounded-lg shadow-xl grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="flex flex-col gap-8">
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary leading-tight">Our Heritage</h2>
               <p className="text-lg text-gray-600 leading-relaxed font-light">
                  For over two decades, Elite Living has been the silent partner behind the most significant real estate transactions in the Golden Mile. Founded on the principles of absolute discretion and architectural appreciation, we don't just sell houses; we curate lifestyles.
               </p>
               <div className="grid grid-cols-2 gap-8 py-4 border-y border-gray-200">
                  <div>
                     <p className="text-3xl font-serif font-bold text-primary mb-1">22+</p>
                     <p className="text-sm text-gray-500 uppercase tracking-widest">Years of Expertise</p>
                  </div>
                  <div>
                     <p className="text-3xl font-serif font-bold text-primary mb-1">€1.2B</p>
                     <p className="text-sm text-gray-500 uppercase tracking-widest">Assets Managed</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-secondary">The Custodians of Your Vision</h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mb-6"></div>
         </div>
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(member => (
               <div key={member.id} className="group text-center">
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-6">
                     <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-secondary">{member.name}</h3>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{member.role}</p>
               </div>
            ))}
         </div>
      </section>

    </div>
  );
};

export default About;
