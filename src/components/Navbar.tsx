"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="FeedU Foundation home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-base text-navy lg:flex">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-teal">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/donate" variant="gold" className="hidden sm:inline-block !px-6 !py-2.5 text-base font-semibold">
            Donate
          </Button>
          <button
            type="button"
            className="p-2 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-base">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href="/donate" variant="gold" className="text-base font-semibold">
                Donate
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
