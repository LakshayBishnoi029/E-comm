function Newsletter() {
    return (
        <section className="absolute left-1/2 mt-[-125px] w-full max-w-[1240px] -translate-x-1/2 px-2 py-8 sm:px-4 lg:px-0">

            <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between gap-8 rounded-[20px] bg-black px-4 py-7 sm:px-8 lg:flex-row lg:items-center lg:px-16 lg:py-9">

                {/* Left Text */}
                <h2 className="max-w-[600px] text-[24px] font-bold leading-[26px] text-white sm:text-[32px] sm:leading-[36px] lg:text-[40px] lg:leading-[45px]">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h2>

                {/* Right Side */}
                <div className="flex w-full max-w-[349px] flex-col gap-2.5">

                    {/* Email Input */}
                    <div className="flex h-[48px] items-center rounded-full bg-white px-4">
                        <span className="mr-3 text-gray-400">✉</span>

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                        />
                    </div>

                    {/* Subscribe Button */}
                    <button className="group relative h-[48px] w-full cursor-pointer overflow-hidden rounded-full bg-white text-sm text-black transition-colors duration-300 hover:text-white">
                        <span className="relative z-10">
                            Subscribe to Newsletter
                        </span>

                        <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-400 group-hover:scale-x-100"></span>
                    </button>

                </div>
            </div>
        </section>
    );
}

export default Newsletter;