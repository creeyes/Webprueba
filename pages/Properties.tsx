import React, { useState, useEffect, useRef } from 'react';
// ELIMINADO: import { properties } from '../data/mockData'; 
import PropertyCard from '../components/PropertyCard';
import { Property } from '../types'; // Asegúrate de tener definida la interfaz en types.ts
import { ChevronDown, Map, X, Check, Loader } from 'lucide-react';

const Properties: React.FC = () => {
  // 1. ESTADO PARA LOS DATOS REALES (Backend)
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Estados de los Filtros
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const filterRef = useRef<HTMLDivElement>(null);

  // 2. CONEXIÓN A RAILWAY (Aquí ocurre la magia)
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const agencyId = 'Qqg3dS8LsYYc0QQGEfVZ'; // Tu ID Real

        const response = await fetch(
          `https://web-production-2573f.up.railway.app/front/api/properties/?agency_id=${agencyId}`
        );

        if (response.ok) {
          const data = await response.json();

          // Convertimos precio de String a Number para poder filtrar matemáticamente
          const results = data.results || data;
          const cleanData = results.map((item: any) => ({
            ...item,
            price: Number(item.price),
          }));

          setProperties(cleanData);
        } else {
          console.error("Error fetching properties");
        }
      } catch (error) {
        console.error("Network error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  // Cerrar dropdowns al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleSelect = (category: string, value: string) => {
    if (category === 'type') setSelectedType(selectedType === value ? "" : value);
    if (category === 'location') setSelectedLocation(selectedLocation === value ? "" : value);
    if (category === 'price') setSelectedPrice(selectedPrice === value ? "" : value);
    setActiveDropdown(null);
  };

  const clearFilters = () => {
    setSelectedType("");
    setSelectedLocation("");
    setSelectedPrice("");
    setActiveDropdown(null);
  };

  // 3. OBTENER OPCIONES DE LOS DATOS REALES
  const types = Array.from(new Set(properties.map(p => p.type))).sort();
  const locations = Array.from(new Set(properties.map(p => p.location))).sort();

  const priceRanges = [
    { label: 'Under €1M', min: 0, max: 999999 },
    { label: '€1M - €5M', min: 1000000, max: 5000000 },
    { label: '€5M - €10M', min: 5000001, max: 10000000 },
    { label: 'Above €10M', min: 10000001, max: Infinity },
  ];

  // Lógica de Filtrado
  const filteredProperties = properties.filter(p => {
    // Type Filter
    if (selectedType && p.type !== selectedType) return false;

    // Location Filter
    if (selectedLocation && p.location !== selectedLocation) return false;

    // Price Filter
    if (selectedPrice) {
      const range = priceRanges.find(r => r.label === selectedPrice);
      if (range) {
        if (p.price < range.min || p.price > range.max) return false;
      }
    }
    return true;
  });

  const hasActiveFilters = selectedType || selectedLocation || selectedPrice;

  // 4. PANTALLA DE CARGA
  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-light">
      <Loader className="animate-spin h-10 w-10 text-primary" />
    </div>
  );

  return (
    <div className="bg-light min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="py-12 border-b border-gray-200 mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 text-secondary">
            Hola cris <span className="text-primary italic">coastal living</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Browse our curated collection of luxury villas, beachfront apartments, and exclusive estates in the most prestigious locations.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12" ref={filterRef}>
          <div className="flex flex-wrap gap-4 w-full lg:w-auto relative z-20">

            {/* Property Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('type')}
                className={`flex h-12 items-center gap-2 rounded-none border px-5 text-sm font-medium transition-colors ${selectedType ? 'border-primary text-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary'}`}
              >
                <span>{selectedType || 'Property Type'}</span> <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'type' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'type' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 shadow-xl py-2 z-30 animate-in fade-in zoom-in-95 duration-100">
                  {types.map(type => (
                    <button
                      key={type}
                      onClick={() => handleSelect('type', type)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center justify-between group transition-colors"
                    >
                      <span className={selectedType === type ? 'font-bold text-primary' : 'text-gray-600'}>{type}</span>
                      {selectedType === type && <Check size={14} className="text-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('location')}
                className={`flex h-12 items-center gap-2 rounded-none border px-5 text-sm font-medium transition-colors ${selectedLocation ? 'border-primary text-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary'}`}
              >
                <span>{selectedLocation || 'Location'}</span> <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'location' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'location' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 shadow-xl py-2 z-30 animate-in fade-in zoom-in-95 duration-100">
                  {locations.map(loc => (
                    <button
                      key={loc}
                      onClick={() => handleSelect('location', loc)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center justify-between group transition-colors"
                    >
                      <span className={selectedLocation === loc ? 'font-bold text-primary' : 'text-gray-600'}>{loc}</span>
                      {selectedLocation === loc && <Check size={14} className="text-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('price')}
                className={`flex h-12 items-center gap-2 rounded-none border px-5 text-sm font-medium transition-colors ${selectedPrice ? 'border-primary text-primary bg-primary/5' : 'border-gray-200 bg-white hover:border-primary'}`}
              >
                <span>{selectedPrice || 'Price Range'}</span> <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === 'price' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'price' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 shadow-xl py-2 z-30 animate-in fade-in zoom-in-95 duration-100">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => handleSelect('price', range.label)}
                      className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 flex items-center justify-between group transition-colors"
                    >
                      <span className={selectedPrice === range.label ? 'font-bold text-primary' : 'text-gray-600'}>{range.label}</span>
                      {selectedPrice === range.label && <Check size={14} className="text-primary" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button onClick={clearFilters} className="flex h-12 items-center gap-2 px-4 text-sm font-medium text-gray-500 hover:text-red-600 transition-colors">
                <X size={16} /> Clear Filters
              </button>
            )}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-sm text-gray-500 hidden sm:block">Showing {filteredProperties.length} properties</span>
            <button className="flex items-center justify-center gap-2 h-12 px-6 bg-primary text-white text-sm font-bold tracking-wide hover:shadow-lg transition-all">
              <Map size={18} /> <span>Map View</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-gray-200 bg-gray-50">
            <p className="text-xl font-serif text-gray-400 mb-2">No properties found matching your criteria.</p>
            <button onClick={clearFilters} className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-opacity-80">
              Clear all filters
            </button>
          </div>
        )}

        {/* Load More (Only show if there are many results) */}
        {filteredProperties.length > 9 && (
          <div className="mt-20 flex flex-col items-center">
            <button className="flex items-center justify-center gap-3 bg-transparent border-2 border-primary text-primary px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
              Load More Properties
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Properties;
