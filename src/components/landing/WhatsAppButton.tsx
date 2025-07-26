"use client";


const WhatsAppButton = () => {
  const phoneNumber = "5519998347601";
  const message = 'Olá, estou entrando em contato para falar sobre a campanha "Partner Global Energia Solar"';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato via WhatsApp"
      className="fixed bottom-5 right-5 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 w-[5rem]"
    >
      <img src="./whatsapp.webp" alt="Ícone whatsapp" />
    </a>
  );
};

export default WhatsAppButton;