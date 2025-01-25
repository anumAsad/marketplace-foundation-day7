import React from 'react';
import ProductDetails from '../../components/ProductDetails';
import { client } from '../../../sanity/lib/client';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercent: number;
  rating: number;
  imageUrl: string[] | null; // Allow null or undefined for imageUrl
  colors: string[] | null;
  sizes: string[] | null;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Fetch product details from Sanity
  const query = `*[_type == "products" && _id == $id][0] {
    _id,
    name,
    description,
    price,
    discountPercent,
    rating,
    "imageUrl": images[].asset->url,
    colors,
    sizes
  }`;

  const product: Product | null = await client.fetch(query, { id });

  // If product not found, handle error or return a not-found page
  if (!product) {
    return (
      <div className="max-w-screen-lg mx-auto p-4">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
        <p className="text-gray-600 mt-4">We could not find the product you’re looking for.</p>
        <a href="/" className="text-blue-500 hover:underline mt-6 inline-block">
          Go Back to Home
        </a>
      </div>
    );
  }

  // Ensure imageUrl is not null, empty, or undefined
  const updatedProduct = {
    ...product,
    imageUrl: product.imageUrl && product.imageUrl.length > 0 ? [product.imageUrl[0]] : [], // Ensure we have a valid imageUrl array
  };

  return <ProductDetails product={updatedProduct} />;
};

export default ProductPage;
