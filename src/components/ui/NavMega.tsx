import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";

type Props = {
  menu: string;
  subMenu?: {
    menu: string;
    link: string;
    subMenu?: {
      menu: string;
      link: string;
    }[];
  }[];
};

const NavMega = ({ menu, subMenu }: Props) => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [subMenuOnSubMenuOpen, setSubMenuOnSubMenuOpen] = useState(false);

  const filteredSubMenu = subMenu?.filter((menu) => menu.subMenu);

  return (
    <div>
      <span
        onClick={() => setMegaOpen(!megaOpen)}
        className="flex items-center gap-x-2 cursor-pointer"
      >
        {menu} {megaOpen ? <ChevronUp /> : <ChevronDown />}
      </span>

      {megaOpen ? (
        <div className="bg-white w-full h-screen absolute !z-50 top-32 left-0 right-0 text-text_primary pt-5">
          <div className="container">
            <div className="mb-5 border-b border-b-slate-200 py-5">
              <h2>{menu}</h2>
            </div>
            <div className="flex gap-8">
              <ul className="space-y-5 w-[30%]">
                {subMenu?.map((menu, id) => (
                  <li key={id}>
                    {menu.subMenu ? (
                      <div
                        className="cursor-pointer flex items-center justify-between"
                        onClick={() =>
                          setSubMenuOnSubMenuOpen(!subMenuOnSubMenuOpen)
                        }
                      >
                        <span>{menu.menu}</span>
                        {subMenuOnSubMenuOpen ? <ChevronLeft /> : <ChevronRight />}
                      </div>
                    ) : (
                      <a href={menu.link}>{menu.menu}</a>
                    )}
                  </li>
                ))}
              </ul>

              {subMenuOnSubMenuOpen ? (
                <ul className="space-y-5">
                  {filteredSubMenu?.map((item) =>
                    item.subMenu?.map((i, id) => (
                      <li key={id}>
                        <a href={i.link}>{i.menu}</a>
                      </li>
                    ))
                  )}
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavMega;
