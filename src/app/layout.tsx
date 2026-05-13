import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "SetupRadar | PC 셋업 진단 플랫폼",
  description: "마우스, 키보드, 모니터 테스트 및 구매 가이드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
