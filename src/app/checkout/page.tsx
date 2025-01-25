'use client';

import { Suspense, useState } from 'react';
import { useCart } from '@/context/CartContext'; // Custom Cart Context
import { useSearchParams, useRouter } from 'next/navigation';

const countries = ['United States', 'Canada', 'United Kingdom', 'Australia', 'India', 'Pakistan'] as const;

const cities: Record<(typeof countries)[number], string[]> = {
  'United States': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'],
  'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Leeds'],
  Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  India: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'],
  Pakistan: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta'],
};

const Checkout = () => {
  const { dispatch } = useCart(); // Access dispatch from CartContext
  const searchParams = useSearchParams();
  const router = useRouter();

  // Extract order details from query parameters
  const subtotal = searchParams.get('subtotal');
  const discount = searchParams.get('discount');
  const deliveryFee = searchParams.get('deliveryFee');
  const total = searchParams.get('total');

  // State for user input
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState<typeof countries[number] | ''>('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate order submission (replace with actual API integration if necessary)
    setTimeout(() => {
      setIsLoading(false);
      dispatch({ type: 'CLEAR_CART' }); // Clear the cart after successful checkout
      router.push('/thank-you'); // Redirect to a thank-you page
    }, 1500);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      {/* Order Summary */}
      <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
        <h3 className="font-semibold mb-4">Order Summary</h3>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Discount</span>
          <span>-${discount}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Shipping Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-4">
        <h3 className="font-semibold mb-4">Shipping Address</h3>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium">Country</label>
          <select
            id="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value as typeof countries[number]);
              setCity(''); // Reset city when country changes
            }}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="" disabled>Select a country</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium">City</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            disabled={!country}
          >
            <option value="" disabled>
              {country ? 'Select a city' : 'Select a country first'}
            </option>
            {country &&
              cities[country]?.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="zip" className="block text-sm font-medium">Zip Code</label>
          <input
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-md text-white ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Complete Purchase'}
        </button>
      </form>
    </div>
  );
};

const CheckoutWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Checkout />
  </Suspense>
);

export default CheckoutWithSuspense;
