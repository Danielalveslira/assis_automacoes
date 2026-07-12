// components/HeroAutomacao.tsx
'use client';

import Link from 'next/link';

const metrics = [
  { val: '10x',  label: 'Produtividade' },
  { val: '−80%', label: 'Trabalho manual' },
  { val: '24/7', label: 'Sem parar' },
];

export default function HeroAutomacao() {
  return (
    <div
      className="
        font-serif overflow-x-hidden
        bg-white text-zinc-900
        dark:bg-zinc-950 dark:text-zinc-100
        selection:bg-blue-600 selection:text-white
        transition-colors duration-300
      "
    >
      <section className="relative overflow-hidden">

        {/* Linha divisória superior */}
        <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-zinc-200 dark:bg-white/10 z-10" />

        {/* Glow decorativo de fundo */}
        <div
          aria-hidden
          className="
            pointer-events-none absolute inset-0
            bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(37,99,235,0.07),transparent_70%)]
            dark:bg-[radial-gradient(ellipse_60%_50%_at_20%_20%,rgba(37,99,235,0.13),transparent_70%)]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-16 sm:pt-20 md:px-10 md:pt-24 md:pb-24 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">

            {/* ── COLUNA: texto ── */}
            <div className="relative animate-[fadeUp_0.7s_0.1s_both]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 md:mb-8">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
                </span>
                <span className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-blue-600 dark:text-blue-400">
                  Automação ao vivo
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08] mb-6 md:mb-8">
                Pare de perder tempo com{' '}
                <em className="not-italic text-blue-600 dark:text-blue-500">planilhas</em>.
              </h1>

              <p className="font-sans text-base md:text-lg font-light max-w-lg mb-8 md:mb-10 leading-relaxed text-zinc-600 dark:text-zinc-400">
                Automatizo os processos repetitivos do seu negócio — dados coletados, tratados
                e entregues prontos, para você decidir rápido e escalar sem dor de cabeça.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
                <button
                  onClick={() =>
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                  className="font-sans inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium tracking-wide transition-colors duration-200 shadow-lg shadow-blue-600/20"
                >
                  Ver serviços
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <Link
                  href="/faq"
                  className="font-sans inline-flex items-center gap-2 px-6 py-3 rounded-md border border-zinc-300 hover:border-blue-600 dark:border-white/15 dark:hover:border-blue-500 text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  Ver FAQ
                </Link>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md">
                {metrics.map((m, i) => (
                  <div key={i} className="border-l border-blue-500/40 dark:border-blue-500/30 pl-3 sm:pl-4">
                    <div className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold leading-none mb-1.5 sm:mb-2 text-zinc-900 dark:text-white">
                      {m.val}
                    </div>
                    <div className="font-sans text-[0.6rem] sm:text-[0.65rem] tracking-[0.14em] sm:tracking-[0.18em] uppercase text-zinc-500 dark:text-zinc-500">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ── COLUNA: foto em card ── */}
            <div className="relative mx-auto w-full max-w-sm md:max-w-none animate-[fadeUp_0.7s_0.4s_both]">
              <div className="relative aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black ring-1 ring-zinc-200 dark:ring-white/10 shadow-xl shadow-zinc-900/10 dark:shadow-blue-950/20">

                {/* Glow atrás da foto */}
                <div
                  aria-hidden
                  className="
                    absolute inset-0 -m-16
                    bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.25),transparent_60%)]
                    blur-3xl
                  "
                />

                {/* Foto */}
                <img
                  src="/assis_semfundo.png"
                  alt="Assis Luciano, especialista em automação de dados"
                  loading="lazy"
                  decoding="async"
                  className="
                    relative z-[1] w-full h-full
                    object-contain object-bottom
                    scale-[1.15]
                  "
                />

                {/* Overlay gradiente inferior — legibilidade do card de texto */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 z-[2] h-2/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                />

                {/* Card do especialista */}
                <div className="absolute bottom-6 left-6 right-6 z-[3]">
                  <div className="w-8 h-px bg-blue-500 mb-3" />
                  <div className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-blue-400 mb-1.5">
                    Especialista
                  </div>
                  <div className="text-xl sm:text-2xl font-normal text-white leading-tight">
                    Assis Luciano
                  </div>
                  <div className="font-sans text-xs text-zinc-300/80 mt-1 tracking-wide">
                    Automação de Dados
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeUp_0\\.7s_0\\.1s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.4s_both\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}