"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="py-16 px-1 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        {/* MODIFICADO: Cor do título */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#000b19]">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {/* MODIFICADO: Cor do texto das perguntas */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold text-[#000b19]">
              Quem pode se tornar um Partner Global Energia Solar?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base">
              Nosso programa é ideal para empresas de energia solar, vendedores autônomos, representantes comerciais e empreendedores que buscam expandir seus negócios no setor solar, mesmo sem experiência prévia em execução de projetos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold text-[#000b19]">
              Como funciona a comissão?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base">
              Oferecemos uma comissão atrativa por cada projeto fechado. Os detalhes exatos são discutidos durante o processo de parceria, garantindo transparência e excelentes ganhos para você.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold text-[#000b19]">
              A Global Energia Solar realmente cuida de toda a execução?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base">
              Sim! Nossa proposta é que você foque 100% na venda. A Global Energia Solar é responsável por toda a engenharia, fornecimento de equipamentos, instalação e pós-venda, garantindo a qualidade e agilidade que seus clientes merecem.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold text-[#000b19]">
              Existe algum custo para se tornar um Partner?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 text-base">
              Sim, existe uma taxa de adesão de R$5.000. Este valor cobre seu credenciamento, acesso a treinamentos exclusivos, acompanhamento contínuo da nossa equipe e o direito de revenda, garantindo que você esteja totalmente preparado para o sucesso.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;