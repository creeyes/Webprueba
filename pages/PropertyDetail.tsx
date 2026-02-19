import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Bed, Square, MapPin, Share2, Heart, CheckCircle, Loader, ImageOff } from 'lucide-react';
import { Property } from '../types';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // ESTADOS
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 1. FETCH DE DATOS REALES
  useEffect(() => {
    const fetchPropertyDetail = async () => {
      try {
        setLoading(true);
        // Usamos la URL de Railway configurada
        const response = await fetch(`https://web-production-2573f.up.railway.app/front/api/properties/${id}/?agency_id=Qqg3dS8LsYYc0QQGEfVZ`);

        if (response.ok) {
          const data = await response.json();
          // Aseguramos que el precio sea numérico
          const cleanData = { ...data, price: Number(data.price) };
          setProperty(cleanData);
        } else {
          console.error("Propiedad no encontrada en GHL/Backend");
          setError(true);
        }
      } catch (err) {
        console.error("Error de red:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPropertyDetail();
  }, [id]);

  // Formateador de precio
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price);
  };

  // PANTALLA DE CARGA
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] bg-light">
        <Loader className="animate-spin h-12 w-12 text-primary mb-4" />
        <p className="text-gray-500 font-serif">Cargando detalles de la propiedad...</p>
      </div>
    );
  }

  // PANTALLA DE ERROR / NO ENCONTRADO
  if (error || !property) {
    return (
      <div className="pt-40 text-center pb-40 px-4">
        <h2 className="text-3xl font-serif mb-4 text-gray-800">Propiedad no disponible</h2>
        <p className="text-gray-500 mb-8">Lo sentimos, esta propiedad no existe o ha sido retirada.</p>
        <Link to="/properties" className="px-6 py-3 bg-primary text-white font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all">
          Volver al listado
        </Link>
      </div>
    );
  }

  // LÓGICA DE GALERÍA (Para evitar errores si hay pocas fotos)
  // El backend nos garantiza que 'images' es un array, aunque sea vacío.
  const mainImage = property.images?.[0] || property.image;
  const secondImage = property.images?.[1];
  const thirdImage = property.images?.[2];

  return (
    <div className="bg-light pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto">

        {/* Gallery Grid Dinámico */}
        <div className="px-6 lg:px-10 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[500px] md:h-[600px] rounded-xl overflow-hidden">

            {/* Foto Principal (Izquierda) */}
            <div className="relative group cursor-pointer overflow-hidden h-full bg-gray-200">
              {mainImage ? (
                <img src={mainImage} alt="Main view" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                  <ImageOff size={48} className="mb-2 opacity-50" />
                  <span>Sin imagen disponible</span>
                </div>
              )}
            </div>

            {/* Columna Derecha (2 Fotos o Placeholders) */}
            <div className="grid grid-rows-2 gap-4 h-full">
              {/* Foto 2 */}
              <div className="relative group cursor-pointer overflow-hidden bg-gray-100">
                {secondImage ? (
                  <img src={secondImage} alt="Interior detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm bg-gray-100 border border-dashed border-gray-200">
                    FOTO INTERIOR
                  </div>
                )}
              </div>

              {/* Foto 3 */}
              <div className="relative group cursor-pointer overflow-hidden bg-gray-100">
                {thirdImage ? (
                  <img src={thirdImage} alt="Kitchen/Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm bg-gray-100 border border-dashed border-gray-200">
                    FOTO DETALLE
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Title & Price */}
        <div className="px-6 lg:px-10 flex flex-wrap justify-between items-end gap-6 mb-8 mt-4">
          <div className="max-w-2xl">
            <p className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Exclusiva GHL</p>
            <h1 className="text-3xl lg:text-5xl font-serif font-black leading-tight tracking-tight text-gray-900">{property.title}</h1>
            <div className="flex items-center gap-2 mt-4 text-gray-500">
              <MapPin size={18} />
              <p className="text-base font-normal">{property.location}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="text-3xl font-serif font-bold text-primary">
              {formatPrice(property.price)}
            </p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-none border border-gray-200 hover:bg-gray-50 transition-all text-sm font-bold text-gray-600">
                <Heart size={20} /> Guardar
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-none border border-gray-200 hover:bg-gray-50 transition-all text-sm font-bold text-gray-600">
                <Share2 size={20} /> Compartir
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 lg:px-10 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 bg-white border border-gray-100 shadow-sm">
            <div className="flex flex-col gap-1">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Habitaciones</p>
              <div className="flex items-center gap-2"><Bed className="text-primary" /><p className="text-2xl font-serif font-bold">{property.beds}</p></div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Interior</p>
              <div className="flex items-center gap-2"><Square className="text-primary" /><p className="text-2xl font-serif font-bold">{property.sqm} m²</p></div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Tipo</p>
              <div className="flex items-center gap-2"><p className="text-xl font-serif font-bold">{property.type}</p></div>
            </div>
          </div>
        </div>

        {/* Content Split */}
        <div className="px-6 lg:px-10 flex flex-col lg:flex-row gap-16">

          {/* Left Col */}
          <div className="flex-1">
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 border-b border-gray-200 pb-4">Descripción</h2>
              <div className="prose max-w-none text-lg leading-relaxed text-gray-600">
                {/* Aquí se muestra la descripción generada por el Backend */}
                <p className="mb-6 whitespace-pre-line">
                  {property.description || "No hay descripción disponible para esta propiedad."}
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6 border-b border-gray-200 pb-4">Características</h2>
              <div className="grid grid-cols-2 gap-4">
                {property.features?.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
                {(!property.features || property.features.length === 0) && (
                  <p className="text-gray-400 italic">No hay características específicas listadas.</p>
                )}
              </div>
            </section>
          </div>

          {/* Right Col */}
          <aside className="w-full lg:w-[380px]">
            <div className="sticky top-28 space-y-6">
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Contactar Agente</h3>
                <p className="text-sm text-gray-500 mb-6">
                  ¿Interesado en esta propiedad? Solicita una visita hoy mismo y recibe atención personalizada.
                </p>
                <button className="w-full bg-primary text-white font-bold py-4 hover:bg-opacity-90 transition-all uppercase tracking-wider text-sm">
                  Solicitar Visita
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
