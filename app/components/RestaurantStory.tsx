const STORY_PILLARS = [
  {
    label: "Filosofia",
    text: "Crediamo che un pasto non sia mai solo cibo. È un momento sospeso nel tempo — un rituale di condivisione, di degustazione, di memoria. Ogni piatto che esce dalla nostra cucina porta con sé il valore di questa convinzione.",
  },
  {
    label: "Cucina",
    text: "Siciliana nelle radici, stagionale per convinzione. Il nostro chef attinge direttamente dall'orto della tenuta e da una cerchia ristretta di agricoltori di cui ci fidiamo da decenni. Nulla arriva in tavola senza una storia da raccontare.",
  },
  {
    label: "Ospitalità",
    text: "La dimora apparteneva un tempo a un notaio che apriva la sua tavola a tutta la valle. Noi manteniamo viva quella tradizione. Che veniate in due o in duecento, il calore del benvenuto sarà sempre lo stesso.",
  },
];

export function RestaurantStory() {
  return (
    <section
      id="story"
      style={{
        background: "#F7F7F4",
        padding: "8rem 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>

        {/* Top: editorial split layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
            marginBottom: "7rem",
          }}
          className="story-grid"
        >
          {/* Left: text */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.6875rem",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#8B6B4A",
                marginBottom: "1.25rem",
              }}
            >
              La nostra storia
            </p>
            <h2 style={{ color: "#1C2B2D", marginBottom: "1.75rem" }}>
              Una casa, un tavolo, una tradizione{" "}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "1.0625rem",
                lineHeight: 1.8,
                color: "#4A5558",
                marginBottom: "2rem",
              }}
            >
              Casale del Notaio nasce da una domanda semplice: cosa accadrebbe se i migliori ingredienti della Sicilia potessero essere celebrati in un luogo degno del loro valore? Immersa tra uliveti e antiche mura in pietra, la nostra tenuta accoglie gli ospiti dal 1998 con discrezione, dedizione e una cura che dura nel tempo.
              </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.25rem",
                fontStyle: "italic",
                lineHeight: 1.7,
                color: "#3F5D63",
                borderLeft: "2px solid #8B6B4A",
                paddingLeft: "1.5rem",
              }}
            >
              "Il casale del notaio, del gusto il Teatro."
            </p>
          </div>

          {/* Right: portrait image */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                background: "#D5D5B7",
                borderRadius: "2px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="./images/story.webp"
                alt="Elegant dining tables set in a cozy restaurant interior"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* Offset decorative block */}
            <div
              style={{
                position: "absolute",
                bottom: "-2rem",
                right: "-2rem",
                width: "60%",
                aspectRatio: "4/3",
                background: "#D5D5B7",
                borderRadius: "2px",
                overflow: "hidden",
                zIndex: -1,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1776848517525-ccc3a43bfcfb?w=500&h=375&fit=crop&auto=format"
                alt="A table set with wine glasses for a fine dinner"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }}
              />
            </div>
          </div>
        </div>

        {/* Bottom: three pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "3rem",
            borderTop: "1px solid rgba(63,93,99,0.15)",
            paddingTop: "4rem",
          }}
          className="pillars-grid"
        >
          {STORY_PILLARS.map((pillar, i) => (
            <div key={pillar.label}>
              <span
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.6875rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#8B6B4A",
                  display: "block",
                  marginBottom: "0.5rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  color: "#1C2B2D",
                  marginBottom: "1rem",
                }}
              >
                {pillar.label}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  color: "#5A6668",
                }}
              >
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

        {/* Wide landscape image */}
        <div
          style={{
            marginTop: "5rem",
            borderRadius: "3px",
            overflow: "hidden",
            height: "380px",
            background: "#D5D5B7",
          }}
        >
          <img
            src="/images/casale.webp"
            alt="Historic Italian villa surrounded by olive groves"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .pillars-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
