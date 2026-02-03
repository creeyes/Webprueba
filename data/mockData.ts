import { Property } from '../types';

// TUS PROPIEDADES (Ya arregladas)
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
    description: "Una espectacular villa frente al mar...",
    features: ["Piscina Infinity", "Acceso a playa", "Gimnasio"]
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
    description: "Ático exclusivo en el centro...",
    features: ["Terraza", "Vistas ciudad"]
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
    description: "Finca histórica con vistas...",
    features: ["Jardines", "Privacidad"]
  }
];

// --- AÑADIMOS ESTO QUE FALTABA PARA QUE 'ABOUT' NO FALLE ---
export const team = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'With over 15 years in luxury real estate, Sarah founded Elite Living to provide a bespoke service for discerning clients.'
  },
  {
    id: '2',
    name: 'Marc Ferran',
    role: 'Senior Agent',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    bio: 'Specializing in the Costa Brava region, Marc has an unparalleled knowledge of the local market and hidden gems.'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Interior Design Consultant',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Elena helps clients visualize the potential of every property, offering expert advice on renovation and styling.'
  }
];
