import type { Metadata } from "next";
import { Inter ,Space_Grotesk} from "next/font/google";
import Navbar from '@/components/Navbar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({subsets:['latin'], weight:['300','400','500','600','700']})
export const metadata: Metadata = {
  title: "PricePal",
  description: "Easy way to track products prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto ">
        <Navbar/>
        {children}
        </main>
        </body>
    </html>
  );
}
