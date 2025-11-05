import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "QuickSuite AI",
  description: "AI-powered micro SaaS tools",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <header className="p-6 border-b text-center text-xl font-semibold">
          QuickSuite AI
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
        <footer className="border-t text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} QuickSuite AI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
