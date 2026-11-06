/**
 * Image block with a grey fallback. Local files live in /public/images.
 * `fallback` is a second background layer: if `src` (e.g. an Unsplash placeholder)
 * fails to load, the fallback shows instead of an empty grey box.
 */
export default function Photo({
  src,
  alt,
  className = "",
  fallback,
  focus = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  focus?: string;
}) {
  const bg = fallback ? `url(${src}), url(${fallback})` : `url(${src})`;
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-[#d9d9d9] bg-cover ${className}`}
      style={{ backgroundImage: bg, backgroundPosition: focus }}
    />
  );
}
