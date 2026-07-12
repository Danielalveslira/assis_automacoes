'use client';

import { useState, useCallback, memo, useMemo } from 'react';
import Link from 'next/link';

// ✏️  EDITE APENAS AQUI PERGUNTAS E RESPOSTAS
const faqData = [
  {
    pergunta: "O que é automação de dados e como ela pode ajudar minha empresa?",
    resposta: "Automação de dados é o processo de usar tecnologia para executar tarefas repetitivas relacionadas a dados sem intervenção manual. Isso inclui coleta, processamento, análise e distribuição de informações. Para sua empresa, significa economia de tempo, redução de erros humanos, decisões mais rápidas baseadas em dados atualizados e sua equipe focada em atividades estratégicas ao invés de tarefas operacionais."
  },
  {
    pergunta: "Quanto tempo leva para implementar uma automação?",
    resposta: "O tempo varia conforme a complexidade do projeto. Automações simples, como integração entre planilhas e envio de relatórios automáticos, podem ser entregues em 3 a 5 dias úteis. Projetos mais complexos, envolvendo múltiplas fontes de dados, dashboards personalizados e fluxos de aprovação, geralmente levam de 2 a 4 semanas. Sempre faço uma análise inicial gratuita para dar um prazo preciso."
  },
  {
    pergunta: "Quais ferramentas você utiliza nas automações?",
    resposta: "Trabalho com um arsenal completo de ferramentas modernas: Python para scripts robustos, n8n e Make para fluxos visuais, Google Sheets e Excel para planilhas inteligentes, Power BI e Looker Studio para dashboards, APIs REST para integrações, além de ferramentas de IA como GPT e Claude para processamento inteligente de dados. A escolha depende das necessidades específicas do seu projeto."
  },
  {
    pergunta: "Preciso ter conhecimento técnico para usar as automações?",
    resposta: "Absolutamente não! Todas as automações são desenvolvidas pensando na experiência do usuário final. Você receberá interfaces intuitivas, documentação clara e treinamento completo. Meu objetivo é que você opere tudo com a mesma facilidade de usar um aplicativo no celular. Além disso, ofereço suporte contínuo para qualquer dúvida que surgir."
  },
  {
    pergunta: "E se algo der errado com a automação?",
    resposta: "Toda automação que desenvolvo inclui sistemas de monitoramento e alertas. Se algo sair do esperado, você é notificado imediatamente e, na maioria dos casos, tenho protocolos de recuperação automática. Além disso, ofereço garantia e suporte técnico. Trabalho com backups e redundâncias para garantir que seus dados estejam sempre seguros e seus processos funcionando 24/7."
  },
  {
    pergunta: "Qual é o investimento para criar uma automação?",
    resposta: "O investimento depende do escopo e complexidade do projeto. Trabalho com propostas personalizadas após entender suas necessidades específicas. Ofereço desde pacotes acessíveis para pequenas automações até projetos enterprise completos. O mais importante: toda automação se paga rapidamente através da economia de tempo e recursos. Agende uma conversa gratuita para receber um orçamento sem compromisso."
  },
] as const;

// 🚫  NÃO EDITE ABAIXO - LÓGICA E ESTILIZAÇÃO DO COMPONENTE

// ÍCONES MEMOIZADOS

const ChevronIcon = memo(function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : 'text-zinc-400 dark:text-zinc-500'}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
});

const QuestionIcon = memo(function QuestionIcon() {
  return (
    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
});

const ArrowLeftIcon = memo(function ArrowLeftIcon() {
  return (
    <svg
      className="w-4 h-4 transition-transform group-hover:-translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
});

// COMPONENTE FAQ ITEM MEMOIZADO

interface FaqItemProps {
  index: number;
  pergunta: string;
  resposta: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = memo(function FaqItem({
  index,
  pergunta,
  resposta,
  isOpen,
  onToggle,
}: FaqItemProps) {
  const formattedIndex = useMemo(() => String(index + 1).padStart(2, '0'), [index]);

  return (
    <div
      className={`
        rounded-xl border transition-colors duration-200
        ${isOpen
          ? 'border-blue-500/40 bg-white dark:border-blue-500/30 dark:bg-zinc-900/60'
          : 'border-zinc-200 bg-white/50 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700'
        }
      `}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-5 py-5 md:px-6 md:py-6 flex items-center gap-4 md:gap-5"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span
          className={`
            shrink-0 font-mono text-xs md:text-sm tabular-nums
            ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-400 dark:text-zinc-600'}
          `}
          aria-hidden="true"
        >
          {formattedIndex}
        </span>

        <h3 className="flex-1 text-base md:text-lg font-medium leading-snug text-zinc-900 dark:text-zinc-100">
          {pergunta}
        </h3>

        <ChevronIcon isOpen={isOpen} />
      </button>

      {/* Resposta — grid-rows para animação sem JS e sem reflow custoso */}
      <div
        id={`faq-answer-${index}`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-5 md:pb-6 pl-[3.25rem] md:pl-[3.75rem] text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
            {resposta}
          </p>
        </div>
      </div>
    </div>
  );
});

// COMPONENTE HEADER MEMOIZADO

const PageHeader = memo(function PageHeader() {
  return (
    <header className="text-center mb-12 md:mb-16">
      <p className="text-xs md:text-sm font-mono tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-4">
        FAQ
      </p>

      <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
        Perguntas <span className="text-blue-600 dark:text-blue-400">Frequentes</span>
      </h1>

      <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        Tire suas dúvidas sobre automação de dados e como posso transformar
        os processos da sua empresa.
      </p>
    </header>
  );
});

// COMPONENTE CTA MEMOIZADO

const CtaSection = memo(function CtaSection() {
  return (
    <section className="mt-12 md:mt-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 md:p-6 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <QuestionIcon />
          </div>
          <div className="text-left">
            <p className="text-zinc-900 dark:text-white font-semibold text-sm md:text-base">Ainda tem dúvidas?</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm">Vamos conversar sem compromisso</p>
          </div>
        </div>
        <Link
          href="/#contato"
          className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg font-medium text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors duration-200"
        >
          Falar com Assis
        </Link>
      </div>
    </section>
  );
});

// COMPONENTE PRINCIPAL

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  // Memoiza os handlers individuais para cada item — evita re-render de todos
  // os FaqItems quando apenas um abre/fecha
  const toggleHandlers = useMemo(
    () => faqData.map((_, index) => () => handleToggle(index)),
    [handleToggle]
  );

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm font-mono" aria-label="Breadcrumb">
          <Link href="/" className="text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            home
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700" aria-hidden="true">/</span>
          <span className="text-zinc-700 dark:text-zinc-300" aria-current="page">faq</span>
        </nav>

        <PageHeader />

        <section className="space-y-3" aria-label="Perguntas frequentes">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              pergunta={item.pergunta}
              resposta={item.resposta}
              isOpen={openIndex === index}
              onToggle={toggleHandlers[index]}
            />
          ))}
        </section>

        <CtaSection />

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm group font-mono"
          >
            <ArrowLeftIcon />
            voltar para home
          </Link>
        </div>
      </div>
    </main>
  );
}