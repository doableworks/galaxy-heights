import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/common/Footer";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | HUM Galaxy Heights Kandivali West",
  description:
    "Read the official Terms & Conditions for HUM Galaxy Heights by HUM Developers in Charkop, Kandivali West, Mumbai.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-gray-800">
      <Navbar />

      <div className="w-full px-6 md:px-24 lg:px-48 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[var(--dark-blue)] md:text-5xl">
          Terms &amp; Conditions
        </h1>
        <div className="mt-3 mb-8 h-1 w-20 bg-[var(--gold-colour)]" />

        {/* Intro */}
        <p className="text-sm leading-relaxed text-gray-700 md:text-base">
          Welcome to the official website of Hum Developers. By accessing, browsing, or using this website, you agree to comply with and be bound by the following Terms &amp; Conditions. If you do not agree with any part of these terms, please refrain from using this website.
        </p>

        {/* Point 1 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            1. Acceptance of Terms
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            By using this website, you acknowledge that you have read, understood, and agreed to these Terms &amp; Conditions. These terms apply to all users, including visitors, customers, and anyone accessing the site.
          </p>
        </section>

        {/* Point 2 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            2. Use of Website
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            You agree to use this website only for lawful purposes. You shall not:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Interfere with or disrupt website functionality</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use this website to transmit any harmful or malicious data (viruses, malware, phishing, etc.)</li>
            <li>Copy, modify, or distribute any content without explicit written permission</li>
          </ul>
        </section>

        {/* Point 3 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            3. Intellectual Property Rights
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            All content on this website—including text, graphics, logos, designs, images, project information, audio, video, and software—is the property of Hum Developers and protected by applicable copyright and trademark laws.
          </p>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            You may not:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Reproduce, copy, or redistribute content for commercial purposes</li>
            <li>Use company branding, images, or logos without permission</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Any unauthorized use may result in legal action.
          </p>
        </section>

        {/* Point 4 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            4. Project Information Disclaimer
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            All project information, including layouts, plans, visuals, pricing, features, and amenities, is indicative and subject to approval from relevant authorities. Hum Developers reserves the right to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Modify project details without prior notice</li>
            <li>Change specifications, features, and pricing based on regulatory requirements or business decisions</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Images and visuals may include artistic impressions and should not be considered final or binding.
          </p>
        </section>

        {/* Point 5 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            5. Third-Party Links
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            This website may include links to third-party websites for user convenience. Hum Developers does not control or endorse these websites and is not responsible for their content, privacy policies, or practices.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Accessing such websites is solely at your discretion.
          </p>
        </section>

        {/* Point 6 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            6. Limitation of Liability
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            Hum Developers shall not be held liable for any loss, damage, or inconvenience arising from:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Use or inability to use this website</li>
            <li>Inaccurate or outdated information</li>
            <li>Technical errors, service interruptions, or malware attacks</li>
            <li>Decisions made based on website information</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            All users are advised to verify project details independently before making any financial decisions.
          </p>
        </section>

        {/* Point 7 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            7. Electronic Communication Consent
          </h2>
          <p className="mt-3 text-sm text-gray-700 md:text-base">
            By submitting your contact details on this website, you authorize Hum Developers to contact you via:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700 md:text-base">
            <li>Email</li>
            <li>Phone calls</li>
            <li>SMS &amp; WhatsApp</li>
            <li>Any other digital communication medium</li>
          </ul>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            This includes promotional, transactional, and informational messages, even if your number is registered under DND.
          </p>
        </section>

        {/* Point 8 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            8. Privacy Policy
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and safeguard your personal information.
          </p>
        </section>

        {/* Point 9 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            9. Changes to Terms
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Hum Developers reserves the right to update or change these Terms &amp; Conditions at any time without prior notice. You are encouraged to review this page periodically.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            Continued use of the website after updates indicates acceptance of the revised terms.
          </p>
        </section>

        {/* Point 10 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            10. Governing Law
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            These Terms &amp; Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Mumbai, India, where Hum Developers is based.
          </p>
        </section>

        {/* Point 11 */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[var(--dark-blue)] md:text-2xl">
            11. Contact Information
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
            For any questions regarding these Terms &amp; Conditions, please contact:
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
          <p className="mt-6 text-xs text-gray-500 font-medium md:text-sm">
            Last updated: August 18, 2026
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}
