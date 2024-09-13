/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
import { Button } from "../ui/Button";
import { formatCurrency } from "../../utils";
import Slider from "react-slick";

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        placeContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100px",
        right: "-15px",
        width: "30px",
        height: "30px",
        background: "#888",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        placeContent: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100px",
        left: "-12px",
        width: "30px",
        height: "30px",
        background: "#888",
      }}
      onClick={onClick}
    />
  );
};

const Products = () => {
  const data = [
    {
      img: "/product-1.png",
      name: "Playoon - Kelimutu Run Model A",
      categories: ["sepatu pria", "olahraga"],
      rating: 3,
      price: 387000,
      discount: 325000,
    },
    {
      img: "/product-2.png",
      name: "Le Modiste - Sepatu Kasual Wanita",
      categories: ["sepatu wanita", "kasual"],
      rating: 3,
      price: 319000,
      discount: null,
    },
    {
      img: "/product-3.png",
      name: "X-Voyager Vintage Forrester",
      categories: ["sepatu pria", "kasual"],
      rating: 3,
      price: 402000,
      discount: null,
    },
    {
      img: "/product-4.png",
      name: "Cadillac Insigma 91",
      categories: ["sandal jepit pria"],
      rating: 3,
      price: 387000,
      discount: null,
    },
    {
      img: "/product-2.png",
      name: "Le Modiste - Sepatu Kasual Wanita",
      categories: ["sepatu wanita", "kasual"],
      rating: 3,
      price: 319000,
      discount: null,
    },
    {
      img: "/product-3.png",
      name: "X-Voyager Vintage Forrester",
      categories: ["sepatu pria", "kasual"],
      rating: 3,
      price: 402000,
      discount: null,
    },
    {
      img: "/product-3.png",
      name: "X-Voyager Vintage Forrester",
      categories: ["sepatu pria", "kasual"],
      rating: 3,
      price: 402000,
      discount: null,
    },
    {
      img: "/product-4.png",
      name: "Cadillac Insigma 91",
      categories: ["sandal jepit pria"],
      rating: 3,
      price: 387000,
      discount: null,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-3xl">Pilihan Minggu Ini</h2>
          <Button variant="outlined">produk lainnya</Button>
        </div>

        <div className="slider-container slider-product">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="space-y-2">
                <img src={item.img} alt={item.name} className="w-full" />
                <p className="text-xs font-bold text-text_tertiary uppercase">
                  {item.categories.join(", ")}
                </p>
                <h2 className="text-3xl">{item.name}</h2>
                <div className="flex">
                  <p
                    className={`${
                      item.discount !== null ? "line-through" : "font-bold"
                    }`}
                  >
                    {formatCurrency(item.price)}
                  </p>
                  <b className="ml-3">
                    {item.discount ? formatCurrency(item.discount) : null}
                  </b>
                </div>
                <Button>Add to cart</Button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Products;
