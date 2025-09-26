import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MenuTop from "@/components/menu-top/menu-Top";
import { ThemeProvider } from "@/shared/useContext/themeContext";
import { ConversationProvider } from "@/shared/useContext/conversationContext";
import Loader from "@/components/loader/loader";
import { LoaderProvider } from "@/shared/useContext/loaderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocAI",
  description: "Uma IA para extrair informações de documentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoaderProvider>
          <Loader />
          <ThemeProvider>
            <MenuTop />
            <ConversationProvider>
              {children}
            </ConversationProvider>
          </ThemeProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
