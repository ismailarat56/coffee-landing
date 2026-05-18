 1 - <div align="center">
       2 - <img width="1200" height="475" alt="GHBanner"
         src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
       3 - </div>
       1 + # ☕ BeeBuCoffee - Artizan Kahve Deneyimi
       2
       5 - # Run and deploy your AI Studio app
       3 + BeeBuCoffee, "Çiftlikten Fincana" mottosuyla yola çıkan, modern kahve tutkunları için tasarlanmış,
         estetik ve kullanıcı dostu bir landing page / e-ticaret platformu prototipidir.
       4
       7 - This contains everything you need to run your app locally.
       5 + ---
       6
       9 - View your app in AI Studio: https://ai.studio/apps/77d50d4e-923e-4fa5-8503-257bf46717ab
       7 + ## 🚀 Proje Hakkında
       8 + Bu proje, butik bir kahve markasının dijital kimliğini oluşturmak amacıyla geliştirilmiştir.
         Kullanıcıların ürünleri inceleyebileceği, blog yazılarını okuyabileceği, şubeleri harita üzerinden
         keşfedebileceği ve etkinlikleri takip edebileceği kapsamlı bir web uygulamasıdır.
       9
      11 - ## Run Locally
      10 + ## 🛠 Kullanılan Teknolojiler
      11 + Proje, modern web teknolojileri ve kütüphaneleri kullanılarak inşa edilmiştir:
      12
      13 - **Prerequisites:**  Node.js
      13 + *   **Frontend:** React 19 (TypeScript)
      14 + *   **Build Tool:** Vite
      15 + *   **Styling:** Tailwind CSS 4 (Modern ve hızlı tasarım)
      16 + *   **Animations:** Framer Motion (Akıcı ve premium geçişler)
      17 + *   **Icons:** Lucide React
      18 + *   **Routing:** React Router 7
      19 + *   **Fonts:** Serif ve Sans-serif kombinasyonu (Estetik tipografi)
      20
      21 + ## 📦 Kurulum Adımları
      22 + Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:
      23
      16 - 1. Install dependencies:
      17 -    `npm install`
      18 - 2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
      19 - 3. Run the app:
      20 -    `npm run dev`
      24 + 1.  **Depoyu Klonlayın:**
      25 +     ```bash
      26 +     git clone https://github.com/kullaniciadi/beebu-coffee.git
      27 +     cd beebu-coffee
      28 +     ```
      29 + 
      30 + 2.  **Bağımlılıkları Yükleyin:**
      31 +     ```bash
      32 +     npm install
      33 +     ```
      34 + 
      35 + ## 🏃‍♂️ Çalıştırma Adımları
      36 + Geliştirme sunucusunu başlatmak için:
      37 + 
      38 + ```bash
      39 + npm run dev
      40 + ```
      41 + Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışacaktır.
      42 + 
      43 + ## ✨ Proje Özellikleri
      44 + *   **Responsive Tasarım:** Tüm cihazlarda (Mobil, Tablet, Masaüstü) kusursuz görünüm.
      45 + *   **Dinamik Blog Sistemi:** SEO dostu slug yapısına sahip, ferah tipografili blog detay
         sayfaları.
      46 + *   **Ürün Katalogu:** Kategorize edilmiş ürünler, fiyatlandırma ve detaylı kart yapısı.
      47 + *   **İnteraktif Şubeler:** Türkiye haritası üzerinde görselleştirilmiş şube lokasyonları.
      48 + *   **Etkinlik Yönetimi:** Workshop ve konser gibi etkinliklerin listelenmesi.
      49 + *   **Premium Animasyonlar:** Scroll ve hover efektleriyle zenginleştirilmiş kullanıcı deneyimi.
      50 + 
      51 + ## 📄 Sayfa ve Modül Açıklamaları
      52 + *   **Ana Sayfa (Home):** Markanın vizyonunu, favori ürünleri ve hikayeyi özetleyen etkileyici
         giriş.
      53 + *   **Menü (Menu):** Sıcak/soğuk kahveler ve fırın ürünlerinin kategorize edildiği dijital menü.
      54 + *   **Mağaza (Shop):** Çekirdek kahveler ve aksesuarların (termos, V60 vb.) bulunduğu alışveriş
         alanı.
      55 + *   **Blog:** Kahve kültürüne dair makalelerin listelendiği ve okunduğu içerik platformu.
      56 + *   **Şubeler (Explore):** Görsel Türkiye haritası üzerinden şube bilgilerine erişim.
      57 + *   **İletişim (Contact):** Sosyal medya bağlantıları, genel merkez bilgileri ve iletişim
         kanalları.
      58 + 
      59 + ## 🖼 Ekran Görüntüleri
      60 + *(Buraya kendi ekran görüntülerinizi ekleyebilirsiniz)*
      61 + 
      62 + | Ana Sayfa | Mağaza | Blog Detay |
      63 + | :--- | :--- | :--- |
      64 + | ![Home](https://via.placeholder.com/400x250?text=BeeBu+Home) |
         ![Shop](https://via.placeholder.com/400x250?text=BeeBu+Shop) |
         ![Blog](https://via.placeholder.com/400x250?text=BeeBu+Blog) |
      65 + 
      66 + ## 🔗 GitHub Repo Bilgisi
      67 + *   **Repo URL:**
         [https://github.com/kullaniciadi/beebu-coffee](https://github.com/kullaniciadi/beebu-coffee)
      68 + *   **Lisans:** Apache-2.0
      69 + 
      70 + ## 👨‍💻 Geliştirici Notları
      71 + *   Projede **Tailwind CSS 4**'ün yeni özellikleri kullanılarak stil dosyaları minimize edilmiştir.
      72 + *   Kod yapısı **Component-Based Architecture** (Bileşen Tabanlı Mimari) prensiplerine uygun olarak
         temiz ve sürdürülebilir şekilde kurgulanmıştır.
      73 + *   Tipografide **Indigo** ve **Altın** renklerinin kontrastı, markanın premium algısını
         güçlendirmek için tercih edilmiştir.
      74 + 
      75 + ---
      76 + *BeeBuCoffee - Her yudumda bir sanat.*
