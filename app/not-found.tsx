import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        min-h-screen font-serif px-6 flex items-center justify-center
        bg-white text-zinc-900
        dark:bg-zinc-950 dark:text-zinc-100
        selection:bg-red-600 selection:text-white
        transition-colors duration-300
      "
    >
      <div
        aria-hidden
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(220,38,38,0.06),transparent_70%)]
          dark:bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(220,38,38,0.12),transparent_70%)]
        "
      />

      <div className="relative z-10 max-w-xl w-full">
        {/* Etiqueta */}
        <div className="flex items-center gap-2 mb-8 animate-[fadeUp_0.6s_0.05s_both]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
          </span>
          <span className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-red-600 dark:text-red-400">
            Erro de execução
          </span>
        </div>

        {/* 404 gigante em serif */}
        <h1
          className="
            text-8xl md:text-9xl font-normal tracking-tight leading-none mb-6
            animate-[fadeUp_0.6s_0.15s_both]
          "
        >
          4<em className="not-italic text-red-600 dark:text-red-500">0</em>4
        </h1>

        <p
          className="
            text-2xl md:text-3xl font-normal tracking-tight mb-4
            animate-[fadeUp_0.6s_0.25s_both]
          "
        >
          Essa rota não existe.
        </p>

        <p
          className="
            font-sans text-sm md:text-base font-light max-w-md mb-10 leading-relaxed
            text-zinc-600 dark:text-zinc-400
            animate-[fadeUp_0.6s_0.35s_both]
          "
        >
          O script tentou rodar, mas a página que você procura foi movida ou
          nunca foi automatizada por aqui.
        </p>

        {/* Mini terminal — referência ao card do hero */}
        <div
          className="
            mb-10 p-4 rounded-md border
            border-zinc-200 bg-zinc-50
            dark:border-white/10 dark:bg-zinc-900/60
            animate-[fadeUp_0.6s_0.45s_both]
          "
        >
          <div className="flex items-center gap-1.5 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-red-500/50" />
            <span className="w-2 h-2 rounded-full bg-red-500/25" />
            <span className="font-sans text-[0.6rem] tracking-widest uppercase text-zinc-500 ml-2">
              router.py
            </span>
          </div>
          <pre className="font-mono text-[0.72rem] leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap">
{`> buscando rota...
> verificando cache
`}<span className="text-red-600 dark:text-red-400">{`✗ exit code 404 — rota não encontrada`}</span>
          </pre>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 animate-[fadeUp_0.6s_0.55s_both]">
          <Link
            href="/"
            className="
              group font-sans inline-flex items-center gap-2 px-6 py-3 rounded-md
              bg-red-600 hover:bg-red-500 text-white text-sm font-medium tracking-wide
              transition-colors duration-200
            "
          >
            <svg
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar ao início
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[fadeUp"] { animation: none !important; }
        }
      `}</style>
    </main>
  );
}