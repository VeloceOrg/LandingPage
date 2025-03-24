import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
