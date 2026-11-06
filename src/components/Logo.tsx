import Image from "next/image";

export default function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="FeedU Welfare Foundation"
      width={490}
      height={420}
      priority
      className={className}
    />
  );
}
