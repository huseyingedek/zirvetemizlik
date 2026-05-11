import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, Tag, Calendar } from "lucide-react";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS, SITE_NAME, SITE_URL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "temizlik ipuçları", "temizlik rehberi", SITE_NAME],
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    url: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 text-sm font-medium transition-colors"
              >
                <ArrowLeft size={16} />
                Blog&apos;a Dön
              </Link>

              <div className="flex flex-wrap gap-3 items-center mb-4">
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <Tag size={11} />
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime} okuma
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Article header image placeholder */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-800 rounded-2xl h-64 mb-8 flex items-center justify-center text-white text-7xl">
                📰
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none text-gray-700">
                {post.content.split("\n\n").map((paragraph, i) => {
                  if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                    return (
                      <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, "")}
                      </h3>
                    );
                  }
                  if (paragraph.includes("**")) {
                    const parts = paragraph.split("**");
                    return (
                      <p key={i} className="mb-4 leading-relaxed">
                        {parts.map((part, j) =>
                          j % 2 === 1 ? (
                            <strong key={j} className="font-bold text-gray-900">
                              {part}
                            </strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Author card */}
              <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0">
                  ZT
                </div>
                <div>
                  <div className="font-bold text-gray-900">{SITE_NAME} Uzman Ekibi</div>
                  <div className="text-gray-600 text-sm">
                    10+ yıllık deneyimiyle profesyonel temizlik hizmetleri sunan ekibimizden
                    güncel bilgiler ve tavsiyeler.
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                <h3 className="font-bold text-gray-900 mb-4">Son Yazılar</h3>
                <div className="space-y-3">
                  {relatedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="block group"
                    >
                      <div className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {p.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{p.date}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-700 text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">Profesyonel Temizlik</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Okudunuz, şimdi harekete geçin! Ücretsiz teklif alın.
                </p>
                <Link
                  href="/iletisim"
                  className="block text-center bg-white text-blue-700 font-bold py-2.5 px-4 rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Teklif Al
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
