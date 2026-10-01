import rating from "../assets/images/rating.svg";
import striped from "../assets/images/striped.png";
import orange from "../assets/images/orange.png";
import shorts from "../assets/images/shorts.png";
import Blackjean from "../assets/images/blackjeans.png";

const products = [
  {
    image: striped,
    name: "Vertical Striped Shirt",
    rating: "5.0/5",
    price: "$212",
    oldPrice: "$232",
    discount: "-20%",
  },
  {
    image: orange,
    name: "Courage Graphic T-shirt",
    rating: "4.0/5",
    price: "$145",
  },
  {
    image: shorts,
    name: "Loose Fit Bermuda Shorts",
    rating: "3.0/5",
    price: "$80",
  },
  {
    image: Blackjean,
    name: "Faded Skinny Jeans",
    rating: "4.5/5",
    price: "$210",
  },
];

function TopSelling() {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px] py-10 sm:py-12">

        <h2 className="text-center text-[30px] sm:text-[48px] leading-none font-black mb-13.75">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-8 lg:gap-4">
          {products.map((product, index) => (
            <div key={index} className="min-w-0">

              <div className="w-full h-[170px] max-w-[295px] sm:h-[220px] lg:h-[298px] rounded-[14px] bg-[#F0EEED] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-[14px] sm:text-[17px] lg:text-[20px] leading-tight font-bold mt-3">
                {product.name}
              </h3>

              <div className="flex items-center gap-1 sm:gap-2 mt-2">
                <img
                  src={rating}
                  alt="Rating"
                  className="w-[65px] sm:w-[80px] lg:w-[90px] h-auto"
                />

                <span className="text-[11px] sm:text-sm">
                  {product.rating}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-1">
                <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold">
                  {product.price}
                </span>

                {product.oldPrice && (
                  <>
                    <span className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-400 line-through">
                      {product.oldPrice}
                    </span>

                    <span className="text-[10px] sm:text-xs text-red-400 bg-red-100 px-2 py-1 rounded-full">
                      {product.discount}
                    </span>
                  </>
                )}
              </div>

            </div>
          ))}
        </div>

        <button className="group relative block mx-auto mt-8 px-20 py-3.75 border border-[#E6E6E6] rounded-full text-sm overflow-hidden transition-colors duration-300 hover:text-white">
          <span className="relative z-10">View All</span>
          <span className="absolute inset-0 bg-black scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></span>
        </button>

      </div>
    </section>
  );
}

export default TopSelling;