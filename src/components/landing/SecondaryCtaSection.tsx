"use client";

import { Button } from "@/components/ui/button";

const SecondaryCtaSection = () => {
  const scrollToForm = () => {
    const formSection = document.querySelector("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    // MODIFICADO: Cor de fundo
    <section className="bg-gradient-to-r from-[#542102] via-[#000b19] to-[#000b19] relative sm-[#000b19] text-white py-12 px-1 text-center">
      <div className="container mx-auto max-w-3xl">
        {/* MODIFICADO: Cor do título e texto de destaque */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FE6608]">
          Não Deixe Essa Oportunidade Escapar!
        </h2>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Estamos selecionando apenas <span className="font-bold text-[#FE6608]">3 partners por região</span> para garantir exclusividade e qualidade no atendimento. Os primeiros <span className="font-bold text-[#FE6608]">20 partners</span> terão acesso a um kit de vendas + treinamento exclusivo gratuito.
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
};

export default SecondaryCtaSection;