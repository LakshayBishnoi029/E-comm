import versace from "../assets/images/versace.svg";
import zara from "../assets/images/zara.svg";
import gucci from "../assets/images/gucci.svg";
import prada from "../assets/images/prada.svg";
import ck from "../assets/images/ck.svg";

const brands = [
  {
    name: "Versace",
    image: versace,
  },
  {
    name: "Zara",
    image: zara,
  },
  {
    name: "Gucci",
    image: gucci,
  },
  {
    name: "Prada",
    image: prada,
  },
  {
    name: "Calvin Klein",
    image: ck,
  },
];

function BrandStrip() {
  return (
    <section className="w-full bg-black py-11">
      <div className="mx-auto flex max-w-[1240px] items-center flex-wrap  justify-between gap-8 px-5">
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.image}
            alt={brand.name}
            className="h-auto max-w-[206px] object-contain"
          />
        ))}
      </div>
    </section>
  );
}

export default BrandStrip;