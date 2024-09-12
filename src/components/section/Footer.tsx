import React from "react";

const Footer = () => {
  const menus = [
    {
      label: "Mino Store",
      menu: [
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
      ],
    },
    {
      label: "Mino Store",
      menu: [
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
      ],
    },
    {
      label: "Mino Store",
      menu: [
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
      ],
    },
    {
      label: "Mino Store",
      menu: [
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
        {
          menu: "yogyakarta",
          link: "/",
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-white">
        <img src="/payment.png" alt="payment" className="mx-auto" />
      </div>

      <footer className="py-10 bg-primary">
        <div className="container">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-5">
            {menus.map((item, index) => (
              <li key={index}>
                <div className="text-white space-y-2">
                  <h2>{item.label}</h2>
                  <div className="flex flex-col space-y-2 capitalize text-sm">
                    {item.menu.map((m, index) => (
                      <a href={m.link} key={index}>
                        {m.menu}
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </footer>
      <div className="bg-secondary text-center text-sm font-bold text-white py-4">
        <p>(c) 2020 CV. MinoStore Minomartani</p>
      </div>
    </>
  );
};

export default Footer;
