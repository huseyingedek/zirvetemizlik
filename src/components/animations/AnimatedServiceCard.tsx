"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  icon: string;
  image: string;
}

interface AnimatedServiceCardProps {
  service: Service;
  index: number;
}

export default function AnimatedServiceCard({ service, index }: AnimatedServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <ServiceCard {...service} />
    </motion.div>
  );
}
