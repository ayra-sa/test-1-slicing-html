import React from "react";
import { navbarMenus } from "../../utils/static";
import { ChevronDown, Search, ShoppingCart, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary pt-5 text-white relative z-30">
      <nav>
        <div className="container">
          <div className="flex items-center justify-between">
            <button>
              <Search />
            </button>
            <a href="/" className="font-bold text-6xl">
              mino.
            </a>
            <div className="flex items-center gap-x-7">
              <button>
                <ShoppingCart />
              </button>
              <button>
                <UserCircle />
              </button>
            </div>
          </div>

          <ul className="flex items-center gap-x-10 py-3 justify-center uppercase text-lg">
            {navbarMenus.map((menu, index) => (
              <li key={index}>
                {menu.subMenu ? (
                  <div className="">
                    <span className="flex items-center gap-x-2 cursor-pointer">
                      {menu.menu} <ChevronDown />
                    </span>
                  </div>
                ) : (
                  <a href={menu.link}>{menu.menu}</a>
                )}
              </li>
            ))}
          </ul>

          {/* <div className="bg-white w-full h-screen absolute !z-50 top-32 left-0 right-0"></div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
