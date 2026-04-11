// components/HeroAutomacao.tsx
'use client';

const metrics = [
  { val: '10x',  label: 'Produtividade' },
  { val: '−80%', label: 'Trabalho manual' },
  { val: '24/7', label: 'Sem parar' },
];

export default function HeroAutomacao() {
  return (
    <div
      className="
        min-h-screen font-serif overflow-x-hidden
        bg-white text-zinc-900
        dark:bg-zinc-950 dark:text-zinc-100
        selection:bg-red-600 selection:text-white
        transition-colors duration-300
      "
    >
      <section className="relative min-h-screen flex items-stretch overflow-hidden">

        {/* Linha divisória superior */}
        <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-zinc-200 dark:bg-white/10 z-10" />

        {/* Layout: esquerda (texto) + direita (foto até a borda) */}
        <div className="relative z-10 w-full flex flex-col md:flex-row">

          {/* ── COLUNA ESQUERDA: texto ── */}
          <div className="
            flex items-center
            w-full md:w-[50%] lg:w-[45%]
            px-6 md:pl-8 lg:pl-16 xl:pl-24
            md:pr-10
            pt-24 pb-16
          ">
            {/* Glow decorativo — fica na coluna de texto */}
            <div
              aria-hidden
              className="
                pointer-events-none absolute inset-0 w-full md:w-[55%]
                bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(220,38,38,0.07),transparent_70%)]
                dark:bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(220,38,38,0.13),transparent_70%)]
              "
            />

            <div className="relative w-full max-w-xl">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-8 animate-[fadeUp_0.7s_0.1s_both]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-red-600 dark:text-red-400">
                  Automação ao vivo
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.02] mb-8 animate-[fadeUp_0.7s_0.25s_both]">
                Pare de perder<br />
                tempo com{' '}
                <em className="not-italic text-red-600 dark:text-red-500">planilhas</em>.
              </h1>

              <p className="font-sans text-base md:text-lg font-light max-w-lg mb-10 leading-relaxed text-zinc-600 dark:text-zinc-400 animate-[fadeUp_0.7s_0.4s_both]">
                Automatizo os processos repetitivos do seu negócio — dados coletados, tratados
                e entregues prontos, para você decidir rápido e escalar sem dor de cabeça.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-14 animate-[fadeUp_0.7s_0.55s_both]">
                <a
                  href="#contato"
                  className="font-sans inline-flex items-center gap-2 px-6 py-3 rounded-md bg-red-600 hover:bg-red-500 text-white text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  Quero automatizar
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <button
                  onClick={() =>
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                  className="font-sans inline-flex items-center gap-2 px-6 py-3 rounded-md border border-zinc-300 hover:border-red-600 dark:border-white/15 dark:hover:border-red-500 text-zinc-700 hover:text-red-600 dark:text-zinc-300 dark:hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  Ver serviços
                </button>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-8 max-w-md animate-[fadeUp_0.7s_0.7s_both]">
                {metrics.map((m, i) => (
                  <div key={i} className="border-l border-red-500/40 dark:border-red-500/30 pl-4">
                    <div className="font-sans text-2xl md:text-3xl font-semibold leading-none mb-2 text-zinc-900 dark:text-white">
                      {m.val}
                    </div>
                    <div className="font-sans text-[0.65rem] tracking-[0.18em] uppercase text-zinc-500 dark:text-zinc-500">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ── COLUNA DIREITA: foto sangra até a borda direita ── */}
          <div className="
            relative
            w-full md:w-[50%] lg:w-[55%]
            min-h-[60vw] md:min-h-0
            animate-[fadeUp_0.7s_0.5s_both]
          ">

            {/* Divisor vertical esquerdo da coluna da foto */}
            <div
              aria-hidden
              className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-white/10 z-10 hidden md:block"
            />

            {/* Acento vermelho no topo da coluna */}
            <div
              aria-hidden
              className="absolute left-0 top-0 w-px h-24 bg-red-600 z-20 hidden md:block"
            />

            {/* Logo em background — atrás da foto */}
            <div className="
              hidden md:flex items-center justify-center
              absolute z-0
              inset-0
              animate-[fadeUp_0.7s_0.9s_both]
            ">
              <div className="relative">
                {/* Glow sutil da logo */}
                <div
                  aria-hidden
                  className="
                    absolute inset-0 -m-16
                    bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_60%)]
                    blur-3xl
                  "
                />
                <img
                  src="/clara.png"
                  alt=""
                  aria-hidden
                  className="
                    relative w-64 lg:w-80 xl:w-96 h-auto
                    opacity-[0.08] dark:opacity-[0.12]
                    blur-[1px]
                    grayscale
                    pointer-events-none
                    select-none
                  "
                />
              </div>
            </div>

            {/* Imagem: cobre todo o espaço, sem border-radius no lado direito */}
            <div className="
              absolute inset-0
              overflow-hidden
              rounded-none
              z-[1]
            ">
              <img
                src="/assis_semfundo.png"
                alt="Especialista em automação de dados"
                loading="lazy"
                decoding="async"
                className="
                  w-full h-full
                  object-contain
                  object-[right_bottom]
                "
              />

              {/* Overlay gradiente: esquerda (integração com a seção) */}
              <div className="
                absolute inset-0
                bg-gradient-to-r from-white/80 via-white/10 to-transparent
                dark:from-zinc-950/90 dark:via-zinc-950/20 dark:to-transparent
              " />
              
              {/* Overlay gradiente: CLARO em cima → ESCURO embaixo */}
              <div className="
                absolute inset-0
                bg-gradient-to-b 
                from-white/60 via-transparent to-black/80
                dark:from-zinc-950/50 dark:via-transparent dark:to-black/90
              " />

            </div>

            {/* Card do especialista — canto inferior esquerdo */}
            <div className="absolute bottom-8 left-8 z-10">
              {/* Linha vermelha decorativa antes do card */}
              <div className="w-8 h-px bg-red-500 mb-4" />

              <div className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-red-400 mb-2">
                Especialista
              </div>
              <div className="text-2xl font-normal text-white leading-tight">
                Assis Luciano
              </div>
              <div className="font-sans text-xs text-zinc-300/80 mt-1 tracking-wide">
                Automação de Dados
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
          .animate-\\[fadeUp_0\\.7s_0\\.25s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.4s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.5s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.55s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.7s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.9s_both\\] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}