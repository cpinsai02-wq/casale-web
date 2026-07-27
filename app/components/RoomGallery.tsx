import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface RoomData {
  id: string;
  name: string;
  desc: string;
  type: "large" | "small";
  capacity: string;
  atmosphere: string;
  events: string;
  images: { src: string; alt: string }[];
 svgRect?: { x: number; y: number; w: number; h: number }; // Reso opzionale con ?
  svgPolygon?: string; // Aggiunto per il Pozzo
}

export const ROOMS: RoomData[] = [
  {
    id: "sala-3",
    name: "Sala 3",
    desc: "Sala al chiuso",
    type: "small",
    capacity: "Fino a 35 ospiti",
    atmosphere: "La prima sala a partire da sinistra, sulle note del verde chiaro, prevede un accesso diretto alla zona 'Pozzo'. Combinabile con la Sala 2 per portare la capienza a 50 persone o dividere l'Evento in due zone separate.",
    events: "Pranzi di lavoro, piccoli ritrovi familiari, degustazioni private e cene di anniversario.",
    images: [
      { src: "https://images.unsplash.com/photo-1745818016691-14c4020a73ed?w=720&h=480&fit=crop&auto=format", alt: "Sala 3 — spazio eventi versatile" },
      { src: "https://images.unsplash.com/photo-1773100699991-b7e6bf89a6a1?w=720&h=480&fit=crop&auto=format", alt: "Sala 3 — porta ad arco" },
      { src: "https://images.unsplash.com/photo-1694021408920-922ff450c525?w=720&h=480&fit=crop&auto=format", alt: "Sala 3 — servizio del vino" },
    ],
    svgRect: { x: 53, y: 143, w: 89, h: 153 },
  },
  {
    id: "palmento",
    name: "Palmento",
    desc: "Sala al chiuso",
    type: "large",
    capacity: "Fino a 120 ospiti",
    atmosphere: "L'antico Palmento è la storica stanza dove un tempo avveniva la 'magia', nel cuore del nostro locale, oggi ospita fino a 120 ospiti se si considerano anche le due terrazzine, un tempo adibite alla spremitura delle uve.",
    events: "Cene private, percorsi di degustazione con abbinamento vini ed eventi speciali.",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFQ3PbJIEXYfM0D1nI41IT6dGmxIVEKGT_Fh6Eofo-SKYgy4_a25Gce52vexiSHEPLHhANo1uE5b-d0Fnj75ohHTUzcDV2Fe3Dg_Bg-YTiJBdnSndUJJ-c2GscQMSL2pgHEfFBb=s1360-w1360-h1020-rw", alt: "Palmento — storica cantina con pareti in pietra" },
      { src: "https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=720&h=480&fit=crop&auto=format", alt: "Palmento — tavoli elegantemente apparecchiati" },
      { src: "https://images.unsplash.com/photo-1694021408920-922ff450c525?w=720&h=480&fit=crop&auto=format", alt: "Palmento — servizio del vino" },
    ],
    svgRect: { x: 534, y: 175, w: 169, h: 121 },
  },
  {
    id: "sala-grande",
    name: "Sala Grande",
    desc: "Sala al chiuso",
    type: "large",
    capacity: "Fino a 80 ospiti",
    atmosphere: "Il Salone principale del Locale, con una finestra che scorge sulla Terrazza, direttamente collegato all'ingresso. Ampio, spazioso, ma soprattutto versatile",
    events: "Ideale per ricevimenti, gala aziendali e grandi celebrazioni.",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHUxguBGMlxH8hIUAl5NNuu34X3iHVou6oA_CwgXOoi6VlT2Ps1zR3FjLuev8EVwN8mEDP1LVh-cfwkKQKUSpq4qENSLP84iRNIza5HGStIWgykVDj_Jt8XZ0f2d9TupxMN84CLvA=s1360-w1360-h1020-rw", alt: "Sala 1 — mise en place intima" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHnGJS_6DRDtbyykZiJHjgtg4yoKBlfIpHSIsLpB3RsMOE48hQzdeNf9XfnDEaYRjsQYWb-_2tdNRHh0p-JYXskA6gW-NxJ6fsNVYJ8ZWW_euGL3PFMktPcpRzc-UWCjgV7hF8LSg=s1360-w1360-h1020-rw", alt: "Sala 1 — servizio dello chef" },
      { src: "https://images.unsplash.com/photo-1676471926534-d5c9771909fa?w=720&h=480&fit=crop&auto=format", alt: "Sala 1 — piatto impiattato" },
    ],
    svgRect: { x: 422, y: 118, w: 112, h: 178 },
  },
  {
    id: "sala-2",
    name: "Sala 2",
    desc: "Sala al chiuso",
    type: "small",
    capacity: "Fino a 20 ospiti",
    atmosphere: "Sulle note di un verde chiaro, dà la possibilità anche ad una piccola tavolata familiare di riunirsi per una cena intima in pieno stile Casale.",
    events: "Piccole tavolate, cene intime e degustazioni private.",
    images: [
      { src: "https://images.unsplash.com/photo-1778591103012-eb50e49f8ec2?w=720&h=480&fit=crop&auto=format", alt: "Sala 2 — stanza elegante con luce naturale" },
      { src: "https://images.unsplash.com/photo-1766832255363-c9f060ade8b0?w=720&h=480&fit=crop&auto=format", alt: "Sala 2 — allestimento tavoli" },
      { src: "https://images.unsplash.com/photo-1643879397174-4f10ac503566?w=720&h=480&fit=crop&auto=format", alt: "Sala 2 — servizio cena serale" },
    ],
    svgRect: { x: 142, y: 143, w: 86, h: 91 },
  },
  {
    id: "sala-1",
    name: "Sala 1",
    desc: "Sala al chiuso",
    type: "small",
    capacity: "Fino a 40 ospiti",
    atmosphere: "Immersa nelle note di blu e azzurro, ricorda il paesaggio marittimo, con accesso diretto al terrazzino d’ingresso.",
    events: "Pranzi di lavoro, piccoli ritrovi familiari, eventi e celebrazioni.",
    images: [
      { src: "https://images.unsplash.com/photo-1773100699991-b7e6bf89a6a1?w=720&h=480&fit=crop&auto=format", alt: "Sala Grande — sala da pranzo con finestre ad arco" },
      { src: "https://images.unsplash.com/photo-1778591103012-eb50e49f8ec2?w=720&h=480&fit=crop&auto=format", alt: "Sala Grande — lampadari e pianoforte a coda" },
      { src: "https://images.unsplash.com/photo-1776848517525-ccc3a43bfcfb?w=720&h=480&fit=crop&auto=format", alt: "Sala Grande — tavolo apparecchiato con calici da vino" },
    ],
    svgRect: { x: 255, y: 210, w: 111, h: 86 },
  },
  {
    id: "terrazza",
    name: "Terrazza",
    desc: "Spazio all'aperto",
    type: "large",
    capacity: "Fino a 300 ospiti",
    atmosphere: "Immensa. Caratterizzata dal cielo stellato sovrastante con vista panoramica sui paesi etnei ed il mare. La sua spaziosità dà ampie possibilità, aggiungendo il pacchetto musica e beverage puoi dare vita al tuo personale, Evento indimenticabile.",
    events: "Grandi buffet, aperitivi di benvenuto e configurazioni di eventi open-air.",
    images: [
      { src: "./images/terrazza1.webp", alt: "Terrazza — veduta panoramica ed esterni" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEdhrJtqZs3b2Z0oJdmpRuEe9pTUbRonX45-GFRvUL3HtyKV0r8XOKNx1zy4putCci91uBFk2QfRW6q2LL31zjGAM0JgnzUIX16QFDnmtEeIQVTJrshLla_S3rjeFax5dXkn1Y=s1360-w1360-h1020-rw", alt: "Terrazza — porta ad arco" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEq_7vEIKrc4ieZMKIcivFDaZLImyXgHW56c7n-4z45PBCAZPVC2L2WuYp4J7aozR7NjTOvNOVN-Lqkc4OH-GbCw-7veLvKOx_2_Dkzl1UhJZ-ce9EoB-0rZp-QGW92plitKt38=s1360-w1360-h1020-rw", alt: "Terrazza — servizio del vino" },
    ],
    svgRect: { x: 255, y: 296, w: 448, h: 175 },
  },
  {
    id: "pozzo",
    name: "Pozzo",
    desc: "Spazio all'aperto",
    type: "small",
    capacity: "Fino a 60 ospiti",
    atmosphere: "Il Punto più alto del Casale con vista sulla Terrazza, crea un clima intimo e familiare, tra le mura del Casale da una parte e la campagna dall’altra. Il Pozzo inoltre può essere adibito a Punto Torta, in pieno stile Casale. ",
    events: "Degustazioni esclusive, eventi e momenti fotografici dal fascino rurale.",
    images: [
      { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHVonSxP3hrNXclNrJB4EP27zlO0W0Gl57Rkitu8OMc48eQGQ8ntwvc788WLMcQY5aZubXtXJO2NUuq4J3RMCMHm1YuGMJtpvzSCdo0yO53dO66DkRzYdC-FdE98JS0uzyXdOeftQ=s1360-w1360-h1020-rw", alt: "Zona Pozzo — dettagli architettonici in pietra" },
      { src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAHVonSxP3hrNXclNrJB4EP27zlO0W0Gl57Rkitu8OMc48eQGQ8ntwvc788WLMcQY5aZubXtXJO2NUuq4J3RMCMHm1YuGMJtpvzSCdo0yO53dO66DkRzYdC-FdE98JS0uzyXdOeftQ=s1360-w1360-h1020-rw", alt: "Zona Pozzo — dettagli architettonici in pietra" },
      { src: "https://images.unsplash.com/photo-1773100699991-b7e6bf89a6a1?w=720&h=480&fit=crop&auto=format", alt: "Zona Pozzo — dettagli architettonici in pietra" },
    ],
    svgPolygon: "81,380 81,296 142,296 142,234 228,234 228,210 255,210 255,380",
  },
];

export function RoomGallery({ room }: { room: RoomData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + room.images.length) % room.images.length);
  const next = () => setActiveIndex((i) => (i + 1) % room.images.length);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-start fade-in-section">
      {/* Gallery */}
      <div>
        <div className="relative rounded-sm overflow-hidden bg-[#D5D5B7] aspect-[3/2]">
          <img
            key={activeIndex}
            src={room.images[activeIndex].src}
            alt={room.images[activeIndex].alt}
            className="w-full h-full object-cover block fade-in-image"
          />
          
          {/* Nav arrows */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#1C2B2D]/70 hover:bg-[#1C2B2D]/95 border-none rounded-[1px] text-[#F7F7F4] w-9 h-9 flex items-center justify-center cursor-pointer transition-colors duration-200"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#1C2B2D]/70 hover:bg-[#1C2B2D]/95 border-none rounded-[1px] text-[#F7F7F4] w-9 h-9 flex items-center justify-center cursor-pointer transition-colors duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-3">
          {room.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={`flex-1 aspect-[3/2] bg-[#D5D5B7] border-2 rounded-[1px] overflow-hidden cursor-pointer p-0 transition-colors duration-200 ${
                i === activeIndex ? "border-[#355A63]" : "border-transparent"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Room description */}
      <div className="pt-2">
        <p className="font-sans text-[0.6875rem] tracking-[0.22em] uppercase text-[#8B6B4A] mb-2">
          {room.desc}
        </p>
        <h3 className="font-serif text-[2rem] font-medium text-[#1C2B2D] mb-2">
          {room.name}
        </h3>
        <p className="font-sans text-[0.8125rem] tracking-[0.06em] text-[#355A63] mb-6">
          {room.capacity}
        </p>

        <div className="w-8 h-px bg-[#8B6B4A] mb-6" />

        <p className="font-sans text-[0.9375rem] leading-[1.75] text-[#4A5558] mb-5">
          {room.atmosphere}
        </p>

        <div className="bg-[#EDEEDD] border-l-2 border-[#8B6B4A] py-4 px-5 rounded-r-sm">
          <p className="font-sans text-[0.6875rem] tracking-[0.16em] uppercase text-[#8B6B4A] mb-1.5">
            Ideale per
          </p>
          <p className="font-sans text-sm leading-[1.65] text-[#4A5558] m-0">
            {room.events}
          </p>
        </div>

        <button className="mt-7 font-sans text-xs tracking-[0.14em] uppercase font-medium text-[#F7F7F4] bg-[#355A63] hover:bg-[#2A4A52] border-none py-3.5 px-7 rounded-sm cursor-pointer transition-colors duration-250">
          Prenota questa sala
        </button>
      </div>

      <style>{`
        .fade-in-section { animation: fadeIn 0.35s ease; }
        .fade-in-image { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
      `}</style>
    </div>
  );
}