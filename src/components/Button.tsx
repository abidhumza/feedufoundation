import Link from "next/link";

type Variant = "navy" | "gold" | "outline";

const styles: Record<Variant, string> = {
  navy: "bg-navy text-white hover:bg-navy-deep",
  gold: "bg-gold text-navy hover:bg-gold-soft",
  outline: "border border-navy bg-white text-navy hover:bg-navy hover:text-white",
};

export default function Button({
  href,
  children,
  variant = "navy",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const hasSize = /(^|\s)text-(\[|xs|sm|base)/.test(className);
  return (
    <Link
      href={href}
      className={`inline-block px-5 py-2.5 font-medium transition-colors ${hasSize ? "" : "text-base"} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
