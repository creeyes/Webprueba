export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqm: number;
  type: string;
  image: string;
  features?: string[];
  isFeatured?: boolean;
  description?: string; // <--- AÑADIDO ESTO
}
