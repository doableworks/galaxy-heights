"use client"
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { salesPhoneHref, salesPhoneLabel } from "@/lib/constants/contact";


const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Connectivity", href: "#connectivity", id: "connectivity" },
  { name: "Amenities", href: "#amenities", id: "amenities" },
  { name: "Floor Plan", href: "#floor-plan", id: "floor-plan" },
  { name: "Contact Us", href: "#contact-us", id: "contact-us" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;

      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="lg:hidden">
        <section
          className="flex w-full items-center justify-between border-b px-4 py-4 fixed top-0 z-50 bg-white/80 backdrop-blur-lg"
        >
          <img
            src="/assets/logo.svg"
            alt="Hum Developers Logo"
            className="h-10 w-auto"
          />

          <button
            onClick={toggleMenu}
            className="rounded-sm p-1 focus:outline-none"
            style={{ color: "var(--dark-blue)" }}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-7 w-7" />
          </button>
        </section>

        <div
          className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ${
            isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={toggleMenu}
          aria-hidden="true"
        />

        <aside
          className={`fixed inset-y-0 left-0 z-50 flex w-[82%] max-w-sm flex-col justify-between border-r px-6 py-6 shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundColor: "#FFFFFF",
            borderColor: "rgba(198, 179, 123, 0.45)",
          }}
          aria-hidden={!isMenuOpen}
        >
          <div>
            <div className="flex items-center justify-between">
              <img
                src="/assets/logo.svg"
                alt="Hum Developers Logo"
                className="h-10 w-auto"
              />

              <button
                onClick={toggleMenu}
                className="rounded-sm p-1"
                style={{ color: "var(--dark-blue)" }}
                aria-label="Close navigation menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-10 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className="cursor-pointer border-b bg-transparent py-4 text-left text-lg font-medium transition-opacity duration-200 hover:opacity-70"
                  style={{
                    color: "var(--dark-blue)",
                    borderColor: "rgba(198, 179, 123, 0.45)",
                  }}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div
            className="mt-8 flex items-center justify-between gap-4 border-t pt-6"
            style={{ borderColor: "rgba(198, 179, 123, 0.45)" }}
          >
            <img
              src="/icons/phone.svg"
              alt="Phone Icon"
              className="h-7 w-auto shrink-0"
            />

            {/* <EnquiryDialog
              fromWhere={`Project Detail Hum Solaris}`}
              title="Book an Appointment"
            >
              <button
                className="w-full cursor-pointer rounded-none border p-5 text-sm font-semibold transition-transform duration-200 hover:scale-105"
                style={{
                  borderColor: "var(--dark-blue)",
                  color: "var(--dark-blue)",
                }}
              >
                Enquire Now
              </button>
            </EnquiryDialog> */}
          </div>
        </aside>
      </div>

      <header
        className="hidden w-full bg-white/80 backdrop-blur-lg lg:block fixed top-0 z-50"
      >
        <nav className="mx-auto flex w-full items-center justify-between gap-6 px-16 py-4">

          <div className="flex w-full items-center justify-start gap-6">

          <img // src="/logo.png"
            src="/assets/logo.svg"
            alt="Hum Developers Logo"
            className="h-11 w-auto pr-4"
          />
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleNavClick(link.id, e)}
                className="cursor-pointer bg-transparent whitespace-nowrap text-base font-normal transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--dark-blue)" }}
              >
                {link.name}
              </button>
            ))}
          </div>
            <div className="flex items-center justify-end gap-4 w-full">
            <Link href={salesPhoneHref}
              className="flex items-center gap-2 bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:underline hover:underline-offset-4"
            >
              <img
                src="/icons/phone.svg"
                alt="Phone Icon"
                className="h-5 w-auto"
              />
              {salesPhoneLabel}
            </Link>
          {/* <EnquiryDialog
            fromWhere={`Project Detail Hum Solaris}`}
            title="Book an Appointment"
          >
            <button
              className="cursor-pointer rounded-none border px-5 py-2 text-sm font-semibold transition-transform duration-200 border-[var(--dark-blue)] hover:scale-105"
            >
              Enquire Now
            </button>
          </EnquiryDialog> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
