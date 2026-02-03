export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  image: string;
  description: string;
  features: string[];
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Townhouse';
  isFeatured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string[];
}