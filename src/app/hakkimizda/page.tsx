import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Users, Heart, CheckCircle, Star, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hakkımızda | 10 Yıllık Tecrübe ile Profesyonel Temizlik",
  description:
    "Zirve Temizlik olarak 2014'ten bu yana İstanbul'da profesyonel temizlik hizmeti sunuyoruz. 5.000+ memnun müşteri, sigortalı ekip, %100 memnuniyet garantisi.",
  keywords: [
    "zirve temizlik hakkında",
    "profesyonel temizlik şirketi İstanbul",
    "güvenilir temizlik şirketi",
    "temizlik şirketi kurumsal",
  ],
  alternates: { canonical: `${SITE_URL}/hakkimizda` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  foundingDate: "2014",
  description: "İstanbul'un güvenilir profesyonel temizlik şirketi. 10+ yıl deneyim, 5000+ memnun müşteri.",
  address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
  numberOfEmployees: { "@type": "QuantitativeValue", value: "50" },
};

const teamValues = [
  { icon: Shield, title: "Güvenilirlik", desc: "Tüm personelimiz güvenlik taramasından geçirilmiş, sigortalı ve sözleşmeli profesyonellerdir." },
  { icon: Award, title: "Kalite", desc: "ISO standartlarında temizlik protokolleri uyguluyoruz. Her hizmet sonrası kalite kontrolü yapıyoruz." },
  { icon: Heart, title: "Müşteri Odaklılık", desc: "Müşteri memnuniyeti her şeyin önündedir. %100 memnuniyet garantisi veriyoruz." },
  { icon: Users, title: "Takım Ruhu", desc: "50+ kişilik uzman ekibimiz, sürekli eğitim ve gelişim programlarıyla güncel tutulmaktadır." },
];

const milestones = [
  { year: "2014", event: "Zirve Temizlik, İstanbul'da kuruldu" },
  { year: "2016", event: "500. müşterimize hizmet verdik" },
  { year: "2018", event: "Kurumsal temizlik departmanı kuruldu" },
  { year: "2020", event: "Pandemide ücretsiz dezenfeksiyon kampanyası başlattık" },
  { year: "2022", event: "1.000+ kurumsal müşteri anlaşması imzaladık" },
  { year: "2024", event: "5.000+ memnun müşteriye ulaştık" },
];

const stats = [
  { value: "10+", label: "Yıl Deneyim" },
  { value: "5.000+", label: "Mutlu Müşteri" },
  { value: "50+", label: "Uzman Personel" },
  { value: "%100", label: "Memnuniyet" },
];

export default function HakkimizdaPage() {
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
            src="/images/hero.jpg"
            alt="Zirve Temizlik ekibi - hakkımızda"
            fill
            className="object-cover object-top"
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
              <span className="text-white font-medium">Hakkımızda</span>
            </nav>
          </HeroEntrance>
          <HeroEntrance index={1} as="h1" className="text-4xl md:text-5xl font-extrabold text-white">
            Hakkımızda
          </HeroEntrance>
          <HeroEntrance index={2} as="p" className="text-white/80 text-lg mt-2 max-w-2xl">
            2014&apos;ten bu yana İstanbul&apos;da temizlik sektöründe güven ve kaliteyi bir arada sunuyoruz.
          </HeroEntrance>
        </div>
      </section>

      {/* ── İSTATİSTİKLER ── */}
      <section className="bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-8 px-4">
                <div className="text-3xl md:text-4xl font-extrabold text-white">
                  <AnimatedCounter value={s.value} />
                </div>
                <div className="text-blue-200 text-sm font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HİKAYEMİZ ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Görsel */}
            <FadeIn direction="left" className="relative rounded-2xl overflow-hidden shadow-2xl h-[460px]">
              <Image
                src="/images/ekip.jpg"
                alt="Zirve Temizlik profesyonel ekip"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-sm font-bold text-gray-900 ml-1">4.9/5</span>
                </div>
                <p className="text-gray-700 text-sm italic">
                  &quot;10 yıldır kullanıyoruz, her zaman aynı titizlik.&quot;
                </p>
                <p className="text-gray-500 text-xs mt-1">— Kurumsal Müşteri, Şişli</p>
              </div>
            </FadeIn>

            {/* İçerik */}
            <FadeIn direction="right" delay={0.1}>
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Hikayemiz
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                10 Yıldır İstanbul&apos;u Temizliyoruz
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                2014 yılında küçük bir ekip olarak yola çıktık. Tek hedefimiz vardı: İstanbul
                halkına gerçekten güvenebilecekleri, kaliteli ve profesyonel bir temizlik hizmeti sunmak.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Bugün 50&apos;yi aşkın uzman çalışanımız, 5.000&apos;den fazla memnun müşterimiz
                ve İstanbul&apos;un her ilçesine uzanan hizmet ağımızla sektörün önde gelen
                temizlik şirketlerinden biri haline geldik.
              </p>

              {/* Değerlerimiz */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {teamValues.map((val, i) => (
                  <FadeIn key={val.title} delay={i * 0.08}>
                  <div
                    className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <val.icon size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{val.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed mt-0.5">{val.desc}</div>
                    </div>
                  </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── TARİHÇE ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Büyüme Sürecimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Tarihçemiz</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Dikey çizgi */}
              <div className="absolute left-6 top-3 bottom-3 w-0.5 bg-blue-200" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <FadeIn key={m.year} delay={i * 0.1} direction="left">
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-extrabold text-xs shrink-0 z-10 shadow-md">
                      {m.year}
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1 mt-1">
                      <p className="text-gray-800 font-semibold text-sm">{m.event}</p>
                    </div>
                  </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERTİFİKALAR ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Belgelerimiz
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">Sertifikalar ve Belgeler</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {[
              { label: "ISO 9001:2015", sub: "Kalite Yönetimi" },
              { label: "OHSAS 18001", sub: "İş Güvenliği" },
              { label: "Eko Sertifika", sub: "Çevre Dostu" },
              { label: "Ticaret Odası", sub: "Üyelik Belgesi" },
            ].map((cert) => (
              <div
                key={cert.label}
                className="flex flex-col items-center justify-center p-6 bg-blue-50 border-2 border-blue-100 rounded-2xl text-center hover:border-blue-400 transition-colors"
              >
                <CheckCircle size={32} className="text-blue-600 mb-3" />
                <div className="font-extrabold text-gray-900 text-sm">{cert.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{cert.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Zirve Temizlik Ailesine Katılın"
        subtitle="5.000+ memnun müşteri ile güvenilir ve kaliteli temizlik hizmetini deneyimleyin."
      />
    </>
  );
}
