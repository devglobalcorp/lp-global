"use client";

import { Button } from '@/components/ui/button';

interface OportunityToastProps {
  closeToast?: () => void;
  onActionClick: () => void;
}

export function OportunityToast({ closeToast, onActionClick }: OportunityToastProps) {

  const handleAction = () => {
    onActionClick();
    if (closeToast) {
      closeToast();
    }
  };

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <div>
          {/* <h2 className="text-2xl md:text-3xl font-bold text-[#FE6608]">
            Não Deixe Essa Oportunidade Escapar!
          </h2> */}
          <p className="text-base md:text-lg opacity-90 mt-2 max-w-2xl mx-auto">
            Estamos selecionando apenas{" "}
            <span className="font-bold text-[#FE6608]">3 partners por região</span>.
            Os primeiros{" "}
            <span className="font-bold text-[#FE6608]">20 partners</span>{" "}
            ganham um kit de vendas + treinamento exclusivo!
          </p>
        </div>
        <div className="mt-6">
          <Button
            onClick={handleAction}
            className="bg-[#FE6608] text-[#000b19] font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-500 transition duration-300 shadow-lg"
          >
            QUERO SER PARTNER AGORA
          </Button>
        </div>
      </div>
    </div>
  );
}