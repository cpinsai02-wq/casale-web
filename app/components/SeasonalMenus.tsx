"use client"; // Obbligatorio per far funzionare i click e la modale

import { useState } from "react";
import { MenuCard } from "./MenuCard";
import { MenuModal } from "./ModalMenu";
import { MenuCategoria } from "@/lib/notion";

export function SeasonalMenus({ menus }: { menus: MenuCategoria[] }) {
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoria | null>(null);

  return (
    <section
      id="menus"
      style={{
        background: "#EDEEDD",
        padding: "7rem 0",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        
        {/* Section header */}
        <div style={{ marginBottom: "4rem" }}>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "0.6875rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#8B6B4A",
              marginBottom: "1rem",
            }}
          >
            Un tavolo per ogni occasione
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <h2
              style={{
                color: "#1C2B2D",
                maxWidth: "520px",
              }}
            >
              I nostri menu
            </h2>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                color: "#5A6668",
                maxWidth: "360px",
              }}
            >
              La nostra cucina segue il ritmo della natura. Ogni menu viene ricreato con il mutare delle stagioni — utilizzando i prodotti della tenuta e di fornitori locali.
              </p>
          </div>

          <div
            style={{
              width: "48px",
              height: "1px",
              background: "#8B6B4A",
              marginTop: "2.5rem",
            }}
          />
        </div>

        {/* Menu cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {Array.isArray(menus) && menus.map((menu) => (
            <MenuCard 
              key={menu.Id} 
              menu={menu} 
              onOpenModal={() => setSelectedMenu(menu)} 
            />
          ))}
        </div>
      </div>

      {/* Modal renderization */}
      {selectedMenu && (
        <MenuModal 
        isOpen={selectedMenu !== null} 
        onClose={() => setSelectedMenu(null)} 
        cat={selectedMenu}
      />
      )}
    </section>
  );
}