import React, { useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import cart1 from "../assets/images/cart-1.png";
import cart2 from "../assets/images/cart-2.png";
import cart3 from "../assets/images/cart-3.png";


const Cart = () => {
  // Array updated with 3 items matching your structural mockup specs
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: cart1,
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: cart2,
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: cart3, // Ensured path matching consistency
    }
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Automated design calculation tallies
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 0 ? Math.round(subtotal * 0.2) : 0; 
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="mx-auto max-w-[1240px] px-4 py-6 md:py-8 font-sans">
      {/* Breadcrumb Navigation Segment */}
      <div className="text-sm text-gray-500 mb-4 md:mb-6">
        Home &gt; <span className="text-black font-medium">Cart</span>
      </div>

      <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6 md:mb-8 text-black">YOUR CART</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 mb-4">Your cart is empty.</p>
          <a href="/" className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 items-start">
          
          {/* Left Container: 3 Responsive Product Cards */}
          <div className="lg:col-span-7 border border-gray-200 rounded-[20px] p-4 md:p-6 space-y-4 md:space-y-6 bg-white">
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-lg bg-[#F0F0F0] flex-shrink-0"
                  />
                  <div className="flex flex-col justify-between flex-1 min-w-0 h-24 md:h-28">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-base md:text-xl text-black truncate">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 transition flex-shrink-0" aria-label="Remove item">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 mt-0.5">Size: <span className="text-gray-700">{item.size}</span></p>
                      <p className="text-xs md:text-sm text-gray-500">Color: <span className="text-gray-700">{item.color}</span></p>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-lg md:text-xl font-bold text-black">${item.price}</span>
                      
                      {/* Flex Layout Balanced Increment/Decrement Controller */}
                      <div className="flex items-center gap-3 bg-[#F0F0F0] px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-black hover:opacity-60 transition">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-medium text-xs md:text-sm w-4 text-center text-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-black hover:opacity-60 transition">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== cartItems.length - 1 && <hr className="border-gray-100 mt-4 md:mt-6" />}
              </div>
            ))}
          </div>

          {/* Right Container: Fixed Checkout Pricing Breakdown Panel */}
          <div className="lg:col-span-5 border border-gray-200 rounded-[20px] p-5 md:p-6 h-fit bg-white">
            <h2 className="text-xl md:text-2xl font-bold text-black mb-5 md:mb-6">Order Summary</h2>
            
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
              <div className="flex justify-between text-gray-500 text-sm md:text-base">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm md:text-base">
                <span>Discount (-20%)</span>
                <span className="font-bold text-red-500">-${discount}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm md:text-base">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">${deliveryFee}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-base md:text-lg text-black font-semibold">
                <span>Total</span>
                <span className="text-xl md:text-2xl font-bold">${total}</span>
              </div>
            </div>

            {/* Code Field Integration Form Block */}
            <div className="flex gap-3 mb-5 md:mb-6">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="w-full bg-[#F0F0F0] pl-4 pr-4 py-3 rounded-full text-sm text-black placeholder-gray-400 focus:outline-none"
                />
              </div>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition flex-shrink-0">
                Apply
              </button>
            </div>

            {/* Standard Primary Action Router Checkout Action Button */}
            <button className="w-full bg-black text-white text-center py-3.5 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-neutral-800 transition flex items-center justify-center gap-2">
              Go to Checkout 
              <span className="text-lg">→</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;
