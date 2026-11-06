"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Minimal scroll animation: headings and images fade up once as they enter the screen.
 * Anything already visible on load is left alone (no flicker). Respects "reduce motion".
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        'main h1, main h2, main [role="img"], main img',
      ),
    ).filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.95);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => {
      // Stagger items that sit side by side in a list/grid
      const li = el.closest("li");
      const idx = li && li.parentElement ? Array.from(li.parentElement.children).indexOf(li) : 0;
      el.style.transitionDelay = `${Math.min(idx % 3, 2) * 90}ms`;
      el.classList.add("reveal");
      if (el.matches('[role="img"], img')) el.classList.add("reveal-img");
      io.observe(el);
    });

    return () => {
      io.disconnect();
      targets.forEach((el) => {
        el.classList.remove("reveal", "reveal-img", "is-visible");
        el.style.transitionDelay = "";
      });
    };
  }, [pathname]);

  return null;
}
