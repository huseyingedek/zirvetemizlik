import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
  title: "İletişim | Ücretsiz Teklif ve Keşif",
  description:
    "Zirve Temizlik ile iletişime geçin. Ücretsiz keşif ve fiyat teklifi için hemen arayın veya formu doldurun. İstanbul genelinde hızlı hizmet.",
  keywords: [
    "zirve temizlik iletişim",
    "temizlik teklif",
    "temizlik şirketi telefon",
    "ücretsiz temizlik teklifi",
  ],
  alternates: {
    canonical: `${SITE_URL}/iletisim`,
  },
  openGraph: {
    title: `İletişim | ${SITE_NAME}`,
    description: "Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin.",
    url: `${SITE_URL}/iletisim`,
  },
};

export default function IletisimPage() {
  return <IletisimClient />;
}
