import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "bloG.",
  description: "Next.js starter app",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children, session }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <Head>
          <title>bloG.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className={inter.className}>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
