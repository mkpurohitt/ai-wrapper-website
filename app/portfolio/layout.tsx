import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from AI Wrapper across AI automation, development and modern digital marketing.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
