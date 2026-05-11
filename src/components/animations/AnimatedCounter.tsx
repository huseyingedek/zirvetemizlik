"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseValue(val: string): { prefix: string; number: number; suffix: string } {
  const match = val.match(/^([^\d]*)(\d[\d.,]*)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: val };
  const num = parseFloat(match[2].replace(/[.,]/g, ""));
  return { prefix: match[1], number: isNaN(num) ? 0 : num, suffix: match[3] };
}

export default function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  const { prefix, number, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView || number === 0) {
      setDisplay(value);
      return;
    }

    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * number);

      const formatted =
        number >= 1000 ? current.toLocaleString("tr-TR") : current.toString();
      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, number, prefix, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
