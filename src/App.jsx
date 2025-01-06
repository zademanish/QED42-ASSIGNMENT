import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider } from "./Context/CardContext";

const App = () => {
  return (
    <Router>
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
    </Router>
  );
};

export default App;
