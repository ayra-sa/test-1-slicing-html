// import React from "react";

const Benefit = () => {
  const data = [
    {
      img: "/Sepatu.png",
      title: "Kualitas Terpercaya",
      text: "Produk kami di buat dari bahan berkualitas. Kami bekerjasama dengan mereka yang paling berpengalaman dalam industri.",
    },
    {
      img: "/Hadiah.png",
      title: "Kirim sebagai Hadiah",
      text: "Ingin memberi bingkisan pada orang tersayang dengan kemasan serta pesan khusus? Sampaikan saja, kami yang siapkan.",
    },
    {
      img: "/Retur.png",
      title: "Pengembalian Mudah",
      text: "Tidak puas dengan pembelian Anda (kualitas buruk atau salah ukuran)? Kami siap untuk melakukan retur barang kapanpun.",
    },
    {
      img: "/Layanan-Pelanggan.png",
      title: "Layanan Pelanggan",
      text: "Untuk semua informasi, kami selalu siap untuk melayani kebutuhan dan pertanyaan Anda.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center p-5 border border-text_tertiary bg-bg_primary"
            >
              <img src={item.img} alt={item.title} className="mx-auto mb-5" />
              <h2 className="text-card_secondary">{item.title}</h2>
              <p className="text-card_tertiary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
