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
    name: 'Signature Cold Brew',
    description: '24 saat soğuk demlenmiş, meyvemsi ve yumuşak içimli özel harman.',
    price: 180,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop',
    bestSeller: true,
  },
  {
    id: 'c6',
    name: 'Iced Latte',
    description: 'Serinletici sütün espresso ile buzlu buluşması.',
    price: 155,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'b1',
    name: 'Tereyağlı Kruvasan',
    description: 'Fransız usulü kat kat açılmış, çıtır çıtır taze kruvasan.',
    price: 95,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    bestSeller: true,
  },
  {
    id: 'b2',
    name: 'San Sebastian Cheesecake',
    description: 'Akışkan iç dokusu ve yanık üst yüzeyi ile efsane lezzet.',
    price: 165,
    category: 'bakery',
    image: 'https://images.unsplash.com/photo-1635327173758-85badf17f995?q=80&w=1127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bestSeller: true,
  },
  {
    id: 't1',
    name: 'BeeBu Gold Edition Termos',
    description: 'İçeceklerinizi 12 saat sıcak, 24 saat soğuk tutan sızdırmaz tasarım.',
    price: 1250,
    category: 'thermos',
    image: 'https://images.unsplash.com/photo-1670378948405-37c0b4a72bf3?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    bestSeller: true,
  },
  {
    id: 'a1',
    name: 'Hario V60 BeeBu Edition',
    description: 'Evde profesyonel kahve demlemenin en şık yolu.',
    price: 850,
    category: 'accessory',
    image: 'https://images.unsplash.com/photo-1622088891722-c6f91b80627f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
];

export const BRANCHES: Branch[] = [
  {
    id: 'istanbul',
    city: 'İstanbul',
    address: 'Galata Mah. Serdar-ı Ekrem Sokak No: 12, Beyoğlu',
    coordinates: { x: 19, y: 24 },
    position: { lat: 41.0256, lng: 28.9741 }
  },
  {
    id: 'ankara',
    city: 'Ankara',
    address: 'Çankaya Mah. Tunalı Hilmi Cad. No: 45, Çankaya',
    coordinates: { x: 38, y: 36 },
    position: { lat: 39.9042, lng: 32.8622 }
  },
  {
    id: 'izmir',
    city: 'İzmir',
    address: 'Alsancak Mah. Kıbrıs Şehitleri Cad. No: 128, Konak',
    coordinates: { x: 10, y: 53 },
    position: { lat: 38.435, lng: 27.142 }
  },
  {
    id: 'antalya',
    city: 'Antalya',
    address: 'Konyaaltı Cad. No: 45, Muratpaşa',
    coordinates: { x: 27, y: 78 },
    position: { lat: 36.8841, lng: 30.6861 }
  },
  {
    id: 'bursa',
    city: 'Bursa',
    address: 'Nilüfer Mah. FSM Bulvarı No: 55, Nilüfer',
    coordinates: { x: 21, y: 31 },
    position: { lat: 40.2100, lng: 28.9500 }
  },
  {
    id: 'adana',
    city: 'Adana',
    address: 'Ziyapaşa Bulvarı No: 88, Seyhan',
    coordinates: { x: 50, y: 75 },
    position: { lat: 37.0000, lng: 35.3213 }
  },
  {
    id: 'maras',
    city: 'Maraş',
    address: 'Bahçelievler Mah. 12. Sokak No: 5, Kahramanmaraş',
    coordinates: { x: 56, y: 68 },
    position: { lat: 37.5858, lng: 36.9371 }
  },
];

export const EVENTS = [
  {
    id: '1',
    title: 'Akustik Gece: Caz & Kahve',
    location: 'İstanbul, Beşiktaş Şubesi',
    date: '20 Mayıs 2026',
    time: '20:00',
    type: 'Konser',
    description: 'Şehrin gürültüsünden uzak, en kaliteli caz tınıları ve taze demlenmiş kahve kokusu eşliğinde unutulmaz bir akşam. Yerel caz sanatçılarımızın performansıyla ruhunuzu dinlendirin.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    price: 'Ücretsiz',
    capacity: '40 Kişi',
    details: 'Etkinliğimiz sınırlı kontenjan ile gerçekleşecektir. Katılım için sayfanın altındaki formdan veya şubemizden kayıt yaptırmanız rica olunur.'
  },
  {
    id: '2',
    title: 'Latte Art Workshop',
    location: 'Antalya, Muratpaşa Şubesi',
    date: '24 Mayıs 2026',
    time: '14:00',
    type: 'Workshop',
    description: 'Kahvenin üzerine sanat yapmaya hazır mısınız? Temel süt köpürtme tekniklerinden karmaşık desenlere kadar latte art dünyasını keşfedeceğiniz uygulamalı bir eğitim.',
    image: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=800&auto=format&fit=crop',
    price: '₺450',
    capacity: '8 Kişi',
    details: 'Tüm malzemeler tarafımızdan karşılanacaktır. Katılımcılara workshop sonunda BeeBuCoffee katılım sertifikası verilecektir.'
  },
  {
    id: '3',
    title: 'Demleme Teknikleri Eğitimi',
    location: 'Maraş, Merkez Şubesi',
    date: '02 Haziran 2026',
    time: '11:00',
    type: 'Eğitim',
    description: 'V60, Chemex ve Aeropress... Evde profesyonel kahve demlemenin sırlarını uzman baristalarımızdan öğrenin. Doğru öğütme, su sıcaklığı ve süre dengesini keşfedin.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    price: '₺300',
    capacity: '12 Kişi',
    details: 'Eğitim sonunda tercih ettiğiniz bir yöresel çekirdek 250gr hediye edilecektir.'
  }
];
