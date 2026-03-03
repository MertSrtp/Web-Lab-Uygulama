# CSS Kararları

## 1. Breakpoint Seçimi
En yaygın cihaz ölçülerini kapsamak için 640px (Tablet) ve 1024px (Masaüstü) breakpoint'lerini seçtim. Mobilde dikey yığın (column) halinde olan elemanlar, ekran büyüdükçe yatay düzene geçiyor.

## 2. Layout Tercihleri
Header navigasyonu için tek eksenli hizalama yeterli olduğu için Flexbox kullandım. Proje kartlarında ise iki eksenli bir ızgara gerektiğinden `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` ile CSS Grid kullandım. `auto-fit` seçeneği boş sütunları daraltıp elemanların esnek genişlemesini sağlıyor.

## 3. Design Tokens
Tutarlılık sağlamak adına `:root` içinde mavi ağırlıklı bir renk paleti (`--color-primary`) belirledim. Yazı boyutları için `clamp()` fonksiyonunu kullanarak, media query kullanmadan viewport (ekran) genişliğine göre akıcı büyüyen/küçülen (fluid typography) font değerleri atadım.

## 4. Responsive Stratejiler
Kodlarımı "Mobile-First" mantığıyla yazdım. Varsayılan tüm CSS kurallarını dar ekranlara uygun olarak tasarladım, büyük ekranlara özel durumları ise `min-width` media query'leri içine ekledim.