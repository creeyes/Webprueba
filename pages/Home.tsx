import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { ArrowRight, Facebook, PlayCircle, Camera, Loader } from 'lucide-react';
import { Property } from '../types';

const Home: React.FC = () => {
  // ESTADO: Almacenará las propiedades reales traídas del CRM
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH: Cargar datos reales al entrar en la Home
  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);
        // Usamos la misma URL que en la página de Propiedades
        const response = await fetch('https://web-production-2573f.up.railway.app/front/api/properties/?agency_id=Qqg3dS8LsYYc0QQGEfVZ');

        if (response.ok) {
          const data = await response.json();

          // Limpieza de datos (asegurar que el precio es número)
          const results = data.results || data;
          const cleanData = results.map((item: any) => ({
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
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  // Datos estáticos con IMÁGENES DE ALTA CALIDAD (Unsplash)
  const areas = [
    { name: 'Benahavis', count: 142, img: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800' },
    { name: 'Marbella', count: 509, img: 'https://images.unsplash.com/photo-1569334335520-22c60c88555e?auto=format&fit=crop&q=80&w=800' },
    { name: 'Estepona', count: 215, img: 'https://images.unsplash.com/photo-1572529944322-6b990f11075d?auto=format&fit=crop&q=80&w=800' },
    { name: 'La Zagaleta', count: 10, img: 'https://images.unsplash.com/photo-1600596542815-2a429b6315f8?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury Villa in Marbella"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1920"
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

      {/* Featured Properties Section */}
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

          {/* Grid de Propiedades con Loader */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-3 flex justify-center py-10">
                <Loader className="animate-spin text-primary h-8 w-8" />
              </div>
            ) : featuredProperties.length > 0 ? (
              featuredProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))
            ) : (
              <div className="col-span-3 py-10 text-gray-400 italic">
                No active listings available at the moment.
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
          <img alt="Luxury Pool Area" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=800" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-white font-serif text-5xl uppercase tracking-[0.3em]">Purchasers</h3>
              <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-white transition-all duration-500 mx-auto"></div>
            </div>
          </div>
        </Link>
        <Link to="/sell" className="relative h-[600px] group overflow-hidden block">
          <img alt="Interior Spiral Staircase" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" />
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
