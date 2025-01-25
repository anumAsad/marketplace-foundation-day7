'use client';

import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-6">Thank You for Your Order!</h1>
      <p className="text-lg mb-4">
        We appreciate your purchase. Your order will be processed shortly.
      </p>
      <button
        onClick={() => router.push('/')}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Return to Home
      </button>
    </div>
  );
};

export default ThankYouPage;
