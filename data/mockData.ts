import { Property } from '../types';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Beachfront Villa',
    price: 4500000,
    location: 'Costa Brava',
    beds: 5,
    baths: 4,
    sqm: 450,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600',
    isFeatured: true,
    description: "Una villa espectacular con vistas al mar...", // Añadido
    features: ["Piscina", "Jardín", "Vista al Mar", "Garaje"] // Añadido
  },
  {
    id: '2',
    title: 'Luxury City Penthouse',
    price: 2800000,
    location: 'Barcelona',
    beds: 3,
    baths: 3,
    sqm: 220,
    type: 'Penthouse',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    isFeatured: true,
    description: "Ático de lujo en el centro...",
    features: ["Terraza", "Ascensor", "Aire Acondicionado"]
  },
  {
    id: '3',
    title: 'Historic Sea View Estate',
    price: 8900000,
    location: 'Sitges',
    beds: 8,
    baths: 7,
    sqm: 850,
    type: 'Estate',
    image: 'https://images.unsplash.com/photo-1600596542815-6ad4c728fdbe?auto=format&fit=crop&q=80&w=1600',
    description: "Finca histórica renovada...",
    features: ["Histórico", "Gran Terreno", "Privacidad"]
  }
];
