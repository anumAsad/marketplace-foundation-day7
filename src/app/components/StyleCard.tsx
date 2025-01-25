import Image from 'next/image';
import React from 'react';

interface Product {
  _id: string;
  imageUrl: string; // Ensure this matches your data structure from Sanity
  name: string;
  rating: number | null; // Allow rating to be nullable
  price: number;
  discountPercent?: number;
  colors?: string[];
  sizes?: string[];
}

export default function StyleCard({ product }: { product: Product }) {
  // Helper to calculate discounted price
  const discountedPrice = product.discountPercent
    ? (product.price * (1 - product.discountPercent / 100)).toFixed(2)
    : null;

  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
      {/* Display Product Image */}
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={295}
        height={298}
        className="w-full h-48 object-cover rounded-md"
        priority
      />

      {/* Product Name */}
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>

      {/* Rating Section */}
      <div className="flex items-center mt-1">
        <div className="flex text-yellow-400">
          {/* Render stars dynamically */}
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < Math.floor(product.rating ?? 0) ? '★' : '☆'}</span>
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-2">
          {(product.rating ?? 0).toFixed(1)}/5
        </span>
      </div>

      {/* Price Section */}
      <div className="mt-2 flex items-center space-x-2">
        <span
          className={`text-lg font-bold ${
            product.discountPercent ? 'text-red-500' : 'text-gray-800'
          }`}
        >
          ${discountedPrice || product.price.toFixed(2)}
        </span>
        {product.discountPercent && (
          <span className="text-sm text-gray-500 line-through">
            ${product.price.toFixed(2)}
          </span>
        )}
      </div>

      {/* Colors and Sizes Section (Optional, if provided) */}
      <div className="mt-4">
        {product.colors && product.colors.length > 0 && (
          <div className="text-sm text-gray-600">
            <span className="font-semibold">Colors:</span> {product.colors.join(', ')}
          </div>
        )}
        {product.sizes && product.sizes.length > 0 && (
          <div className="text-sm text-gray-600 mt-1">
            <span className="font-semibold">Sizes:</span> {product.sizes.join(', ')}
          </div>
        )}
      </div>

      {/* Add to Cart Button */}
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center justify-center w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
