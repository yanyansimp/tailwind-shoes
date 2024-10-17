import { useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { CartItem } from "./components/CartItem";

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
        <h2 className="mb-10 text-2xl font-bold">Cart</h2>
        <CartItem item={SHOE_LIST[0]}/>
        <CartItem item={SHOE_LIST[1]}/>
        <CartItem item={SHOE_LIST[2]}/>
      </Sidebar>
    </div>
  );
}
