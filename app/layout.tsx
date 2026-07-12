import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import Image from "next/image";

// import MobileMenu from "@/components/MobileMenu";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

import "./globals.css";

// ── FONTS ────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
});

// ── METADATA ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "assis_site — Decidindo frase",
    template: "%s — assis_site",
  },
  description:
    "Consultoria, automação de dados e assessoria empresarial para sua evolução digital.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

const CURRENT_YEAR = new Date().getFullYear();

// ── ROOT LAYOUT ──────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${serif.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 selection:bg-blue-600 selection:text-white transition-colors duration-300" suppressHydrationWarning>
        <ThemeProvider>
          <SiteNav />
          {/* pt-20 compensa a altura do nav flutuante (52px) + margem top (16px) */}
          <main className="flex-grow pt-20">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

// ── NAV ──────────────────────────────────────────────────
// Floating pill nav — flutua sobre o conteúdo com backdrop blur.
// Centrado horizontalmente, com largura máxima igual ao restante do site.
function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="
        max-w-6xl mx-auto h-[52px] px-5
        flex items-center justify-between
        bg-white/90 dark:bg-zinc-950/90
        backdrop-blur-md
        border border-zinc-200 dark:border-white/10
        rounded-2xl
        transition-colors duration-300
      ">
        {/* Mobile: Brand à esquerda, Toggle + Menu à direita */}
        <div className="flex md:hidden items-center justify-between w-full">
          <Brand />
          <div className="flex items-center gap-1">
            <ThemeToggle />
            {/* <MobileMenu /> */}
          </div>
        </div>

        {/* Desktop: Brand à esquerda, Toggle à direita */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Brand />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

// ── FOOTER ───────────────────────────────────────────────
function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Brand size="sm" />

        <p className="font-sans text-xs text-zinc-500 dark:text-zinc-600 tracking-wide">
          © {CURRENT_YEAR} assis_site — Todos os direitos reservados
        </p>

        <Link
          href="/faq"
          className="font-sans text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          FAQ
        </Link>
      </div>
    </footer>
  );
}

// ── BRAND ────────────────────────────────────────────────
function Brand({ size = "md" }: { size?: "sm" | "md" }) {
  const titleSize = size === "sm" ? "text-base" : "text-lg";
  const tagSize   = size === "sm" ? "text-[9px]" : "text-[10px]";
  const logoSize  = size === "sm" ? 28 : 36;

  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group"
      aria-label="assis_site — Página inicial"
    >
      {/* Logo — troca conforme o tema */}
      <div
        className="relative shrink-0"
        style={{ width: logoSize, height: logoSize }}
      >
        {/* Light mode */}
        <Image
          src="/clara.png"
          alt="assis_site logo"
          fill
          sizes={`${logoSize}px`}
          priority
          className="object-contain block dark:hidden"
        />
        {/* Dark mode */}
        <Image
          src="/dark.png"
          alt="assis_site logo"
          fill
          sizes={`${logoSize}px`}
          priority
          className="object-contain hidden dark:block"
        />
      </div>

      {/* Texto da brand */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif font-normal tracking-tight ${titleSize} text-zinc-900 dark:text-zinc-100 group-hover:opacity-75 transition-opacity duration-200`}
        >
          Assis Luciano
        </span>
        <span
          className={`font-sans ${tagSize} tracking-[0.22em] uppercase text-zinc-500 dark:text-zinc-500`}
        >
          Decidir frase de impacto
        </span>
      </div>
    </Link>
  );
}