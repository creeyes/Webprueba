export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  sqm: number;
  type: string;
  image: string;
  images: string[];
  features?: string[];
  isFeatured?: boolean;
  description?: string;
}
