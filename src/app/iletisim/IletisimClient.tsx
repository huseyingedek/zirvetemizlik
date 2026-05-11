"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ChevronRight, CheckCircle, Shield, Star, Zap } from "lucide-react";
import { PHONE, EMAIL, ADDRESS, WORKING_HOURS, WHATSAPP, MAPS_URL } from "@/lib/constants";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: PHONE, href: `tel:${PHONE}`, color: "blue" },
  { icon: Mail, label: "E-posta", value: EMAIL, href: `mailto:${EMAIL}`, color: "purple" },
  { icon: MapPin, label: "Adres", value: ADDRESS, href: MAPS_URL, color: "red" },
  { icon: Clock, label: "Çalışma Saatleri", value: WORKING_HOURS, href: null, color: "green" },
];

const iconColorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600",
  green: "bg-green-100 text-green-600",
};

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: EASE },
  }),
};

const slideRight = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: 0.2, ease: EASE } },
};

export default function IletisimClient() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const whatsappMsg = encodeURIComponent("Merhaba! Teklif almak istiyorum.");

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=75"
            alt="Zirve Temizlik iletişim"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-white/60 text-sm mb-4"
          >
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight size={13} />
            <span className="text-white font-medium">İletişim</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-3"
          >
            İletişim
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="text-white/80 text-lg max-w-xl"
          >
            Ücretsiz keşif ve fiyat teklifi için hemen bizimle iletişime geçin.
            15 dakika içinde geri dönüş garantisi.
          </motion.p>

          {/* Güven rozetleri */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="flex flex-wrap gap-3 mt-5"
          >
            {[
              { icon: Zap, label: "15 dk Geri Dönüş" },
              { icon: Shield, label: "Sigortalı Ekip" },
              { icon: Star, label: "4.9/5 Puan" },
              { icon: CheckCircle, label: "Gizli Ücret Yok" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <b.icon size={12} />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HIZLI CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="bg-blue-700 text-white"
      >
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Phone size={14} /> {PHONE}
          </a>
          <span className="text-blue-400 hidden sm:block">|</span>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full transition-all hover:scale-105"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>
      </motion.div>

      {/* ── ANA İÇERİK ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

            {/* ── SOL: İletişim Bilgileri ── */}
            <div className="lg:col-span-2 space-y-4">
              <motion.h2
                custom={0}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xl font-extrabold text-gray-900 mb-6"
              >
                Bize Ulaşın
              </motion.h2>

              {/* İletişim Kartları */}
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  custom={i}
                  variants={slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:border-blue-200 hover:shadow-md transition-shadow cursor-default"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${iconColorMap[item.color]}`}>
                    <item.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-900 font-bold text-sm hover:text-blue-600 transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-900 font-bold text-sm">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp */}
              <motion.a
                custom={5}
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-4 font-bold transition-colors shadow-sm block"
              >
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 32 32" width="24" height="24" fill="white">
                    <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.735 5.472 2.018 7.776L0 32l8.438-2.01A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.302 19.347c-.4-.2-2.365-1.167-2.732-1.3-.367-.133-.634-.2-.9.2-.267.4-1.033 1.3-1.267 1.567-.233.266-.467.3-.867.1-.4-.2-1.688-.622-3.213-1.981-1.188-1.06-1.99-2.37-2.224-2.77-.234-.4-.025-.616.175-.816.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.134-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.673-.9-.686-.233-.012-.5-.015-.767-.015-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.334 0 1.967 1.433 3.867 1.633 4.133.2.267 2.82 4.3 6.832 6.034.955.412 1.7.658 2.28.843.958.305 1.831.262 2.52.159.768-.115 2.365-.967 2.698-1.9.333-.934.333-1.734.233-1.9-.1-.167-.367-.267-.767-.467z" />
                  </svg>
                </div>
                <div>
                  <div className="font-extrabold">WhatsApp&apos;tan Yazın</div>
                  <div className="text-xs text-green-100">15 dakika içinde yanıt</div>
                </div>
              </motion.a>

              {/* Neden Biz */}
              <motion.div
                custom={6}
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-5"
              >
                <div className="font-bold text-gray-900 text-sm mb-3">✅ Neden Bizi Seçmelisiniz?</div>
                <div className="space-y-2.5">
                  {[
                    "Ücretsiz keşif ve fiyat teklifi",
                    "15 dakika içinde geri dönüş",
                    "Sigortalı ve eğitimli ekip",
                    "%100 memnuniyet garantisi",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="flex items-center gap-2 text-xs text-gray-700"
                    >
                      <CheckCircle size={13} className="text-green-500 shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── SAĞ: Form ── */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    /* ── Başarı Mesajı ── */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 18 }}
                      className="text-center py-14"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <motion.div
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                        >
                          <CheckCircle size={48} className="text-green-500" strokeWidth={1.5} />
                        </motion.div>
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="text-2xl font-extrabold text-gray-900 mb-2"
                      >
                        Mesajınız Alındı! 🎉
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="text-gray-600 mb-2"
                      >
                        En kısa sürede sizinle iletişime geçeceğiz.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.42 }}
                        className="text-blue-600 font-semibold text-sm mb-7"
                      >
                        Genellikle 15 dakika içinde dönüş yapıyoruz.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-3 justify-center"
                      >
                        <Link
                          href="/"
                          className="bg-blue-700 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-blue-800 transition-colors"
                        >
                          Ana Sayfaya Dön
                        </Link>
                        <a
                          href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 text-white font-bold py-2.5 px-6 rounded-xl hover:bg-green-600 transition-colors"
                        >
                          WhatsApp
                        </a>
                      </motion.div>
                    </motion.div>
                  ) : (
                    /* ── Form ── */
                    <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                        Ücretsiz Teklif Formu
                      </h2>
                      <p className="text-gray-500 mb-7 text-sm">
                        Formu doldurun, 15 dakika içinde size dönelim. Gizli ücret yok.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* Ad Soyad */}
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                          >
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Ad Soyad *</label>
                            <input
                              type="text"
                              required
                              placeholder="Adınız Soyadınız"
                              value={formData.name}
                              onFocus={() => setFocused("name")}
                              onBlur={() => setFocused(null)}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className={`w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                                focused === "name" ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" : "border-gray-200"
                              }`}
                            />
                          </motion.div>

                          {/* Telefon */}
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.32 }}
                          >
                            <label className="block text-sm font-bold text-gray-700 mb-1.5">Telefon *</label>
                            <input
                              type="tel"
                              required
                              placeholder="0532 000 00 00"
                              value={formData.phone}
                              onFocus={() => setFocused("phone")}
                              onBlur={() => setFocused(null)}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className={`w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                                focused === "phone" ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" : "border-gray-200"
                              }`}
                            />
                          </motion.div>
                        </div>

                        {/* E-posta */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.38 }}
                        >
                          <label className="block text-sm font-bold text-gray-700 mb-1.5">E-posta</label>
                          <input
                            type="email"
                            placeholder="ornek@email.com"
                            value={formData.email}
                            onFocus={() => setFocused("email")}
                            onBlur={() => setFocused(null)}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 ${
                              focused === "email" ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" : "border-gray-200"
                            }`}
                          />
                        </motion.div>

                        {/* Hizmet */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.44 }}
                        >
                          <label className="block text-sm font-bold text-gray-700 mb-1.5">İstediğiniz Hizmet *</label>
                          <select
                            required
                            value={formData.service}
                            onFocus={() => setFocused("service")}
                            onBlur={() => setFocused(null)}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className={`w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 bg-white ${
                              focused === "service" ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" : "border-gray-200"
                            }`}
                          >
                            <option value="">Hizmet Seçin</option>
                            <option value="ev">🏠 Ev Temizliği</option>
                            <option value="ofis">🏢 Ofis Temizliği</option>
                            <option value="derin">🔬 Derin Temizlik</option>
                            <option value="insaat">🏗️ İnşaat Sonrası Temizlik</option>
                            <option value="cam">🪟 Cam Temizliği</option>
                            <option value="hali">🛋️ Halı & Koltuk Yıkama</option>
                            <option value="diger">📋 Diğer</option>
                          </select>
                        </motion.div>

                        {/* Mesaj */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 }}
                        >
                          <label className="block text-sm font-bold text-gray-700 mb-1.5">Mesajınız</label>
                          <textarea
                            rows={4}
                            placeholder="Detayları paylaşırsanız daha hızlı teklif verebiliriz (alan m², kat, özel istek vb.)"
                            value={formData.message}
                            onFocus={() => setFocused("message")}
                            onBlur={() => setFocused(null)}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className={`w-full border-2 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 resize-none ${
                              focused === "message" ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" : "border-gray-200"
                            }`}
                          />
                        </motion.div>

                        {/* Submit */}
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.55 }}
                        >
                          <motion.button
                            type="submit"
                            disabled={loading}
                            whileHover={{ scale: loading ? 1 : 1.02 }}
                            whileTap={{ scale: loading ? 1 : 0.97 }}
                            className="w-full bg-blue-700 text-white font-extrabold py-4 px-6 rounded-xl hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 text-base"
                          >
                            {loading ? (
                              <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Gönderiliyor...
                              </span>
                            ) : (
                              <>
                                <Send size={18} />
                                Ücretsiz Teklif İste
                              </>
                            )}
                          </motion.button>
                        </motion.div>

                        <p className="text-xs text-gray-400 text-center">
                          🔒 Bilgileriniz güvenle saklanır. Üçüncü şahıslarla paylaşılmaz.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
