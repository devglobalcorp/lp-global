"use client";

const FooterSection = () => {
  return (
    // MODIFICADO: Cor de fundo
    <footer className="bg-gradient-to-r from-[#542102] via-[#542102] to-[#000b19] relative bg-[#000b19] text-white py-8 px-4 text-center">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-4 md:gap-x-6 mb-6">
          <img
            src="/logo.png"
            alt="Global Energia Solar Logo"
            className="h-auto w-40 object-contain"
          />
          <div className="hidden md:block h-10 w-px bg-gray-500"></div>
          <img
            src="/logo-global-corp.png"
            alt="Global Corp Logo"
            className="h-auto w-40 object-contain"
          />
        </div>
        <p className="text-sm mb-2">
          Copyright © Global Energia Renovavel 2025 | Todos os direitos reservados.
        </p>
        <span className="text-sm">
          Site Desenvolvido por <a className="underline underline-offset-5" href="https://easygoal.com.br" target="_blank" rel="noopener noreferrer">Easy Goal</a>
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;