"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  price: number;
  discountedPrice?: number;
  imageUrl: string;
  rating: number;
  isNew: boolean;
}

const TopSelling = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const { dispatch } = useCart();

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products" && category in ["jeans", "tshirt"]] {
        _id,
        name,
        price,
        discountPercent,
        rating,
        "imageUrl": image.asset->url,
        colors,
        sizes
      }`;
      const result = await client.fetch(query);
      setProducts(result);
    };

    fetchProducts();
  }, []);

  // Show only the first 4 products when showAll is false
  const displayedProducts = showAll ? products : products.slice(0, 4);

  // Add product to cart
  const addToCartHandler = (product: Product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product._id,
        name: product.title,
        price: product.discountedPrice || product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
      },
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-10">
      <h1 className="text-3xl font-extrabold text-center mb-10">TOP SELLING</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <div className="w-full h-64 relative">
            <Link href={`/products/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.title}
                layout="fill" // Ensures the image fills the container
                objectFit="cover" // Ensures the image covers the container while maintaining aspect ratio
                className="rounded-lg"
              />
              </Link>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-center">{product.title}</h3>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400 text-sm">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </div>
              <span className="text-gray-500 text-sm ml-2">({product.rating})</span>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <span className="text-red-500 font-bold text-lg">
                ${product.discountedPrice || product.price}
              </span>
              {product.discountedPrice && (
                <span className="text-gray-400 line-through">${product.price}</span>
              )}
              {product.isNew && (
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </span>
              )}
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-800 transition duration-300"
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 border border-gray-500 text-black font-semibold rounded-full hover:bg-red-600 hover:text-white transition duration-300"
        >
          {showAll ? "Show Less" : "View All Products"}
        </button>
      </div>
    </div>
  );
};

export default TopSelling;
