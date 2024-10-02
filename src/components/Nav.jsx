import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

export function Nav() {
  return (
    <nav className="flex items-center justify-between">
      {/* This is the Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger Button */}
      <button className="hover:bg-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu />
      </button>
    </nav>
  );
}

//export default App;
