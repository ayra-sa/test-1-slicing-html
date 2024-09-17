// import React from "react";
import { useState } from "react";
import { navbarMenus } from "../../utils/static";
import { ChevronDown, Menu, Search, ShoppingCart, UserCircle, X } from "lucide-react";

const Header = () => {
  const [isExpand, setIsExpand] = useState(false)
  return (
    <header className="bg-primary pt-5 pb-5 lg:pb-0 text-white relative z-30">
      <nav>
        <div className="container">
          <div className="flex items-center justify-between">
            <button>
              <Search />
            </button>
            <a href="/" className="font-bold text-6xl">
              mino.
            </a>
            <div className="hidden lg:flex items-center gap-x-7">
              <button>
                <ShoppingCart />
              </button>
              <button>
                <UserCircle />
              </button>
            </div>
            <button className="block lg:hidden relative z-10" onClick={() => setIsExpand(!isExpand)}>
              {isExpand ? <X /> : <Menu />}
            </button>
          </div>

          <ul className={`flex flex-col fixed inset-0 bg-primary transition-transform duration-300 lg:flex-row items-center gap-x-10 gap-y-5 py-3 justify-center uppercase text-lg lg:static lg:transform-none ${isExpand ? "translate-y-0" : "-translate-y-full"}`}>
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
