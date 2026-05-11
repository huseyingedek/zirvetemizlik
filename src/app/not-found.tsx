import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { PHONE } from "@/lib/constants";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-blue-700 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Sayfa Bulunamadı</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönün.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={18} />
            Ana Sayfaya Dön
          </Link>
          <a href={`tel:${PHONE}`} className="btn-secondary">
            <Phone size={18} />
            Bizi Arayın
          </a>
        </div>
      </div>
    </div>
  );
}
