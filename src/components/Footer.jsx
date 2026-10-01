import footer1 from "../assets/images/footer-1.png";
import footer2 from "../assets/images/footer-2.png";
import footer3 from "../assets/images/footer-3.png";
import footer4 from "../assets/images/footer-4.png";
import footer5 from "../assets/images/footer-5.png";

function Footer() {
  const companyLinks = ["About", "Features", "Works", "Career"];

  const helpLinks = [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ];

  const faqLinks = ["Account", "Manage Deliveries", "Orders", "Payments"];

  const resourceLinks = [
    "Free eBooks",
    "Development Tutorial",
    "How to - Blog",
    "Youtube Playlist",
  ];

  const socialIcons = [
    {
      name: "Twitter",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] fill-current"
        >
          <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.9h1.73L8.27 3.98H6.41L17.8 19.9Z" />
        </svg>
      ),
    },

    {
      name: "Facebook",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] fill-current"
        >
          <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.55.45-1 1-1Z" />
        </svg>
      ),
    },

    {
      name: "Instagram",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-[16px] w-[16px] fill-none stroke-current stroke-[2]"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            className="fill-current stroke-none"
          />
        </svg>
      ),
    },

    {
      name: "GitHub",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-[15px] w-[15px] fill-current"
        >
          <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.16c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.18-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.75.11 3.04.75-.42.11 2.18.78 3.23v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
        </svg>
      ),
    },
  ];

  const footerColumn = (title, links) => (
    <div>
      <h3 className="mb-5 text-[14px]  font-medium tracking-[3px] text-black">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="group relative inline-block text-[14px] text-gray-500"
            >
              {link}

              <span className="absolute bottom-[-3px] left-0 h-[1px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="w-full bg-[#F0F0F0] px-5 pt-16 sm:px-8 lg:px-[100px] lg:pt-[140px]">

      {/* Top Part */}
      <div className="mx-auto flex max-w-[1260px] flex-col justify-between gap-12 lg:flex-row lg:gap-[113.5px]">

        {/* Shop.co */}
        <div className="w-full lg:max-w-[248px]">
          <h2 className="text-[28px] font-bold leading-none tracking-[-1.5px]">
            SHOP.CO
          </h2>

          <p className="mt-5 max-w-[250px] text-[13px] leading-[20px] text-gray-500">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          {/* Social Icons */}
          <div className="mt-7 flex items-center gap-3">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        {footerColumn("COMPANY", companyLinks)}

        {/* Help */}
        {footerColumn("HELP", helpLinks)}

        {/* FAQ */}
        {footerColumn("FAQ", faqLinks)}

        {/* Resources */}
        {footerColumn("RESOURCES", resourceLinks)}
      </div>

      {/* Divider + Bottom */}
      <div className="mx-auto mt-12 max-w-[1260px] border-t border-gray-300 pt-[20px] pb-[82px] lg:mt-10">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          {/* Copyright */}
          <p className="text-[12px] text-gray-500">
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          {/* Payment Icons */}
         <div className="flex items-center justify-center gap-2">

  <div className="flex h-[30px] w-[46px] cursor-pointer items-center justify-center rounded-md bg-white shadow-sm">
    <img src={footer1} alt="Visa" />
  </div>

  <div className="flex h-[30px] w-[46px] cursor-pointer items-center justify-center rounded-md bg-white shadow-sm">
    <img src={footer2} alt="Mastercard" />
  </div>

  <div className="flex h-[30px] w-[46px] cursor-pointer items-center justify-center rounded-md bg-white shadow-sm">
    <img src={footer3} alt="PayPal" />
  </div>

  <div className="flex h-[30px] w-[46px] cursor-pointer items-center justify-center rounded-md bg-white shadow-sm">
    <img src={footer4} alt="Apple Pay" />
  </div>

  <div className="flex h-[30px] w-[46px] cursor-pointer items-center justify-center rounded-md bg-white shadow-sm">
    <img src={footer5} alt="Google Pay" />
  </div>

</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;