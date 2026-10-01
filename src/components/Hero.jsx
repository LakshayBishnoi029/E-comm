import { useEffect, useState } from "react";
// import rightimage from "shop-co/src/assets/images/herosection.jpg";
// import rightimage from "/assets/images/right.webp";
import rightImage from "../assets/images/herosection.jpg";
import heroA from "../assets/images/hero-a.svg"


function Hero() {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    setShowHero(true);
  }, []);

  return (
    <section className="overflow-hidden bg-[#F2F0F1]">
      <div className="mx-auto flex max-w-[1240px] relative flex-col px-5 pt-10 lg:flex-row lg:items-center lg:px-0 lg:pt-0">

        {/* Left Content */}
        <div
          className={`w-full py-8 transition-all duration-700 lg:w-1/2 lg:pb-[116px] lg:pt-[103px] ${showHero
              ? "translate-y-0 opacity-100"
              : "translate-y-5 opacity-0"
            }`}
        >
          <h1 className=" text-[40px] font-black leading-[64px] sm:text-[52px] lg:text-[64px]">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p className="font-satoshi mt-8 max-w-[550px] text-sm leading-[1.5] text-black/60 sm:text-base">
            Browse through our diverse range of meticulously crafted
            garments, designed to bring out your individuality and cater
            to your sense of style.
          </p>

          <button className="font-satoshi mt-8 w-full rounded-full bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-gray-700 sm:w-auto sm:px-16">
            Shop Now
          </button>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-y-5 sm:flex sm:items-center sm:gap-8">
            <div>
              <h2 className="font-satoshi text-[40px] font-bold max-sm:text-3xl">
                200+
              </h2>
              <p className="font-satoshi text-xs text-black/60 sm:text-sm">
                International Brands
              </p>
            </div>

            <div>
              <h2 className="font-satoshi text-[40px] font-bold max-sm:text-3xl">
                2,000+
              </h2>
              <p className="font-satoshi text-xs text-black/60 sm:text-sm">
                High-Quality Products
              </p>
            </div>

            <div>
              <h2 className="font-satoshi text-[40px] font-bold max-sm:text-3xl">
                30,000+
              </h2>
              <p className="font-satoshi text-xs text-black/60 sm:text-sm">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <img className=" max-lg:hidden absolute right-[500px] w-[56px] h-[56px]" src={heroA} alt="" />
        <img className=" max-lg:hidden absolute right-0 top-[93px]" src= {heroA} alt="" />

        {/* Right Image */}
        <div className=" flex w-full items-end justify-center lg:w-1/2">
          <img src={rightImage} alt="Fashion models" className="mt-[100px] max-h-[600px] max-w-[600px] max-lg:mt-0 max-md:max-w-[400px]    "/>
        </div>

      </div>
    </section>
  );
} 7
export default Hero; 