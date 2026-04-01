"use client";

import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    id: "01",
    icon: "⚡",
    title: "RPA para Faturamento",
    subtitle: "Portal Nacional",
    description:
      "Automação crítica desenvolvida em momento de instabilidade do sistema principal. Garantiu continuidade do faturamento e evitou perdas financeiras significativas em processo altamente sensível.",
    impact: "Risco direto de prejuízo na arrecadação eliminado.",
    tag: "CRÍTICO",
  },
  {
    id: "02",
    icon: "🔩",
    title: "RPA Complexo em SAP",
    subtitle: "Ambiente Corporativo",
    description:
      "Automação com múltiplas regras de negócio, validações e condições diretamente no ambiente SAP. Alto nível de complexidade lógica com grande volume de dados processados.",
    impact: "Economia massiva de tempo operacional. Erros humanos: zero.",
    tag: "ALTO VOLUME",
  },
  {
    id: "03",
    icon: "🐍",
    title: "Automação Python",
    subtitle: "Google Colab & VS Code",
    description:
      "Scripts para extração e tratamento de dados via APIs, validação de informações financeiras, processamento de PDFs, notas fiscais, boletos e integração entre sistemas.",
    impact: "Tarefas repetitivas eliminadas. Confiabilidade dos dados aumentada.",
    tag: "MULTI-SISTEMA",
  },
  {
    id: "04",
    icon: "📬",
    title: "E-mails Automatizados",
    subtitle: "Disparo Inteligente",
    description:
      "Automações para envio inteligente com base em regras e validações de dados. Comparação de bases, disparo automático com critérios definidos e geração de relatórios de envio.",
    impact: "Mais de 10 dias de trabalho manual eliminados por mês.",
    tag: "10 DIAS/MÊS",
  },
  {
    id: "05",
    icon: "📊",
    title: "Power BI + Dados",
    subtitle: "Analytics Avançado",
    description:
      "Fluxos automatizados para preparação de dados, DAX avançado para análises e validações, relatórios dinâmicos para tomada de decisão e dashboards de insights.",
    impact: "Processos de horas reduzidos para minutos.",
    tag: "ANALYTICS",
  },
];

const techs = [
  "Python",
  "Power BI",
  "SAP RPA",
  "SQL",
  "Databricks",
  "APIs REST",
];

const results = [
  { number: "10+", label: "dias de trabalho\neliminados por mês", highlight: false },
  { number: "0", label: "perdas na\narrecadação", highlight: false },
  { number: "100%", label: "processos críticos\nautomatizados", highlight: false },
  { number: "∞", label: "escalabilidade\noperacional", highlight: false },
  { number: "milhares", label: "de horas economizadas\npor ano", highlight: true },
];

export default function AutomacoesPage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-zinc-50 dark:bg-zinc-950 min-h-screen overflow-x-hidden font-mono transition-colors duration-300">
      {/* ── GRAIN OVERLAY ── */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-end pb-16 px-6 sm:px-12 lg:px-24 overflow-hidden"
      >
        {/* Background cross grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220,38,38,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220,38,38,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />

        {/* Red bleeding slash */}
        <div
          className="absolute -right-32 top-0 w-[60vw] h-full opacity-15"
          style={{
            background:
              "linear-gradient(135deg, transparent 40%, #dc2626 40%, #dc2626 42%, transparent 42%)",
          }}
        />
        <div
          className="absolute -right-16 top-0 w-[60vw] h-full opacity-8"
          style={{
            background:
              "linear-gradient(135deg, transparent 44%, #ef4444 44%, #ef4444 45%, transparent 45%)",
          }}
        />

        {/* Glowing orb */}
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)",
            transform: `translate(${scrollY * 0.05}px, ${-scrollY * 0.08}px)`,
          }}
        />

        {/* Top label */}
        <div className="absolute top-8 left-6 sm:left-12 lg:left-24 flex items-center gap-3">
          <span className="text-red-500 text-xs tracking-[0.4em] uppercase">
            Evocorp
          </span>
          <span className="text-zinc-400 dark:text-zinc-700 text-xs">///</span>
          <span className="text-zinc-400 dark:text-zinc-500 text-xs tracking-[0.3em] uppercase">
            Soluções
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl">
          <div className="overflow-hidden mb-2">
            <p
              className="text-red-500 text-xs sm:text-sm tracking-[0.6em] uppercase mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              ● Sistema ativo
            </p>
          </div>

          <h1 className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.88] tracking-tighter text-zinc-900 dark:text-white uppercase mb-8">
            AUTO
            <br />
            <span className="text-red-600 relative">
              MAÇÃO
              <span
                className="absolute bottom-2 left-0 w-full h-[6px] bg-red-600"
                style={{ transform: "scaleX(1)", transformOrigin: "left" }}
              />
            </span>
            <br />
            <span className="text-zinc-500 dark:text-zinc-400 text-[clamp(1.5rem,5vw,4.5rem)] font-light tracking-normal">
              inteligente de processos
            </span>
          </h1>

          {/* Author byline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-red-600" />
            <span className="text-zinc-500 dark:text-zinc-400 text-xs tracking-[0.3em] uppercase">
              por
            </span>
            <span className="text-zinc-900 dark:text-white font-black text-sm tracking-[0.2em] uppercase">
              Assis Luciano
            </span>
            <div className="w-2 h-2 bg-red-600 rotate-45" />
            <span className="text-zinc-500 dark:text-zinc-400 text-xs tracking-widest uppercase">
              Especialista em Automação
            </span>
          </div>

          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mb-12">
            Transformamos operações manuais em eficiência escalável — com RPA,
            Python e análise de dados em ambientes corporativos reais.
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px border border-red-900/30 bg-red-900/20 mt-2">
            {/* Regular cards — first 4 */}
            {results.filter(r => !r.highlight).map((r, i) => (
              <div
                key={i}
                className="relative flex flex-col justify-between p-5 group transition-all duration-300 overflow-hidden
                           bg-white/90 dark:bg-zinc-950/90 hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[18px] border-l-[18px] border-t-red-600/40 border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="font-black tabular-nums leading-none mb-3 block text-red-500 text-2xl sm:text-3xl group-hover:text-red-400 transition-colors">
                  {r.number}
                </span>
                <span className="text-[10px] sm:text-xs leading-snug whitespace-pre-line font-medium tracking-wide text-zinc-500">
                  {r.label}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}

            {/* Highlight card — full width bottom row */}
            {results.filter(r => r.highlight).map((r, i) => (
              <div
                key={i}
                className="relative col-span-2 lg:col-span-4 flex flex-col sm:flex-row sm:items-center sm:justify-between
                           p-6 sm:px-10 bg-red-600 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 to-transparent pointer-events-none" />
                {/* Diagonal slash decoration */}
                <div className="absolute right-0 top-0 w-64 h-full opacity-10"
                  style={{ background: "linear-gradient(135deg, transparent 40%, #fff 40%, #fff 42%, transparent 42%)" }}
                />
                <span className="relative font-black tabular-nums leading-none text-white text-4xl sm:text-5xl lg:text-6xl tracking-tighter">
                  {r.number}
                </span>
                <div className="relative mt-3 sm:mt-0 sm:text-right">
                  <p className="text-red-100 text-sm sm:text-base font-medium tracking-wide leading-snug">
                    de horas economizadas
                  </p>
                  <p className="text-white font-black text-lg sm:text-xl tracking-wider uppercase">
                    por ano
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-600">
          <span className="text-[10px] tracking-[0.3em] uppercase rotate-90 origin-center translate-y-4">
            scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="relative px-6 sm:px-12 lg:px-24 py-4 overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-red-900/50" />
          <span className="text-red-600 text-xs tracking-[0.5em] uppercase font-bold">
            Soluções Desenvolvidas
          </span>
          <div className="h-px flex-1 bg-red-900/50" />
        </div>
      </div>

      {/* ── SOLUTIONS ── */}
      <section className="px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto space-y-0">
          {solutions.map((sol, i) => (
            <div
              key={sol.id}
              className="group relative border-b border-zinc-200 dark:border-zinc-800/60 cursor-pointer transition-all duration-500"
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                background:
                  activeCard === i
                    ? "linear-gradient(90deg, rgba(220,38,38,0.04) 0%, transparent 60%)"
                    : "transparent",
              }}
            >
              {/* Red left bar */}
              <div
                className="absolute left-0 top-0 w-1 h-full bg-red-600 transition-transform duration-300 origin-top"
                style={{
                  transform:
                    activeCard === i ? "scaleY(1)" : "scaleY(0)",
                }}
              />

              <div className="py-8 pl-6 pr-4 grid grid-cols-12 gap-4 items-start">
                {/* Number */}
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-red-800 text-xs font-bold tracking-widest">
                    {sol.id}
                  </span>
                </div>

                {/* Icon + Title */}
                <div className="col-span-10 sm:col-span-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl">{sol.icon}</span>
                    <div>
                      <h3 className="text-zinc-900 dark:text-white font-bold text-base sm:text-lg leading-tight">
                        {sol.title}
                      </h3>
                      <p className="text-red-500 text-xs tracking-wider uppercase">
                        {sol.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="col-span-12 sm:col-span-5 sm:col-start-6">
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {sol.description}
                  </p>
                  <p
                    className="text-red-400/80 text-xs mt-3 leading-relaxed transition-all duration-300"
                    style={{ opacity: activeCard === i ? 1 : 0.4 }}
                  >
                    📌 {sol.impact}
                  </p>
                </div>

                {/* Tag */}
                <div className="col-span-12 sm:col-span-2 flex sm:justify-end items-start">
                  <span
                    className="text-[9px] font-black tracking-[0.2em] px-2 py-1 border transition-all duration-300"
                    style={{
                      borderColor:
                        activeCard === i
                          ? "rgba(220,38,38,0.8)"
                          : "rgba(220,38,38,0.2)",
                      color:
                        activeCard === i
                          ? "rgb(220,38,38)"
                          : "rgba(220,38,38,0.4)",
                    }}
                  >
                    {sol.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="px-6 sm:px-12 lg:px-24 py-16 relative overflow-hidden">
        {/* Bg slash */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background:
              "repeating-linear-gradient(-45deg, #dc2626 0px, #dc2626 1px, transparent 1px, transparent 40px)",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <p className="text-red-600 text-xs tracking-[0.5em] uppercase mb-6">
            Stack Técnico
          </p>
          <div className="flex flex-wrap gap-3">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="group relative text-xs sm:text-sm font-bold tracking-widest uppercase px-5 py-3
                           border border-zinc-300 dark:border-zinc-700
                           text-zinc-500 dark:text-zinc-400
                           hover:border-red-600 hover:text-red-600 dark:hover:text-white hover:bg-red-600/10
                           transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section className="px-6 sm:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800/40">
          {[
            {
              label: "Resultado de negócio",
              desc: "Foco em impacto real, não apenas código funcional.",
            },
            {
              label: "Ambiente corporativo",
              desc: "Experiência prática em processos críticos reais.",
            },
            {
              label: "Grande volume de dados",
              desc: "Capacidade comprovada em escala.",
            },
            {
              label: "Financeiro & Cobrança",
              desc: "Forte atuação nas áreas de maior impacto financeiro.",
            },
          ].map((d, i) => (
            <div
              key={i}
              className="bg-zinc-50 dark:bg-zinc-950 p-8 group hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-red-600 text-lg mt-0.5 group-hover:scale-110 transition-transform">
                  ▸
                </span>
                <div>
                  <h4 className="text-zinc-900 dark:text-white font-bold text-sm tracking-wide mb-1">
                    {d.label}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 sm:px-12 lg:px-24 py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(220,38,38,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-red-500 text-xs tracking-[0.6em] uppercase mb-6">
            Próximo passo
          </p>
          <h2 className="text-4xl sm:text-6xl font-black text-zinc-900 dark:text-white uppercase leading-tight tracking-tighter mb-6">
            Seu processo
            <br />
            <span className="text-red-600">ainda é manual?</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-12">
            Se sua empresa possui processos manuais, repetitivos ou suscetíveis
            a erro — existe uma grande oportunidade de ganho com automação.
          </p>

          <a
            href="mailto:contato@evocorp.com.br"
            className="inline-flex items-center gap-4 bg-red-600 hover:bg-red-500 text-white
                       font-black text-xs sm:text-sm tracking-[0.3em] uppercase
                       px-10 py-5 transition-all duration-200
                       hover:gap-6 hover:shadow-[0_0_40px_rgba(220,38,38,0.4)]"
          >
            Falar com Assis Luciano
            <span className="text-lg">→</span>
          </a>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        .font-mono { font-family: 'Space Mono', monospace; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        section { animation: fadeSlideUp 0.6s ease both; }
      `}</style>
    </div>
  );
}