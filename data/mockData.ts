import { Property } from '../types';

// ==========================================
// 1. PROPIEDADES (Para Properties y Home)
// ==========================================
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
    description: "Una espectacular villa frente al mar con acabados de lujo y vistas panorámicas.",
    features: ["Piscina Infinity", "Acceso a playa", "Gimnasio", "Cine en casa"]
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
    description: "Ático exclusivo en el corazón de la ciudad con terraza privada.",
    features: ["Terraza panorámica", "Domótica", "Seguridad 24h", "Parking"]
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
    description: "Finca histórica renovada con amplios jardines y privacidad total.",
    features: ["Jardines privados", "Casa de invitados", "Bodega", "Piscina climatizada"]
  },
  {
    id: '4',
    title: 'Contemporary Cliffside Home',
    price: 3200000,
    location: 'Costa Brava',
    beds: 4,
    baths: 4,
    sqm: 380,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    description: "Diseño contemporáneo colgado sobre el acantilado con vistas infinitas.",
    features: ["Diseño moderno", "Vistas al mar", "Ascensor", "Smart Home"]
  },
  {
    id: '5',
    title: 'Exclusive Port Apartment',
    price: 1950000,
    location: 'Barcelona',
    beds: 2,
    baths: 2,
    sqm: 140,
    type: 'Apartment',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
    description: "Apartamento de lujo en primera línea de puerto deportivo.",
    features: ["Vistas al puerto", "Terraza", "Servicio de conserjería"]
  },
  {
    id: '6',
    title: 'Mediterranean Garden Villa',
    price: 5500000,
    location: 'Sitges',
    beds: 6,
    baths: 5,
    sqm: 550,
    type: 'Villa',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1600',
    description: "Villa clásica mediterránea rodeada de jardines exuberantes.",
    features: ["Gran jardín", "Pista de tenis", "Barbacoa", "Pozo propio"]
  }
];

// ==========================================
// 2. EQUIPO (Para About.tsx)
// ==========================================
export const team = [
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

// ==========================================
// 3. BLOG POSTS (Para Journal.tsx) - ¡IMPORTANTE COPIAR ESTO!
// ==========================================
export const blogPosts = [
  {
    id: '1',
    title: 'The Ultimate Guide to Marbella Luxury Real Estate',
    date: 'October 15, 2023',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Discover the most exclusive neighborhoods and what makes Marbella the jewel of the Costa del Sol.'
  },
  {
    id: '2',
    title: 'Interior Design Trends for 2024',
    date: 'November 2, 2023',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    excerpt: 'From sustainable materials to bold colors, explore the trends shaping luxury interiors this coming year.'
  },
  {
    id: '3',
    title: 'Living the Mediterranean Lifestyle',
    date: 'November 20, 2023',
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=800',
    excerpt: 'Experience the perfect balance of relaxation and sophistication that only the Mediterranean coast can offer.'
  }
];
