import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatBytes Dashboard",
  description: "Skill assessment dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gray-50 text-black flex flex-col">
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
               {/* Logo Section tha is put before the word whatBytes  */}
              <div className="flex items-center space-x-3 group ml-12 md:ml-0 ">
                <div className="w-8 h-8 flex items-center justify-center text-blue-500 group-hover:text-blue-600 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-full h-full"
                  >
                    <rect x="3" y="4" width="5" height="20" rx="1" />
                    <rect x="12" y="7" width="5" height="20" rx="1" />
                    <rect x="21" y="4" width="5" height="20" rx="1" />
                  </svg>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors cursor-pointer transition-scale-300">
                  WhatBytes
                </h1>
              </div>

              {/* Profile Section */}
              <div className="flex items-center space-x-2 cursor-pointer group">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                  <Image
                    src="/IMG_1242    S.JPG" // my photo that put on th top right corner
                    alt="Profile"
                    width={32}
                    height={32}
                    className="object-cover"
                    priority
                  />
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-700 hidden sm:block group-hover:text-blue-600 transition-colors">
                  Siyamregn
                </p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="flex flex-1">
            <Sidebar />

            <main className="flex-1 p-4 sm:p-6 overflow-auto z-10">
              <div className="container mx-auto max-w-7xl">
                {children}
              </div>
            </main>
          </div>

          {/*Footer part  */}
          <footer className="bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 sm:px-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} WhatBytes Dashboard. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

