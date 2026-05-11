import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ChevronRight, Clock, Shield, CheckCircle, Star } from "lucide-react";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { SITE_NAME, SITE_URL, PHONE, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hizmet Bölgelerimiz | İstanbul Tüm İlçeler Temizlik Hizmeti",
  description:
    "Zirve Temizlik olarak İstanbul'un tüm ilçelerinde profesyonel temizlik hizmeti sunuyoruz. Kadıköy, Beşiktaş, Şişli, Üsküdar, Ataşehir ve daha fazlası. Hemen teklif alın!",
  keywords: [
    "İstanbul temizlik hizmeti",
    "Kadıköy temizlik",
    "Beşiktaş temizlik",
    "Şişli temizlik şirketi",
    "Üsküdar temizlik",
    "Ataşehir temizlik",
    "Beylikdüzü temizlik",
    "İstanbul geneli temizlik",
  ],
  alternates: { canonical: `${SITE_URL}/hizmet-bolgeleri` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  areaServed: [
    "Kadıköy", "Beşiktaş", "Şişli", "Fatih", "Üsküdar", "Maltepe",
    "Ataşehir", "Bakırköy", "Bağcılar", "Bahçelievler", "Beylikdüzü",
    "Esenyurt", "Pendik", "Kartal", "Tuzla", "Ümraniye", "Başakşehir",
  ].map((name) => ({ "@type": "City", name })),
};

const avrupaYakasi = [
  { name: "Beşiktaş", desc: "Aynı gün ev ve ofis temizliği", fast: true },
  { name: "Şişli", desc: "Rezidans ve iş yeri temizliği", fast: true },
  { name: "Bakırköy", desc: "Konut ve site temizliği", fast: true },
  { name: "Bağcılar", desc: "Merkez bölgemiz, en hızlı hizmet", fast: true },
  { name: "Bahçelievler", desc: "Ev ve daire temizliği", fast: true },
  { name: "Fatih", desc: "Tarihi yarımada temizlik hizmetleri", fast: false },
  { name: "Beylikdüzü", desc: "Site ve konut projeleri", fast: false },
  { name: "Esenyurt", desc: "Büyük konut kompleksleri", fast: false },
  { name: "Başakşehir", desc: "Modern site ve rezidanslar", fast: false },
  { name: "Sultangazi", desc: "Uygun fiyatlı paketler", fast: false },
  { name: "Arnavutköy", desc: "İnşaat sonrası ve ev temizliği", fast: false },
  { name: "Silivri", desc: "Randevulu temizlik hizmeti", fast: false },
];

const anadoluYakasi = [
  { name: "Kadıköy", desc: "Yoğun talep bölgemiz, aynı gün hizmet", fast: true },
  { name: "Üsküdar", desc: "Ev, villa ve ofis temizliği", fast: true },
  { name: "Ataşehir", desc: "Rezidans ve kurumsal hizmetler", fast: true },
  { name: "Maltepe", desc: "Hızlı ekip desteği", fast: true },
  { name: "Kartal", desc: "Kapsamlı konut temizliği", fast: false },
  { name: "Pendik", desc: "Aynı gün ekip kalkışı", fast: false },
  { name: "Tuzla", desc: "Fabrika, ofis ve konut", fast: false },
  { name: "Ümraniye", desc: "Kurumsal ve bireysel", fast: false },
  { name: "Sancaktepe", desc: "Yeni konut projelerine özel", fast: false },
  { name: "Çekmeköy", desc: "Villa ve müstakil evler", fast: false },
];

const stats = [
  { value: "39", label: "Hizmet İlçesi" },
  { value: "5000+", label: "Tamamlanan İş" },
  { value: "45", label: "Dakika Ortalama Yol" },
  { value: "7/24", label: "Randevu Hattı" },
];

export default function HizmetBolgeleriPage() {
  const whatsappMsg = encodeURIComponent(
    "Merhaba! Bölgemde temizlik hizmeti almak istiyorum, teklif alabilir miyim?"
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/bolge-hero1.jpg"
            alt="İstanbul geneli profesyonel temizlik hizmeti"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/25" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <HeroEntrance index={0}>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-5">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={13} />
              <span className="text-white font-medium">Hizmet Bölgelerimiz</span>
            </nav>
          </HeroEntrance>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <HeroEntrance index={1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    İstanbul Geneli Hizmet
                  </span>
                </div>
              </HeroEntrance>
              <HeroEntrance index={2} as="h1" className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Hizmet Bölgelerimiz
              </HeroEntrance>
              <HeroEntrance index={3} as="p" className="text-white/85 text-lg mb-8 max-w-xl leading-relaxed">
                İstanbul&apos;un Avrupa ve Anadolu yakasındaki tüm ilçelere profesyonel temizlik
                hizmeti sunuyoruz. Bulunduğunuz ilçeyi seçin, ekibimiz yanınızda olsun.
              </HeroEntrance>
              <HeroEntrance index={4} className="flex flex-wrap gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-7 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
                >
                  <Phone size={18} />
                  Hemen Ara
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 px-7 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
                >
                  WhatsApp&apos;tan Yaz
                </a>
              </HeroEntrance>
            </div>

            {/* Sağ: mini güven kartları */}
            <HeroEntrance index={5} className="grid grid-cols-2 gap-3">
              {[
                { icon: Clock, label: "Aynı Gün Hizmet", sub: "Merkezi ilçelere" },
                { icon: Shield, label: "Sigortalı Ekip", sub: "Tüm bölgelerde" },
                { icon: CheckCircle, label: "Gizli Ücret Yok", sub: "Şeffaf fiyat" },
                { icon: Star, label: "4.9/5 Puan", sub: "200+ yorum" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
                >
                  <item.icon size={20} className="text-blue-300 mb-2" />
                  <div className="text-white font-bold text-sm">{item.label}</div>
                  <div className="text-white/60 text-xs mt-0.5">{item.sub}</div>
                </div>
              ))}
            </HeroEntrance>
          </div>
        </div>
      </section>

      {/* ── İSTATİSTİK ŞERIDI ── */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-6 px-4">
                <div className="text-2xl md:text-3xl font-extrabold">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-blue-200 text-xs font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── AVRUPA YAKASI ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-12 bg-blue-600 rounded-full shrink-0" />
            <div>
              <div className="text-xs text-blue-600 font-bold uppercase tracking-wider mb-1">
                Avrupa Yakası
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Avrupa Yakası Hizmet Bölgelerimiz
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {avrupaYakasi.map((d, i) => (
              <FadeIn key={d.name} delay={(i % 4) * 0.08}>
                <div className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-700 transition-colors duration-300">
                      <MapPin size={18} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-extrabold text-gray-900 group-hover:text-blue-700 transition-colors text-sm">
                          {d.name}
                        </h3>
                        {d.fast && (
                          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                            ⚡ Hızlı
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed mb-2">{d.desc}</p>
                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex items-center gap-1 text-blue-600 text-xs font-bold hover:text-blue-800 transition-colors"
                      >
                        <Phone size={10} />
                        Teklif Al
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANADOLU YAKASI ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="flex items-center gap-4 mb-10">
            <div className="w-1.5 h-12 bg-orange-500 rounded-full shrink-0" />
            <div>
              <div className="text-xs text-orange-600 font-bold uppercase tracking-wider mb-1">
                Anadolu Yakası
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Anadolu Yakası Hizmet Bölgelerimiz
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {anadoluYakasi.map((d, i) => (
              <FadeIn key={d.name} delay={(i % 4) * 0.08}>
                <div className="group bg-gray-50 rounded-2xl p-5 shadow-sm border border-gray-100 hover:border-orange-300 hover:shadow-lg hover:bg-white transition-all h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                      <MapPin size={18} className="text-orange-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-extrabold text-gray-900 group-hover:text-orange-600 transition-colors text-sm">
                          {d.name}
                        </h3>
                        {d.fast && (
                          <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                            ⚡ Hızlı
                          </span>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed mb-2">{d.desc}</p>
                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex items-center gap-1 text-orange-600 text-xs font-bold hover:text-orange-800 transition-colors"
                      >
                        <Phone size={10} />
                        Teklif Al
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SÜREÇ: NASIL ULAŞIRIZ ── */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-extrabold mb-3">Bölgenize Nasıl Hizmet Veriyoruz?</h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              İstanbul&apos;un her noktasına organize, zamanında ve kaliteli hizmet
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { n: "1", emoji: "📞", title: "Arayın veya Yazın", desc: "Telefon, WhatsApp veya online form ile bize ulaşın." },
              { n: "2", emoji: "📍", title: "Bölgenizi Bildirin", desc: "İlçenizi söyleyin, ekibimizin size mesafesini hesaplayalım." },
              { n: "3", emoji: "💰", title: "Fiyat Alın", desc: "Şeffaf ve net fiyat teklifimizi hemen iletiyoruz." },
              { n: "4", emoji: "🚐", title: "Ekip Yola Çıkar", desc: "Belirlenen saatte ekibimiz bölgenizde kapınızda." },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.12}>
                <div className="text-center">
                  <div className="text-4xl mb-3">{step.emoji}</div>
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 font-extrabold text-sm">
                    {step.n}
                  </div>
                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO İÇERİK ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <FadeIn direction="left">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5">
                İstanbul Geneli Profesyonel Temizlik Hizmeti
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Zirve Temizlik</strong> olarak 2014 yılından
                  bu yana İstanbul&apos;un tamamında profesyonel temizlik hizmeti veriyoruz.
                  Anadolu yakası ve Avrupa yakasındaki tüm ilçelere hizmet götüren ekibimiz,
                  zamanında ve kaliteli iş çıkarmayı ilke edinmiştir.
                </p>
                <p>
                  Kadıköy, Beşiktaş, Şişli, Bakırköy gibi merkezi ilçelerde{" "}
                  <strong className="text-gray-900">aynı gün hizmet</strong> sağlayabiliyoruz.
                  Uzak ilçeler için ise randevulu sistem ile organize oluyoruz.
                </p>
                <p>
                  Her ilçede aynı kalite standardı uygulanmaktadır. Sigortalı personelimiz,
                  ISO sertifikalı temizlik ürünlerimiz ve %100 memnuniyet garantimizle
                  İstanbul&apos;un güvenilir temizlik markasıyız.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Sigortalı ve eğitimli ekip",
                  "ISO sertifikalı ürünler",
                  "Aynı gün randevu imkânı",
                  "%100 memnuniyet garantisi",
                  "Şeffaf fiyatlandırma",
                  "7/24 iletişim hattı",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-green-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <h3 className="font-extrabold text-gray-900 text-lg mb-5">
                  📍 Hizmet Verdiğimiz Tüm İlçeler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Kadıköy","Beşiktaş","Şişli","Fatih","Üsküdar","Maltepe",
                    "Ataşehir","Bakırköy","Bağcılar","Bahçelievler","Beylikdüzü",
                    "Esenyurt","Pendik","Kartal","Tuzla","Sancaktepe","Ümraniye",
                    "Çekmeköy","Sultanbeyli","Silivri","Arnavutköy","Başakşehir",
                    "Sultangazi","Gaziosmanpaşa","Esenler","Güngören","Zeytinburnu",
                    "Kağıthane","Sarıyer","Beykoz","Adalar","Eyüpsultan",
                  ].map((ilce) => (
                    <span
                      key={ilce}
                      className="bg-blue-50 text-blue-700 border border-blue-100 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-blue-700 hover:text-white transition-colors cursor-default"
                    >
                      {ilce}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-3">
                  <a
                    href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors text-sm"
                  >
                    <Phone size={16} />
                    Bölgenizde Teklif Alın
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors text-sm"
                  >
                    WhatsApp&apos;tan Yazın
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection
        title="Bölgenizde Hizmet Alın"
        subtitle="İstanbul'un Avrupa ve Anadolu yakasının tüm ilçelerinde hizmetinizdeyiz. Hemen arayın!"
      />
    </>
  );
}
