// components/VideoSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

// ── TIPOS ─────────────────────────────────────────────────
interface Video {
  id: string;
  tag: string;
  title: string;
  desc?: string;
  duration: string;
  src?: string;
  thumbnail?: string;
}

// ── DADOS ─────────────────────────────────────────────────
const VIDEOS: Video[] = [
  {
    id: 'v1',
    tag: 'Relatório automático',
    title: 'De planilha manual para dashboard em tempo real',
    desc: 'Coleta, tratamento e entrega automática de dados sem uma linha de código manual.',
    duration: '12:47',
    src: 'https://www.youtube-nocookie.com/embed/jNQXAC9IVRw?autoplay=1',
    thumbnail: '/clara.png',
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
  const [showForm, setShowForm] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Carrega o script do OpnForm dinamicamente quando o form abre
  useEffect(() => {
    if (!showForm) return;

    const scriptId = 'opnform-embed-handler';
    const formId = 'formulario-de-solicitacao-de-servico-6x78e7';

    const initEmbed = () => {
      // @ts-expect-error - initEmbed é injetado pelo script externo
      if (typeof window.initEmbed === 'function') {
        // @ts-expect-error
        window.initEmbed(formId, { autoResize: true });
      }
    };

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      initEmbed();
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://opnform.com/widgets/iframe.min.js';
    script.async = true;
    script.onload = initEmbed;
    document.body.appendChild(script);
  }, [showForm]);

  // Bloqueia scroll do body enquanto o modal está aberto
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          w-full bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-white/10
          overflow-hidden transition-all duration-500 ease-out my-8
          ${showForm ? 'max-w-6xl' : 'max-w-3xl'}
        `}
      >
        {/* Container responsivo: lado a lado no desktop quando form está aberto */}
        <div className={`flex flex-col ${showForm ? 'lg:flex-row' : ''}`}>
          {/* ── COLUNA DO VÍDEO ── */}
          <div className={`flex flex-col ${showForm ? 'lg:w-3/5 lg:border-r lg:border-zinc-200 lg:dark:border-white/10' : 'w-full'}`}>
            {/* Área do vídeo */}
            <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
              {video.src ? (
                <iframe
                  src={video.src}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-zinc-400 dark:text-zinc-600">
                  <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="font-sans text-xs tracking-widest uppercase">Em breve</span>
                </div>
              )}
            </div>

            {/* Info + fechar */}
            <div className="flex items-start justify-between gap-4 px-5 py-4">
              <div className="min-w-0">
                <p className="font-sans text-[10px] tracking-[.22em] uppercase text-red-600 dark:text-red-500 mb-1">
                  {video.tag}
                </p>
                <p className="font-serif text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                  {video.title}
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 mt-0.5 w-7 h-7 flex items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Fechar vídeo"
              >
                <svg width="14" height="14" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* CTA: abrir formulário (some quando o form já está aberto) */}
            {!showForm && (
              <div className="px-5 pb-5 pt-1 border-t border-zinc-100 dark:border-white/5">
                <div className="flex items-center justify-between gap-4 pt-4">
                  <div className="min-w-0">
                    <p className="font-serif text-sm text-zinc-900 dark:text-zinc-100 leading-snug">
                      Quer uma automação assim no seu negócio?
                    </p>
                    <p className="font-sans text-xs text-zinc-500 dark:text-zinc-500 mt-0.5">
                      Preencha o formulário e eu retorno em até 24h.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowForm(true)}
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-sans text-xs tracking-wide uppercase px-4 py-2.5 rounded-md transition-colors"
                  >
                    Quero também
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ── COLUNA DO FORMULÁRIO ── */}
          {showForm && (
            <div
              ref={formContainerRef}
              className="lg:w-2/5 border-t lg:border-t-0 border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-3">
                <div>
                  <p className="font-sans text-[10px] tracking-[.22em] uppercase text-red-600 dark:text-red-500 mb-1">
                    Fale comigo
                  </p>
                  <p className="font-serif text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                    Conte sobre seu processo
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-shrink-0 font-sans text-[10px] tracking-wider uppercase text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
                  aria-label="Fechar formulário"
                >
                  Recolher
                </button>
              </div>

              <div className="flex-1 px-2 pb-2">
                <iframe
                  id="formulario-de-solicitacao-de-servico-6x78e7"
                  title="Formulário de Solicitação de Serviço"
                  src="https://opnform.com/forms/contact-form-woeypr"
                  className="w-full border-0 rounded-md bg-white"
                  style={{ minHeight: '539px' }}
                />
              </div>
            </div>
          )}
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
  const hasThumb = Boolean(video.thumbnail);

  const placeholderGradient = featured
    ? 'bg-[radial-gradient(ellipse_at_30%_60%,#fee2e240,transparent_60%),linear-gradient(135deg,#fafaf9,#fef2f2)] dark:bg-[radial-gradient(ellipse_at_30%_60%,#1f103480,transparent_60%),linear-gradient(135deg,#1c1917,#1c0a0a)]'
    : video.id === 'v2'
      ? 'bg-[linear-gradient(135deg,#ecfdf5,#eff6ff)] dark:bg-[linear-gradient(135deg,#0c1f1c,#0a1f2e)]'
      : 'bg-[linear-gradient(135deg,#fff7ed,#fefce8)] dark:bg-[linear-gradient(135deg,#1c100a,#1a1a0a)]';

  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        group relative rounded-xl overflow-hidden cursor-pointer
        bg-white dark:bg-zinc-900 border transition-all duration-300
        ${hovered
          ? 'border-red-600/40 shadow-[0_0_0_1px_rgba(220,38,38,0.15)]'
          : 'border-zinc-200 dark:border-white/8'
        }
      `}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/10]' : 'aspect-video'}`}>
        {hasThumb ? (
          <>
            <img
              src={video.thumbnail}
              alt={video.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
            />
            <div className={`absolute inset-0 transition-colors duration-300 ${hovered ? 'bg-black/40' : 'bg-black/25'}`} />
          </>
        ) : (
          <div className={`absolute inset-0 transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'} ${placeholderGradient}`}>
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] dark:opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(currentColor 1px,transparent 1px),linear-gradient(90deg,currentColor 1px,transparent 1px)',
                backgroundSize: '32px 32px',
                color: 'rgb(82 82 91)',
              }}
            />
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className={`
            flex items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-200
            ${featured ? 'w-16 h-16' : 'w-12 h-12'}
            ${hovered
              ? 'bg-red-600 border-red-600 scale-110'
              : hasThumb
                ? 'bg-white/15 border-white/30'
                : 'bg-zinc-900/10 dark:bg-white/10 border-zinc-900/20 dark:border-white/20'
            }
          `}>
            <svg className={`translate-x-px ${featured ? 'w-5 h-5' : 'w-4 h-4'}`} viewBox="0 0 16 16" fill="white">
              <polygon points="4,2 14,8 4,14" />
            </svg>
          </div>
        </div>

        <span className="absolute bottom-2.5 right-2.5 z-10 font-sans text-[10px] text-white bg-black/60 px-1.5 py-0.5 rounded tracking-wide">
          {video.duration}
        </span>
      </div>

      <div className={`px-4 ${featured ? 'py-4' : 'py-3'}`}>
        <p className="font-sans text-[9px] tracking-[.22em] uppercase text-red-600 dark:text-red-500 mb-1.5">
          {video.tag}
        </p>
        <p className={`font-serif font-normal text-zinc-900 dark:text-zinc-100 leading-snug ${featured ? 'text-[17px]' : 'text-sm'}`}>
          {video.title}
        </p>
        {featured && video.desc && (
          <p className="font-sans text-xs text-zinc-600 dark:text-zinc-500 mt-2 leading-relaxed">
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
      <section
        id="servicos"
        className="bg-white dark:bg-zinc-950 px-6 py-20 border-t border-zinc-200 dark:border-white/8 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-sans text-[10px] tracking-[.28em] uppercase text-red-600 dark:text-red-500 mb-3">
              Automação em prática
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 dark:text-zinc-100 mb-3">
              Veja como funciona
            </h2>
            <p className="font-sans text-sm text-zinc-600 dark:text-zinc-500 font-light leading-relaxed max-w-sm">
              Processos reais automatizados, do zero ao resultado. Sem enrolação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-3">
            <VideoCard video={featured} featured onClick={() => setActiveVideo(featured)} />
            <div className="flex flex-col gap-3">
              {rest.map((v) => (
                <VideoCard key={v.id} video={v} onClick={() => setActiveVideo(v)} />
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <span className="font-sans text-xs text-zinc-400 dark:text-zinc-700 tracking-wide">
              3 de 3 vídeos
            </span>
          </div>
        </div>
      </section>

      {activeVideo && (
        <VideoModal
          key={activeVideo.id}
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}