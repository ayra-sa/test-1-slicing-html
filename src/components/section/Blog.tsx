import React from "react";
import { Button } from "../ui/Button";


const Blog = () => {
  const data = [
    {
      img: "/blog-1.png",
      title: "Sepatu Kotor? Untung Udah Ada Mino Clean dari Mino Store",
      category: ["promo"],
      date: "30 Nov 2020",
      author: "admin",
      comments: "3",
      desc: "Laiknya diri sendiri, sepatu juga butuh dirawat. Seti- daknya setiap sebulan sekali, sepatu perlu dibersih- kan. Namun pembersihan tergantung jenis bahan se...",
    },
    {
      img: "/blog-2.png",
      title: "Mino Shoe Store Siap Semarakkan Harbolnas 11.11!",
      category: ["promo"],
      date: "30 Nov 2020",
      author: "admin",
      comments: "3",
      desc: "Akan ada banyak sekali promo dari diskon ongkir, potongan harga, hingga cashback sehingga kamu bisa mendapat barang yang kamu suka.",
    },
    {
      img: "/blog-3.png",
      title: "Tips Agar Kaki Tidak Keseleo Sewaktu Berlari",
      category: ["promo"],
      date: "30 Nov 2020",
      author: "admin",
      comments: "3",
      desc: "Jogging atau lari-lari pendek menjadi salah satu tren olahraga di tengah pandemi. Namun, sayangnya tren ini diikuti oleh pelari pemula.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-3xl">Blog</h2>
          <Button variant="outlined">lihat semua</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div key={index} className="space-y-3">
              <img src={item.img} alt={item.title} className="w-full" />

              <p className="font-bold uppercase text-sm">{item.category}</p>
              <h2 className="text-3xl">{item.title}</h2>
              <div className="flex items-center gap-x-4 uppercase text-xs">
                <p>{item.date}</p>
                <div>oleh <a href="/">{item.author}</a></div>
                <a href="/">{item.comments} komentar</a>
              </div>

              <p>{item.desc}</p>

              <Button>Baca Selengkapnya</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
