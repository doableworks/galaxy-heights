import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | HUM Sapphire",
  description: "Privacy Policy for Hum Developers.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-gray-800">
      <Navbar />

      <div className="w-full px-6 md:px-24 lg:px-48 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[var(--dark-blue)] md:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-3 mb-8 h-1 w-20 bg-[var(--gold-colour)]" />

        {/* Intro */}
        <p className="text-sm leading-relaxed text-gray-700 md:text-base">
          This Privacy Policy explains how Hum Developers (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, and protects any information that you provide when you use our website. Hum Developers is committed to safeguarding your privacy. If we ask you to provide identifiable information while using this website, it will only be used in accordance with this privacy statement. Hum Developers may update this policy from time to time by modifying this page. You should check this page periodically to ensure you agree with any changes.
        </p>

        {/* What We Collect */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            What We Collect
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            We may collect the following information:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Name and job title</li>
            <li>Contact information including email address and phone number</li>
            <li>Demographic information such as postal code, preferences, and interests</li>
            <li>Other information relevant to customer surveys, enquiries, and offers</li>
          </ul>
        </section>

        {/* What We Do With the Information */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            What We Do With the Information
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            We collect this information to understand your requirements and provide better service, including:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Internal record keeping</li>
            <li>Improving our products, services, and communication</li>
            <li>Sending promotional emails about new projects, offers, or other updates using the email provided</li>
            <li>Contacting you for market research via phone, email, or other mediums</li>
            <li>Customizing the website according to your interests</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            Security
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            We are committed to ensuring the protection of your information. Appropriate physical, electronic, and managerial procedures have been implemented to safeguard all data collected online against unauthorized access or disclosure.
          </p>
        </section>

        {/* How We Use Cookies */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            How We Use Cookies
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            A cookie is a small file placed on your device with your consent. Cookies help analyze web traffic and allow websites to tailor their operations based on your preferences.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            We use traffic log cookies to identify which pages are visited. This helps us improve our site and personalize the user experience. Data is used only for statistical purposes and then removed.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            You may accept or decline cookies. Most browsers accept cookies automatically, but you can change browser settings to decline them. However, doing so may limit your website experience.
          </p>
        </section>

        {/* Links to Other Websites */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            Links to Other Websites
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Our website may include links to external sites. Once you leave our site, we have no control over the other website. We are not responsible for the protection and privacy of information you provide on such platforms. Please review their privacy policies separately.
          </p>
        </section>

        {/* Controlling Your Personal Information */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            Controlling Your Personal Information
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            You may restrict the use of your personal information by:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Checking for an option on forms where you can opt out of direct marketing</li>
            <li>Contacting us if you no longer wish to receive promotional communication</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            We do not sell, distribute, or lease your details to third parties without consent unless required by law. If permitted by you, we may share promotional information about third parties that may interest you.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-10 pt-4">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            Contact Information
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            For any queries regarding this Privacy Policy, please contact:
          </p>
          <div className="mt-4 flex items-center gap-3 text-sm md:text-base">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-[var(--gold-colour)] bg-[#F5EEDC] text-[var(--gold-colour)]">
              <Mail className="h-4 w-4" />
            </div>
            <span className="font-semibold text-gray-800">Email:</span>
            <a
              href="mailto:info@humdevelopers.com"
              className="text-[#C6B37B] underline underline-offset-4 transition-colors hover:text-[var(--dark-blue)]"
            >
              info@humdevelopers.com
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
