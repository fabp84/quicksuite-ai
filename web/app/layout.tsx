import type { ReactNode } from "react";

export const metadata = {
  title: "QuickSuite AI",
  description: "AI-powered micro SaaS tools",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>QuickSuite AI</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} QuickSuite AI. All rights reserved.</footer>
      </body>
    </html>
  );
}
