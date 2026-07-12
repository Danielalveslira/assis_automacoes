"use client";

import { useState } from "react";

interface Depoimento {
  id: number;
  nome: string;
  cargo: string;
  empresa: string;
  foto: string;
  depoimento: string;
  rating: number;
}

const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: "Mariana Costa",
    cargo: "CEO",
    empresa: "TechFlow Solutions",
    foto: "/depoimentos/mariana.jpg",
    depoimento:
      "As automações implementadas pelo Assis reduziram nosso tempo de processamento em 70%. Resultado extraordinário que impactou diretamente nosso faturamento.",
    rating: 5,
  },
  {
    id: 2,
    nome: "Ricardo Almeida",
    cargo: "Diretor de Operações",
    empresa: "LogiMax Brasil",
    foto: "/depoimentos/ricardo.jpg",
    depoimento:
      "Profissionalismo impecável. Em apenas 2 semanas, automatizou processos que levávamos 3 dias para fazer manualmente. ROI impressionante.",
    rating: 5,
  },
  {
    id: 3,
    nome: "Fernanda Lima",
    cargo: "Head de Marketing",
    empresa: "Growth Agency",
    foto: "/depoimentos/fernanda.jpg",
    depoimento:
      "Nossos relatórios agora são gerados automaticamente toda manhã. Economizamos mais de 20 horas semanais da equipe. Simplesmente transformador.",
    rating: 5,
  },
  {
    id: 4,
    nome: "Carlos Eduardo",
    cargo: "CFO",
    empresa: "Investia Capital",
    foto: "/depoimentos/carlos.jpg",
    depoimento:
      "A automação financeira que o Assis criou eliminou 95% dos erros manuais. Precisão e confiabilidade que nunca tivemos antes.",
    rating: 5,
  },
  {
    id: 5,
    nome: "Juliana Santos",
    cargo: "Gerente de RH",
    empresa: "PeopleFirst Co.",
    foto: "/depoimentos/juliana.jpg",
    depoimento:
      "Do onboarding ao offboarding, tudo automatizado. Nossa equipe agora foca no que realmente importa: as pessoas. Recomendo demais!",
    rating: 5,
  },
  {
    id: 6,
    nome: "André Oliveira",
    cargo: "CTO",
    empresa: "DataDrive Systems",
    foto: "/depoimentos/andre.jpg",
    depoimento:
      "Integração perfeita entre nossos sistemas. O Assis entendeu nossa arquitetura complexa e entregou soluções elegantes e escaláveis.",
    rating: 5,
  },
];

// Duplicamos para criar efeito infinito seamless
const depoimentosDuplicados = [...depoimentos, ...depoimentos];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-blue-500" : "text-zinc-300 dark:text-zinc-700"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function DepoimentoCard({ depoimento }: { depoimento: Depoimento }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex-shrink-0 w-[400px] px-3">
      <div
        className="relative p-6 rounded-2xl border 
                   border-zinc-200 dark:border-zinc-800/50 
                   bg-gradient-to-br from-white via-zinc-50 to-zinc-100 
                   dark:from-zinc-900/90 dark:via-zinc-900/70 dark:to-zinc-950/90 
                   backdrop-blur-sm
                   transition-all duration-300 ease-out
                   hover:border-blue-400 dark:hover:border-blue-600/50 
                   hover:shadow-[0_-4px_20px_rgba(37,99,235,0.15),0_4px_20px_rgba(37,99,235,0.1)]
                   hover:-translate-y-1"
      >
        {/* Aspas decorativas */}
        <div className="absolute top-4 right-6 text-blue-400/20 dark:text-blue-600/20 pointer-events-none">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Conteúdo do depoimento */}
        <div className="relative z-10">
          <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6 line-clamp-4 font-light tracking-wide">
            &ldquo;{depoimento.depoimento}&rdquo;
          </p>

          {/* Divisor */}
          <div className="w-12 h-[2px] bg-gradient-to-r from-blue-600 to-transparent mb-5" />

          {/* Info do autor */}
          <div className="flex items-center gap-4">
            {/* Foto */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/30 rounded-full blur-md scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-zinc-300 dark:ring-zinc-700 group-hover:ring-blue-400 dark:group-hover:ring-blue-600/50 transition-all duration-500">
                {!imageError ? (
                  <img
                    src={depoimento.foto}
                    alt={depoimento.nome}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {depoimento.nome.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Nome e cargo */}
            <div className="flex-1 min-w-0">
              <h4 className="text-zinc-900 dark:text-white font-semibold text-base truncate">
                {depoimento.nome}
              </h4>
              <p className="text-zinc-500 dark:text-zinc-500 text-xs truncate font-mono">
                {depoimento.cargo}
              </p>
              <p className="text-blue-600 dark:text-blue-500/80 text-xs truncate font-mono">
                {depoimento.empresa}
              </p>
            </div>

            {/* Rating */}
            <div className="hidden sm:block">
              <StarRating rating={depoimento.rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente de fileira do carrossel com controle de pause
function MarqueeRow({
  direction,
  depoimentos,
  className = "",
}: {
  direction: "left" | "right";
  depoimentos: Depoimento[];
  className?: string;
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`overflow-hidden cursor-pointer py-4 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={() => setIsPaused((prev) => !prev)}
    >
      <div
        className="flex w-fit"
        style={{
          animation: `marquee-${direction} 40s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {depoimentos.map((dep, index) => (
          <DepoimentoCard
            key={`${direction}-${dep.id}-${index}`}
            depoimento={dep}
          />
        ))}
      </div>
    </div>
  );
}

export default function Depoimentos() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-100 dark:bg-zinc-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0 opacity-0 dark:opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradientes de fundo */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-[120px]" />

        {/* Linha decorativa vertical */}
        <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-transparent via-blue-500/30 dark:via-blue-600/30 to-transparent" />
      </div>

      {/* Header da seção */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-blue-600" />
              <span className="text-blue-600 dark:text-blue-500 text-sm font-mono uppercase tracking-[0.2em]">
                Depoimentos
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
              O que dizem sobre
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                nosso trabalho
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 border-2 border-zinc-100 dark:border-zinc-900 flex items-center justify-center"
                >
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-bold">
                    {i}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-zinc-900 dark:text-white">
                50+
              </p>
              <p className="text-xs text-zinc-500 font-mono">
                Clientes satisfeitos
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carrossel container com fade nas bordas */}
      <div className="relative">
        {/* Fade esquerda */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-zinc-100 dark:from-zinc-950 to-transparent z-20 pointer-events-none" />
        {/* Fade direita */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-zinc-100 dark:from-zinc-950 to-transparent z-20 pointer-events-none" />

        {/* Primeira fileira - movimento para esquerda */}
        <MarqueeRow direction="left" depoimentos={depoimentosDuplicados} />

        {/* Segunda fileira - movimento para direita */}
        <MarqueeRow
          direction="right"
          depoimentos={[...depoimentosDuplicados].reverse()}
        />
      </div>

      {/* CTA sutil */}
      <div className="relative z-10 mt-16 md:mt-20 text-center">
        <p className="text-zinc-500 text-sm font-mono mb-4">
          Pronto para ser o próximo caso de sucesso?
        </p>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
        >
          Solicitar Orçamento
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}