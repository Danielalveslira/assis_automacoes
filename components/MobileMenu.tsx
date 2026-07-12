"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useRef, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Container flex com dois elementos: ThemeToggle e botão hamburger */}
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight" onClick={closeMenu}>
          <span className="font-bold tracking-[0.22em] uppercase text-base bg-gradient-to-r from-zinc-900 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent">
            assis_site
          </span>
          <span className="text-xs text-zinc-400 dark:text-zinc-500 tracking-wide">
            Decidir uma frase
          </span>
        </Link>

        {/* Grupo à direita: ThemeToggle + Botão hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md cursor-pointer text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            aria-label="Abrir menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button> */}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40" onClick={closeMenu} />
      )}

      {/* Menu dropdown */}
      <div
        ref={menuRef}
        className={`absolute left-0 right-0 top-16 transition-all duration-200 ease-in-out z-50 border-t border-zinc-200 dark:border-white/[0.07] bg-zinc-50/95 dark:bg-zinc-950/95 backdrop-blur-xl ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* <div className="px-4 py-4 flex flex-col gap-1">
          <Link
            href="/blog"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={closeMenu}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 4v6h6" />
            </svg>
            Blog
          </Link>

          <Link
            href="/automacoes"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={closeMenu}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
            </svg>
            Automações
          </Link>
        </div> */}
      </div>
    </>
  );
}