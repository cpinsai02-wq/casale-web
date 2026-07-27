"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MenuCategoria } from "@/lib/notion";

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=420&fit=crop&auto=format";

export function MenuCard({ menu, onOpenModal }: { menu: MenuCategoria; onOpenModal: () => void }) {
  const images = menu.Foto && menu.Foto.length > 0 ? menu.Foto : [FALLBACK_IMAGE];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (images.length <= 1) return; // Inutile far scorrere se c'è una sola foto

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval); // Pulizia del timer
  }, [currentIndex, images.length]);

  // 3. Funzioni per lo scorrimento manuale
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <article
      style={{
        background: "#F7F7F4",
        border: "1px solid rgba(63,93,99,0.1)",
        borderRadius: "3px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(28,43,45,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Contenitore Carosello */}
      <div className="relative group"
        style={{
          position: "relative",
          height: "220px",
          background: "#D5D5B7",
          overflow: "hidden",
        }}
      >
        {/* Contenitore interno animato che scorre orizzontalmente */}
        <div
          style={{
            display: "flex",
            height: "100%",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((imgSrc, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                flex: "0 0 100%", 
                height: "100%",
              }}
            >
              <Image
                src={imgSrc}
                alt={`Menu ${menu.Nome} - Foto ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Controlli manuali (frecce) - Mostrati solo se c'è più di un'immagine */}
        {images.length > 1 && (
    <>
      {/* Bottone Precedente */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 
                   w-8 h-8 flex items-center justify-center 
                   bg-white/60 hover:bg-white/90 text-black font-bold text-xl 
                   rounded-none border-none
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        aria-label="Immagine precedente"
      >
        &#8249;
      </button>

      {/* Bottone Successivo */}
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 
                   w-8 h-8 flex items-center justify-center 
                   bg-white/60 hover:bg-white/90 text-black font-bold text-xl 
                   rounded-none border-none
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        aria-label="Immagine successiva"
      >
        &#8250;
      </button>

      {/* Indicatori (Puntini in basso) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`w-1.5 h-1.5 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === idx ? "bg-[#F7F7F4]" : "bg-[#F7F7F4]/40"
            }`}
          />
        ))}
      </div>
    </>
  )}
      </div>

      {/* Content */}
      <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.6875rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8B6B4A",
            marginBottom: "0.5rem",
          }}
        >
          Menu Degustazione
        </p>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.5rem",
            fontWeight: 500,
            color: "#1C2B2D",
            marginBottom: "0.875rem",
            lineHeight: 1.2,
          }}
        >
          {menu.Nome}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            color: "#4A5558",
            marginBottom: "1.25rem",
            flex: 1,
          }}
        >
          Una selezione esclusiva di {menu.Piatti?.length || 0} portate, preparata con gli ingredienti più freschi della nostra tenuta.
        </p>

        {/* Highlights: Mostra solo i primi 3 piatti del menu */}
        <ul style={{ marginBottom: "1.5rem", listStyle: "none", padding: 0 }}>
          {menu.Piatti?.slice(0, 3).map((piatto) => (
            <li
              key={piatto.Id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.8125rem",
                color: "#5A6668",
                marginBottom: "0.375rem",
              }}
            >
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#8B6B4A", flexShrink: 0 }} />
              {piatto.Nome}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={onOpenModal}
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "#355A63",
            background: "transparent",
            border: "1px solid #355A63",
            padding: "0.75rem 1.5rem",
            borderRadius: "2px",
            cursor: "pointer",
            transition: "all 0.25s",
            width: "100%",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#355A63";
            e.currentTarget.style.color = "#F7F7F4";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#355A63";
          }}
        >
          Vedi {menu.Nome}
        </button>
      </div>
    </article>
  );
}