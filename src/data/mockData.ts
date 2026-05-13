import { Product, Branch } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'Etiyopya Yirgacheffe',
    description: 'Narin gövde, yoğun çiçeksi aromalar ve turunçgil notaları ile karakterize edilmiş bir klasik.',
    price: 450,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop',
    bestSeller: true,
  },
  {
    id: 'c2',
    name: 'Kolombiya Huila',
    description: 'Karamel tatlılığı ve dengeli asiditesi ile her fincanda mükemmel bir deneyim.',
    price: 420,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800&auto=format&fit=crop',
    bestSeller: true,
  },
  {
    id: 'c4',
    name: 'Cold Brew Signature',
    description: '24 saat soğuk demlenmiş, meyvemsi ve yumuşak içimli özel harman.',
    price: 180,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    bestSeller: true,
  },
  {
    id: 'c5',
    name: 'Flat White',
    description: 'İki shot espresso ve kadifemsi sütün mükemmel uyumu.',
    price: 145,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c6',
    name: 'Iced Latte',
    description: 'Serinletici sütün espresso ile buzlu buluşması.',
    price: 155,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701550731-8974ab63e691?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 't1',
    name: 'Matte Indigo Termos',
    description: 'İçeceklerinizi 12 saat sıcak, 24 saat soğuk tutan sızdırmaz tasarım.',
    price: 1250,
    category: 'thermos',
    image: 'https://images.unsplash.com/photo-1517554558204-bc6750059c25?q=80&w=800&auto=format&fit=crop',
    bestSeller: true,
  },
  {
    id: 't2',
    name: 'Explorer Classic Termos',
    description: 'Dayanıklı çelik gövde, macera severler için tasarlandı.',
    price: 1450,
    category: 'thermos',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'a1',
    name: 'Hario V60 Demleme Seti',
    description: 'Evde profesyonel kahve demlemenin en şık yolu.',
    price: 850,
    category: 'accessory',
    image: 'https://images.unsplash.com/photo-1544666107-160fa1f9745e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'a2',
    name: 'Seramik Kahve El Değirmeni',
    description: 'Ayarlanabilir öğütme derecesi ile tazeliği yakalayın.',
    price: 1200,
    category: 'accessory',
    image: 'https://images.unsplash.com/photo-1525148001712-4299b1585fef?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'c3',
    name: 'Santos Blend',
    description: 'Geleneksel Brezilya çekirdeklerinin özenle kavrulmuş yoğun harmanı.',
    price: 380,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'istanbul',
    city: 'İstanbul',
    address: 'Galata Mah. Serdar-ı Ekrem Sokak No: 12, Beyoğlu',
    coordinates: { x: 26, y: 32 } // Approximate percentages on Turkey map SVG
  },
  {
    id: 'antalya',
    city: 'Antalya',
    address: 'Konyaaltı Cad. No: 45, Muratpaşa',
    coordinates: { x: 34, y: 72 }
  },
  {
    id: 'maras',
    city: 'Maraş',
    address: 'Bahçelievler Mah. 12. Sokak No: 5, Kahramanmaraş',
    coordinates: { x: 74, y: 64 }
  }
];
