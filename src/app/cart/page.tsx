'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<string>('COD');
  const router = useRouter();

  const totalAmount = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    const queryParams = new URLSearchParams({
      paymentMethod,
      subtotal: totalAmount.toFixed(2),
      discount: '0', // Replace with actual discount logic if needed
      deliveryFee: '5', // Replace with dynamic fee if needed
      total: (totalAmount + 5).toFixed(2),
    }).toString();

    router.push(`/checkout?${queryParams}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Shopping Cart</h1>
      {cart.items.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2 text-left">Product</th>
                  <th className="border border-gray-300 p-2 text-left">Price</th>
                  <th className="border border-gray-300 p-2 text-left">Quantity</th>
                  <th className="border border-gray-300 p-2 text-left">Total</th>
                  <th className="border border-gray-300 p-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((item) => (
                  <tr key={item.id}>
                    <td className="border border-gray-300 p-2 flex items-center space-x-4">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="border border-gray-300 p-2">${item.price.toFixed(2)}</td>
                    <td className="border border-gray-300 p-2">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch({
                            type: 'UPDATE_QUANTITY',
                            payload: { id: item.id, quantity: Math.max(1, parseInt(e.target.value)) },
                          })
                        }
                        className="w-16 border p-1 text-center"
                        min={1}
                      />
                    </td>
                    <td className="border border-gray-300 p-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="border border-gray-300 p-2">
                      <button
                        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-semibold">Total Amount: ${totalAmount.toFixed(2)}</h2>
            </div>

            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold">Choose Payment Method</h3>
              {['COD', 'Card'].map((method) => (
                <label key={method} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                    className="text-blue-500"
                  />
                  <span>{method === 'COD' ? 'Cash on Delivery' : 'Card Payment'}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg">Your cart is empty. Start shopping!</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
