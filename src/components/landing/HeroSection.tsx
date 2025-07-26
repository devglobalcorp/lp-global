"use client";

import { OportunityToast } from '@/components/ui/OportunityToast';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import { scrollToForm } from '@/utils/scroll';
import { ShieldCheck, Users, Wrench } from "lucide-react";
import { Button } from '../ui/button';
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A lógica do toast permanece a mesma
    const timer = setTimeout(() => {
      toast(
        <OportunityToast onActionClick={scrollToForm} />,
        {
          autoClose: 30000,
          closeButton: true,
          style: {
            width: '100vw',
            backgroundColor: '#000b19',
            borderBottom: '2px solid #FE6608',
            padding: '1.5rem 1rem',
          },
        }
      );
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#542102] via-[#000b19] to-[#000b19] relative sm-[#000b19] text-white">
      {/* <img src="/logo.png" alt="Global Energia Solar Logo" className="max-w-[20rem] container absolute top-0 right-0 left-0 z-[9999]" /> */}

      <div className="mx-auto relative z-10">

        {/* --- Container Principal com o novo estilo --- */}
        <div
          className="w-full min-h-[45vw] bg-no-repeat bg-[length:100%_auto] bg-bottom flex flex-col justify-center items-center text-center p-4 md:bg-banner-hero bg-none bg-cover"
        >
          {/* Conteúdo que será centralizado pelo flexbox */}
          <div className="w-full max-w-4xl ">
            {/* Vídeo */}
            <div className="w-full md:max-w-[38vw] container  rounded-lg overflow-hidden shadow-xl mb-4">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video de Apresentação"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>
            <p className="text-lg text-gray-300 [text-shadow:1px_1px_13px_#000]">Assista ao nosso vídeo de apresentação!</p>
          </div>
        </div>
        {/* --- Fim do Container --- */}

        <div className="container mx-auto text-center my-10">
          {/* Texto principal */}
          <h1 className=" text-5xl lg:text-7xl font-bold leading-tight mb-4 text-[#FE6608]">
            <span className=' mt-[6rem]'> Foque em gerar negócios</span>
          </h1>
          <p className="text-2xl md:text-2xl opacity-90 mb-8">
            Sua parceria completa para lucrar com energia solar, sem se preocupar com projetos, equipamentos ou instalação.
          </p>
          <Button
            onClick={scrollToForm}
            className="bg-[#FE6608] text-[#000b19] font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg"
          >
            QUERO SER PARTNER AGORA
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20 container">
          <div className="flex flex-col items-center p-4">
            <Users className="h-12 w-12 mb-4 text-[#FE6608]" />
            <h3 className="font-bold text-xl mb-2">Você Indica e Lucra</h3>
            <p className="opacity-80 max-w-xs">
              Concentre-se em expandir sua rede. Quanto mais você indica, maior é o seu retorno financeiro.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <Wrench className="h-12 w-12 mb-4 text-[#FE6608]" />
            <h3 className="font-bold text-xl mb-2">Instalação de Ponta a Ponta</h3>
            <p className="opacity-80 max-w-xs">
              Nós da Global Energia Solar gerenciamos tudo: compra, logística e instalação completa do sistema.
            </p>
          </div>
          <div className="flex flex-col items-center p-4">
            <ShieldCheck className="h-12 w-12 mb-4 text-[#FE6608]" />
            <h3 className="font-bold text-xl mb-2">Qualidade e Suporte</h3>
            <p className="opacity-80 max-w-xs">
              Ofereça um serviço de excelência aos seus clientes com a garantia e o suporte de quem é especialista.
            </p>
          </div>
        </div>

        <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-1 max-w-6xl container mx-auto gap-12 items-start">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;