'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext'; // Import the useCart hook
import ProductDetailsReviews from '../components/ProductDetailsReviews';
import AlsoLike from '../components/AlsoLike';

interface ProductDetailsProps {
  product: {
    _id: string;
    name: string;
    description: string;
    price: number;
    discountPercent: number;
    rating: number;
    imageUrl: string[] | null; // Handle null for imageUrl
    colors: string[] | null; // Handle null for colors
    sizes: string[] | null; // Handle null for sizes
  };
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  const { dispatch } = useCart(); // Access the dispatch function

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity((prevQuantity) =>
      type === 'increment' ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl?.[0] || '', // Fallback to first image if available
      quantity,
      color: selectedColor,
      size: selectedSize,
    };
    dispatch({ type: 'ADD_TO_CART', payload: cartItem }); // Dispatch add to cart action
  };

  // Ensure the first image is displayed and handled properly
  const mainImageUrl = product.imageUrl?.[0] || '';

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-4">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>{' '}
        / Product Details
      </p>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image Gallery */}
        <div className="flex flex-col">
          <div className="mb-4">
            {/* Display the main image */}
            {mainImageUrl ? (
              <Image
                src={mainImageUrl} // Show the main image
                alt={product.name}
                width={444}
                height={530}
                className="w-full h-auto rounded-lg mt-4"
              />
            ) : (
              <div className="text-gray-500 text-center">
                No images available for this product.
              </div>
            )}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <span key={i}>★</span>
              ))}
              {product.rating % 1 !== 0 && <span>☆</span>}
            </div>
            <span className="text-gray-700 text-sm">({product.rating}/5)</span>
          </div>

          {/* Price */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            {product.discountPercent > 0 && (
              <>
                <span className="line-through text-gray-400 ml-4">
                  ${((product.price * 100) / (100 - product.discountPercent)).toFixed(2)}
                </span>
                <span className="text-red-600 font-bold ml-4">
                  -{product.discountPercent}%
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Select Colors */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Select Colors</h3>
            <div className="flex space-x-4">
              {product.colors?.length ? (
                product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 rounded-full cursor-pointer border ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                  ></div>
                ))
              ) : (
                <span className="text-gray-500">No colors available</span>
              )}
            </div>
          </div>

          {/* Choose Size */}
          <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Choose Size</h3>
            <div className="flex space-x-4">
              {product.sizes?.length ? (
                product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg ${selectedSize === size ? 'bg-black text-white' : 'bg-white text-gray-700 border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))
              ) : (
                <span className="text-gray-500">No sizes available</span>
              )}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-lg">
              <button className="px-4 py-2 text-gray-700" onClick={() => handleQuantityChange('decrement')}>
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button className="px-4 py-2 text-gray-700" onClick={() => handleQuantityChange('increment')}>
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-black text-white rounded-lg" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <ProductDetailsReviews />
      <AlsoLike />
    </div>
  );
};

export default ProductDetails;
