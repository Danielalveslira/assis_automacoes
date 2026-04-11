'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Ícones inline — sem dependência externa
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    className="w-[18px] h-[18px]">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2"  x2="12" y2="5"  />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2"  y1="12" x2="5"  y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34"  />
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
    <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" />
    <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"  />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"
    className="w-[18px] h-[18px]">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export function ThemeToggle() {
  const [mounted, setMounted]     = useState(false);
  const [animating, setAnimating] = useState(false); // fase "saindo"
  const [visible, setVisible]     = useState(true);  // controla opacity/scale
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  function handleClick() {
    if (animating) return; // evita cliques duplos durante a animação

    setAnimating(true);
    setVisible(false); // 1. ícone atual sai (encolhe + gira)

    setTimeout(() => {
      setTheme(isDark ? 'light' : 'dark'); // 2. troca o tema no meio da animação
    }, 150);

    setTimeout(() => {
      setVisible(true);  // 3. novo ícone entra (cresce + gira)
      setAnimating(false);
    }, 160);
  }

  return (
    <button
      onClick={handleClick}
      aria-label={isDark ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
      className="
        flex items-center justify-center w-9 h-9 rounded-full
        text-zinc-500 dark:text-zinc-400
        hover:text-zinc-900 dark:hover:text-zinc-100
        
        transition-colors duration-200
        outline-none focus-visible:ring-2 focus-visible:ring-red-500
      "
    >
      {/* Ícone com animação de entrada/saída */}
      <span className={`
        flex transition-all duration-[250ms]
        ${visible
          ? 'scale-100 rotate-0 opacity-100 ease-[cubic-bezier(.34,1.56,.64,1)]'
          : 'scale-0 rotate-[120deg] opacity-0 ease-in'
        }
      `}>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}