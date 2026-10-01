function TopBanner() {
  return (
    <section className="w-full bg-black text-white">
      <div className="relative mx-auto flex min-h-[38px] w-full max-w-[1140px] items-center justify-center px-10 sm:min-h-[40px] sm:px-12">
        
        <p className="font-satoshi text-center text-[11px] font-normal leading-none sm:text-[14px]">
          Sign up and get 20% off to your first order.{" "}
          <a
            href="#"
            className="font-satoshi font-medium underline"
          >
            Sign Up Now
          </a>
        </p>

        <button
          type="button"
          aria-label="Close banner"
          className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center text-white sm:right-3"
        >
          <span className="text-lg leading-none">×</span>
        </button>

      </div>
    </section>
  );
}

export default TopBanner;