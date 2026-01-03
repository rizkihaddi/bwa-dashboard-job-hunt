'use client'

import { Epilogue } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/layouts/Sidebar";
import Header from "@/components/layouts/Header";

const geistEpilogue = Epilogue({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistEpilogue.variable} antialiased`}
      >
        <main>
          <div className="border-t">
            <div className="bg-background">
              <div className="flex flex-row">
                <div className="hidden lg:block lg:border-r lg:col-span-2 w-[18%]">
                  <Sidebar />
                </div>
                <div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
                  <div className="px-6 py-6 lg:px-8 lg:py-8">
                    <div>
                      <Header/>
                    </div>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
