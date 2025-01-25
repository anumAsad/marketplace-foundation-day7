'use client';
import { useState } from 'react';
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react';

const COLORS = [
  { name: 'green', className: 'bg-green-500' },
  { name: 'red', className: 'bg-red-500' },
  { name: 'orange', className: 'bg-orange-500' },
  { name: 'blue', className: 'bg-blue-500' },
  { name: 'pink', className: 'bg-pink-500' },
  { name: 'black', className: 'bg-black' },
  { name: 'white', className: 'bg-white border border-gray-400' },
];

const SIZES = ['Small', 'Medium', 'Large', 'X-Large'];
const STYLES = ['Casual', 'Formal', 'Party', 'Gym'];

export default function FilterCard() {
  const [openSections, setOpenSections] = useState({
    price: true,
    colors: true,
    size: true,
    dressStyle: true,
  });

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number>(50);

  const toggleSection = (section: 'price' | 'colors' | 'size' | 'dressStyle') => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleColor = (color: string) => {
    setSelectedColor((prev) => (prev === color ? null : color)); // Deselect if clicked again
  };

  const toggleSize = (size: string) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  const toggleStyle = (style: string) => {
    setSelectedStyle((prev) => (prev === style ? null : style));
  };

  const applyFilters = () => {
    const filters = {
      priceRange,
      color: selectedColor || 'None',
      size: selectedSize || 'None',
      dressStyle: selectedStyle || 'None',
    };
    alert(`Selected Filters:\n${JSON.stringify(filters, null, 2)}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Price */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('price')}
        >
          <h3 className="font-semibold">Price</h3>
          {openSections.price ? (
            <ArrowDownIcon className="h-5 w-5" />
          ) : (
            <ArrowRightIcon className="h-5 w-5" />
          )}
        </div>
        {openSections.price && (
          <div className="mt-4">
            <input
              type="range"
              min="50"
              max="200"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$50</span>
              <span>${priceRange}</span>
            </div>
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('colors')}
        >
          <h3 className="font-semibold">Colors</h3>
          {openSections.colors ? (
            <ArrowDownIcon className="h-5 w-5" />
          ) : (
            <ArrowRightIcon className="h-5 w-5" />
          )}
        </div>
        {openSections.colors && (
          <div className="mt-4 flex flex-wrap gap-2">
            {COLORS.map((color, index) => (
              <div
                key={index}
                onClick={() => toggleColor(color.name)}
                className={`w-8 h-8 rounded-full cursor-pointer ${color.className} ${
                  selectedColor === color.name ? 'ring-2 ring-offset-2 ring-black' : ''
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('size')}
        >
          <h3 className="font-semibold">Size</h3>
          {openSections.size ? (
            <ArrowDownIcon className="h-5 w-5" />
          ) : (
            <ArrowRightIcon className="h-5 w-5" />
          )}
        </div>
        {openSections.size && (
          <div className="mt-4 flex flex-wrap gap-2">
            {SIZES.map((size, index) => (
              <div
                key={index}
                onClick={() => toggleSize(size)}
                className={`px-4 py-1 rounded border cursor-pointer ${
                  selectedSize === size ? 'bg-black text-white' : 'text-gray-500'
                }`}
              >
                {size}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dress Style */}
      <div className="mb-6">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleSection('dressStyle')}
        >
          <h3 className="font-semibold">Dress Style</h3>
          {openSections.dressStyle ? (
            <ArrowDownIcon className="h-5 w-5" />
          ) : (
            <ArrowRightIcon className="h-5 w-5" />
          )}
        </div>
        {openSections.dressStyle && (
          <div className="mt-4 space-y-2">
            {STYLES.map((style, index) => (
              <div
                key={index}
                onClick={() => toggleStyle(style)}
                className={`cursor-pointer hover:underline ${
                  selectedStyle === style ? 'font-bold text-black' : 'text-gray-700'
                }`}
              >
                {style}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Apply Filter */}
      <div className="mt-6">
        <button
          onClick={applyFilters}
          className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}
