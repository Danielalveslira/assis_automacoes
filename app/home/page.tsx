import React from 'react';

export default function CompanyLandingPage() {
  const especializacoes = [
    { nome: "NOCaaS",                     icone: "🌐", desc: "Monitoramento 24/7 da sua infraestrutura de rede" },
    { nome: "Cloud",                      icone: "☁️",  desc: "Infraestrutura escalável e segura na nuvem" },
    { nome: "CyberSecurity",              icone: "🔒", desc: "Proteção de dados e gestão de vulnerabilidades" },
    { nome: "Contabilidade",              icone: "📊", desc: "Gestão fiscal, tributária e planejamento financeiro" },
    { nome: "DevOps",                     icone: "⚙️",  desc: "Automação de processos e pipelines CI/CD" },
    { nome: "Data Science",               icone: "🧠", desc: "Inteligência analítica orientada a dados" },
    { nome: "Consultoria Administrativa", icone: "🏢", desc: "Otimização e mapeamento de processos internos" },
    { nome: "Consultoria Financeira",     icone: "💰", desc: "Estratégias para crescimento sustentável" },
  ];

  const stats = [
    { num: "8+",   label: "Especializações" },
    { num: "24/7", label: "Monitoramento NOC" },
    { num: "100%", label: "Foco no cliente" },
    { num: "∞",    label: "Escalabilidade" },
  ];

  const contacts = [
    { icon: "📍", label: "Endereço", val: "R. Francisca Rodrigues, 164 — Tota Barbosa\nSão Miguel — RN" },
    { icon: "✉️", label: "Email",    val: "contato@evocorp.com" },
    { icon: "📞", label: "Telefone", val: "(84) 9 9690-0941" },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-serif selection:bg-blue-500 selection:text-white overflow-x-hidden transition-colors duration-300">

      {/* ── NAV ─────────────────────────────────────────── */}


      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center
                          text-center px-6 pt-24 pb-16 overflow-hidden">

        {/* Radial glow — adapts per mode */}
        <div className="absolute inset-0
                        bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(59,130,246,0.08),transparent)]
                        dark:bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />

        {/* Grid — light mode uses dark lines, dark mode uses light lines */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 75% at 50% 0%, black 0%, transparent 70%)',
            maskImage:       'radial-gradient(ellipse 100% 75% at 50% 0%, black 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 75% at 50% 0%, black 0%, transparent 70%)',
            maskImage:       'radial-gradient(ellipse 100% 75% at 50% 0%, black 0%, transparent 70%)',
          }}
        />

        {/* Soft orb */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px]
                        rounded-full blur-[100px] pointer-events-none
                        bg-blue-400/10 dark:bg-blue-500/[0.07]" />

        <p className="relative font-sans text-[0.7rem] tracking-[0.3em] uppercase mb-8
                      text-blue-600 dark:text-blue-300
                      animate-[fadeUp_0.8s_0.2s_both]">
          Consultoria &amp; Assessoria Empresarial
        </p>

        <h1 className="relative text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-6
                       animate-[fadeUp_0.8s_0.4s_both]">
          Soluções completas para<br className="hidden md:block" />
          {' '}sua{' '}
          <em className="not-italic
                         bg-gradient-to-br from-blue-600 to-indigo-500
                         dark:from-blue-300 dark:to-cyan-400
                         bg-clip-text text-transparent">
            Evolução Digital
          </em>
        </h1>

        <p className="relative font-sans text-base font-light max-w-md mb-10
                      text-zinc-500 dark:text-zinc-400
                      animate-[fadeUp_0.8s_0.6s_both]">
          Geração de conhecimento e agregação de valor aos negócios dos nossos clientes — de ponta a ponta.
        </p>

        <a href="#contato"
           className="relative font-sans inline-flex items-center gap-2 px-6 py-3 rounded-lg
                      bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400
                      text-white text-sm font-medium tracking-wide
                      shadow-md hover:shadow-[0_8px_28px_rgba(59,130,246,0.3)]
                      transition-all duration-200 hover:-translate-y-0.5
                      animate-[fadeUp_0.8s_0.8s_both]">
          Fale com a gente
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </section>

      {/* ── STATS BAR ───────────────────────────────────── */}
      <div className="flex flex-wrap
                      border-y border-zinc-200 dark:border-white/[0.07]
                      bg-white dark:bg-zinc-900">
        {stats.map((s, i) => (
          <div key={i}
               className="flex-1 min-w-[140px] py-10 px-6 text-center
                          border-r border-zinc-200 dark:border-white/[0.07] last:border-r-0
                          hover:bg-zinc-50 dark:hover:bg-zinc-800/50
                          transition-colors duration-200">
            <div className="font-sans text-4xl font-bold leading-none mb-2
                            bg-gradient-to-br from-zinc-800 to-blue-600
                            dark:from-white dark:to-blue-300
                            bg-clip-text text-transparent">
              {s.num}
            </div>
            <div className="font-sans text-[0.7rem] tracking-widest uppercase
                            text-zinc-400 dark:text-zinc-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── QUOTE ───────────────────────────────────────── */}
      <section className="relative py-24 px-6 max-w-3xl mx-auto text-center">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-[9rem] leading-none
                        text-blue-400/20 dark:text-blue-500/10
                        select-none pointer-events-none font-serif">
          &quot;
        </div>
        <p className="relative font-serif text-xl md:text-2xl font-light italic leading-relaxed
                      text-zinc-500 dark:text-zinc-400">
          Somos uma empresa de consultoria e assessoria empresarial com atuação abrangente
          na busca contínua por{' '}
          <strong className="font-normal not-italic text-zinc-900 dark:text-zinc-100">
            geração de conhecimento
          </strong>
          {' '}e{' '}
          <strong className="font-normal not-italic text-zinc-900 dark:text-zinc-100">
            agregação de valor
          </strong>
          {' '}às atividades e negócios de nossos clientes.
        </p>
      </section>

      <hr className="border-zinc-200 dark:border-white/[0.07]" />

      {/* ── ESPECIALIZAÇÕES ─────────────────────────────── */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-sans text-[0.7rem] tracking-[0.3em] uppercase block mb-2
                           text-blue-600 dark:text-blue-300">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight
                         text-zinc-900 dark:text-zinc-100">
            Nossas Especializações
          </h2>
          <p className="font-sans text-sm font-light mt-2
                        text-zinc-500 dark:text-zinc-400">
            Atuamos de ponta a ponta para garantir a excelência do seu negócio.
          </p>
        </div>

        {/* 1px gap grid via bg color on wrapper */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden
                        bg-zinc-200 dark:bg-white/[0.07]
                        border border-zinc-200 dark:border-white/[0.07]">
          {especializacoes.map((item, i) => (
            <div key={i}
                 className="group relative flex flex-col gap-3 p-7 cursor-default overflow-hidden
                            bg-white dark:bg-zinc-900
                            hover:bg-zinc-50 dark:hover:bg-zinc-800
                            transition-colors duration-200">
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]
                              bg-gradient-to-r from-blue-500 to-indigo-500
                              scale-x-0 group-hover:scale-x-100 origin-left
                              transition-transform duration-300" />
              <div className="text-3xl">{item.icone}</div>
              <div className="font-sans font-semibold text-[0.95rem] tracking-[0.01em]
                              text-zinc-900 dark:text-zinc-100">
                {item.nome}
              </div>
              <div className="font-sans text-xs font-light leading-relaxed
                              text-zinc-400 dark:text-zinc-500">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-zinc-200 dark:border-white/[0.07]" />

      {/* ── CONTATO + MAPA ──────────────────────────────── */}
      <section id="contato" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-16 items-start">

          {/* Info */}
          <div>
            <span className="font-sans text-[0.7rem] tracking-[0.3em] uppercase block mb-3
                             text-blue-600 dark:text-blue-300">
              Localização
            </span>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight leading-snug mb-3
                           text-zinc-900 dark:text-zinc-100">
              Venha tomar um café com a gente
            </h2>
            <p className="font-sans text-sm font-light leading-relaxed mb-8
                          text-zinc-500 dark:text-zinc-400">
              Nossa sede está no coração estratégico da cidade, pronta para receber você e sua equipe.
            </p>

            {contacts.map((row, i) => (
              <div key={i}
                   className="flex items-start gap-4 py-5
                              border-b border-zinc-200 dark:border-white/[0.07]
                              first:border-t first:border-zinc-200 dark:first:border-white/[0.07]">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0
                                bg-blue-50 dark:bg-blue-500/10
                                border border-blue-200 dark:border-blue-500/20">
                  {row.icon}
                </div>
                <div>
                  <div className="font-sans text-[0.65rem] tracking-[0.1em] uppercase mb-0.5
                                  text-zinc-400 dark:text-zinc-500">
                    {row.label}
                  </div>
                  <div className="font-sans text-sm whitespace-pre-line
                                  text-zinc-700 dark:text-zinc-200">
                    {row.val}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden h-[420px] relative group
                          border border-zinc-200 dark:border-white/[0.07]
                          bg-zinc-100 dark:bg-zinc-900">
            <iframe
              title="Mapa de Localização EVOCORP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d665.8147428054174!2d-38.49211970548311!3d-6.205418992453185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a4ae2eeb43d20f%3A0x3a15c3a233d83bb!2sEVOCORP!5e1!3m2!1spt-BR!2sbr!4v1774974758960!5m2!1spt-BR!2sbr"
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </section>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}