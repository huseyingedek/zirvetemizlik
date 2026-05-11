import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star, Shield, Award, Camera } from "lucide-react";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import GaleriClient from "./GaleriClient";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Galeri | Temizlik Öncesi ve Sonrası Fotoğraflar",
  description:
    "Zirve Temizlik galeri sayfası. Ev temizliği, ofis temizliği, derin temizlik ve inşaat sonrası temizlik profesyonel çalışma fotoğrafları. Kalitemizi görün!",
  keywords: [
    "temizlik öncesi sonrası",
    "profesyonel temizlik fotoğrafları",
    "ev temizliği galeri",
    "ofis temizliği galeri",
    "zirve temizlik galeri",
  ],
  alternates: { canonical: `${SITE_URL}/galeri` },
  openGraph: {
    title: `Galeri | ${SITE_NAME}`,
    description: "Profesyonel temizlik çalışmalarımızdan fotoğraflar.",
    url: `${SITE_URL}/galeri`,
  },
};

const stats = [
  { value: "5000+", label: "Tamamlanan Proje" },
  { value: "12+", label: "Fotoğraf Kategorisi" },
  { value: "4.9", label: "Ortalama Puan" },
  { value: "10+", label: "Yıl Deneyim" },
];

export default function GaleriPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Zirve Temizlik profesyonel çalışmalar galeri"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <HeroEntrance index={0}>
            <nav className="flex items-center gap-2 text-white/50 text-sm mb-5">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={13} />
              <span className="text-white font-medium">Galeri</span>
            </nav>
          </HeroEntrance>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div>
              <HeroEntrance index={1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Camera size={24} className="text-white" />
                  </div>
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                    5.000+ Başarılı İş
                  </span>
                </div>
              </HeroEntrance>
              <HeroEntrance index={2} as="h1" className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                Galeri
              </HeroEntrance>
              <HeroEntrance index={3} as="p" className="text-white/85 text-lg leading-relaxed max-w-xl">
                Tamamladığımız temizlik projelerinden örnekler. Ev temizliğinden ofis
                temizliğine, cam temizliğinden inşaat sonrası temizliğe — kalitemizi
                fotoğraflarla kendiniz görün.
              </HeroEntrance>
            </div>

            {/* Sağ: Puan kartları */}
            <HeroEntrance index={4} className="grid grid-cols-2 gap-3">
              {[
                { icon: Star, label: "4.9/5 Müşteri Puanı", sub: "200+ değerlendirme" },
                { icon: Shield, label: "Sigortalı Hizmet", sub: "Her projede" },
                { icon: Award, label: "%100 Memnuniyet", sub: "Garanti ile" },
                { icon: Camera, label: "Gerçek Fotoğraflar", sub: "Müşteri onaylı" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
                >
                  <item.icon size={20} className="text-yellow-300 mb-2" />
                  <div className="text-white font-bold text-sm leading-tight">{item.label}</div>
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

      {/* ── GALERİ (Client Component — Filtre + Animasyon) ── */}
      <GaleriClient />

      {/* ── MÜŞTERİ YORUMU ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-2 font-extrabold text-gray-900 text-xl">4.9</span>
                <span className="text-gray-500 text-sm ml-1">(248 değerlendirme)</span>
              </div>
              <blockquote className="text-gray-700 text-xl leading-relaxed italic mb-6">
                &quot;Fotoğraflarda gördüğüm kaliteyi gerçekte de yaşadım. Ekip son derece
                profesyoneldi ve ev tertemiz oldu. Zirve Temizlik&apos;i herkese tavsiye
                ediyorum.&quot;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-extrabold">
                  SY
                </div>
                <div>
                  <div className="font-bold text-gray-900">Selin Y.</div>
                  <div className="text-gray-500 text-sm">Ataşehir, İstanbul · Ev Temizliği</div>
                </div>
                <div className="ml-auto">
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    ✅ Doğrulanmış Müşteri
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Siz de Bu Kaliteyi Yaşayın"
        subtitle="Fotoğraflarda gördüğünüz profesyonelliği evinizde veya iş yerinizde deneyimleyin. Ücretsiz teklif alın!"
      />
    </>
  );
}
