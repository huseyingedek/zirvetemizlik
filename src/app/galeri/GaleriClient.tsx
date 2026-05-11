"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    alt: "Profesyonel ev temizliği - Zirve Temizlik",
    category: "Ev Temizliği",
    label: "Salon & Yaşam Alanı",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    alt: "Ofis temizliği İstanbul",
    category: "Ofis Temizliği",
    label: "Modern Ofis",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
    alt: "Derin temizlik malzemeleri",
    category: "Derin Temizlik",
    label: "Temizlik Ekipmanları",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    alt: "Mutfak temizliği",
    category: "Ev Temizliği",
    label: "Mutfak Temizliği",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80",
    alt: "Cam temizliği yüksek kat",
    category: "Cam Temizliği",
    label: "Dış Cephe Cam",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    alt: "Halı koltuk yıkama",
    category: "Halı & Koltuk",
    label: "Halı Yıkama",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    alt: "İnşaat sonrası temizlik",
    category: "İnşaat Sonrası",
    label: "Tadilat Temizliği",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
    alt: "Banyo temizliği",
    category: "Ev Temizliği",
    label: "Banyo Temizliği",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    alt: "Villa ve rezidans temizliği",
    category: "Özel Temizlik",
    label: "Villa & Rezidans",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80",
    alt: "Ofis genel temizliği",
    category: "Ofis Temizliği",
    label: "Çalışma Alanı",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    alt: "Yeni bina temizliği",
    category: "İnşaat Sonrası",
    label: "Yeni Bina Teslim",
    span: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=800&q=80",
    alt: "Bina cephesi cam yıkama",
    category: "Cam Temizliği",
    label: "Yüksek Bina Cephe",
    span: "normal",
  },
];

const categories = [
  { key: "Tümü", emoji: "🔍" },
  { key: "Ev Temizliği", emoji: "🏠" },
  { key: "Ofis Temizliği", emoji: "🏢" },
  { key: "Derin Temizlik", emoji: "🔬" },
  { key: "Cam Temizliği", emoji: "🪟" },
  { key: "Halı & Koltuk", emoji: "🛋️" },
  { key: "İnşaat Sonrası", emoji: "🏗️" },
  { key: "Özel Temizlik", emoji: "⭐" },
];

const categoryColors: Record<string, string> = {
  "Ev Temizliği": "bg-blue-600",
  "Ofis Temizliği": "bg-purple-600",
  "Derin Temizlik": "bg-teal-600",
  "Cam Temizliği": "bg-sky-600",
  "Halı & Koltuk": "bg-orange-500",
  "İnşaat Sonrası": "bg-yellow-600",
  "Özel Temizlik": "bg-pink-600",
};

export default function GaleriClient() {
  const [active, setActive] = useState("Tümü");
  const [lightbox, setLightbox] = useState<null | (typeof galleryItems)[0]>(null);

  const filtered =
    active === "Tümü" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <>
      {/* ── Kategori Filtreler ── */}
      <div className="bg-white border-b border-gray-100 sticky top-[112px] z-30 shadow-sm">
        <div className="container mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  active === cat.key
                    ? "bg-blue-700 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.key}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Galeri Masonry ── */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="container mx-auto px-4">
          {/* Sayaç */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-gray-500 text-sm font-medium"
          >
            <span className="text-blue-700 font-bold text-base">{filtered.length}</span> proje
            gösteriliyor
            {active !== "Tümü" && (
              <span className="ml-2 bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                {active}
              </span>
            )}
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.label}-${item.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                  className="break-inside-avoid mb-5"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-zoom-in bg-white hover:shadow-xl transition-shadow duration-300"
                    onClick={() => setLightbox(item)}
                  >
                    {/* Görsel */}
                    <div
                      className="relative overflow-hidden"
                      style={{ aspectRatio: item.span === "tall" ? "3/4" : "4/3" }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category badge */}
                      <div className="absolute top-3 left-3">
                        <span
                          className={`${categoryColors[item.category] ?? "bg-blue-600"} text-white text-xs font-bold px-2.5 py-1 rounded-full`}
                        >
                          {item.category}
                        </span>
                      </div>

                      {/* Hover içerik */}
                      <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-bold text-sm mb-2">{item.label}</p>
                        <div className="flex items-center gap-1.5 text-white/80 text-xs">
                          <Eye size={13} />
                          Büyüt
                        </div>
                      </div>
                    </div>

                    {/* Alt bilgi */}
                    <div className="p-3.5 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-gray-900">{item.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                      </div>
                      <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                        <Eye size={13} className="text-gray-500 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-medium">Bu kategoride henüz fotoğraf yok.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-cover"
              />
              {/* Lightbox bilgi */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span
                  className={`${categoryColors[lightbox.category] ?? "bg-blue-600"} text-white text-xs font-bold px-2.5 py-1 rounded-full`}
                >
                  {lightbox.category}
                </span>
                <p className="text-white font-bold text-xl mt-2">{lightbox.label}</p>
              </div>
              {/* Kapat */}
              <button
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors text-xl font-bold"
                onClick={() => setLightbox(null)}
                aria-label="Kapat"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
