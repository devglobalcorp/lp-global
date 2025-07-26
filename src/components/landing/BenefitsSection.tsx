"use client";

import { DollarSign, Headset, TrendingUp, Wrench, Zap } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="py-16 px-1 bg-white">
      <div className="container mx-auto text-center max-w-5xl">
        {/* MODIFICADO: Cor do título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#000b19]">
          Sua Parceria Estratégica para o Sucesso na Energia Solar
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Com o programa de parceria da Global Energia Solar, você foca no que faz de melhor: vender. Nós cuidamos de todo o resto!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* MODIFICADO: Cor dos ícones e títulos em todos os cards */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <DollarSign className="text-[#FE6608] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#000b19]">Comissão Atrativa</h3>
            <p className="text-gray-600">Receba comissões generosas por cada projeto fechado, maximizando seus ganhos.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <Wrench className="text-[#FE6608] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#000b19]">Zero Preocupação com Execução</h3>
            <p className="text-gray-600">A Global Energia Solar assume toda a parte técnica, engenharia e instalação. Você vende, a gente entrega!</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <Zap className="text-[#FE6608] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#000b19]">Entrega Rápida e Qualidade Garantida</h3>
            <p className="text-gray-600">Projetos entregues com agilidade e o padrão de excelência Global Energia Solar.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <Headset className="text-[#FE6608] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#000b19]">Suporte Completo</h3>
            <p className="text-gray-600">Conte com nosso suporte técnico e comercial em todas as etapas da parceria.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <TrendingUp className="text-[#FE6608] mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-[#000b19]">Soluções Escaláveis</h3>
            <p className="text-gray-600">Acesso a um portfólio completo para projetos de pequeno, médio e grande porte.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;