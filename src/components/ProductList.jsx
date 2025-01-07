import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../Context/CardContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    axios.get("https://fakestoreapi.in/api/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true))
    .sort((a, b) => {
      if (sort === "priceLow") return a.price - b.price;
      if (sort === "priceHigh") return b.price - a.price;
      return 0;
    });

  return (
    <div className="p-4">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border p-2 flex-1"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-2 flex-1"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="mobile">Mobiles Phones</option>
          <option value="audio">Headphones</option>
          <option value="tv">Smart TV</option>
          <option value="gaming">PS Gaming</option>
        </select>
        <select
          className="border p-2 flex-1"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
        </select>
      </div>
      {products == "" ? (
        <p className="text-xl font-mono">Please wait Loading...</p>
      ) : (
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border shadow-xl p-4 flex flex-col items-center text-center"
            >
              <Link to={`/product/${product.id}`} key={product.id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain"
                />
              </Link>

              <h3 className="text-lg font-bold my-2 ">{product.brand.length >30? product.brand.slice(0,30)+'...':product.brand}</h3>
              <p className="text-lg font-bold md:px-4">{product.title.length >30? product.title.slice(0,30)+'...':product.title}</p>

              <h2 className=" text-green-900 font-bold mt-3 text-xl">
                ₹ {product.price}
              </h2>

              <div className="flex justify-between gap-10  mt-8">
                <Link
                  onClick={() => addToCart(product)}
                  className="bg-orange-400 px-3 font-semibold  text-md py-2 rounded-md"
                >
                  Add To Cart
                </Link>
                <Link
                  to={`/product/${product.id}`}
                  className="text-md bg-orange-400 font-semibold  px-3 py-2 rounded-md"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
