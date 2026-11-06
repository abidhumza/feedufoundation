import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FeedU Foundation | Every Life Deserves A Chance",
  description:
    "FeedU Foundation is a non-profit organisation and social impact NGO working towards stronger communities through food, education, healthcare, empowerment and environmental care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
