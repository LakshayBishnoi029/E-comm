import { useState } from "react";
import cart1 from "../assets/images/cart-1.png";
import cart2 from "../assets/images/cart-2.png";
import cart3 from "../assets/images/cart-3.png";

import {
  ArrowRight,
  Minus,
  Plus,
  Tag,
  Trash2,
} from "lucide-react";



const initialCartItems = [
  {
    id: 1,
    name: "Gradient Graphic T-Shirt",
    size: "Large",
    color: "White",
    price: 145,
    image: cart1,
    quantity: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    image: cart2,
    quantity: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    image: cart3,
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = subtotal * 0.2;
  const deliveryFee = cartItems.length > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: Math.max(1, item.quantity + amount),
          }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleApplyPromo = (event) => {
    event.preventDefault();

    if (!promoCode.trim()) {
      setPromoMessage("Enter a promo code.");
      return;
    }

    setPromoMessage("Promo code is not available.");
  };

  const formatPrice = (amount) => `$${amount.toFixed(2).replace(".00", "")}`;

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-300">
        {/* Page heading */}
        <h1 className="text-left text-[32px] font-bold sm:text-[36px] md:text-[40px]">
          Your Cart
        </h1>


        <div className="Satoshi mt-5 grid grid-cols-1  items-start gap-5 lg:mt-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,1fr)] lg:gap-5">
          {/* Cart items */}
          <div className="min-w-0 rounded-2xl border px-5 border-black/10  ">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <article
                  key={item.id}
                  className={`
                    grid
                    grid-cols-[80px_minmax(0,1fr)]
                    gap-3
                    pb-4
                    sm:grid-cols-[100px_minmax(0,1fr)]
                    sm:gap-4
                    sm:py-6  
                    ${index !== 0 ? "border-t border-black/10" : ""}
                  `}
                >
                  {/* Product image */}
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[10px] bg-[#F0F0F0] sm:h-25 sm:w-25">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex min-w-0 flex-col justify-between gap-3">
                    <div className="flex min-w-0 items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-[14px] font-semibold leading-tight text-black sm:text-base">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-[11px] text-black/60 sm:text-xs">
                          Size: {item.size}
                        </p>

                        <p className="mt-0.5 text-[11px] text-black/60 sm:text-xs">
                          Color: {item.color}
                        </p>
                      </div>

                      {/* <button
                        type="button"
                        className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-black text-white transition-colors hover:bg-black/80"
                        onClick={() => {
                          // Connect this to your checkout route when available.
                        }}
                      >
                        Go to Checkout
                        <ArrowRight size={17} />
                      </button> */}
                    </div>
  
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[17px] font-bold text-black sm:text-lg">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex h-8 items-center gap-3 rounded-full bg-[#F0F0F0] px-3 sm:h-9 sm:gap-4 sm:px-4">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          disabled={item.quantity === 1}
                          className="text-black transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="min-w-3 text-center text-xs font-medium text-black">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="text-black transition-opacity hover:opacity-60"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm text-black/60">
                  Your cart is currently empty.
                </p>
              </div>
            )}
          </div>

          {/* Order summary */}
          <aside className="rounded-2xl border border-black/10 p-4 sm:p-5">
            <h2 className="text-lg font-semibold text-black">
              Order Summary
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-black/50">Subtotal</span>
                <span className="text-sm font-medium text-black">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-black/50">Discount (-20%)</span>
                <span className="text-sm font-medium text-[#FF3333]">
                  -{formatPrice(discount)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-black/50">Delivery Fee</span>
                <span className="text-sm font-medium text-black">
                  {formatPrice(deliveryFee)}
                </span>
              </div>

              <div className="border-t border-black/10 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-black">Total</span>
                  <span className="text-lg font-bold text-black">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>
            </div>

            {/* Promo code */}
            <form
              onSubmit={handleApplyPromo}
              className="mt-5 flex items-center gap-2"
            >
              <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full bg-[#F0F0F0] px-3">
                <Tag size={16} className="shrink-0 text-black/40" />

                <input
                  type="text"
                  value={promoCode}
                  onChange={(event) => {
                    setPromoCode(event.target.value);
                    setPromoMessage("");
                  }}
                  placeholder="Add promo code"
                  aria-label="Promo code"
                  className="min-w-0 flex-1 bg-transparent text-xs text-black outline-none placeholder:text-black/40"
                />
              </div>

              <button
                type="submit"
                className="h-10 rounded-full bg-black px-5 text-xs font-medium text-white transition-colors hover:bg-black/80"
              >
                Apply
              </button>
            </form>

            {promoMessage && (
              <p className="mt-2 text-xs text-black/50" role="status">
                {promoMessage}
              </p>
            )}

            {/* Checkout */}
            <button
              className="
                mt-5 flex items-center
                h-11! rounded-[62px]
                w-full!
                max-w-none!
                justify-center!
                gap-2!
                border-black!
                bg-black!
                text-white!
                hover:bg-black/80!
                hover:text-white!
              "
              onClick={() => {
                // Connect this to your checkout route when available.
              }}
            >
              Go to Checkout
              <ArrowRight size={17} />
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;