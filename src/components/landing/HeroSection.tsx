"use client";

import { OportunityToast } from '@/components/ui/OportunityToast';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import { scrollToForm } from '@/utils/scroll';
import { ShieldCheck, Users, Wrench } from "lucide-react";
import { AspectRatio } from '../ui/aspect-ratio';
import { Button } from '../ui/button';
import ContactForm from "./ContactForm";

const HeroSection = () => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      toast(
        <OportunityToast onActionClick={scrollToForm} />,
        {
          autoClose: 30000,
          closeButton: true,
          style: {
            width: '100vw',
            backgroundColor: '#002A5C', // MODIFICADO
            borderBottom: '2px solid #FE6608', // MODIFICADO
            padding: '1.5rem 1rem',
          },
        }
      );
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    // MODIFICADO: Fundo com a nova cor
    <section className="relative py-20 px-1 bg-[#002A5C] text-white">
      <img src="/logo.png" alt="Global Energia Solar Logo" className="max-w-[20rem] container mb-5" />
      <div className="mx-auto relative z-10">
        <div className="mb-16 lg:container leading-none text-center">
          {/* MODIFICADO: Cor do título */}
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 text-[#FE6608]">
            <span> Foque em gerar negócios</span>
          </h1>
          <p className="text-2xl md:text-2xl opacity-90">
            Sua parceria completa para lucrar com energia solar, sem se preocupar com projetos, equipamentos ou instalação.
          </p>
        </div>
        <div className="w-full lg:container">
          <AspectRatio ratio={16 / 9} className="bg-gray-900/50 rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video de Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </AspectRatio>
          <p className="text-sm text-gray-300 mt-4 text-center mb-10">Assista ao nosso vídeo de apresentação e descubra como se tornar um Partner!</p>
          <div className="container mx-auto text-center mb-10">
            {/* MODIFICADO: Cores do botão */}
            <Button
              onClick={scrollToForm}
              className="bg-[#FE6608] text-[#002A5C] font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg"
            >
              QUERO SER PARTNER AGORA
            </Button>
          </div>
        </div>

        {/* MODIFICADO: Cor dos ícones */}
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