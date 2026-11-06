"use client";

import { useState } from "react";
import Photo from "@/components/Photo";

export default function CauseCarousel({
  images,
  fallback,
  alt,
}: {
  images: string[];
  fallback: string;
  alt: string;
}) {
  const [i, setI] = useState(0);
  // Local photos are portrait; use the pre-made landscape (full-image + blurred fill) versions so nothing gets cropped.
  const wide = (src: string) => src.replace("/images/causes/", "/images/causes/wide/");
  images = images.map((src) => (src.startsWith("/images/causes/") ? wide(src) : src));
  const many = images.length > 1;
  const go = (n: number) => setI((n + images.length) % images.length);

  const arrow =
    "absolute top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow hover:bg-white";

  return (
    <div>
      <div className="relative">
        <Photo src={images[i]} fallback={fallback} alt={`${alt} ${i + 1}`} className="aspect-[555/380] w-full" />
        {many && (
          <>
            <button type="button" aria-label="Previous photo" onClick={() => go(i - 1)} className={`${arrow} left-3`}>
              ‹
            </button>
            <button type="button" aria-label="Next photo" onClick={() => go(i + 1)} className={`${arrow} right-3`}>
              ›
            </button>
          </>
        )}
        <div className={`absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 ${many ? "" : "hidden"}`}>
          {images.map((_, n) => (
            <button
              key={n}
              type="button"
              aria-label={`Show photo ${n + 1}`}
              onClick={() => setI(n)}
              className={`h-1.5 w-1.5 rounded-full ${n === i ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
      <div className={`mt-3 flex gap-2 ${many ? "" : "hidden"}`}>
        {images.map((src, n) => (
          <button
            key={n}
            type="button"
            aria-label={`Show photo ${n + 1}`}
            onClick={() => setI(n)}
            className={`w-16 border-2 ${n === i ? "border-teal" : "border-transparent"}`}
          >
            <Photo src={src} fallback={fallback} alt="" className="aspect-[555/380] w-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
