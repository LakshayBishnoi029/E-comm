import React from "react";
import casual from "../assets/images/casual.png";
import formal from "../assets/images/formal.png";
import party from "../assets/images/party.png";
import gym from "../assets/images/gym.png";

const dressStyles = [
  {
    id: 1,
    name: "Casual",
    image: casual,
    className: "lg:col-span-3",
  },
  {
    id: 2,
    name: "Formal",
    image: formal,
    className: "lg:col-span-5",
  },
  {
    id: 3,
    name: "Party",
    image: party,
    className: "lg:col-span-5",
  },
  {
    id: 4,
    name: "Gym",
    image: gym,
    className: "lg:col-span-3",
  },
];

const DressStyle = () => {
  return (
    <section
      className="
        w-full
        bg-white
        px-4
        py-12.5
        sm:px-6
        sm:py-14
        md:px-8
        lg:px-10
        lg:py-20
        xl:px-0
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-310 rounded-[20px]
          md:rounded-[40px]
          bg-[#F0F0F0]
          px-6
          pt-10 pb-6.75
          md:px-10
          md:py-12 
          lg:px-12
          lg:py-14
          xl:px-16
          xl:pt-17.5
          xl:pb-19
        "
      >
        {/* Heading */}
        <h2
           className="font-black lg:text-[48px] leading-none text-center text-[30px] "
        >
          Browse By Dress Style
        </h2>

        {/* Cards */}
        <div
          className="
            mt-7
            grid
            grid-cols-1
             
            sm:mt-10
            sm:gap-4
            lg:grid-cols-8
            gap-4
            xl:mt-16
            xl:gap-5
          "
        >
          {dressStyles.map((style) => (
            <div
              key={style.id}
              className={`
                group
                overflow-hidden
                rounded-[20px]
                bg-white
                ${style.className}
              `}
            >
              <div className="grid">
                {/* Image */}
                <img
                  src={style.image}
                  alt={style.name}
                  className="
                    col-start-1
                    row-start-1
                    aspect-407/289
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-300
                    group-hover:scale-[1.02]
                    sm:aspect-407/289
                    lg:aspect-auto max-h-47.5 md:max-h-72.25
                     
                    md:h-72.25
                  "
                />

                {/* Title */}
                <h3
                  className="Satoshi
                    z-10
                    col-start-1
                    row-start-1
                    self-start
                    pl-6
                    pt-4
                    text-[24px]
                    font-bold
                    leading-[137%]
                    text-black
                    
                    sm:text-[30px]
                    lg:pl-6.25
                    lg:pt-9
                    lg:text-[36px]
                  "
                >
                  {style.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressStyle;