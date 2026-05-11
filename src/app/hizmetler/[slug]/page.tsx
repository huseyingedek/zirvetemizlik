import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, Star, ChevronRight, Shield, Clock, Award, MessageCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";
import { SERVICES, SITE_NAME, SITE_URL, PHONE, WHATSAPP } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} Hizmeti İstanbul | ${SITE_NAME}`,
    description: `${service.longDesc} İstanbul genelinde profesyonel ${service.title.toLowerCase()} hizmeti. Sigortalı ekip, memnuniyet garantisi. Hemen teklif alın!`,
    keywords: service.keywords,
    alternates: { canonical: `${SITE_URL}/hizmetler/${slug}` },
    openGraph: {
      title: `${service.title} | ${SITE_NAME}`,
      description: service.longDesc,
      url: `${SITE_URL}/hizmetler/${slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

const guarantees = [
  { icon: Shield, label: "Sigortalı Ekip" },
  { icon: Award, label: "%100 Garantili" },
  { icon: Clock, label: "Zamanında Hizmet" },
  { icon: CheckCircle, label: "Gizli Ücret Yok" },
];

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const whatsappMsg = encodeURIComponent(
    `Merhaba! ${service.title} hizmeti hakkında bilgi almak istiyorum.`
  );

  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDesc,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: PHONE,
      address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
    },
    areaServed: { "@type": "City", name: "İstanbul" },
    url: `${SITE_URL}/hizmetler/${slug}`,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.title} - ${SITE_NAME}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <HeroEntrance index={0}>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={13} />
              <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
              <ChevronRight size={13} />
              <span className="text-white font-medium">{service.title}</span>
            </nav>
          </HeroEntrance>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <HeroEntrance index={1}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{service.icon}</span>
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    Profesyonel Hizmet
                  </span>
                </div>
              </HeroEntrance>
              <HeroEntrance index={2} as="h1" className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                {service.title}
              </HeroEntrance>
              <HeroEntrance index={3} as="p" className="text-white/85 text-lg mb-8 max-w-xl leading-relaxed">
                {service.longDesc}
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
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </HeroEntrance>
            </div>

            {/* Sağ: Garanti kartları */}
            <HeroEntrance index={5} className="grid grid-cols-2 gap-3">
              {guarantees.map((g) => (
                <div key={g.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-3">
                  <g.icon size={20} className="text-blue-300 shrink-0" />
                  <span className="text-white text-sm font-semibold">{g.label}</span>
                </div>
              ))}
            </HeroEntrance>
          </div>
        </div>
      </section>

      {/* ── RATING ŞERIDI ── */}
      <div className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-300 text-yellow-300" />)}
            <span className="font-bold ml-1">4.9/5</span>
            <span className="text-blue-200">(200+ Değerlendirme)</span>
          </div>
          <span className="text-blue-400 hidden sm:block">|</span>
          <span className="flex items-center gap-1.5 font-semibold">✅ Gizli Ücret Yok</span>
          <span className="text-blue-400 hidden sm:block">|</span>
          <span className="flex items-center gap-1.5 font-semibold">🏆 10+ Yıl Deneyim</span>
          <span className="text-blue-400 hidden sm:block">|</span>
          <span className="flex items-center gap-1.5 font-semibold">⚡ Aynı Gün Randevu</span>
        </div>
      </div>

      {/* ── ANA İÇERİK ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* ── Sol: İçerik ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Kapsam */}
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
                  {service.title} Hizmetimiz Neleri Kapsar?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <FadeIn key={feature} delay={i * 0.07}>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all group">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-gray-800 font-medium text-sm">{feature}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>

              {/* Süreç */}
              <FadeIn>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
                  {service.title} Sürecimiz Nasıl İşliyor?
                </h2>
                <div className="space-y-4">
                  {[
                    { n: "1", title: "Randevu & Keşif", desc: "Sizi arayarak veya yerinde keşif yaparak ihtiyaçlarınızı belirliyoruz." },
                    { n: "2", title: "Fiyat Teklifi", desc: "Şeffaf ve net fiyatlandırmayla yazılı teklif sunuyoruz. Gizli ücret yok." },
                    { n: "3", title: "Profesyonel Uygulama", desc: "Sigortalı uzman ekibimiz, ISO sertifikalı malzemeleri kullanarak işi tamamlar." },
                    { n: "4", title: "Kalite Kontrolü", desc: "Hizmet sonunda müşteriye teslim öncesi kalite kontrol yapıyoruz." },
                  ].map((step, i) => (
                    <FadeIn key={step.n} delay={i * 0.1} direction="left">
                      <div className="flex gap-4 items-start p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all">
                        <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-extrabold text-sm shrink-0">
                          {step.n}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 mb-0.5">{step.title}</div>
                          <div className="text-gray-500 text-sm leading-relaxed">{step.desc}</div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </FadeIn>

              {/* SEO İçerik */}
              <FadeIn>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
                    Profesyonel {service.title} İçin Doğru Adres
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong className="text-gray-900">Zirve Temizlik</strong> olarak, İstanbul genelinde{" "}
                      {service.title.toLowerCase()} hizmetini en yüksek kalite standartlarında sunuyoruz.
                      10 yılı aşkın sektör deneyimimiz ve uzman ekibimizle, müşterilerimizin her
                      ihtiyacına hızlı ve güvenilir çözümler üretiyoruz.
                    </p>
                    <p>
                      Kullandığımız tüm temizlik malzemeleri çevre dostu ve insan sağlığına duyarlı
                      sertifikalı ürünlerden oluşmaktadır. Personelimiz işe alım sürecinde detaylı
                      güvenlik taramalarından geçirilmekte ve düzenli eğitimlerle güncel tutulmaktadır.
                    </p>
                    <p>
                      İstanbul&apos;un Kadıköy, Beşiktaş, Şişli, Üsküdar, Ataşehir, Bakırköy ve
                      daha pek çok ilçesinde hizmet veriyoruz. {service.title} hizmetimiz için hemen
                      teklif alın — ekibimiz 15 dakika içinde size dönüş yapar.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Müşteri Yorumu */}
              <FadeIn>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-7 border border-yellow-100">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    <span className="font-extrabold text-gray-900 ml-2 text-xl">4.9</span>
                    <span className="text-gray-500 text-sm ml-1">/ 200+ değerlendirme</span>
                  </div>
                  <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-5">
                    &quot;{service.title} için Zirve Temizlik&apos;i tercih ettim ve çok memnun kaldım.
                    Ekip zamanında geldi, titizlikle çalıştı ve sonuç harika oldu. Kesinlikle
                    tavsiye ediyorum.&quot;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AY
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Ayşe Y.</div>
                      <div className="text-gray-500 text-xs">Kadıköy, İstanbul · Doğrulanmış müşteri</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* ── Sağ: Sidebar ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-[120px] space-y-5">

                {/* CTA Kartı */}
                <FadeIn direction="right">
                  <div className="bg-blue-700 text-white rounded-2xl p-6 shadow-xl">
                    <div className="text-center mb-5">
                      <div className="text-4xl font-extrabold mb-1">Ücretsiz</div>
                      <div className="text-blue-200 text-sm">Keşif & Fiyat Teklifi</div>
                    </div>
                    <a
                      href={`tel:${PHONE}`}
                      className="flex items-center justify-center gap-2 bg-white text-blue-700 font-extrabold py-3.5 px-4 rounded-xl hover:bg-blue-50 transition-colors w-full mb-3"
                    >
                      <Phone size={17} />
                      {PHONE}
                    </a>
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 text-white font-extrabold py-3.5 px-4 rounded-xl hover:bg-green-600 transition-colors w-full"
                    >
                      <MessageCircle size={17} />
                      WhatsApp&apos;tan Yaz
                    </a>
                    <div className="mt-5 pt-4 border-t border-blue-600 grid grid-cols-2 gap-2 text-center text-xs text-blue-200">
                      <div>✅ Gizli ücret yok</div>
                      <div>⚡ 15 dk geri dönüş</div>
                      <div>🛡️ Sigortalı ekip</div>
                      <div>🏆 Garanti hizmet</div>
                    </div>
                  </div>
                </FadeIn>

                {/* Teklif Al Linki */}
                <FadeIn direction="right" delay={0.1}>
                  <Link
                    href="/iletisim"
                    className="flex items-center justify-center gap-2 w-full border-2 border-blue-700 text-blue-700 font-bold py-3.5 rounded-xl hover:bg-blue-700 hover:text-white transition-all"
                  >
                    Online Teklif Formu →
                  </Link>
                </FadeIn>

                {/* Bölgeler */}
                <FadeIn direction="right" delay={0.15}>
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <h4 className="font-extrabold text-gray-900 mb-3 text-sm">📍 Hizmet Bölgelerimiz</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {["Kadıköy","Beşiktaş","Şişli","Fatih","Üsküdar","Maltepe","Ataşehir","Bakırköy","Bağcılar","Bahçelievler","Beylikdüzü","Esenyurt"].map((ilce) => (
                        <span key={ilce} className="text-xs bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default">
                          {ilce}
                        </span>
                      ))}
                    </div>
                    <Link href="/hizmet-bolgeleri" className="text-xs text-blue-600 font-semibold mt-3 block hover:underline">
                      Tüm bölgeleri gör →
                    </Link>
                  </div>
                </FadeIn>

                {/* Diğer hizmetler mini */}
                <FadeIn direction="right" delay={0.2}>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <h4 className="font-extrabold text-gray-900 mb-3 text-sm">Diğer Hizmetlerimiz</h4>
                    <div className="space-y-2">
                      {SERVICES.filter((s) => s.slug !== slug).slice(0, 4).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/hizmetler/${s.slug}`}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
                        >
                          <span className="text-lg">{s.icon}</span>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">{s.title}</span>
                          <ChevronRight size={13} className="ml-auto text-gray-400 group-hover:text-blue-500" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── İLGİLİ HİZMETLER ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
              Diğer Hizmetlerimiz
            </h2>
            <p className="text-gray-600">İhtiyacınıza uygun diğer profesyonel çözümlerimiz</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.1}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`${service.title} İçin Hemen Teklif Alın`} />
    </>
  );
}
