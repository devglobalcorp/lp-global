"use client";

const logos = [
  { src: "./canadian-logo.png", alt: "Certificação 1" },
  { src: "./crea-logo.jpg", alt: "Certificação 2" },
  { src: "./ibs-logo.png", alt: "Certificação 3" },
  { src: "./canadian-logo.png", alt: "Certificação 1" },
  { src: "./crea-logo.jpg", alt: "Certificação 2" },
  { src: "./ibs-logo.png", alt: "Certificação 3" },
];

const RecognitionSection = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#013A79] dark:text-blue-400">
          Reconhecimento e Certificações
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="max-h-24 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default RecognitionSection;