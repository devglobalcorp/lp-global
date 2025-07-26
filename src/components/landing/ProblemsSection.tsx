"use client";

import { Button } from "@/components/ui/button";
import { scrollToForm } from '@/utils/scroll';
import { XCircle } from 'lucide-react';

const problems = [
  "Falta de equipe técnica para atender demandas maiores e projetos complexos?",
  "Perda de oportunidades de negócio por falta de estrutura para execução e instalação?",
  "Limitação geográfica ou operacional que impede seu crescimento no mercado solar?",
  "Custos operacionais elevados ao tentar internalizar toda a mão de obra?",
  "Dificuldade em fechar grandes contratos por insegurança na entrega e qualidade?"
];

const ProblemsSection = () => {
  return (
    <section className="py-16 px-1 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl text-center">
        {/* MODIFICADO: Cor do título */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#002A5C] dark:text-blue-400 leading-tight">
          Cansado de Limitações no Setor Solar?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Você é um profissional ou empresa de energia solar e se identifica com alguma dessas dores?
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start">
                {/* MODIFICADO: Ícone com a cor laranja da paleta */}
                <XCircle size={32} className="text-[#FE6608] flex-shrink-0 mt-0.5" />
                <p className="text-lg text-gray-800 dark:text-gray-200 ml-4 font-medium leading-relaxed">
                  {problem}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mt-16 font-semibold mb-3">
          A Global Energia Solar tem a solução para você escalar seus resultados sem preocupações!
        </p>
        {/* MODIFICADO: Cores do botão */}
        <Button
          onClick={scrollToForm}
          className="bg-[#FE6608] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg"
        >
          QUERO SER PARTNER AGORA
        </Button>
      </div>
    </section>
  );
}

export default ProblemsSection;