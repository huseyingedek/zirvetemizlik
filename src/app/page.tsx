import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Star, Shield, Clock, Award, Users, ArrowRight, Phone, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import AnimatedServiceCard from "@/components/animations/AnimatedServiceCard";
import { SERVICES, SITE_NAME, SITE_URL, PHONE, WHATSAPP } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | İstanbul Profesyonel Temizlik Hizmetleri`,
  description:
    "İstanbul'un güvenilir profesyonel temizlik şirketi Zirve Temizlik. Ev temizliği, ofis temizliği, derin temizlik, inşaat sonrası temizlik. Hemen teklif alın!",
  keywords: [
    "profesyonel temizlik İstanbul",
    "temizlik şirketi",
    "ev temizliği İstanbul",
    "ofis temizliği İstanbul",
    "zirve temizlik",
  ],
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "İstanbul'un güvenilir profesyonel temizlik şirketi. Ev, ofis, derin temizlik ve daha fazlası.",
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+90-532-546-61-63",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hicret Mah. Taşkın Sok. No:25/3",
    addressLocality: "Arnavutköy",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "248",
  },
};

const stats = [
  { icon: Users, value: "5.000+", label: "Mutlu Müşteri" },
  { icon: Award, value: "10+", label: "Yıl Deneyim" },
  { icon: Shield, value: "%100", label: "Memnuniyet Garantisi" },
  { icon: Clock, value: "7/24", label: "Destek Hattı" },
];

const testimonials = [
  {
    name: "Ayşe K.",
    location: "Kadıköy",
    rating: 5,
    text: "Harika bir deneyimdi! Evim öncesinde inanılmaz bir kirlilikti, şimdi pırıl pırıl. Ekip çok profesyonel ve zamanında geldi.",
    initials: "AK",
  },
  {
    name: "Mehmet Y.",
    location: "Beşiktaş",
    rating: 5,
    text: "Ofisimiz için aylık temizlik anlaşması yaptık. Her seferinde aynı kalite ve titizlik. Kesinlikle tavsiye ediyorum.",
    initials: "MY",
  },
  {
    name: "Fatma Ö.",
    location: "Üsküdar",
    rating: 5,
    text: "İnşaat sonrası temizlik için çok endişeliydim ama Zirve Temizlik her şeyi mükemmel halletti. Fiyat-performans çok iyi.",
    initials: "FÖ",
  },
  {
    name: "Ali R.",
    location: "Şişli",
    rating: 5,
    text: "Halı ve koltuk yıkama hizmetinden çok memnun kaldım. Makineli yıkama sonrası tamamen temizlendi, koku da gitti.",
    initials: "AR",
  },
];

const whyUs = [
  {
    icon: Shield,
    title: "Sigortalı & Güvenilir",
    desc: "Tüm personelimiz güvenlik taramasından geçirilmiş, sigortalı profesyonellerdir.",
    color: "blue",
  },
  {
    icon: Award,
    title: "%100 Memnuniyet",
    desc: "Memnun kalmazsanız ücretsiz yeniden temizlik. Kalite garantisi veriyoruz.",
    color: "green",
  },
  {
    icon: Clock,
    title: "Zamanında Hizmet",
    desc: "Belirtilen saatte kapınızdayız. 7/24 randevu imkânı sunuyoruz.",
    color: "orange",
  },
  {
    icon: CheckCircle,
    title: "Eko-Dostu Ürünler",
    desc: "Çevre ve sağlığa duyarlı, sertifikalı temizlik ürünleri kullanıyoruz.",
    color: "teal",
  },
];

export default function HomePage() {
  const whatsappMsg = encodeURIComponent(
    "Merhaba! Temizlik hizmeti hakkında bilgi almak istiyorum."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[88vh] flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=75"
            alt="Profesyonel temizlik hizmeti - Zirve Temizlik İstanbul"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        </div>

        {/* Content — tam orta */}
        <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center text-center">
          {/* Rating badge */}
          <HeroEntrance index={0} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
            <Star size={14} className="fill-yellow-300 text-yellow-300" />
            4.9 Puan · 248 Memnun Müşteri · İstanbul Geneli
          </HeroEntrance>

          <HeroEntrance index={1} as="h1" className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-4xl">
            Zirve Temizlik ile{" "}
            <span className="text-blue-400">Hızlı Randevu</span>{" "}
            ve Aynı Gün Ekip Desteği
          </HeroEntrance>

          <HeroEntrance index={2} as="p" className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
            Ev, ofis, villa ve tadilat sonrası temizlik hizmetlerinde WhatsApp ve telefon
            üzerinden hemen teklif alın. Sigortalı ekip, gizli ücret yok.
          </HeroEntrance>

          {/* CTA Buttons */}
          <HeroEntrance index={3} className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              <Phone size={20} />
              HEMEN ARA
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.998 0C5.374 0 .007 5.367.007 11.993c0 2.116.554 4.103 1.523 5.83L.025 24l6.335-1.663a11.956 11.956 0 005.638 1.423h.005c6.623 0 11.992-5.367 11.992-11.993C23.995 5.367 18.622 0 11.998 0zm0 21.93a9.918 9.918 0 01-5.058-1.379l-.362-.215-3.761.987 1.004-3.663-.236-.376a9.908 9.908 0 01-1.519-5.288c0-5.478 4.462-9.941 9.938-9.941 5.478 0 9.936 4.463 9.936 9.941-.001 5.478-4.46 9.934-9.942 9.934z" />
              </svg>
              WHATSAPP YAZ
            </a>
          </HeroEntrance>

          {/* Trust badges */}
          <HeroEntrance index={4} className="flex flex-wrap justify-center gap-3">
            {[
              "✅ Sigortalı Ekip",
              "✅ Gizli Ücret Yok",
              "✅ Aynı Gün Hizmet",
              "✅ %100 Memnuniyet Garantisi",
            ].map((b) => (
              <span
                key={b}
                className="bg-white/15 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full font-medium border border-white/20"
              >
                {b}
              </span>
            ))}
          </HeroEntrance>
        </div>
      </section>

      {/* ─── İSTATİSTİK ŞERIDI ─── */}
      <section className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/20">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-6 py-3">
                <stat.icon size={22} className="mx-auto mb-1.5 text-blue-200" />
                <div className="text-2xl md:text-3xl font-extrabold">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-blue-200 text-xs mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HİZMETLERİMİZ ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Profesyonel Çözümler
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Sunduğumuz Hizmetler
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Evinizden ofisinize, inşaatından halınıza — tüm temizlik ihtiyaçlarınız için
              profesyonel ekibimiz hazır.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <AnimatedServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>

          <FadeIn className="text-center mt-10" delay={0.2}>
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 font-bold py-3 px-8 rounded-xl hover:bg-blue-700 hover:text-white transition-all hover:gap-3"
            >
              Tüm Hizmetleri Gör <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── NEDEN BİZ ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Sol: Görsel */}
            <FadeIn direction="left" className="relative rounded-2xl overflow-hidden shadow-2xl h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
                alt="Profesyonel temizlik ekibi - Zirve Temizlik"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Üzerine bindirme kart */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-700 rounded-xl flex items-center justify-center text-white font-black text-lg">
                    10+
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base">
                      Yıllık Sektör Deneyimi
                    </div>
                    <div className="text-gray-500 text-sm">
                      5.000+ memnun müşteri referansıyla
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Sağ: İçerik */}
            <FadeIn direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Neden Zirve Temizlik?
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
                İstanbul&apos;un Güvenilir Temizlik Partneri
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                2014&apos;ten bu yana binlerce müşteriye profesyonel temizlik hizmeti sunuyoruz.
                Sigortalı ekibimiz, kaliteli malzemelerimiz ve memnuniyet garantimizle fark
                yaratıyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        item.color === "blue"
                          ? "bg-blue-100"
                          : item.color === "green"
                          ? "bg-green-100"
                          : item.color === "orange"
                          ? "bg-orange-100"
                          : "bg-teal-100"
                      }`}
                    >
                      <item.icon
                        size={20}
                        className={
                          item.color === "blue"
                            ? "text-blue-600"
                            : item.color === "green"
                            ? "text-green-600"
                            : item.color === "orange"
                            ? "text-orange-600"
                            : "text-teal-600"
                        }
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl hover:bg-blue-800 transition-colors"
                >
                  <Phone size={18} />
                  Hemen Ara
                </a>
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 font-bold py-3.5 px-6 rounded-xl hover:border-blue-600 hover:text-blue-700 transition-colors"
                >
                  Hakkımızda <ChevronRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── NASIL ÇALIŞIYORUZ ─── */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Süreç
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Nasıl Çalışıyoruz?</h2>
            <p className="text-blue-100 text-lg max-w-xl mx-auto">
              4 basit adımda profesyonel temizlik hizmeti
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {[
              { step: "01", title: "Bizi Arayın", desc: "Telefon veya WhatsApp ile iletişime geçin." },
              { step: "02", title: "Randevu Alın", desc: "Size en uygun gün ve saati belirleyin." },
              { step: "03", title: "Ekip Gelir", desc: "Profesyonel ekibimiz kapınızda hazır olur." },
              { step: "04", title: "Pırıl Pırıl", desc: "Memnun kalmadıysanız ücretsiz yeniden." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.15} direction="up" className="relative text-center px-6 py-6">
                {i < 3 && (
                  <div className="hidden md:block absolute top-9 right-0 w-1/2 h-0.5 bg-white/20" />
                )}
                <div className="w-16 h-16 bg-white/20 border-2 border-white/30 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MÜŞTERİ YORUMLARI ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Referanslarımız
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Müşterilerimiz Ne Diyor?
            </h2>
            <div className="flex items-center justify-center gap-1.5 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="currentColor" />
              ))}
              <span className="text-gray-700 font-bold ml-2 text-lg">4.9</span>
              <span className="text-gray-500 text-sm">(248 değerlendirme)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1} direction="up">
              <div
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.location}, İstanbul</div>
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HİZMET BÖLGELERİ ─── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
              Hizmet Bölgemiz
            </h2>
            <p className="text-gray-600 mb-8">
              İstanbul&apos;un tüm ilçelerine profesyonel temizlik hizmeti sunuyoruz.
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 text-blue-700 text-lg font-bold px-8 py-4 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              İstanbul Geneli
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── BLOG ─── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                Bilgi Merkezi
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                Son Yazılarımız
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Tüm Yazılar <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ev Temizliğinde Doğal Yöntemler",
                excerpt: "Kimyasalsız, doğal ürünlerle evinizi temizleyin.",
                category: "İpuçları",
                date: "15 Nis 2026",
                slug: "ev-temizliginde-dogal-yontemler",
                img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "Ofis Temizliği Neden Bu Kadar Önemli?",
                excerpt: "Temiz ofis = verimli çalışan. Araştırmalar ne diyor?",
                category: "Kurumsal",
                date: "28 Mar 2026",
                slug: "ofis-temizligi-neden-onemli",
                img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
              },
              {
                title: "İnşaat Sonrası Temizlik Rehberi",
                excerpt: "Tadilat bitti, şimdi ne yapmalısınız? Adım adım anlattık.",
                category: "Rehber",
                date: "10 Mar 2026",
                slug: "insaat-sonrasi-temizlik-rehberi",
                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
              },
            ].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-gray-400 text-xs mb-2">{post.date}</div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
