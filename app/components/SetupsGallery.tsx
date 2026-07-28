"use client";

import React, { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  alt: string;
  objectPosition?: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // --- FOTO VISIBILI NELLA GRIGLIA PRINCIPALE ---
  {
    id: 1,
    title: "Tavolate Imperiali",
    category: "Eventi & Banchetti",
    src: "https://images.unsplash.com/photo-1776848517525-ccc3a43bfcfb?w=1200&q=80",
    alt: "Tavolate Imperiali",
  },
  {
    id: 2,
    title: "La cura del dettaglio",
    category: "Mise en place",
    src: "https://images.unsplash.com/photo-1694021408920-922ff450c525?w=800&q=80",
    alt: "La cura del dettaglio",
  },
  {
    id: 3,
    title: "Atmosfere all'aperto",
    category: "Terrazza & Esterni",
    src: "https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=800&q=80",
    alt: "Atmosfere all'aperto",
    objectPosition: "object-bottom",
  },
  {
    id: 4,
    title: "Angolo Torta e Foto",
    category: "Eventi & Banchetti",
    src: "https://images.unsplash.com/photo-1778591103012-eb50e49f8ec2?w=1200&q=80",
    alt: "Luce soffusa",
  },
  {
    id: 5,
    title: "Allestimento Floreale",
    category: "Eventi & Banchetti",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
    alt: "Fiori e tavoli",
  },
  {
    id: 6,
    title: "Cristalli e Porcellane",
    category: "Mise en place",
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    alt: "Dettagli tavola",
  },
  {
    id: 7,
    title: "Giardino Illuminato",
    category: "Terrazza & Esterni",
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    alt: "Esterno notte",
  },
  {
    id: 8,
    title: "Banchetto Serale",
    category: "Eventi & Banchetti",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80",
    alt: "Luce serale",
  },
];

export function SetupsGallery() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const relatedImages = activeImage 
    ? GALLERY_ITEMS.filter((item) => item.category === activeImage.category)
    : [];

  const closeModal = () => setActiveImage(null);

  return (
    <>
      <section id="setup" className="bg-[#1C2B2D] flex flex-col h-[100dvh] min-h-[650px] max-h-[900px] py-12 md:py-16">
        
        {/* Intestazione */}
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

        {/* Griglia asimmetrica orizzontale */}
        <div className="flex-1 w-full overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-6 px-8 pb-4 hide-scrollbar">
          
          {/* Colonna 1 */}
          <div 
            onClick={() => setActiveImage(GALLERY_ITEMS[0])}
            className="shrink-0 w-[85vw] md:w-[45vw] h-full relative rounded-[2px] overflow-hidden snap-center bg-[#152022] cursor-pointer group"
          >
            <img
              src={GALLERY_ITEMS[0].src}
              alt={GALLERY_ITEMS[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent transition-opacity group-hover:opacity-90" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
                {GALLERY_ITEMS[0].category}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-[#F7F7F4] m-0">
                {GALLERY_ITEMS[0].title}
              </h3>
            </div>
          </div>

          {/* Colonna 2 */}
          <div className="shrink-0 w-[75vw] md:w-[35vw] h-full flex flex-col gap-4 md:gap-6 snap-center">
            {/* Foto superiore */}
            <div 
              onClick={() => setActiveImage(GALLERY_ITEMS[1])}
              className="relative flex-1 rounded-[2px] overflow-hidden bg-[#152022] cursor-pointer group"
            >
              <img
                src={GALLERY_ITEMS[1].src}
                alt={GALLERY_ITEMS[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
                <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
                  {GALLERY_ITEMS[1].category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-medium text-[#F7F7F4] m-0">
                  {GALLERY_ITEMS[1].title}
                </h3>
              </div>
            </div>

            {/* Foto inferiore */}
            <div 
              onClick={() => setActiveImage(GALLERY_ITEMS[2])}
              className="relative flex-1 rounded-[2px] overflow-hidden bg-[#152022] cursor-pointer group"
            >
              <img
                src={GALLERY_ITEMS[2].src}
                alt={GALLERY_ITEMS[2].alt}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${GALLERY_ITEMS[2].objectPosition || ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent transition-opacity group-hover:opacity-90" />
              <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6">
                <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
                  {GALLERY_ITEMS[2].category}
                </span>
                <h3 className="font-serif text-lg md:text-xl font-medium text-[#F7F7F4] m-0">
                  {GALLERY_ITEMS[2].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Colonna 3 */}
          <div 
            onClick={() => setActiveImage(GALLERY_ITEMS[3])}
            className="shrink-0 w-[85vw] md:w-[50vw] h-full relative rounded-[2px] overflow-hidden snap-center bg-[#152022] cursor-pointer group"
          >
            <img
              src={GALLERY_ITEMS[3].src}
              alt={GALLERY_ITEMS[3].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B2D]/80 via-transparent to-transparent transition-opacity group-hover:opacity-90" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="font-sans text-[0.625rem] tracking-[0.2em] uppercase text-[#D5D5B7] block mb-1">
                {GALLERY_ITEMS[3].category}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-[#F7F7F4] m-0">
                {GALLERY_ITEMS[3].title}
              </h3>
            </div>
          </div>
        </div>

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

      {/* --- MODALE GALLERIA --- */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex flex-col bg-[#0d1415]/98 animate-in fade-in duration-300"
          onClick={closeModal} 
        >
          {/* Header Modale: Titolo Categoria e Bottone Chiudi */}
          <div className="flex justify-between items-center w-full px-6 py-6 md:px-12 md:py-8 shrink-0">
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#D5D5B7]">
              {activeImage.category}
            </span>
            <button 
              className="text-[#D5D5B7] hover:text-white transition-colors p-2"
              onClick={closeModal}
              aria-label="Chiudi galleria"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Immagine Principale e Titolo */}
          <div 
            className="flex-1 flex flex-col justify-center items-center w-full px-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="relative w-full max-w-5xl h-[55vh] md:h-[65vh] flex justify-center items-center">
              <img 
                src={activeImage.src} 
                alt={activeImage.alt} 
                className="w-full h-full object-contain rounded-[2px]" 
              />
            </div>
            
            <h3 className="font-serif text-xl md:text-2xl text-white mt-6 md:mt-8 font-light tracking-wide text-center">
              {activeImage.title}
            </h3>
          </div>

          {/* Galleria Inferiore */}
          <div 
            className="w-full px-6 py-8 md:py-12 shrink-0 bg-gradient-to-t from-black/40 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar justify-start md:justify-center max-w-7xl mx-auto">
              {relatedImages.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveImage(item)}
                  className="relative shrink-0 flex flex-col items-center group outline-none"
                >
                  <div className={`w-24 h-16 md:w-32 md:h-20 rounded-[2px] overflow-hidden transition-all duration-300 ${
                      activeImage.id === item.id 
                        ? 'opacity-100 ring-1 ring-[#8B6B4A]' 
                        : 'opacity-40 group-hover:opacity-80'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Sottile indicatore sotto la miniatura attiva */}
                  <div className={`h-[2px] mt-2 bg-[#8B6B4A] transition-all duration-300 ${activeImage.id === item.id ? 'w-full' : 'w-0'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}