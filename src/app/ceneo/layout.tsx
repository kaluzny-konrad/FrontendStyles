import Footer from "@/components/ceneo/shared/footer/Footer";
import Nav from "@/components/ceneo/shared/nav/Nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceneo - porównywarka cen",
  description: "Generated by create next app",
};

export default async function CeneoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-100">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
