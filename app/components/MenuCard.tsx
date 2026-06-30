"use client";

import Image from "next/image";
import { MenuCategoria } from "@/lib/notion";


const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=420&fit=crop&auto=format";

export function MenuCard({ menu, onOpenModal }: { menu: MenuCategoria; onOpenModal: () => void }) {

  const imageUrl = menu.Foto || FALLBACK_IMAGE;



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
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 16px 48px rgba(28,43,45,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Image Container */}
      <div
        style={{
          position: "relative",
          height: "220px",
          background: "#D5D5B7",
          overflow: "hidden",
        }}
      >
        <Image
          src={imageUrl}
          alt={`Menu ${menu.Nome}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
        
        {/* Badge Prezzo (invece della stagione) */}
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            background: "rgba(28,43,45,0.82)",
            backdropFilter: "blur(4px)",
            padding: "0.25rem 0.625rem",
            borderRadius: "1px",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D5D5B7",
            }}
          >
            {menu.Prezzo ? `€ ${menu.Prezzo}` : "Prezzo su richiesta"}
          </span>
        </div>
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

        {/* Highlights: Mostra solo i primi 3 piatti del menu presi da Notion */}
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