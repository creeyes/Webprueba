import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// YA NO IMPORTAMOS mockData
import PropertyCard from '../components/PropertyCard';
import { ArrowRight, Facebook, PlayCircle, Camera } from 'lucide-react';
import { Property } from '../types'; // Importamos el tipo para que TS no se queje

const Home: React.FC = () => {
  // ESTADO: Almacenará las propiedades reales traídas del CRM
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);

  // FETCH: Cargar datos reales al entrar en la Home
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        // Usamos la misma URL que en la página de Propiedades
        const response = await fetch('https://web-production-2573f.up.railway.app/front/api/properties/?agency_id=Qqg3dS8LsYYc0QQGEfVZ');
        
        if (response.ok) {
            const data = await response.json();
            
            // Limpieza de datos (asegurar que el precio es número)
            const cleanData = data.map((item: any) => ({
                ...item,
                price: Number(item.price), 
            }));

            // LÓGICA DE DESTACADOS:
            // 1. Buscamos propiedades marcadas como 'isFeatured'
            // 2. Si no hay ninguna, cogemos las 3 primeras del listado
            const featured = cleanData.filter((p: Property) => p.isFeatured);
            
            if (featured.length > 0) {
                setFeaturedProperties(featured.slice(0, 3));
            } else {
                setFeaturedProperties(cleanData.slice(0, 3));
            }
        }
      } catch (error) {
        console.error("Error cargando destacados:", error);
      }
    };

    fetchFeatured();
  }, []);

  // Datos estáticos (Estos SÍ los mantenemos aquí porque son de diseño/navegación)
  const areas = [
    { name: 'Benahavis', count: 142, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkZ1mfgk638OfD_pkJq_OLVCqtRHUgngtmB_rdVVWrrwYG5NWp_h5eSZdpp1vWxeyeCBwmqhNxIv1eUbyEJibxSZ_DSewYVIp6nDNAY1CGrmWlCHM4zxR0tr6_bnOwjJr7Hxuz5oyzo9i8MC4eGiax1MyafhsKzLrhz2wLB6uTDO16CW9YJSvKuuixBmySp49asxvfrJ1NjXnBi8AaFnoeQ6KHDTo9TN875N6oxUm45GApS_obEUGHkLNh8GOrHSNyaTEBiN00JVo' },
    { name: 'Marbella', count: 509, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSJykfluyFE4t4LznpuTZMuLk5xqU7-loqbHC18718HkDuxHiREHcioXYpQRLpMw-DbWXEEEpCOpYDhkkzgN8im2RiF1jraWf20eOcoOsRGnw3zR-pSm5IM_0rqX0vrmw3WQzi0QOcHhZdMm2n6Beu39DbkH-eArSu-UjmC0dGyPuLhM3v_Frb03k6YGQRmOwRSRpPLQAdG4Os5xucBr7ObLZliNzSrBvC7vUEJLlmquvxj5axx3Vk71-ZlwD87ryHzxwtThW2Js8' },
    { name: 'Estepona', count: 215, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeAZF-_XR4s9LQo4m_2slilDzMPyfmqfBOR7EtD6Z8oFaJMhNv_-XLXhJ0BrrYAw2bTHQ3Y5S9Npb-LqOL4Abihrlibv3ucVuFCXvv67KpPMmtopPzid_g8kAhTOjaLVXwzcf0DtT0QqjxENohHcPAwV30obpuL0Sm6BAK_vHrS9tFnTAenoBxEb3owF0-70n7ql4vxmSCsv7o4hg_aweQt73VdXey6Ns6QjesyQyjJTkAT0i6FJqYcgHN_JxmtjA6FlQvuhM9suc' },
    { name: 'La Zagaleta', count: 10, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQFUj4zHufmlHeaF9g_jI2qIz7-2e30lcaIzQrG8zrkTv6ZFzg6dwMHRnGvrxJ2cQoAJI_wmk70-ZvHt9SQvhyWv_ve-2E4atxwQ1bIMwDIgjB_P4xZ5FK79mpGfaGQknxBFwasF61tFWobkSgerhNTSEygqRungdKnWFfDhW4-Rz9NWv0EMEa5vBVnx8-Qt5hlFuNzPHU2_zCN2RTYaO8Iotkh_t-VFuwmalFpNGRsC8Okm9xtw4IDXv_J9m6WtVWZS961rgv6bM' }
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury Villa in Marbella" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiBRmyVO3Nh76MCUCKvQZWJRXcnMG4F9QCTy2Zc44wpTZJ13wuNjMl4LIoKR4V9H2e0S8d4VStiRyE2kSa6nIxWHDEVMC7SU0XXhL-AJ8nRlK-a_jDqgGjikTiTQ6qVJQxYifMdSAJOQdplC0kp7_mFXQ_Ow3C7PuUexiXXKhOFkDd57Kj3d_ZU0V6jnSi82ZDrVJ41NZn6FRuBUrXSL5eyzzmVg7k42o7qEtGxGDnGj1i4OyCd5dNv76ywEA72ZSo0_bsUTIYqH8" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
          <h1 className="font-serif text-5xl md:text-7xl mb-8 tracking-tight leading-tight">EXPERIENCE THE ELEGANCE OF ELITE LIVING</h1>
          <p className="text-lg md:text-xl font-light mb-12 tracking-[0.2em] uppercase opacity-90">Purveyors of Exquisite Real Estate in Marbella</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/properties" className="bg-primary text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-opacity-90 transition-all duration-300 w-full sm:w-auto">
              View Properties
            </Link>
            <div className="flex space-x-6 mt-6 sm:mt-0 text-white">
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><PlayCircle size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Camera size={24} /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Properties (AHORA DINÁMICO) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-4 uppercase tracking-wider text-secondary">The Best Homes in the Best Locations</h2>
          <p className="text-gray-500 text-sm uppercase tracking-[0.3em] mb-12">Curated Selection of Prime Residences</p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-16">
             {['Marbella', 'Golden Mile', 'Sierra Blanca', 'La Zagaleta'].map((area) => (
                <Link key={area} to="/properties" className="px-6 py-2 border-b-2 border-transparent hover:border-primary text-gray-400 hover:text-primary text-xs uppercase tracking-widest transition-colors">
                  {area}
                </Link>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Si aún cargando o no hay datos, podrías mostrar un skeleton, pero por ahora mostramos lo que haya */}
            {featuredProperties.length > 0 ? (
                featuredProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))
            ) : (
                <div className="col-span-3 py-10 text-gray-400 italic">
                    Cargando propiedades destacadas...
                </div>
            )}
          </div>
          
          <div className="mt-16">
            <Link to="/properties" className="inline-flex items-center gap-2 border-b border-primary text-primary font-bold uppercase tracking-widest pb-1 hover:gap-4 transition-all">
              View Entire Collection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Areas / Territories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-4 uppercase tracking-wider text-secondary">Our Territories</h2>
          <p className="text-gray-500 text-sm uppercase tracking-[0.3em] mb-16">Embark on a journey through the tapestry of Marbella's finest regions</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((area) => (
              <Link to="/properties" key={area.name} className="relative aspect-square overflow-hidden group block cursor-pointer">
                <img src={area.img} alt={area.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-primary/60 transition-colors duration-500 flex flex-col items-center justify-center text-white">
                  <h4 className="font-serif text-2xl tracking-widest">{area.name}</h4>
                  <span className="text-[10px] uppercase tracking-widest mt-2 opacity-80">{area.count} Properties</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <h2 className="font-serif text-5xl mb-6 uppercase tracking-wider text-secondary">About</h2>
           <p className="text-primary font-bold text-xs uppercase tracking-[0.4em] mb-12">ELITE LIVING HOMES</p>
           <p className="text-gray-600 font-light leading-relaxed text-lg mb-8">
              Elite Living Homes proudly represents itself as a distinguished purveyor of luxury real estate, gracing the prestigious expanse known as Marbella's Golden Mile. Our unwavering commitment is directed towards the most exclusive Marbella properties, embodying the essence of opulence and distinction.
           </p>
           <Link to="/about" className="bg-secondary text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-primary transition-colors">
              Read Our Story
           </Link>
        </div>
      </section>

      {/* Buy/Sell Split */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <Link to="/properties" className="relative h-[600px] group overflow-hidden block">
          <img alt="Luxury Pool Area" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD49Yu_PqpyPEeqL2F8Yw1xz0dN2dFI0plMLQ1ZUSxJB7quUPf-AQ9BZPpcrgw-xWziT3miGTsVOLICtu4ea6aS5zMaIQ-DSgSJUoV5TKA5XKRtEdeu2eicqKie7sLENgns_bkOV7zYGsj9fuk31TK-j_te4TgQma0_DAATZQrDK4h8oHv2WHoilCUiByoQ83ipsGRXancHLqUjrvNEMFIlKTBc8ZvojOVXaCm3Qao7Zu1o14d0lFEce7O1mIIdll3rfQDCDviVy9k"/>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white font-serif text-5xl uppercase tracking-[0.3em]">Purchasers</h3>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500 mx-auto"></div>
            </div>
          </div>
        </Link>
        <Link to="/sell" className="relative h-[600px] group overflow-hidden block">
          <img alt="Interior Spiral Staircase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6m_drjFpK81Hx84ZO1NKLCQ7IEq6ZfE2WnLKZng8IedPaggkEOVvP8S6X3bpOWRTgYGbW1rFOzKVqrhPAk6dJRLWocSB4nstcuOusrZTNFmODrFNpfBULjB5fdryqUCdX0ZE-7swBwEMXMvKAGxypXsR5zHhIq6ScB_7XIy0ycg_IeWfVSSpwlK94XOtxNNgHq3_DGnBmvq4eD7lEuVh79SAO_QU2kDeRjPFsCmmNxHNDDkL8eseiIxYky7OW6nigbzhStW7DhXM"/>
          <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white font-serif text-5xl uppercase tracking-[0.3em]">Sellers</h3>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500 mx-auto"></div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
