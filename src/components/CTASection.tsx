import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, WHATSAPP } from "@/lib/constants";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = "Ücretsiz Keşif ve Teklif Alın",
  subtitle = "Uzman ekibimiz evinize veya iş yerinize gelsin, ihtiyaçlarınızı belirlesin ve size en uygun fiyatı sunsun.",
}: CTASectionProps) {
  const message = encodeURIComponent("Merhaba! Temizlik hizmeti teklifi almak istiyorum.");

  return (
    <section className="bg-blue-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg"
          >
            <Phone size={20} />
            Hemen Ara
          </a>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-green-600 transition-colors shadow-lg text-lg"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors text-lg"
          >
            Teklif Formu
          </Link>
        </div>
      </div>
    </section>
  );
}
