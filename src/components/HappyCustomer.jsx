const reviews = [
  {
    name: "Sarah M.",
    text: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`,
  },
  {
    name: "Alex K.",
    text: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`,
  },
  {
    name: "James L.",
    text: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`,
  },
];

const HappyCustomers = () => {
  return (
    <section className="max-w-[1440px] pb-[170px] mx-auto px-[100px] py-12 max-lg:px-10 max-md:px-5">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[40px] font-bold max-md:text-[32px]">
          OUR HAPPY CUSTOMERS
        </h2>

        <button className="group relative min-w-[110px] overflow-hidden rounded-full border border-black px-6 py-3 text-sm font-medium text-black transition-colors duration-300 hover:text-white">
          <span className="relative z-10">View All</span>

          <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-400 group-hover:scale-x-100"></span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-[#E0E0E0] rounded-[20px] px-8 py-7 min-h-[240px]"
          >
            <div className="text-[#FFC633] text-xl tracking-wide">
              ★★★★★
            </div>

            <div className="flex items-center gap-2 mt-3.75">
              <h3 className="font-bold text-base">{review.name}</h3>
              <span className="flex items-center justify-center bg-green-500 text-white rounded-full text-[10px] w-4 h-4">
                ✓
              </span>
            </div>

            <p className="text-[#666] text-base leading-[22px] mt-3">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomers;