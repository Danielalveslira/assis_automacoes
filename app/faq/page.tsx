export default function AboutPage() {
  return (
    <div className="dark:bg-zinc-900 mb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Dúvidas comuns sobre nossos serviços, processos e entregas
          </p>
        </header>

        <div>
          <section className="space-y-6">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                O que exatamente vocês fazem?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Desenvolvemos soluções digitais completas: aplicações web, infraestrutura,
                monitoramento, automação e otimização de performance. Atuamos do planejamento
                à operação contínua.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Vocês atendem qualquer tipo de empresa?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sim. Atendemos desde pequenos negócios até operações maiores que precisam
                escalar com estabilidade. Adaptamos a solução ao nível de maturidade técnica
                e ao objetivo do cliente.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Como funciona o processo de desenvolvimento?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Começamos com diagnóstico técnico e entendimento do negócio. Em seguida,
                definimos arquitetura, entregamos em ciclos curtos e mantemos acompanhamento
                contínuo com métricas claras de desempenho.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Vocês oferecem suporte após a entrega?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Sim. Trabalhamos com monitoramento, manutenção e evolução contínua.
                Garantimos estabilidade, segurança e melhorias constantes conforme o uso
                da solução cresce.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Quanto tempo leva para entregar um projeto?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Depende da complexidade. Projetos simples podem levar semanas, enquanto
                soluções mais robustas exigem ciclos maiores. Sempre definimos prazos claros
                antes do início.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Como é definido o custo?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                O custo é baseado no escopo, complexidade técnica e tempo estimado.
                Após análise inicial, entregamos uma proposta objetiva, sem custos ocultos.
              </p>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}