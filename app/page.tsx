import { Hero } from "./components/Hero";
import { SeasonalMenus } from "./components/SeasonalMenus";
import { RestaurantStory } from "./components/RestaurantStory";
import { FloorPlan } from "./components/FloorPlan";
import { Footer } from "./components/Footer";
import { getMenuCompleto } from "@/lib/notion"; 

export default async function App() {
  
  const dataMenus = await getMenuCompleto();

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#F7F7F4" }}>
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Hero />
      
      {/* 4. PASSA I DATI AL COMPONENTE */}
      <SeasonalMenus menus={dataMenus} />
      
      <RestaurantStory />
      <FloorPlan />
      {/* <FloorPlan /> */}
      <Footer />
    </div>
  );
}