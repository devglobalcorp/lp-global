"use client";

import { OportunityToast } from '@/components/ui/OportunityToast';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { scrollToForm } from '@/utils/scroll';
import { ShieldCheck, Users, Volume2, VolumeX, Wrench } from "lucide-react";
import { Button } from '../ui/button';
import ContactForm from "./ContactForm";

// Declaração para a API do YouTube no objeto window
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

const HeroSection = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const YOUTUBE_VIDEO_ID = "9gDcJHHF54M";

  // --- Estados e Referências para o Player de DESKTOP ---
  const playerDesktopRef = useRef<any>(null);
  const [isMutedDesktop, setIsMutedDesktop] = useState(true);

  // --- Estados e Referências para o Player de MOBILE ---
  const playerMobileRef = useRef<any>(null);
  const [isMutedMobile, setIsMutedMobile] = useState(true);


  // Efeito para o Toast de Oportunidade
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

  // Efeito para carregar e controlar a API do YouTube
  useEffect(() => {
    const createPlayer = (playerId: string, playerRef: React.MutableRefObject<any>) => {
      playerRef.current = new window.YT.Player(playerId, {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: 1,
          loop: 1,
        },
        events: {
          onReady: (event: any) => event.target.playVideo(),
        },
      });
    };

    window.onYouTubeIframeAPIReady = () => {
      if (document.getElementById('youtube-player-desktop')) {
        createPlayer('youtube-player-desktop', playerDesktopRef);
      }
      if (document.getElementById('youtube-player-mobile')) {
        createPlayer('youtube-player-mobile', playerMobileRef);
      }
    };

    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    } else {
      const tag = document.createElement('script');
      // CORREÇÃO: URL oficial da API do YouTube
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    return () => {
      if (playerDesktopRef.current && typeof playerDesktopRef.current.destroy === 'function') {
        playerDesktopRef.current.destroy();
      }
      if (playerMobileRef.current && typeof playerMobileRef.current.destroy === 'function') {
        playerMobileRef.current.destroy();
      }
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, [YOUTUBE_VIDEO_ID]);

  // Funções para alternar o som
  const toggleMuteDesktop = () => {
    if (!playerDesktopRef.current) return;
    const isMuted = playerDesktopRef.current.isMuted();
    if (isMuted) {
      playerDesktopRef.current.unMute();
      setIsMutedDesktop(false);
    } else {
      playerDesktopRef.current.mute();
      setIsMutedDesktop(true);
    }
  };

  const toggleMuteMobile = () => {
    if (!playerMobileRef.current) return;
    const isMuted = playerMobileRef.current.isMuted();
    if (isMuted) {
      playerMobileRef.current.unMute();
      setIsMutedMobile(false);
    } else {
      playerMobileRef.current.mute();
      setIsMutedMobile(true);
    }
  };

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative text-white">
      <div className="mx-auto relative z-10">
        {/* --- Banner para Desktop --- */}
        <div className="hidden w-full min-h-[45vw] md:flex flex-col justify-center items-center text-center relative overflow-hidden">
          <img
            src="/bg-video.jpg"
            alt="Imagem de fundo para indicar sobre o video"
            className="absolute top-0 left-0 w-full h-full z-0 object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#542102] via-[#000b19] to-[#000b19] opacity-70 z-10"></div>
          <div className="w-full max-w-4xl relative z-20">
            <div className="relative w-full md:max-w-[37vw] rounded-lg overflow-hidden shadow-xl mb-4 justify-self-center mr-[3vw]">
              <div id="youtube-player-desktop" className="w-full aspect-video" />
              <button
                onClick={toggleMuteDesktop}
                className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white rounded-full p-2 z-30 cursor-pointer hover:bg-opacity-75 transition-opacity"
                aria-label={isMutedDesktop ? "Ativar som" : "Desativar som"}
              >
                {isMutedDesktop ? <VolumeX size={40} /> : <Volume2 size={40} />}
              </button>
            </div>
            <p className="text-lg text-gray-300 [text-shadow:1px_1px_13px_#000]">Assista ao nosso vídeo de apresentação!</p>
          </div>
        </div>

        {/* --- Conteúdo Principal (Mobile e abaixo do Banner) --- */}
        <div className="bg-gradient-to-r from-[#542102] via-[#000b19] to-[#000b19] relative sm-[#000b19]">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-4 text-[#FE6608]">
              <span className='block pt-12'>Foque em gerar negócios</span>
            </h1>
            <p className="text-2xl md:text-2xl opacity-90 mb-8">
              Sua parceria completa para lucrar com energia solar, sem se preocupar com projetos, equipamentos ou instalação.
            </p>

            {/* Vídeo para Mobile com controle de volume */}
            <div className="block md:hidden w-full max-w-lg mx-auto rounded-lg overflow-hidden shadow-xl mb-8 relative">
              <div id="youtube-player-mobile" className="w-full aspect-video" />
              <button
                onClick={toggleMuteMobile}
                className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white rounded-full p-2 z-30 cursor-pointer hover:bg-opacity-75 transition-opacity"
                aria-label={isMutedMobile ? "Ativar som" : "Desativar som"}
              >
                {isMutedMobile ? <VolumeX size={40} /> : <Volume2 size={40} />}
              </button>
            </div>

            <Button
              onClick={handleScrollToForm}
              className="bg-[#FE6608] text-[#000b19] font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition duration-300 shadow-lg"
            >
              QUERO SER PARTNER AGORA
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center my-16 md:my-20 container px-4">
            <div className="flex flex-col items-center p-4">
              <Users className="h-12 w-12 mb-4 text-[#FE6608]" />
              <h3 className="font-bold text-xl mb-2">Você Indica e Lucra</h3>
              <p className="opacity-80 max-w-xs">Concentre-se em expandir sua rede. Quanto mais você indica, maior é o seu retorno financeiro.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Wrench className="h-12 w-12 mb-4 text-[#FE6608]" />
              <h3 className="font-bold text-xl mb-2">Instalação de Ponta a Ponta</h3>
              <p className="opacity-80 max-w-xs">Nós da Global Energia Solar gerenciamos tudo: compra, logística e instalação completa do sistema.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <ShieldCheck className="h-12 w-12 mb-4 text-[#FE6608]" />
              <h3 className="font-bold text-xl mb-2">Qualidade e Suporte</h3>
              <p className="opacity-80 max-w-xs">Ofereça um serviço de excelência aos seus clientes com a garantia e o suporte de quem é especialista.</p>
            </div>
          </div>

          <div ref={formRef} className="grid grid-cols-1 lg:grid-cols-1 max-w-6xl container mx-auto gap-12 items-start px-4 pb-16">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;