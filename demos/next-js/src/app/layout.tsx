import type { Metadata } from "next";

import { Geist_Mono, Geist } from "next/font/google";

import "@/app/globals.css";
import { AppSidebarTrigger } from "@/components/app-sidebar/trigger";
import { ModeToggle } from "@/components/utilities/mode-toggle";
import { AppSidebar } from "@/components/app-sidebar";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "An AI chat app to demonstrate @many-sources libraries",
  title: "Next.js Demo App - Many Sources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AppSidebar />
          <div className="h-dvh w-screen">
            <AppSidebarTrigger />
            {children}
          </div>
          <ModeToggle className="fixed top-3 right-3 z-50" />
        </Providers>
      </body>
    </html>
  );
}
