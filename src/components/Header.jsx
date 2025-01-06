import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CardContext";

const Header = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="p-4 bg-gray-800 text-white flex flex-wrap items-center justify-between">
      <Link to="/" className="text-lg font-bold">
        E-commerce
      </Link>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="text-lg font-semibold flex items-center gap-2">
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </header>
  );
};

export default Header;
