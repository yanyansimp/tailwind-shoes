import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between">
      {/* This is the Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>

      {/* Burger Button */}
      <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className="lg:hidden hover:bg-gray-200 rounded-lg p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu />
      </button>

      {/* Menu List */}
      <div
        className={`${ isMobileMenuShown === false && "hidden"} w-full lg-block lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border-gray-100 lg:border-none rounded-lg p-4 lg:space-x-8">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`py-2 px-3 cursor-pointer rounded ${
                  i === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                }`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Cart Button */}
      <div className="fixed left-4 bottom-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
