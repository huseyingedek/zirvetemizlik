import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
}

export default function ServiceCard({ slug, title, shortDesc, icon, image }: ServiceCardProps) {
  return (
    <Link
      href={`/hizmetler/${slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={`${title} - Zirve Temizlik İstanbul`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        {/* Icon badge */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl shadow-sm">
          {icon}
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-3 left-3">
          <h3 className="text-white font-bold text-lg leading-tight drop-shadow-sm">{title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{shortDesc}</p>
        <div className="flex items-center gap-1.5 text-blue-600 text-sm font-bold group-hover:gap-3 transition-all">
          Detayları Gör <ArrowRight size={15} />
        </div>
      </div>
    </Link>
  );
}
