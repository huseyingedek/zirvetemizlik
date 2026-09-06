import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_NAME, PHONE, EMAIL, ADDRESS, WORKING_HOURS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/logo.jpg"
              alt="Zirve Temizlik Logo"
              width={120}
              height={44}
              className="h-11 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-5">
            İstanbul&apos;un güvenilir profesyonel temizlik şirketi. 10 yılı aşkın deneyimimizle
            ev, ofis ve ticari alanları hijyenik hale getiriyoruz.
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a
              href="https://instagram.com/temizlikzirve"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={`https://wa.me/905325466163?text=Merhaba%2C%20hizmetleriniz%20nelerdir%3F%20Fiyat%20bilgisi%20almak%20istiyorum.`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.998 0C5.374 0 .007 5.367.007 11.993c0 2.116.554 4.103 1.523 5.83L.025 24l6.335-1.663a11.956 11.956 0 005.638 1.423h.005c6.623 0 11.992-5.367 11.992-11.993C23.995 5.367 18.622 0 11.998 0zm0 21.93a9.918 9.918 0 01-5.058-1.379l-.362-.215-3.761.987 1.004-3.663-.236-.376a9.908 9.908 0 01-1.519-5.288c0-5.478 4.462-9.941 9.938-9.941 5.478 0 9.936 4.463 9.936 9.941-.001 5.478-4.46 9.934-9.942 9.934z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Hizmetlerimiz */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base">Hizmetlerimiz</h3>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs">{s.icon}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hızlı Linkler */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base">Hızlı Linkler</h3>
          <ul className="space-y-2">
            {[
              { href: "/hakkimizda", label: "Hakkımızda" },
              { href: "/blog", label: "Blog" },
              { href: "/iletisim", label: "İletişim" },
              { href: "/hizmetler", label: "Tüm Hizmetler" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base">İletişim</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-400">{ADDRESS}</span>
            </li>
            <li>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-blue-400 shrink-0" />
                {PHONE}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-blue-400 shrink-0" />
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock size={16} className="text-blue-400 mt-0.5 shrink-0" />
              <span className="text-sm text-gray-400">{WORKING_HOURS}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>
            &copy; {currentYear} {SITE_NAME}. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4">
            <Link href="/gizlilik-politikasi" className="hover:text-gray-300 transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-gray-300 transition-colors">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
