// components/VideoSection.tsx
'use client';

import { useState, useEffect, FormEvent, ChangeEvent, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

const EMAILJS_SERVICE_ID = 'service_2f4f0xs';   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_jtqofnh'; // Email Templates → Template ID  
const EMAILJS_PUBLIC_KEY = 'fCNUuBVm6LLcwB_5n';    // Account → Public Key
const WHATSAPP_NUMBER = '8491830983';        // Seu WhatsApp
// ══════════════════════════════════════════════════════════════

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

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

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

// ── FORMULÁRIO DE CONTATO ─────────────────────────────────
function ContactForm({ videoTitle }: { videoTitle?: string }) {
  const [form, setForm] = useState({ nome: '', whatsapp: '', mensagem: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  // ══════════════════════════════════════════════════════════════
  // EFEITO DE CONFETE 🎉
  // ══════════════════════════════════════════════════════════════
  const fireConfetti = useCallback(() => {
    // Explosão central
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1D4ED8', '#2563EB', '#3B82F6', '#93C5FD', '#ffffff'],
    });

    // Explosões laterais com delay para efeito cascata
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: ['#1D4ED8', '#2563EB', '#22c55e', '#ffffff'],
      });
    }, 150);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: ['#1D4ED8', '#2563EB', '#22c55e', '#ffffff'],
      });
    }, 300);
  }, []);

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'whatsapp' ? formatWhatsApp(value) : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nome,
          from_whatsapp: form.whatsapp,
          message: form.mensagem || `Interesse no vídeo: ${videoTitle}`,
          video_interest: videoTitle || 'Não especificado',
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ nome: '', whatsapp: '', mensagem: '' });
      
      // 🎉 Dispara o confete!
      fireConfetti();
    } catch {
      setStatus('error');
    }
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(
      `Olá! Vi o vídeo "${videoTitle}" e gostaria de saber mais sobre automação.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const isValid = form.nome.length >= 2 && form.whatsapp.length >= 14;

  // Tela de sucesso
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-full py-12 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-serif text-xl text-zinc-900 dark:text-zinc-100 mb-2">
          Mensagem enviada!
        </p>
        <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          Retorno em até 24 horas úteis.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-sans text-xs text-blue-600 hover:text-blue-500 transition-colors"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full p-5">
      <div className="flex-1 space-y-4">
        {/* Nome */}
        <div className="relative">
          <label
            htmlFor="modal-nome"
            className={`
              absolute left-3 transition-all duration-200 pointer-events-none font-sans
              ${focused === 'nome' || form.nome
                ? 'top-1.5 text-[0.6rem] tracking-[0.12em] uppercase text-blue-600 dark:text-blue-400'
                : 'top-1/2 -translate-y-1/2 text-sm text-zinc-400'
              }
            `}
          >
            Seu nome
          </label>
          <input
            type="text"
            id="modal-nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            onFocus={() => setFocused('nome')}
            onBlur={() => setFocused(null)}
            className="
              w-full pt-6 pb-2 px-3
              bg-white dark:bg-zinc-800/50
              border border-zinc-200 dark:border-white/10
              rounded-lg
              font-sans text-sm text-zinc-900 dark:text-white
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20
              transition-all duration-200
            "
          />
        </div>

        {/* WhatsApp */}
        <div className="relative">
          <label
            htmlFor="modal-whatsapp"
            className={`
              absolute left-3 transition-all duration-200 pointer-events-none font-sans
              ${focused === 'whatsapp' || form.whatsapp
                ? 'top-1.5 text-[0.6rem] tracking-[0.12em] uppercase text-blue-600 dark:text-blue-400'
                : 'top-1/2 -translate-y-1/2 text-sm text-zinc-400'
              }
            `}
          >
            WhatsApp
          </label>
          <input
            type="tel"
            id="modal-whatsapp"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            onFocus={() => setFocused('whatsapp')}
            onBlur={() => setFocused(null)}
            className="
              w-full pt-6 pb-2 px-3
              bg-white dark:bg-zinc-800/50
              border border-zinc-200 dark:border-white/10
              rounded-lg
              font-sans text-sm text-zinc-900 dark:text-white
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20
              transition-all duration-200
            "
          />
        </div>

        {/* Mensagem */}
        <div className="relative">
          <label
            htmlFor="modal-mensagem"
            className={`
              absolute left-3 transition-all duration-200 pointer-events-none font-sans
              ${focused === 'mensagem' || form.mensagem
                ? 'top-1.5 text-[0.6rem] tracking-[0.12em] uppercase text-blue-600 dark:text-blue-400'
                : 'top-3 text-sm text-zinc-400'
              }
            `}
          >
            Conte sobre seu processo (opcional)
          </label>
          <textarea
            id="modal-mensagem"
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            onFocus={() => setFocused('mensagem')}
            onBlur={() => setFocused(null)}
            rows={4}
            className="
              w-full pt-6 pb-2 px-3
              bg-white dark:bg-zinc-800/50
              border border-zinc-200 dark:border-white/10
              rounded-lg
              font-sans text-sm text-zinc-900 dark:text-white
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20
              transition-all duration-200
              resize-none
            "
          />
        </div>
      </div>

      {/* Botões */}
      <div className="space-y-3 mt-4">
        <button
          type="submit"
          disabled={!isValid || status === 'sending'}
          suppressHydrationWarning
          className={`
            w-full py-3 px-4
            font-sans text-sm font-medium tracking-wide
            rounded-lg
            flex items-center justify-center gap-2
            transition-all duration-300
            ${status === 'error'
              ? 'bg-rose-600 text-white'
              : isValid && status !== 'sending'
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20'
              : 'bg-zinc-200 dark:bg-white/10 text-zinc-400 cursor-not-allowed'
            }
          `}
        >
          {status === 'sending' ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Enviando...
            </>
          ) : status === 'error' ? (
            'Erro — tente novamente'
          ) : (
            <>
              Enviar mensagem
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={openWhatsApp}
          className="
            w-full py-3 px-4
            font-sans text-sm font-medium tracking-wide
            rounded-lg
            flex items-center justify-center gap-2
            border border-zinc-200 dark:border-white/10
            text-zinc-600 dark:text-zinc-300
            hover:border-green-500 hover:text-green-600 dark:hover:text-green-400
            transition-all duration-200
          "
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Prefiro WhatsApp
        </button>
      </div>

      {/* Nota */}
      <p className="font-sans text-[0.6rem] text-zinc-400 dark:text-zinc-600 text-center mt-4">
        Respondo em até 24h. Seus dados ficam seguros.
      </p>
    </form>
  );
}

// ── PLAYER MODAL ──────────────────────────────────────────
function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const [showForm, setShowForm] = useState(false);

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
          ${showForm ? 'max-w-5xl' : 'max-w-3xl'}
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
                <p className="font-sans text-[10px] tracking-[.22em] uppercase text-blue-600 dark:text-blue-500 mb-1">
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
                    className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs tracking-wide uppercase px-4 py-2.5 rounded-md transition-colors"
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
            <div className="lg:w-2/5 border-t lg:border-t-0 border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col">
              <div className="flex items-start justify-between gap-3 px-5 pt-5 pb-2">
                <div>
                  <p className="font-sans text-[10px] tracking-[.22em] uppercase text-blue-600 dark:text-blue-500 mb-1">
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

              <ContactForm videoTitle={video.title} />
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
          ? 'border-blue-600/40 shadow-[0_0_0_1px_rgba(37,99,235,0.15)]'
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
              ? 'bg-blue-600 border-blue-600 scale-110'
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
        <p className="font-sans text-[9px] tracking-[.22em] uppercase text-blue-600 dark:text-blue-500 mb-1.5">
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
            <p className="font-sans text-[10px] tracking-[.28em] uppercase text-blue-600 dark:text-blue-500 mb-3">
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