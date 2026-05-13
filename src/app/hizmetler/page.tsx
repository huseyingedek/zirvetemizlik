import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";
import AnimatedServiceCard from "@/components/animations/AnimatedServiceCard";
import { SERVICES, SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Profesyonel Temizlik Çözümleri",
  description:
    "Zirve Temizlik olarak ev temizliği, ofis temizliği, derin temizlik, inşaat sonrası temizlik, cam temizliği ve halı yıkama hizmetleri sunuyoruz. İstanbul genelinde hizmet.",
  keywords: [
    "temizlik hizmetleri İstanbul",
    "ev temizliği",
    "ofis temizliği",
    "derin temizlik",
    "inşaat sonrası temizlik",
    "cam temizliği",
    "halı yıkama",
    "koltuk yıkama",
  ],
  alternates: { canonical: `${SITE_URL}/hizmetler` },
  openGraph: {
    title: `Hizmetlerimiz | ${SITE_NAME}`,
    description: "Profesyonel temizlik hizmetleri. Ev, ofis, derin temizlik ve daha fazlası.",
    url: `${SITE_URL}/hizmetler`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zirve Temizlik Hizmetleri",
  numberOfItems: SERVICES.length,
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    description: s.shortDesc,
    url: `${SITE_URL}/hizmetler/${s.slug}`,
  })),
};

const standards = [
  "ISO sertifikalı temizlik ürünleri",
  "Sigortalı ve eğitimli personel",
  "Zamanında ve randevuya sadık hizmet",
  "%100 memnuniyet garantisi",
  "Çevre ve insan sağlığına duyarlı malzemeler",
  "Şeffaf fiyatlandırma, gizli ücret yok",
  "Hizmet sonrası kalite kontrolü",
  "7/24 müşteri destek hattı",
];

export default function HizmetlerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative h-72 md:h-96 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/hizmetler-hero2.jpg"
            alt="Profesyonel temizlik hizmetleri - Zirve Temizlik"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <HeroEntrance index={0}>
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">Hizmetlerimiz</span>
            </nav>
          </HeroEntrance>
          <HeroEntrance index={1} as="h1" className="text-4xl md:text-5xl font-extrabold text-white">Hizmetlerimiz</HeroEntrance>
          <HeroEntrance index={2} as="p" className="text-white/80 text-lg mt-2 max-w-2xl">
            Ev temizliğinden kurumsal ofis temizliğine, inşaat sonrasından özel çözümlere kadar
            tüm ihtiyaçlarınız için profesyonel ekibimiz hazır.
          </HeroEntrance>
        </div>
      </section>

      {/* ── HİZMET KARTLARI ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service, index) => (
              <AnimatedServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARTLARIMIZ ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-6xl mx-auto">
            <FadeIn direction="right">
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Kalite Güvencesi
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
                Tüm Hizmetlerimizde Uygulanan Standartlar
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Hangi hizmeti seçerseniz seçin, aşağıdaki standartları daima uyguluyoruz.
                Kalite ve güven bizim için pazarlık konusu değildir.
              </p>
              <Link href="/iletisim" className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-800 transition-colors">
                Ücretsiz Teklif Al <ArrowRight size={18} />
              </Link>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {standards.map((item, i) => (
                <FadeIn key={item} delay={i * 0.06}>
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors"
                >
                  <CheckCircle size={20} className="text-green-500 shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HİZMET BÖLGELERİ BANDI ── */}
      <section className="py-10 bg-blue-700">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white">
            <div className="font-bold text-xl">İstanbul&apos;un Tüm İlçelerinde Hizmet</div>
            <div className="text-blue-200 text-sm mt-1">Kadıköy, Beşiktaş, Üsküdar, Ataşehir ve daha fazlası</div>
          </div>
          <Link
            href="/hizmet-bolgeleri"
            className="shrink-0 bg-white text-blue-700 font-bold py-2.5 px-6 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Hizmet Bölgelerimiz →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
