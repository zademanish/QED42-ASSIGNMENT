import React, { createContext, useState, useContext } from "react";

// Create the Cart Context
const CartContext = createContext();

// Custom hook for using the Cart Context
export const useCart = () => useContext(CartContext);

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // Increment quantity if product already exists
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Add new product to the cart
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Update quantity
  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, calculateTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
