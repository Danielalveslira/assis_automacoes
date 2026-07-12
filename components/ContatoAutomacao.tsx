// components/ContatoAutomacao.tsx
'use client';

import { useState, FormEvent, ChangeEvent, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

// ══════════════════════════════════════════════════════════════
// CONFIGURAÇÃO EMAILJS — Substitua pelos seus valores
// Pegue em: https://dashboard.emailjs.com/
// ══════════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = 'service_2f4f0xs';   // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'template_jtqofnh'; // Email Templates → Template ID  
const EMAILJS_PUBLIC_KEY = 'fCNUuBVm6LLcwB_5n';    // Account → Public Key
// ══════════════════════════════════════════════════════════════

const WHATSAPP_NUMBER = '558491830983'; // ⚠️ 

interface FormData {
  nome: string;
  whatsapp: string;
  mensagem: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContatoAutomacao() {
  const [form, setForm] = useState<FormData>({ nome: '', whatsapp: '', mensagem: '' });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  const handleWhatsAppChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, whatsapp: formatWhatsApp(e.target.value) });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.nome,
          from_whatsapp: form.whatsapp,
          message: form.mensagem,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ nome: '', whatsapp: '', mensagem: '' });
      
      // 🎉 Dispara o confete!
      fireConfetti();
      
      // Reset após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMsg('Erro ao enviar. Tente pelo WhatsApp.');
      
      // Reset erro após 4 segundos
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de saber mais sobre automação de dados.`
    );
    const digitsOnly = WHATSAPP_NUMBER.replace(/\D/g, '');
    window.open(`https://wa.me/${digitsOnly}?text=${message}`, '_blank');
  };

  const isValid = form.nome.length >= 2 && form.whatsapp.length >= 14 && form.mensagem.length >= 10;

  return (
    <section
      id="contato"
      className="
        relative font-serif overflow-hidden
        bg-zinc-50 text-zinc-900
        dark:bg-zinc-900 dark:text-zinc-100
        transition-colors duration-300
      "
    >
      {/* Linha divisória superior */}
      <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-zinc-200 dark:bg-white/10" />

      {/* Grid decorativo de fundo */}
      <div
        aria-hidden
        className="
          absolute inset-0 opacity-[0.015] dark:opacity-[0.03]
          bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          bg-[size:4rem_4rem]
        "
      />

      {/* Glow vermelho sutil */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute
          top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2
          w-[40rem] h-[40rem]
          bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.06),transparent_70%)]
          dark:bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_70%)]
          blur-3xl
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-16 py-24 md:py-32">

        {/* Header da seção */}
        <div className="mb-16 md:mb-20 animate-[fadeUp_0.7s_0.1s_both]">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500" />
            </span>
            <span className="font-sans text-[0.65rem] tracking-[0.28em] uppercase text-blue-600 dark:text-blue-400">
              Vamos conversar
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08]">
            Pronto para{' '}
            <em className="not-italic text-blue-600 dark:text-blue-500">automatizar</em>?
          </h2>
        </div>

        {/* Layout principal: 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* ── COLUNA ESQUERDA: CTA WhatsApp + Benefícios ── */}
          <div className="animate-[fadeUp_0.7s_0.25s_both]">

            <p className="font-sans text-lg md:text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-400 mb-10 max-w-md">
              Respondo em minutos. Escolha o canal que preferir — formulário para detalhes ou WhatsApp para agilidade.
            </p>

            {/* Card WhatsApp */}
            <div className="
              relative group cursor-pointer
              p-6 md:p-8
              bg-white dark:bg-zinc-800/50
              border border-zinc-200 dark:border-white/10
              rounded-xl
              hover:border-blue-500/50 dark:hover:border-blue-500/30
              transition-all duration-300
              mb-10
            "
            onClick={openWhatsApp}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openWhatsApp()}
            >
              {/* Linha decorativa */}
              <div className="absolute top-0 left-8 w-12 h-px bg-blue-500 -translate-y-px" />

              <div className="flex items-start gap-5">
                {/* Ícone WhatsApp */}
                <div className="
                  flex-shrink-0
                  w-14 h-14
                  flex items-center justify-center
                  bg-green-500/10 dark:bg-green-500/20
                  rounded-xl
                  group-hover:bg-green-500 group-hover:scale-105
                  transition-all duration-300
                ">
                  <svg
                    className="w-7 h-7 text-green-600 dark:text-green-400 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>

                <div className="flex-1">
                  <div className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-green-600 dark:text-green-400 mb-2">
                    Resposta imediata
                  </div>
                  <div className="text-xl md:text-2xl font-normal mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Chamar no WhatsApp
                  </div>
                  <div className="font-sans text-sm text-zinc-500 dark:text-zinc-500">
                    Clique para iniciar uma conversa direta
                  </div>
                </div>

                {/* Arrow */}
                <div className="
                  flex-shrink-0 self-center
                  w-10 h-10 flex items-center justify-center
                  rounded-full
                  bg-zinc-100 dark:bg-white/5
                  group-hover:bg-blue-600 group-hover:translate-x-1
                  transition-all duration-300
                ">
                  <svg
                    className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Mini-benefícios */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚡', text: 'Resposta em minutos' },
                { icon: '🔒', text: 'Dados protegidos' },
                { icon: '💬', text: 'Sem compromisso' },
                { icon: '🎯', text: 'Solução sob medida' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-center gap-3
                    font-sans text-sm text-zinc-600 dark:text-zinc-400
                  "
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

          </div>

          {/* ── COLUNA DIREITA: Formulário ── */}
          <div className="animate-[fadeUp_0.7s_0.4s_both]">

            <div className="
              relative
              p-8 md:p-10
              bg-white dark:bg-zinc-800/30
              border border-zinc-200 dark:border-white/10
              rounded-2xl
              shadow-xl shadow-zinc-900/5 dark:shadow-black/20
            ">
              {/* Acento vermelho no canto */}
              <div aria-hidden className="absolute top-0 right-10 w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-full" />

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Campo: Nome */}
                <div className="relative">
                  <label
                    htmlFor="nome"
                    className={`
                      absolute left-4 transition-all duration-200 pointer-events-none font-sans
                      ${focused === 'nome' || form.nome
                        ? 'top-2 text-[0.65rem] tracking-[0.15em] uppercase text-blue-600 dark:text-blue-400'
                        : 'top-1/2 -translate-y-1/2 text-sm text-zinc-400'
                      }
                    `}
                  >
                    Seu nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    onFocus={() => setFocused('nome')}
                    onBlur={() => setFocused(null)}
                    className="
                      w-full pt-7 pb-3 px-4
                      bg-zinc-50 dark:bg-white/5
                      border border-zinc-200 dark:border-white/10
                      rounded-lg
                      font-sans text-base text-zinc-900 dark:text-white
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30
                      transition-all duration-200
                    "
                  />
                </div>

                {/* Campo: WhatsApp */}
                <div className="relative">
                  <label
                    htmlFor="whatsapp"
                    className={`
                      absolute left-4 transition-all duration-200 pointer-events-none font-sans
                      ${focused === 'whatsapp' || form.whatsapp
                        ? 'top-2 text-[0.65rem] tracking-[0.15em] uppercase text-blue-600 dark:text-blue-400'
                        : 'top-1/2 -translate-y-1/2 text-sm text-zinc-400'
                      }
                    `}
                  >
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={form.whatsapp}
                    onChange={handleWhatsAppChange}
                    onFocus={() => setFocused('whatsapp')}
                    onBlur={() => setFocused(null)}
                    placeholder=""
                    className="
                      w-full pt-7 pb-3 px-4
                      bg-zinc-50 dark:bg-white/5
                      border border-zinc-200 dark:border-white/10
                      rounded-lg
                      font-sans text-base text-zinc-900 dark:text-white
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30
                      transition-all duration-200
                    "
                  />
                  {/* Indicador de formato */}
                  {focused === 'whatsapp' && !form.whatsapp && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-xs text-zinc-400">
                      (00) 00000-0000
                    </span>
                  )}
                </div>

                {/* Campo: Mensagem */}
                <div className="relative">
                  <label
                    htmlFor="mensagem"
                    className={`
                      absolute left-4 transition-all duration-200 pointer-events-none font-sans
                      ${focused === 'mensagem' || form.mensagem
                        ? 'top-2 text-[0.65rem] tracking-[0.15em] uppercase text-blue-600 dark:text-blue-400'
                        : 'top-5 text-sm text-zinc-400'
                      }
                    `}
                  >
                    Como posso ajudar?
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    onFocus={() => setFocused('mensagem')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    className="
                      w-full pt-7 pb-3 px-4
                      bg-zinc-50 dark:bg-white/5
                      border border-zinc-200 dark:border-white/10
                      rounded-lg
                      font-sans text-base text-zinc-900 dark:text-white
                      focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30
                      transition-all duration-200
                      resize-none
                    "
                  />
                  {/* Contador de caracteres */}
                  <span className="absolute bottom-3 right-4 font-sans text-[0.65rem] text-zinc-400">
                    {form.mensagem.length}/500
                  </span>
                </div>

                {/* Botão Submit */}
                <button
                  type="submit"
                  disabled={!isValid || status === 'sending'}
                  suppressHydrationWarning
                  className={`
                    relative w-full py-4 px-6
                    font-sans text-sm font-medium tracking-wide
                    rounded-lg
                    flex items-center justify-center gap-2
                    transition-all duration-300
                    ${status === 'success'
                      ? 'bg-green-600 text-white cursor-default'
                      : status === 'error'
                      ? 'bg-rose-600 text-white cursor-default'
                      : isValid && status !== 'sending'
                      ? 'bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                      : 'bg-zinc-200 dark:bg-white/10 text-zinc-400 dark:text-zinc-600 cursor-not-allowed'
                    }
                  `}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : status === 'success' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Mensagem enviada!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {errorMsg}
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

              </form>

              {/* Nota de privacidade */}
              <p className="mt-6 font-sans text-[0.7rem] text-center text-zinc-400 dark:text-zinc-600 leading-relaxed">
                Seus dados são usados apenas para contato.<br />
                Nunca compartilhamos suas informações.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Linha divisória inferior */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-zinc-200 dark:bg-white/10" />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeUp_0\\.7s_0\\.1s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.25s_both\\],
          .animate-\\[fadeUp_0\\.7s_0\\.4s_both\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}