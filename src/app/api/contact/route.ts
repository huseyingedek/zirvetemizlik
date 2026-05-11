import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, phone, email, service, message } = await request.json();

    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
    }

    const serviceLabels: Record<string, string> = {
      "bos-ev-dolu-ev": "Boş/Dolu Ev Temizliği",
      bina: "Bina Temizliği",
      ofis: "Ofis Temizliği",
      insaat: "İnşaat Sonrası Temizlik",
      villa: "Villa Temizliği",
      fabrika: "Fabrika Temizliği",
      rezidans: "Rezidans Temizliği",
    };

    const serviceLabel = serviceLabels[service] || service;

    const { error } = await resend.emails.send({
      from: "Zirve Temizlik <onboarding@resend.dev>",
      to: [process.env.RESEND_TO || "kul12ibo@gmail.com"],
      replyTo: email || undefined,
      subject: `🔔 Yeni Teklif Talebi — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
          <div style="background:#1d4ed8;padding:24px 32px;">
            <h1 style="color:#fff;margin:0;font-size:20px;">Yeni Teklif Talebi</h1>
            <p style="color:#bfdbfe;margin:4px 0 0;font-size:13px;">Zirve Temizlik Web Sitesi</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:bold;color:#374151;width:140px;">Ad Soyad</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:bold;color:#374151;">Telefon</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="tel:${phone}" style="color:#1d4ed8;font-weight:bold;">${phone}</a>
                </td>
              </tr>
              ${email ? `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:bold;color:#374151;">E-posta</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <a href="mailto:${email}" style="color:#1d4ed8;">${email}</a>
                </td>
              </tr>` : ""}
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:bold;color:#374151;">İstenen Hizmet</td>
                <td style="padding:10px 0;border-bottom:1px solid #f3f4f6;">
                  <span style="background:#dbeafe;color:#1d4ed8;padding:3px 10px;border-radius:20px;font-size:13px;font-weight:bold;">${serviceLabel}</span>
                </td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding:10px 0;font-weight:bold;color:#374151;vertical-align:top;">Mesaj</td>
                <td style="padding:10px 0;color:#111827;white-space:pre-line;">${message}</td>
              </tr>` : ""}
            </table>
          </div>
          <div style="background:#f9fafb;padding:16px 32px;text-align:center;border-top:1px solid #e5e7eb;">
            <p style="margin:0;color:#9ca3af;font-size:12px;">
              Bu e-posta zirvetemizlik.tr web sitesinden otomatik gönderilmiştir.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend hatası:", error);
      return NextResponse.json({ error: "Mail gönderilemedi.", detail: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Hata:", message);
    return NextResponse.json({ error: "Mail gönderilemedi.", detail: message }, { status: 500 });
  }
}
