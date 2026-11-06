import Link from "next/link";
import Button from "./Button";
import { contact, footerLinks } from "@/lib/content";

const social = [
  {
    label: "Call us",
    href: contact.callLink,
    path: "M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z",
  },
  {
    label: "WhatsApp",
    href: contact.whatsappLink,
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    label: "Instagram",
    href: contact.instagram,
    path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.2-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z",
  },
  {
    label: "X",
    href: contact.x,
    path: "M17.8 3h3l-6.6 7.5L22 21h-6.1l-4.8-6.2L5.6 21h-3l7-8L2 3h6.2l4.3 5.7L17.8 3Zm-1 16.2h1.7L7.3 4.7H5.5l11.3 14.5Z",
  },
  {
    label: "Facebook",
    href: contact.facebook,
    path: "M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2Z",
  },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-[1.125rem] font-semibold text-white">{title}</h3>
      <ul className="space-y-2 text-base font-medium text-white">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="hover:text-gold">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="bg-navy px-6 pb-10 md:pb-12 lg:pb-16 pt-10 md:pt-12 lg:pt-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 md:gap-8 lg:gap-10 md:grid-cols-[1.4fr_1fr_1.4fr_1fr]">
          <div>
            <h2 className="text-xl">FeedU Foundation</h2>
            <p className="mt-3 max-w-[20rem] text-base leading-[1.3] text-white/90">
              Working towards stronger communities through food, education,
              healthcare, empowerment and environmental care.
            </p>
            <Button href="/donate" variant="gold" className="mt-5 !px-3 text-base font-semibold">
              Donate Now
            </Button>
          </div>
          <Column title="Quick Links" links={footerLinks.quick} />
          <Column title="Our programs" links={footerLinks.programs} />
          <Column title="Support" links={footerLinks.support} />
        </div>
      </div>

      <div className="bg-navy-deep px-6 py-3.5 text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <p className="text-sm">© Copyright 2026 | Feedu Foundation</p>
          <ul className="flex items-center gap-4 lg:gap-3">
            {social.filter((s) => s.href).map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px] lg:h-[14px] lg:w-[14px]">
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
