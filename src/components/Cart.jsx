import React, { useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";

const Cart = () => {
  // Sample initial items in the cart
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "https://unsplash.com"
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "https://unsplash.com"
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

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 0 ? Math.round(subtotal * 0.2) : 0; // 20% off
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="mx-auto max-w-[1240px] px-4 py-8 font-sans">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home &gt; <span className="text-black font-medium">Cart</span>
      </div>

      <h1 className="text-3xl font-extrabold tracking-tight mb-8">YOUR CART</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 mb-4">Your cart is empty.</p>
          <a href="/" className="inline-block bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Side: Product List */}
          <div className="lg:col-span-7 border border-gray-200 rounded-[20px] p-6 space-y-6">
            {cartItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg bg-[#F0F0F0]"
                  />
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-lg md:text-xl text-black line-clamp-1">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-red-500 hover:text-red-700 transition" aria-label="Remove item">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Size: <span className="text-gray-900">{item.size}</span></p>
                      <p className="text-sm text-gray-600">Color: <span className="text-gray-900">{item.color}</span></p>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xl font-bold">${item.price}</span>
                      
                      {/* Quantity Controller */}
                      <div className="flex items-center gap-4 bg-[#F0F0F0] px-4 py-2 rounded-full">
                        <button onClick={() => updateQuantity(item.id, -1)} className="text-black hover:opacity-60">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-medium text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="text-black hover:opacity-60">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== cartItems.length - 1 && <hr className="border-gray-200 mt-6" />}
              </div>
            ))}
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:col-span-5 border border-gray-200 rounded-[20px] p-6 h-fit bg-white">
            <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Discount (-20%)</span>
                <span className="font-bold text-red-500">-${discount}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">${deliveryFee}</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg text-black font-medium">
                <span>Total</span>
                <span className="text-xl font-bold">${total}</span>
              </div>
            </div>

            {/* Promo Code Input */}
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 bg-[#F0F0F0] px-4 py-3 rounded-full text-sm focus:outline-none"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition">
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white text-center py-4 rounded-full font-medium hover:bg-neutral-800 transition">
              Go to Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
