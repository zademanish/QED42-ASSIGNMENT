
import React from "react";
import { useCart } from "../Context/CardContext"
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, calculateTotal } = useCart();

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-mono  mt-8 mb-4 px-4"> 🛒Cart</h2>
      {cartItems.length === 0 ? (
        <p className="px-4 font-semibold">Your cart is empty.</p>
      ) : (
        <div className="grid gap-4 px-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col md:flex-row gap-4 items-center border p-4">
              <img src={item.image} alt={item.title} className="h-24 w-24 object-contain" />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600 font-bold">Color : {item.color}</p>
                <p className="text-green-900 font-bold">₹ {item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 border font-bold"
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 border font-bold"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="text-right mt-4 px-4">
          <h3 className="text-xl font-bold">Total: <span className="text-green-900 font-bold text-xl"> ₹ {calculateTotal()}</span> </h3>
        </div>
      )}

    </div>
  );
};

export default Cart;
