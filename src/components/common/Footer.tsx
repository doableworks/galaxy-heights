"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const socialLinks = [
  {
    href: "https://www.instagram.com/humdevelopers?igsh=MTc2aWdybzI3cG1tdw==",
    icon: "/icons/Instagram.svg",
    alt: "Instagram Icon",
    width: 15,
    height: 15,
  },
  {
    href: "https://www.youtube.com/@HumDevelopers-rq1ro",
    icon: "/icons/youtube.svg",
    alt: "YouTube Icon",
    width: 15,
    height: 15,
  },
  {
    href: "https://www.facebook.com/share/14JzTVqibyp/?mibextid=wwXIfr",
    icon: "/icons/facebook.svg",
    alt: "Facebook Icon",
    width: 10,
    height: 10,
  },
];

function Footer() {
  return (
    <footer className="relative z-50 w-full rounded-t-2xl bg-[var(--dark-blue)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-white/20 pb-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <img
              src="/assets/logo.svg"
              alt="HUM Developers Logo"
              className="h-[10vh] w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300">
              Building dreams and creating legacies in Mumbai&apos;s premium
              real estate landscape for over 21+ years.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center text-center">
            <div className="flex flex-col items-start">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
              Maharera No :-
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              PM1180002600762
            </p>
            </div>
            <div className="mt-6 flex w-full justify-center">
              <div className="rounded-2xl bg-white p-4 shadow-lg">
                <Image
                  src="/assets/galaxyMaharera.jpeg"
                  alt="Maharera QR Code"
                  width={180}
                  height={180}
                  className="h-auto w-[180px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-6 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white transition-colors hover:bg-white/80"
              >
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                />
              </a>
            ))}
          </div>

          <p className="text-sm leading-5 text-gray-400">
            © 2025 Hum Developers. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-light sm:justify-end">
            <Link href="/privacy-policy" className="transition-colors hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="transition-colors hover:text-gray-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
