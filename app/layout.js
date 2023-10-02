import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter, K2D } from "next/font/google";
import { NextAuthProvider } from "./Providers";

const inter = K2D({weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Google_Auth",
  description: "Google Authentication using NextAuth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="max-w-3xl mx-auto">
            <Navbar />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
