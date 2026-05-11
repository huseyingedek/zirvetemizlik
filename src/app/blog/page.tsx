import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ChevronRight, ArrowRight } from "lucide-react";
import { BLOG_POSTS, SITE_NAME, SITE_URL } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/animations/FadeIn";
import HeroEntrance from "@/components/animations/HeroEntrance";

export const metadata: Metadata = {
  title: "Blog | Temizlik İpuçları ve Rehberler",
  description:
    "Zirve Temizlik Blog: Ev temizliği ipuçları, ofis hijyen rehberleri, doğal temizlik yöntemleri ve daha fazlası. Uzmanlardan profesyonel temizlik tavsiyeleri.",
  keywords: [
    "temizlik ipuçları",
    "ev temizliği rehberi",
    "profesyonel temizlik blog",
    "hijyen tavsiyeleri",
    "temizlik yöntemleri",
  ],
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description: "Temizlik ipuçları, rehberler ve sektör haberleri.",
    url: `${SITE_URL}/blog`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} Blog`,
  url: `${SITE_URL}/blog`,
  description: "Profesyonel temizlik ipuçları ve rehberler",
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

const categories = ["Tümü", "İpuçları", "Kurumsal", "Rehber"];

const blogImages: Record<string, string> = {
  "ev-temizliginde-dogal-yontemler": "/images/blog/dogal-yontemler.jpg",
  "ofis-temizligi-neden-onemli": "/images/blog/ofis-temizligi.jpg",
  "insaat-sonrasi-temizlik-rehberi": "/images/blog/insaat-rehberi.jpg",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative h-64 md:h-80 flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/blog-hero.jpg"
            alt="Zirve Temizlik Blog"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-10">
          <HeroEntrance index={0}>
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
              <ChevronRight size={14} />
              <span className="text-white font-medium">Blog</span>
            </nav>
          </HeroEntrance>
          <HeroEntrance index={1} as="h1" className="text-4xl md:text-5xl font-extrabold text-white">Blog</HeroEntrance>
          <HeroEntrance index={2} as="p" className="text-white/80 text-lg mt-2 max-w-xl">
            Temizlik uzmanlarımızdan profesyonel ipuçları, rehberler ve hijyen tavsiyeleri.
          </HeroEntrance>
        </div>
      </section>

      {/* ── KATEGORİ FİLTRE ── */}
      <div className="bg-white border-b border-gray-100 sticky top-[112px] z-30">
        <div className="container mx-auto px-4 py-3 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                cat === "Tümü"
                  ? "bg-blue-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── BLOG KARTLARI ── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Featured post */}
          <FadeIn className="mb-10">
            <Link
              href={`/blog/${BLOG_POSTS[0].slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 md:h-auto min-h-[260px] overflow-hidden">
                <Image
                  src={blogImages[BLOG_POSTS[0].slug]}
                  alt={BLOG_POSTS[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Öne Çıkan
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Clock size={12} /> {BLOG_POSTS[0].readTime} okuma
                  </span>
                  <span className="text-gray-400 text-xs">{BLOG_POSTS[0].date}</span>
                </div>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{BLOG_POSTS[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Devamını Oku <ArrowRight size={15} />
                </span>
              </div>
            </Link>
          </FadeIn>

          {/* Diğer postlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.12}>
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blogImages[post.slug]}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="font-extrabold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-blue-600 text-sm font-bold group-hover:gap-3 transition-all">
                    Oku <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
