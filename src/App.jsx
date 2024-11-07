import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

export function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);

  // console.log("***", cartItems);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");

    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({
          product,
          qty,
          size,
        });
      }

      setCartItems(updatedCartItems);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="animate-fadeIn p-10 xl:p-16 dark:bg-night">
      <Nav onClickShoppingBtn={() => setSidebarOpen(true)} />

      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />

      <NewArrivalsSection items={SHOE_LIST} onClickCard={setCurrentShoe} />

      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
      </Sidebar>

      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}
