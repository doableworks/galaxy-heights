import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | HUM Galaxy Heights",
  description: "Thank you for contacting HUM Galaxy Heights. Our team will get in touch with you shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
