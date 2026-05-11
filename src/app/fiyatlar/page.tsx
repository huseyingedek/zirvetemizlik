import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, X, Phone, ChevronRight, Shield, Star } from "lucide-react";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";
import { SITE_NAME, SITE_URL, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Fiyat Listesi | Şeffaf ve Uygun Temizlik Fiyatları",
  description:
    "Zirve Temizlik fiyat listesi. Ev temizliği, ofis temizliği, derin temizlik, halı yıkama fiyatları. Uygun fiyat garantisi. Hemen teklif alın!",
  keywords: [
    "temizlik fiyatları İstanbul",
    "ev temizliği fiyat",
    "ofis temizliği ücret",
    "derin temizlik maliyeti",
    "halı yıkama fiyat",
  ],
  alternates: { canonical: `${SITE_URL}/fiyatlar` },
};

const pricingPlans = [
  {
    name: "Temel",
    subtitle: "1+1 Daire",
    price: "₺599",
    priceNote: "Tek seferlik",
    popular: false,
    features: [
      { text: "Banyo ve Tuvalet Temizliği", ok: true },
      { text: "Mutfak Tezgah ve Lavabo", ok: true },
      { text: "Zemin Süpürme ve Silme", ok: true },
      { text: "Toz Alma (Genel)", ok: true },
      { text: "Cam Temizliği", ok: false },
      { text: "Fırın Temizliği", ok: false },
      { text: "Derin Dezenfeksiyon", ok: false },
    ],
  },
  {
    name: "Standart",
    subtitle: "2+1 Daire",
    price: "₺899",
    priceNote: "En Çok Tercih Edilen",
    popular: true,
    features: [
      { text: "Banyo ve Tuvalet Derin Temizliği", ok: true },
      { text: "Mutfak, Fırın, Lavabo", ok: true },
      { text: "Zemin Yıkama ve Cila", ok: true },
      { text: "Detaylı Toz Alma", ok: true },
      { text: "Cam ve Pencere Temizliği", ok: true },
      { text: "Dolap Üstleri ve Raflar", ok: true },
      { text: "Derin Dezenfeksiyon", ok: false },
    ],
  },
  {
    name: "Premium",
    subtitle: "3+1 Daire",
    price: "₺1.399",
    priceNote: "Tam Paket",
    popular: false,
    features: [
      { text: "Tüm Standart Hizmetler", ok: true },
      { text: "Derin Dezenfeksiyon", ok: true },
      { text: "Buzdolabı İçi Temizliği", ok: true },
      { text: "Balkon / Teras Temizliği", ok: true },
      { text: "Perde Silimi", ok: true },
      { text: "Havalandırma Izgaraları", ok: true },
      { text: "Ücretsiz Yeniden Temizlik Garantisi", ok: true },
    ],
  },
];

const additionalServices = [
  { name: "Halı Yıkama", unit: "m² başına", price: "₺25" },
  { name: "Koltuk Yıkama", unit: "kişilik başına", price: "₺150" },
  { name: "Cam Temizliği", unit: "pencere başına (iç+dış)", price: "₺40" },
  { name: "Fırın Temizliği", unit: "adet", price: "₺120" },
  { name: "Buzdolabı Temizliği", unit: "adet", price: "₺100" },
  { name: "Balkon Temizliği", unit: "adet", price: "₺150" },
  { name: "İnşaat Sonrası Temizlik", unit: "m² başına", price: "₺35" },
  { name: "Ofis Temizliği", unit: "m² başına", price: "₺15" },
];

export default function FiyatlarPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-64 md:h-80 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=75"
            alt="Zirve Temizlik fiyat listesi"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <HeroEntrance index={0}>
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">Fiyat Listesi</span>
            </nav>
          </HeroEntrance>
          <HeroEntrance index={1} as="h1" className="text-4xl md:text-5xl font-extrabold text-white">Fiyat Listesi</HeroEntrance>
          <HeroEntrance index={2} as="p" className="text-white/80 text-lg mt-2 max-w-2xl">
            Gizli ücret yok. Net ve şeffaf fiyatlarla kaliteli hizmet. İhtiyacınıza göre paket seçin.
          </HeroEntrance>
        </div>
      </section>

      {/* ── FİYAT GUARANTEED ŞERİDİ ── */}
      <div className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <span className="flex items-center gap-1.5"><Shield size={15} /> Gizli Ücret Yok</span>
          <span className="text-green-300">|</span>
          <span className="flex items-center gap-1.5"><Star size={15} className="fill-current" /> %100 Memnuniyet Garantisi</span>
          <span className="text-green-300">|</span>
          <span className="flex items-center gap-1.5"><CheckCircle size={15} /> Aynı Gün Hizmet</span>
          <span className="text-green-300">|</span>
          <span className="flex items-center gap-1.5">🎁 İlk Hizmette %10 İndirim</span>
        </div>
      </div>

      {/* ── FİYAT KARTLARI ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Şeffaf Fiyatlandırma
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Ev Temizliği Paketleri
            </h2>
            <p className="text-gray-600 text-lg">
              Daireye ve ihtiyaca göre esnek paketler. Tüm paketlerde sigortalı ekip garantisi.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {pricingPlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.15}>
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl overflow-hidden border-2 shadow-lg transition-all ${
                  plan.popular
                    ? "border-blue-600 shadow-2xl shadow-blue-100 scale-105"
                    : "border-gray-100 hover:border-blue-200"
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-xs font-extrabold text-center py-2.5 tracking-widest uppercase">
                    ⭐ En Çok Tercih Edilen
                  </div>
                )}
                <div className="p-7">
                  <div className="mb-6">
                    <h3 className="text-xl font-extrabold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{plan.subtitle}</p>
                  </div>
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <span className="text-5xl font-extrabold text-gray-900">{plan.price}</span>
                    <div className="text-gray-400 text-xs mt-1 font-medium">{plan.priceNote}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        {f.ok ? (
                          <CheckCircle size={16} className="text-green-500 shrink-0" />
                        ) : (
                          <X size={16} className="text-gray-300 shrink-0" />
                        )}
                        <span className={`text-sm ${f.ok ? "text-gray-700" : "text-gray-400"}`}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/iletisim"
                    className={`block text-center font-bold py-3.5 px-6 rounded-xl transition-colors ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-8">
            * Fiyatlar standart konutlar için geçerlidir. Konum ve büyüklüğe göre değişebilir.
          </p>
        </div>
      </section>

      {/* ── EK HİZMET FİYATLARI ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                À La Carte
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Ek Hizmet Fiyatları</h2>
              <p className="text-gray-600">Paketlere eklenebilir veya tek başına alınabilir.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              {additionalServices.map((s, i) => (
                <div
                  key={s.name}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } ${i !== additionalServices.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div>
                    <span className="text-gray-800 font-semibold text-sm">{s.name}</span>
                    <span className="text-gray-400 text-xs ml-2">({s.unit})</span>
                  </div>
                  <span className="font-extrabold text-blue-700 text-xl">{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── GARANTİ BANDI ── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: "💰", title: "Gizli Ücret Yok", desc: "Teklif aşamasında verilen fiyat kesindir, hizmet sonunda değişmez." },
              { emoji: "✅", title: "Memnuniyet Garantisi", desc: "Memnun kalmazsanız ücretsiz yeniden temizlik yapıyoruz." },
              { emoji: "💳", title: "Esnek Ödeme", desc: "Nakit, kart veya havale ile kolayca ödeme yapabilirsiniz." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-extrabold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4 font-medium">
              Büyük proje veya kurumsal teklif için doğrudan arayın:
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-blue-800 transition-colors text-lg"
            >
              <Phone size={20} />
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Özel Teklif İçin Bizi Arayın"
        subtitle="Büyük alan, düzenli temizlik veya kurumsal müşteriler için özel indirimli fiyatlar sunuyoruz."
      />
    </>
  );
}
