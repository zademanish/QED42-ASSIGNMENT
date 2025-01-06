import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../Context/CardContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`https://fakestoreapi.in/api/products/${id}`).then((response) => {
      setProduct(response.data.product);
    });
  }, [id]);

  if (!product) return <p className="font-mono text-xl">Please Wait Loading...</p>;

  return (
    <div className="w-full md:my-20">

    <div className="p-4 md:border shadow-lg max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-shrink-0 mx-auto">
          <img src={product?.image} alt={product?.title} className="w-full max-w-sm mx-auto" />
        </div>

        {/* Product Details */}
        <div className="flex-1 md:my-20">
          <h2 className="text-2xl font-bold">{product?.title}</h2>
          <h2 className="text-xl font-semibold">Model : {product?.model}</h2>

          <p className="text-gray-600 mt-2">{product?.description}</p>
          <h2 className="text-2xl font-semibold">Brand : {product?.brand}</h2>
          <p className="text-xl font-bold  text-green-900 mt-4">₹ {product?.price}</p>
          <p className="text-sm mt-1">color : { product.color}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-4 py-2 bg-orange-400 font-semibold rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
