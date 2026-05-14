export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'thermos' | 'accessory' | 'bakery';
  image: string;
  bestSeller?: boolean;
}

export interface Branch {
  id: string;
  city: string;
  address: string;
  coordinates: { x: number; y: number }; // Percentage for the map
}
