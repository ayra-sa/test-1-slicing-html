import React from "react";
import { Button } from "../ui/Button";

const Hero = () => {
  return (
    <div className="relative h-[300px] flex place-content-center flex-col w-full">
      <img
        src="/hero.png"
        alt="hero"
        className="absolute inset-0 w-full h-[300px] -z-10"
      />
      <div className="container">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-y-5 justify-between text-white">
          <div>
            <h2 className="text-3xl">Diskon Nggak Pake Tanggung.</h2>
            <p className="text-bg_secondary">
              Plus bonus ongkir ke seluruh Indonesia.
            </p>
          </div>

          <Button>Info Selengkapnya</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
