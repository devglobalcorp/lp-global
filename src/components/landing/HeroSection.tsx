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
    const timer = setTimeout(() => {
      toast(
        <OportunityToast onActionClick={() => scrollToForm(formRef)} />,
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

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Remova o gradiente daqui, vamos aplicá-lo em um overlay
    <section className="relative text-white">
      <div className="mx-auto relative z-10">

        {/* --- Container Principal (Banner): VISÍVEL APENAS EM TELAS GRANDES (md+) --- */}
        <div
          // O container agora é relativo para posicionar a imagem e o conteúdo
          className="hidden w-full min-h-[45vw] md:flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
          {/* 2. Adicione o componente Image como fundo */}
          <img
            src="/bg-video.jpg" // Caminho para a imagem otimizada na pasta public
            alt="Imagem de fundo para indicar sobre o video"
            className="absolute top-0 left-0 w-full h-full z-0"
            aria-hidden="true" // Esconde a imagem de leitores de tela, pois é decorativa
          />

          {/* Conteúdo que será centralizado, agora com z-index maior */}
          <div className="w-full max-w-4xl relative z-20">
            {/* VÍDEO DO BANNER */}
            <div className="w-full md:max-w-[37vw] rounded-lg overflow-hidden shadow-xl mb-4 justify-self-center mr-[3vw]">
              <iframe
                src="https://www.youtube.com/embed/9gDcJHHF54M"
                title="Video de Apresentação (Desktop)"
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

        {/* O restante da seção precisa de um fundo, caso o banner esteja oculto */}
        <div className="bg-gradient-to-r from-[#542102] via-[#000b19] to-[#000b19] relative sm-[#000b19]">
          <div className="container mx-auto text-center px-4">
            {/* Texto principal (visível em todas as telas) */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 text-[#FE6608]">
              <span className='block pt-12'>Foque em gerar negócios</span>
            </h1>
            <p className="text-2xl md:text-2xl opacity-90 mb-8">
              Sua parceria completa para lucrar com energia solar, sem se preocupar com projetos, equipamentos ou instalação.
            </p>

            {/* VÍDEO PARA MOBILE */}
            <div className="block md:hidden w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-xl mb-8">
              <iframe
                src="https://www.youtube.com/embed/9gDcJHHF54M"
                title="Video de Apresentação (Mobile)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>

            <Button
              onClick={handleScrollToForm}
              className="bg-[#FE6608] text-[#000b19] font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg"
            >
              QUERO SER PARTNER AGORA
            </Button>
          </div>

          {/* O restante do conteúdo permanece o mesmo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20 container px-4 mt-16">
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

          <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-1 max-w-6xl container mx-auto gap-12 items-start px-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;