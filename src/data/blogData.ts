export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: 'cekirdekten-fincana-surdurulebilirligin-oykusu',
    title: 'Çekirdekten Fincana: Sürdürülebilirliğin Öyküsü',
    excerpt: 'Çiftliklerimizden masanıza gelen kahvenin adil ticaret ve doğa dostu yöntemlerle olan yolculuğu.',
    content: `
      <p>Kahve, dünyada en çok tüketilen içeceklerden biri olmasının ötesinde, arkasında devasa bir emek ve doğa döngüsü barındırır. BeeBuCoffee olarak, bu döngünün her aşamasında sürdürülebilirliği temel prensibimiz olarak kabul ediyoruz.</p>
      
      <h3>Adil Ticaret ve Çiftçi Hakları</h3>
      <p>Sürdürülebilirlik sadece çevreyle ilgili değildir; aynı zamanda bu işin kahramanları olan çiftçilerin haklarını korumaktır. Doğrudan ticaret (Direct Trade) modelimiz sayesinde, aracıları devreden çıkararak çiftçilerimize piyasa değerinin üzerinde ödeme yapıyoruz. Bu, onların hem yaşam standartlarını yükseltiyor hem de daha kaliteli çekirdekler üretmelerine olanak sağlıyor.</p>
      
      <h3>Doğa Dostu Tarım Yöntemleri</h3>
      <p>Kullandığımız çekirdeklerin çoğu, orman dokusunu koruyan "gölgede yetişen" (shade-grown) kahvelerdir. Bu yöntem, yerel biyoçeşitliliği korurken kahve meyvelerinin daha yavaş olgunlaşmasını ve böylece daha zengin aromalar geliştirmesini sağlar. Kimyasal gübre yerine organik çözümler tercih eden çiftliklerle çalışarak, toprağın verimliliğini gelecek nesiller için koruyoruz.</p>
      
      <h3>Fincanınızdaki Etki</h3>
      <p>Siz her sabah bir fincan BeeBuCoffee yudumladığınızda, sadece kaliteli bir kahve içmiş olmuyorsunuz; aynı zamanda binlerce kilometre ötedeki bir ormanın korunmasına ve bir çiftçi ailesinin geleceğine destek oluyorsunuz. Gerçek kahve deneyimi, paylaştıkça ve korudukça güzelleşir.</p>
    `,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
    author: 'Deniz Eren',
    date: '12 Mayıs 2026',
    category: 'Sürdürülebilirlik'
  },
  {
    id: 2,
    slug: 'evde-mukemmel-v60-demleme-rehberi',
    title: 'Evde Mükemmel V60 Demleme Rehberi',
    excerpt: 'Doğru sıcaklık, doğru öğütme ve o meşhur döküş tekniği ile kahvenizi profesyonelleştirin.',
    content: `
      <p>V60, kahve tutkunları için en berrak ve aromatik fincanları sunan demleme yöntemlerinin başında gelir. Peki, evde kafe kalitesinde bir V60 hazırlamak için nelere dikkat etmelisiniz? İşte adım adım profesyonel rehberimiz.</p>

      <h3>1. Malzeme Hazırlığı</h3>
      <p>İyi bir kahve için her şey tartıda başlar. İdeal oranımız 1 gram kahveye 15-16 gram su şeklindedir (Örn: 20g kahve / 300ml su). Suyunuzun sıcaklığı 92-94 derece arasında olmalıdır. Musluk suyu yerine yumuşak içimli bir arıtma veya damacana su tercih edin.</p>

      <h3>2. Doğru Öğütme</h3>
      <p>V60 için kahveniz "orta-ince" (sofra tuzu kadar) öğütülmelidir. Çok ince öğütme suyun akışını tıkayıp kahveyi acılaştırırken, çok kalın öğütme suyun hızla akıp gitmesine ve zayıf bir tat oluşmasına neden olur.</p>

      <h3>3. Islatma (Blooming)</h3>
      <p>Kağıt filtreyi sıcak suyla yıkayıp fincanınızı ısıttıktan sonra kahvenizi ekleyin. İlk olarak 40-50 gram su döküp 30 saniye bekleyin. Bu "blooming" aşaması, kahvedeki karbondioksit gazının atılmasını sağlar ve aromaların açığa çıkmasına yardımcı olur.</p>

      <h3>4. Dairesel Döküş</h3>
      <p>Kalan suyu merkezden dışa doğru yavaş, dairesel hareketlerle dökün. Su akışının sabit olması, kahve yatağının her yerine eşit temas etmesini sağlar. Toplam demleme süresinin 2:30 ile 3:00 dakika arasında bitmesini hedefleyin.</p>

      <p>Unutmayın, en iyi tarif damak tadınıza en uygun olandır. Afiyet olsun!</p>
    `,
    image: 'https://images.unsplash.com/photo-1605089315761-11748de7ec7d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Mert Aksoy',
    date: '08 Mayıs 2026',
    category: 'Demleme Rehberi'
  },
  {
    id: 3,
    slug: 'indigo-ve-altin-marka-renklerimizin-hikayesi',
    title: 'Indigo ve Altın: Marka Renklerimizin Hikayesi',
    excerpt: 'BeeBuCoffee kimliğini oluşturan indigo mavisi ve altın sarısının temsil ettiği değerler.',
    content: `
      <p>Bir markanın renkleri sadece görsel bir tercih değil, aynı zamanda onun ruhunun ve vaadinin bir yansımasıdır. BeeBuCoffee'nin dünyasına adım attığınızda sizi karşılayan Indigo Mavisi ve Altın Sarısı, bizim için derin anlamlar taşıyor.</p>

      <h3>Indigo Mavisi: Derinlik ve Güven</h3>
      <p>Indigo, gece gökyüzünün ve okyanusun derinliklerinin rengidir. BeeBu olarak bu rengi, kahve dünyasındaki uzmanlığımızı, profesyonelliğimizi ve size sunduğumuz güvenilir kaliteyi temsil etmesi için seçtik. Indigo, kahve tutkumuzun ne kadar köklü ve ciddi olduğunun bir imzasıdır.</p>

      <h3>Altın Sarısı: Değer ve Aydınlık</h3>
      <p>Kahve kirazlarının güneşle buluştuğu o ilk anın parıltısı... Altın rengi, bizim için kahvenin "sıvı altın" kadar değerli olduğu inancını simgeler. Aynı zamanda sabahları fincanınızdan yükselen o ilk gün ışığını ve enerjiyi temsil eder.</p>

      <h3>Kusursuz Kontrast</h3>
      <p>Bu iki rengin birleşimi, geleneksel ile modernin, ciddiyet ile enerjinin mükemmel dengesini kurar. Mağazalarımızın dekorasyonundan paketleme tasarımlarımıza kadar bu kontrastı kullanarak, size sadece bir içecek değil, estetik bir deneyim sunmayı hedefliyoruz.</p>
    `,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
    author: 'Selin Yılmaz',
    date: '01 Mayıs 2026',
    category: 'Marka Hikayesi'
  }
];
