import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evocorp - Evolução Digital",
  description: "Consultoria e assessoria empresarial para sua evolução digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>

          {/* ── NAV ──────────────────────────────────────────── */}
          <nav className="fixed top-0 inset-x-0 z-50 h-16
                          bg-zinc-50/85 dark:bg-zinc-950/85 backdrop-blur-xl
                          border-b border-zinc-200 dark:border-white/[0.07]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">

              {/* ── MOBILE ── */}
              <div className="md:hidden h-full">
                <div className="flex items-center justify-between h-full">

                  {/* Logo */}
                  <Link href="/" className="flex flex-col leading-tight">
                    <span className="font-bold tracking-[0.22em] uppercase text-base
                                     bg-gradient-to-r from-zinc-900 to-blue-600
                                     dark:from-white dark:to-blue-300
                                     bg-clip-text text-transparent">
                      Evocorp
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide">
                      Evolução Digital.
                    </span>
                  </Link>

                  {/* Right: theme + hamburger */}
                  <label
                    htmlFor="mobile-menu"
                    className="flex items-center gap-3 p-2 rounded-md cursor-pointer
                               text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300
                               transition-colors"
                  >
                    <span className="sr-only">Abrir menu</span>
                    <ThemeToggle />
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </label>
                </div>

                <input type="checkbox" id="mobile-menu" className="hidden peer" />

                {/* Mobile dropdown */}
                <div className="hidden peer-checked:block
                                border-t border-zinc-200 dark:border-white/[0.07]
                                bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur-xl">
                  <div className="px-4 py-4 flex flex-col gap-1">
                    <Link
                      href="/blog"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                                 text-zinc-600 dark:text-zinc-300
                                 hover:bg-zinc-100 dark:hover:bg-zinc-800
                                 hover:text-blue-600 dark:hover:text-blue-400
                                 transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 4v6h6"/>
                      </svg>
                      Blog
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── DESKTOP ── */}
              <div className="hidden md:flex items-center justify-between h-full">

                {/* Logo */}
                <Link href="/" className="flex flex-col leading-tight group">
                  <span className="font-bold tracking-[0.22em] uppercase text-base
                                   bg-gradient-to-r from-zinc-900 to-blue-600
                                   dark:from-white dark:to-blue-300
                                   bg-clip-text text-transparent
                                   transition-opacity group-hover:opacity-80">
                    Evocorp
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide">
                    Evolução Digital.
                  </span>
                </Link>

                {/* Right side */}
                <div className="flex items-center gap-6">

                  {/* Nav links */}
                  <Link
                    href="/blog"
                    className="font-sans text-sm font-medium tracking-wide
                               text-zinc-500 dark:text-zinc-400
                               hover:text-zinc-900 dark:hover:text-zinc-100
                               transition-colors"
                  >
                    Blog
                  </Link>

                  {/* Divider */}
                  <div className="w-px h-4 bg-zinc-200 dark:bg-white/10" />

                  {/* GitHub */}
                  <a
                    href="https://github.com/Danielalveslira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 dark:text-zinc-500
                               hover:text-zinc-700 dark:hover:text-zinc-300
                               transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd" />
                    </svg>
                  </a>

                  <ThemeToggle />
                </div>
              </div>

            </div>
          </nav>

          {/* Push content below fixed nav */}
          <main className="flex-grow pt-16">{children}</main>

          {/* ── FOOTER ───────────────────────────────────────── */}
          <footer className="border-t border-zinc-200 dark:border-white/[0.07]
                             bg-white dark:bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6
                            flex flex-col sm:flex-row items-center justify-between gap-3">

              {/* Brand */}
              <span className="font-bold tracking-[0.22em] uppercase text-sm
                               bg-gradient-to-r from-zinc-900 to-blue-600
                               dark:from-white dark:to-blue-300
                               bg-clip-text text-transparent">
                Evocorp
              </span>

              {/* Center copy */}
              <p className="font-sans text-xs text-zinc-400 dark:text-zinc-600 tracking-wide">
                © {new Date().getFullYear()} Evocorp — Todos os direitos reservados
              </p>

              {/* Links */}
              <Link
                href="/faq"
                className="font-sans text-xs text-blue-600 dark:text-blue-400
                           hover:underline underline-offset-4 transition-colors"
              >
                FAQ
              </Link>

            </div>
          </footer>

        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}