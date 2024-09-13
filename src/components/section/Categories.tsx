// import React from "react";


const Categories = () => {
  const data = [
    {
      img: "/sepatu-anak.png",
      title: "sepatu anak",
    },
    {
      img: "/sandal.png",
      title: "sandal",
    },
    {
      img: "/sepatu-wanita.png",
      title: "sepatu wanita",
    },
    {
      img: "/sepatu-pria.png",
      title: "sepatu pria",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div key={index} className="relative group">
              <img src={item.img} alt={item.title} className="w-full" />
              <p className="absolute capitalize text-3xl text-white font-bold right-5 group-odd:left-5 bottom-5">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
