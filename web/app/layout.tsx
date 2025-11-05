import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "QuickSuite AI",
  description: "AI-powered micro SaaS tools",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="logo-nav">
            <img src="/logo_quicksuite.svg" alt="QuickSuite AI Logo" className="logo" />
            <nav>
              <a href="/">Home</a>
              <a href="/pricing">Pricing</a>
              <a href="/docs">Docs</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          © {new Date().getFullYear()} QuickSuite AI. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
