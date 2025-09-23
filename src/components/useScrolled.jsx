// src/components/useScrolled.js
import { useEffect, useState } from "react";

export default function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0); // 0 = top, 1 = bottom

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);

      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrolled, progress };
}
