'use client';

import { useState } from 'react';

// ═══════════════════════════════════════════════════════════════════════════
// ✏️  EDITE APENAS AQUI - SUAS PERGUNTAS E RESPOSTAS
// ═══════════════════════════════════════════════════════════════════════════

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
];

// ═══════════════════════════════════════════════════════════════════════════
// 🚫  NÃO EDITE ABAIXO - LÓGICA E ESTILIZAÇÃO DO COMPONENTE
// ═══════════════════════════════════════════════════════════════════════════

interface FaqItemProps {
  index: number;
  pergunta: string;
  resposta: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem = ({ index, pergunta, resposta, isOpen, onClick }: FaqItemProps) => {
  return (
    <div 
      className={`
        group relative overflow-hidden
        border rounded-2xl
        transition-all duration-500 ease-out
        ${isOpen 
          ? 'bg-gradient-to-br from-zinc-100/90 via-zinc-100/70 to-red-50/50 dark:from-zinc-900/90 dark:via-zinc-900/70 dark:to-red-950/20 border-red-500/40 dark:border-red-600/40 shadow-lg shadow-red-200/30 dark:shadow-red-900/10' 
          : 'bg-white/60 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-800/60 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700/60'
        }
      `}
    >
      {/* Linha decorativa lateral */}
      <div 
        className={`
          absolute left-0 top-0 bottom-0 w-1 
          transition-all duration-500 ease-out
          ${isOpen 
            ? 'bg-gradient-to-b from-red-500 via-red-600 to-red-700' 
            : 'bg-zinc-200 dark:bg-zinc-800 group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700'
          }
        `}
      />

      {/* Grid pattern sutil quando aberto */}
      {isOpen && (
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      )}

      {/* Header clicável */}
      <button
        onClick={onClick}
        className="w-full text-left p-6 md:p-8 flex items-start gap-4 md:gap-6 relative z-10"
      >
        {/* Número com estilo terminal */}
        <div 
          className={`
            flex-shrink-0 w-12 h-12 md:w-14 md:h-14
            rounded-xl flex items-center justify-center
            font-mono text-sm md:text-base font-bold
            transition-all duration-500 ease-out
            ${isOpen 
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
              : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-800'
            }
          `}
        >
          <span className="opacity-60 text-xs mr-0.5">&gt;</span>
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Pergunta */}
        <div className="flex-1 pt-1">
          <h3 
            className={`
              text-lg md:text-xl font-semibold leading-tight font-syne
              transition-colors duration-300
              ${isOpen ? 'text-zinc-900 dark:text-white' : 'text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white'}
            `}
          >
            {pergunta}
          </h3>
        </div>

        {/* Ícone de toggle */}
        <div 
          className={`
            flex-shrink-0 w-10 h-10 rounded-full
            flex items-center justify-center
            border transition-all duration-500 ease-out
            ${isOpen 
              ? 'border-red-500/50 bg-red-100 dark:bg-red-600/20 rotate-180' 
              : 'border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 group-hover:border-zinc-300 dark:group-hover:border-zinc-600'
            }
          `}
        >
          <svg 
            className={`w-5 h-5 transition-colors duration-300 ${isOpen ? 'text-red-500 dark:text-red-400' : 'text-zinc-400 dark:text-zinc-500'}`}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Resposta com animação */}
      <div 
        className={`
          overflow-hidden transition-all duration-500 ease-out
          ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 pl-[4.5rem] md:pl-[6.5rem]">
          {/* Linha separadora animada */}
          <div className="relative h-px mb-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
            <div 
              className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent
                transition-transform duration-700 ease-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
              `}
            />
          </div>

          {/* Texto da resposta */}
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-light">
            {resposta}
          </p>

          {/* Tag decorativa */}
          <div className="mt-6 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/50 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-zinc-500 dark:text-zinc-500">resposta.verified</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs decorativos */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-red-400/10 dark:bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-red-400/10 dark:bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-400/5 dark:bg-red-600/3 rounded-full blur-3xl" />

        {/* Linhas de grade sutis */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Scan line effect - apenas dark mode */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-[0.015]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
          }}
        />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-32">
        
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-2 text-sm font-mono">
          <a href="/" className="text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors">
            home
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">/</span>
          <span className="text-zinc-700 dark:text-zinc-300">faq</span>
        </nav>

        {/* Header da página */}
        <header className="text-center mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 mb-6 font-mono shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm text-zinc-500 dark:text-zinc-400">faq.system</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-6 font-syne">
            Perguntas{' '}
            <span className="relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-700 dark:from-red-400 dark:via-red-500 dark:to-red-600">
                Frequentes
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-red-500/20 dark:bg-red-600/20 blur-lg" />
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas sobre automação de dados e como posso 
            transformar os processos da sua empresa.
          </p>

          {/* Linha decorativa */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-300 dark:to-zinc-700" />
            <div className="w-2 h-2 rounded-full bg-red-600" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-300 dark:to-zinc-700" />
          </div>
        </header>

        {/* Lista de FAQs */}
        <section className="space-y-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              pergunta={item.pergunta}
              resposta={item.resposta}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/60 backdrop-blur-sm shadow-lg shadow-zinc-200/50 dark:shadow-none">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-500/30 dark:shadow-red-900/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-zinc-900 dark:text-white font-semibold">Ainda tem dúvidas?</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">Vamos conversar sem compromisso</p>
              </div>
            </div>
            <a 
              href="/#contato" 
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-500/30 dark:shadow-red-900/30 hover:shadow-red-500/50 dark:hover:shadow-red-900/50 hover:-translate-y-0.5"
            >
              Falar com Assis
            </a>
          </div>
        </section>

        {/* Voltar para Home */}
        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-500 dark:hover:text-red-400 transition-colors text-sm group font-mono"
          >
            <svg 
              className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            voltar para home
          </a>
        </div>
      </div>
    </main>
  );
}