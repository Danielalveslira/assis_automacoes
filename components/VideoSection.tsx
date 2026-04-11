// components/VideoSection.tsx
'use client';

import { useState } from 'react';

// ── TIPOS ─────────────────────────────────────────────────
interface Video {
  id: string;
  tag: string;
  title: string;
  desc?: string;
  duration: string;
  // Troque src por uma URL real de YouTube/Vimeo quando tiver o vídeo
  src?: string;
}

// ── DADOS (substitua src quando tiver os vídeos reais) ────
const VIDEOS: Video[] = [
  {
    id: 'v1',
    tag: 'Relatório automático',
    title: 'De planilha manual para dashboard em tempo real',
    desc: 'Coleta, tratamento e entrega automática de dados sem uma linha de código manual.',
    duration: '12:47',
    src: "https://www.youtube.com/embed/=lEXBxijQREo?autoplay=1"
  },
  {
    id: 'v2',
    tag: 'Integração de sistemas',
    title: 'CRM + planilha sincronizados automaticamente',
    duration: '7:22',
  },
  {
    id: 'v3',
    tag: 'Extração de dados',
    title: 'Web scraping + envio automático por e-mail',
    duration: '9:05',
  },
];

// ── PLAYER MODAL ──────────────────────────────────────────
function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  return (
    // Backdrop — clique fora fecha
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl bg-zinc-950 rounded-xl border border-white/10 overflow-hidden"
      >
        {/* Área do vídeo */}
        <div className="relative aspect-video bg-zinc-900 flex items-center justify-center">
          {video.src ? (
            <iframe
              src={video.src}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            // Placeholder enquanto não tem vídeo real
            <div className="flex flex-col items-center gap-3 text-zinc-600">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span className="font-sans text-xs tracking-widest uppercase">Em breve</span>
            </div>
          )}
        </div>

        {/* Info + fechar */}
        <div className="flex items-start justify-between gap-4 px-5 py-4">
          <div>
            <p className="font-sans text-[10px] tracking-[.22em] uppercase text-red-500 mb-1">{video.tag}</p>
            <p className="font-serif text-base text-zinc-100 leading-snug">{video.title}</p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-200 hover:bg-white/10 transition-colors"
            aria-label="Fechar vídeo"
          >
            <svg width="14" height="14" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ── CARD DE VÍDEO ─────────────────────────────────────────
function VideoCard({
  video,
  featured = false,
  onClick,
}: {
  video: Video;
  featured?: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative rounded-xl overflow-hidden cursor-pointer
        bg-zinc-900 border transition-all duration-300
        ${hovered
          ? 'border-red-600/40 shadow-[0_0_0_1px_rgba(220,38,38,0.15)]'
          : 'border-white/8'
        }
      `}
    >
      {/* THUMBNAIL */}
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-video'}`}>

        {/* Grade de fundo — substitua por <img> ou thumbnail real */}
        <div className={`
          absolute inset-0 transition-transform duration-500
          ${hovered ? 'scale-105' : 'scale-100'}
          ${featured
            ? 'bg-[radial-gradient(ellipse_at_30%_60%,#1f103480,transparent_60%),linear-gradient(135deg,#1c1917,#1c0a0a)]'
            : video.id === 'v2'
              ? 'bg-[linear-gradient(135deg,#0c1f1c,#0a1f2e)]'
              : 'bg-[linear-gradient(135deg,#1c100a,#1a1a0a)]'
          }
        `}>
          {/* Grid decorativo */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        {/* Botão play */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className={`
            flex items-center justify-center rounded-full border backdrop-blur-sm
            transition-all duration-200
            ${featured ? 'w-16 h-16' : 'w-12 h-12'}
            ${hovered
              ? 'bg-red-600 border-red-600 scale-110'
              : 'bg-white/10 border-white/20'
            }
          `}>
            <svg
              className={`translate-x-px ${featured ? 'w-5 h-5' : 'w-4 h-4'}`}
              viewBox="0 0 16 16" fill="white"
            >
              <polygon points="4,2 14,8 4,14" />
            </svg>
          </div>
        </div>

        {/* Duração */}
        <span className="absolute bottom-2.5 right-2.5 z-10 font-sans text-[10px] text-white bg-black/60 px-1.5 py-0.5 rounded tracking-wide">
          {video.duration}
        </span>
      </div>

      {/* INFO */}
      <div className={`px-4 ${featured ? 'py-4' : 'py-3'}`}>
        <p className="font-sans text-[9px] tracking-[.22em] uppercase text-red-500 mb-1.5">
          {video.tag}
        </p>
        <p className={`font-serif font-normal text-zinc-100 leading-snug ${featured ? 'text-[17px]' : 'text-sm'}`}>
          {video.title}
        </p>
        {featured && video.desc && (
          <p className="font-sans text-xs text-zinc-500 mt-2 leading-relaxed">
            {video.desc}
          </p>
        )}
      </div>
    </article>
  );
}

// ── SEÇÃO PRINCIPAL ───────────────────────────────────────
export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const [featured, ...rest] = VIDEOS;

  return (
    <>
      <section id="servicos" className="bg-zinc-950 px-6 py-20 border-t border-white/8">
        <div className="max-w-6xl mx-auto">

          {/* Cabeçalho */}
          <div className="mb-12">
            <p className="font-sans text-[10px] tracking-[.28em] uppercase text-red-600 dark:text-red-500 mb-3">
              Automação em prática
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-zinc-100 mb-3">
              Veja como funciona
            </h2>
            <p className="font-sans text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
              Processos reais automatizados, do zero ao resultado. Sem enrolação.
            </p>
          </div>

          {/* Grid: 1 destaque + 2 menores */}
          <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">

            {/* Destaque */}
            <VideoCard
              video={featured}
              featured
              onClick={() => setActiveVideo(featured)}
            />

            {/* Menores empilhados */}
            <div className="flex flex-col gap-3">
              {rest.map((v) => (
                <VideoCard key={v.id} video={v} onClick={() => setActiveVideo(v)} />
              ))}
            </div>
          </div>

            {/* Rodapé da seção */}
            <div className="mt-8 flex items-center justify-between">
              <span className="font-sans text-xs text-zinc-700 tracking-wide">
                3 de 3 vídeos
              </span>

              {/* <a
                href="#videos"
                className="font-sans text-xs tracking-[.18em] uppercase text-zinc-500 hover:text-red-500 flex items-center gap-1.5 transition-colors duration-200"
              >
                Ver todos os casos
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a> */}
            </div>

        </div>
      </section>

      {/* Modal — renderiza fora do flow */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  );
}