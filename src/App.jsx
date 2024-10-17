import { useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";

export function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:p-16">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setSidebarOpen(false)}
      >
        Hi
      </Sidebar>
    </div>
  );
}
