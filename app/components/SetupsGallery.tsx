import React from "react";

export function SetupsGallery() {
  return (
    <section id="setup" className="bg-[#1C2B2D] flex flex-col h-[100dvh] min-h-[650px] max-h-[900px] py-12 md:py-16">
      
      {/* Intestazione fissa in alto */}
      <div className="max-w-[1280px] mx-auto px-8 w-full shrink-0 mb-8 md:mb-12">
        <p className="font-sans text-[0.6875rem] tracking-[0.24em] uppercase text-[#8B6B4A] mb-3">
          Atmosfere su misura
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F7F7F4] m-0 max-w-[500px]">
            Allestimenti &amp; Dettagli
          </h2>
          <p className="font-sans text-sm leading-[1.7] text-[#D5D5B7] max-w-[380px] m-0 opacity-80 hidden md:block">
            Scorri per scoprire come i nostri spazi si trasformano per adattarsi all'abito del tuo evento.
          </p>
        </div>
      </div>

      {/* Griglia asimmetrica a scorrimento orizzontale */}
      <div className="flex-1 w-full overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-6 px-8 pb-4 hide-scrollbar">
        
        {/* Colonna 1: Foto singola verticale */}
        <div className="shrink-0 w-[85vw] md:w-[45vw] h-full relative rounded-[2px] overflow-hidden snap-center bg-[#152022]">
          <img
            src="https://images.unsplash.com/photo-1776848517525-ccc3a43bfcfb?w=1200&q=80"
            alt="Tavolate Imperiali"
            className="w-full h-full object-cover"
          />
          {/* Sfumatura fissa ed etichetta statica */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
              Banchetti & Gala
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-[#F7F7F4] m-0">
              Tavolate Imperiali
            </h3>
          </div>
        </div>

        {/* Colonna 2: Due foto impilate orizzontalmente */}
        <div className="shrink-0 w-[75vw] md:w-[35vw] h-full flex flex-col gap-4 md:gap-6 snap-center">
          
          {/* Foto superiore */}
          <div className="relative flex-1 rounded-[2px] overflow-hidden bg-[#152022]">
            <img
              src="https://images.unsplash.com/photo-1694021408920-922ff450c525?w=800&q=80"
              alt="La cura del dettaglio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
              <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
                Mise en place
              </span>
              <h3 className="font-serif text-lg md:text-xl font-medium text-[#F7F7F4] m-0">
                La cura del dettaglio
              </h3>
            </div>
          </div>

          {/* Foto inferiore */}
          <div className="relative flex-1 rounded-[2px] overflow-hidden bg-[#152022]">
            <img
              src="https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=800&q=80"
              alt="Atmosfere all'aperto"
              className="w-full h-full object-cover object-bottom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
              <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
                Terrazza & Esterni
              </span>
              <h3 className="font-serif text-lg md:text-xl font-medium text-[#F7F7F4] m-0">
                Atmosfere all'aperto
              </h3>
            </div>
          </div>

        </div>

        {/* Colonna 3: Foto larga */}
        <div className="shrink-0 w-[85vw] md:w-[50vw] h-full relative rounded-[2px] overflow-hidden snap-center bg-[#152022]">
          <img
            src="https://images.unsplash.com/photo-1778591103012-eb50e49f8ec2?w=1200&q=80"
            alt="Luce soffusa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
            <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
              Cene intime
            </span>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-[#F7F7F4] m-0">
              Atmosfere a lume di candela
            </h3>
          </div>
        </div>

      </div>

      {/* Regole CSS per nascondere la scrollbar di default e mantenere pulito il design */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}