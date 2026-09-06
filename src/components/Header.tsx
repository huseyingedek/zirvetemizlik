"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, MapPin, Clock, Shield } from "lucide-react";
import { NAV_LINKS, PHONE, WHATSAPP, SITE_NAME, SERVICES } from "@/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMsg = encodeURIComponent("Merhaba, hizmetleriniz nelerdir? Fiyat bilgisi almak istiyorum.");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── ÜST ÇUBUK ── */}
      <div className="bg-[#0b2545] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-11 gap-4">
            {/* Sol: iletişim + rozetler */}
            <div className="flex items-center gap-4 text-xs flex-wrap">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-1.5 font-semibold hover:text-blue-300 transition-colors whitespace-nowrap"
              >
                <Phone size={12} />
                {PHONE}
              </a>
              <span className="text-white/30 hidden sm:block">|</span>
              <span className="text-white/30 hidden md:block">|</span>
              <div className="hidden md:flex items-center gap-3">
                <span className="flex items-center gap-1 text-green-400 font-medium">
                  <MapPin size={11} />
                  İstanbul Geneli Hizmet
                </span>
                <span className="flex items-center gap-1 text-yellow-400 font-medium">
                  <Clock size={11} />
                  7/24 Randevu
                </span>
                <span className="flex items-center gap-1 text-blue-300 font-medium">
                  <Shield size={11} />
                  Aynı Gün Hizmet
                </span>
              </div>
            </div>

            {/* Sağ: CTA butonları */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="hidden sm:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
              >
                <Phone size={11} />
                HEMEN ARA
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded transition-colors"
              >
                <svg viewBox="0 0 24 24" width="11" height="11" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M11.998 0C5.374 0 .007 5.367.007 11.993c0 2.116.554 4.103 1.523 5.83L.025 24l6.335-1.663a11.956 11.956 0 005.638 1.423h.005c6.623 0 11.992-5.367 11.992-11.993C23.995 5.367 18.622 0 11.998 0zm0 21.93a9.918 9.918 0 01-5.058-1.379l-.362-.215-3.761.987 1.004-3.663-.236-.376a9.908 9.908 0 01-1.519-5.288c0-5.478 4.462-9.941 9.938-9.941 5.478 0 9.936 4.463 9.936 9.941-.001 5.478-4.46 9.934-9.942 9.934z" />
                </svg>
                WHATSAPP YAZ
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── ANA NAV ÇUBUĞU ── */}
      <nav
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-[80px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Zirve Temizlik Logo"
                width={200}
                height={72}
                className="h-[72px] w-auto object-contain"
                priority
              />
              <div className="font-black text-gray-900 text-lg leading-tight">Zirve Temizlik</div>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden xl:flex items-center">
              {NAV_LINKS.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <li key={link.href} className="relative group">
                      <button
                        className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 border-transparent hover:border-blue-600 hover:text-blue-700 ${
                          pathname.startsWith("/hizmetler")
                            ? "text-blue-700 border-blue-600"
                            : "text-gray-700"
                        }`}
                      >
                        HİZMETLERİMİZ <ChevronDown size={13} />
                      </button>
                      <div className="absolute top-full left-0 w-60 bg-white shadow-2xl rounded-b-xl border-t-2 border-blue-600 py-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                        <Link
                          href="/hizmetler"
                          className="block px-4 py-2.5 text-sm text-blue-700 font-bold hover:bg-blue-50 border-b border-gray-100"
                        >
                          Tüm Hizmetlerimiz →
                        </Link>
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/hizmetler/${s.slug}`}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                          >
                            <span className="text-base">{s.icon}</span>
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-3.5 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 border-transparent hover:border-blue-600 hover:text-blue-700 ${
                        pathname === link.href
                          ? "text-blue-700 border-blue-600"
                          : "text-gray-700"
                      }`}
                    >
                      {link.label.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-2">
              <Link
                href="/iletisim"
                className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
              >
                Ücretsiz Teklif Al
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="xl:hidden border-t border-gray-100 bg-white pb-4">
            <div className="container mx-auto px-4 pt-2 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === link.href || (link.hasDropdown && pathname.startsWith("/hizmetler"))
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3 rounded-lg"
                >
                  <Phone size={16} />
                  {PHONE}
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-lg"
                >
                  WhatsApp&apos;tan Yaz
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
