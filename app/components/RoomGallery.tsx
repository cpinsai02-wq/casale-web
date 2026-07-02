import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface RoomData {
  id: string;
  name: string;
  type: "large" | "small";
  capacity: string;
  atmosphere: string;
  events: string;
  images: { src: string; alt: string }[];
  svgRect: { x: number; y: number; w: number; h: number };
}
export const ROOMS: RoomData[] = [
  {
    id: "sala-grande",
    name: "Sala Grande",
    type: "large",
    capacity: "Fino a 80 ospiti",
    atmosphere:
      "Il salone principale della tenuta, caratterizzato da soffitti in pietra a volta e alte finestre che si affacciano sull'uliveto. La luce attraversa la stanza in modo unico a ogni ora del giorno.",
    events:
      "Ideale per ricevimenti di nozze, gala aziendali e grandi celebrazioni. Infrastruttura audio-visiva completa a disposizione.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1773100699991-b7e6bf89a6a1?w=720&h=480&fit=crop&auto=format",
        alt: "Sala Grande — sala da pranzo con finestre ad arco",
      },
      {
        src: "https://images.unsplash.com/photo-1778591103012-eb50e49f8ec2?w=720&h=480&fit=crop&auto=format",
        alt: "Sala Grande — lampadari e pianoforte a coda",
      },
      {
        src: "https://images.unsplash.com/photo-1776848517525-ccc3a43bfcfb?w=720&h=480&fit=crop&auto=format",
        alt: "Sala Grande — tavolo apparecchiato con calici da vino",
      },
    ],
    svgRect: { x: 24, y: 24, w: 290, h: 220 },
  },
  {
    id: "palmento",
    name: "Palmento",
    type: "large",
    capacity: "Fino a 120 ospiti",
    atmosphere:
      "L'antico palmento è la storica cantina nel cuore della tenuta, oggi restaurata e riportata al suo antico splendore. Le vasche di pigiatura originali in pietra e i mattoni a vista creano un'atmosfera senza eguali.",
    events:
      "Cene private, percorsi di degustazione con abbinamento vini ed eventi musicali intimi. Uno spazio dal carattere straordinario.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1745818016691-14c4020a73ed?w=720&h=480&fit=crop&auto=format",
        alt: "Palmento — storica cantina con pareti in pietra",
      },
      {
        src: "https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=720&h=480&fit=crop&auto=format",
        alt: "Palmento — tavoli elegantemente apparecchiati",
      },
      {
        src: "https://images.unsplash.com/photo-1694021408920-922ff450c525?w=720&h=480&fit=crop&auto=format",
        alt: "Palmento — servizio del vino",
      },
    ],
    svgRect: { x: 334, y: 24, w: 430, h: 220 },
  },
  {
    id: "sala-1",
    name: "Sala 1",
    type: "small",
    capacity: "Fino a 18 ospiti",
    atmosphere:
      "Un ambiente caldo e intimo dotato di camino e pavimenti originali in cotto. L'angolo più riservato della casa, perfetto per lunghe conversazioni.",
    events:
      "Pranzi di lavoro, piccoli ritrovi familiari, degustazioni private e cene di anniversario.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1776848517525-ccc3a43bfcfb?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 1 — mise en place intima",
      },
      {
        src: "https://images.unsplash.com/photo-1663530761401-15eefb544889?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 1 — servizio dello chef",
      },
      {
        src: "https://images.unsplash.com/photo-1676471926534-d5c9771909fa?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 1 — piatto impiattato",
      },
    ],
    svgRect: { x: 24, y: 264, w: 186, h: 180 },
  },
  {
    id: "sala-2",
    name: "Sala 2",
    type: "small",
    capacity: "Fino a 22 ospiti",
    atmosphere:
      "Si affaccia sulla corte interna attraverso grandi porte a vetri. La luce naturale inonda la stanza per tutta la mattina, lasciando spazio alla luce dei candelabri la sera.",
    events:
      "Aperitivi e cocktail di benvenuto, pranzi leggeri, lanci di prodotto e celebrazioni private.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1778591103012-eb50e49f8ec2?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 2 — stanza elegante con luce naturale",
      },
      {
        src: "https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 2 — allestimento tavoli",
      },
      {
        src: "https://images.unsplash.com/photo-1643879397174-4f10ac503566?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 2 — servizio cena serale",
      },
    ],
    svgRect: { x: 230, y: 264, w: 186, h: 180 },
  },
  {
    id: "sala-3",
    name: "Sala 3",
    type: "small",
    capacity: "Fino a 35 ospiti",
    atmosphere:
      "La più versatile tra le stanze più raccolte. Layout flessibile, ingresso indipendente e accesso diretto alla terrazza del giardino.",
    events:
      "Cene servite, ricevimenti a buffet, pranzi di team e shooting fotografici.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1745818016691-14c4020a73ed?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 3 — spazio eventi versatile",
      },
      {
        src: "https://images.unsplash.com/photo-1773100699991-b7e6bf89a6a1?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 3 — porta ad arco",
      },
      {
        src: "https://images.unsplash.com/photo-1694021408920-922ff450c525?w=720&h=480&fit=crop&auto=format",
        alt: "Sala 3 — servizio del vino",
      },
    ],
    svgRect: { x: 436, y: 264, w: 328, h: 180 },
  },
];

export function RoomGallery({ room }: { room: RoomData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + room.images.length) % room.images.length);
  const next = () => setActiveIndex((i) => (i + 1) % room.images.length);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: "3rem",
        alignItems: "start",
        animation: "fadeIn 0.35s ease",
      }}
      className="room-gallery-grid"
    >
      {/* Gallery */}
      <div>
        <div
          style={{
            position: "relative",
            borderRadius: "2px",
            overflow: "hidden",
            background: "#D5D5B7",
            aspectRatio: "3/2",
          }}
        >
          <img
            key={activeIndex}
            src={room.images[activeIndex].src}
            alt={room.images[activeIndex].alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              animation: "fadeIn 0.3s ease",
            }}
          />
          {/* Nav arrows */}
          <button
            onClick={prev}
            aria-label="Previous image"
            style={{
              position: "absolute",
              left: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(28,43,45,0.7)",
              border: "none",
              borderRadius: "1px",
              color: "#F7F7F4",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(28,43,45,0.95)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(28,43,45,0.7)")}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            style={{
              position: "absolute",
              right: "0.75rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(28,43,45,0.7)",
              border: "none",
              borderRadius: "1px",
              color: "#F7F7F4",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(28,43,45,0.95)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(28,43,45,0.7)")}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.75rem" }}>
          {room.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              style={{
                flex: 1,
                aspectRatio: "3/2",
                background: "#D5D5B7",
                border: `2px solid ${i === activeIndex ? "#355A63" : "transparent"}`,
                borderRadius: "1px",
                overflow: "hidden",
                cursor: "pointer",
                padding: 0,
                transition: "border-color 0.2s",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Room description */}
      <div style={{ paddingTop: "0.5rem" }}>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.6875rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8B6B4A",
            marginBottom: "0.5rem",
          }}
        >
          {room.type === "large" ? "Main Hall" : "Private Room"}
        </p>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "2rem",
            fontWeight: 500,
            color: "#1C2B2D",
            marginBottom: "0.5rem",
          }}
        >
          {room.name}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.8125rem",
            letterSpacing: "0.06em",
            color: "#355A63",
            marginBottom: "1.5rem",
          }}
        >
          {room.capacity}
        </p>

        <div
          style={{
            width: "32px",
            height: "1px",
            background: "#8B6B4A",
            marginBottom: "1.5rem",
          }}
        />

        <p
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: "#4A5558",
            marginBottom: "1.25rem",
          }}
        >
          {room.atmosphere}
        </p>

        <div
          style={{
            background: "#EDEEDD",
            borderLeft: "2px solid #8B6B4A",
            padding: "1rem 1.25rem",
            borderRadius: "0 2px 2px 0",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#8B6B4A",
              marginBottom: "0.375rem",
            }}
          >
            Ideal For
          </p>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.875rem",
              lineHeight: 1.65,
              color: "#4A5558",
            }}
          >
            {room.events}
          </p>
        </div>

        <button
          style={{
            marginTop: "1.75rem",
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: "#F7F7F4",
            background: "#355A63",
            border: "none",
            padding: "0.875rem 1.75rem",
            borderRadius: "2px",
            cursor: "pointer",
            transition: "background 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#2A4A52")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#355A63")}
        >
          Prenota questa sala
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @media (max-width: 760px) {
          .room-gallery-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
