/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
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
        right: "40px",
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
        left: "80px",
        width: "30px",
        height: "30px",
        background: "#888",
      }}
      onClick={onClick}
    />
  );
};

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <img src="/slider-1.png" alt="slider" />
        <img src="/slider-1.png" alt="slider" />
        <img src="/slider-1.png" alt="slider" />
        <img src="/slider-1.png" alt="slider" />
      </Slider>
    </div>
  );
};

export default Banner;
