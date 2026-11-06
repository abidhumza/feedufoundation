"use client";

import { Children, useRef } from "react";

/** Horizontal, swipeable strip. Touch users swipe; desktop users get arrows. */
export default function CauseScroller({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.9, behavior: "smooth" });

  const arrow =
    "absolute top-[34%] z-10 hidden h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-navy shadow-md ring-1 ring-line hover:bg-cream md:flex";

  return (
    <div className="relative">
      <button type="button" aria-label="Previous causes" onClick={() => scroll(-1)} className={`${arrow} -left-5`}>
        ‹
      </button>
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-8"
      >
        {Children.map(children, (child) => (
          <div className="shrink-0 basis-[82%] snap-start sm:basis-[calc(50%-0.75rem)] lg:basis-[calc((100%-4rem)/3)]">
            {child}
          </div>
        ))}
      </div>
      <button type="button" aria-label="Next causes" onClick={() => scroll(1)} className={`${arrow} -right-5`}>
        ›
      </button>
    </div>
  );
}
