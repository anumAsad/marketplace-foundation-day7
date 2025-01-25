'use client'
import { useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'Samantha D.',
    verified: true,
    rating: 5,
    review:
      'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It&apos;s become my favorite go-to shirt.',
    date: 'August 14, 2023',
  },
  {
    id: 2,
    name: 'Alex M.',
    verified: true,
    rating: 5,
    review:
      'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I&apos;m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
    date: 'August 15, 2023',
  },
  {
    id: 3,
    name: 'Ethan R.',
    verified: true,
    rating: 5,
    review:
      'This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer&apos;s touch in every aspect of this shirt.',
    date: 'August 16, 2023',
  },
  {
    id: 4,
    name: 'Olivia P.',
    verified: true,
    rating: 5,
    review:
      'As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It&apos;s evident that the designer poured their creativity into making this t-shirt stand out.',
    date: 'August 17, 2023',
  },
  {
    id: 5,
    name: 'Liam K.',
    verified: true,
    rating: 5,
    review:
      'This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer&apos;s skill. It&apos;s like wearing a piece of art that reflects my passion for both design and fashion.',
    date: 'August 18, 2023',
  },
  {
    id: 6,
    name: 'Ava H.',
    verified: true,
    rating: 5,
    review:
      'I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.',
    date: 'August 19, 2023',
  },
];

const ProductDetailsReviews = () => {
  const [sortBy, setSortBy] = useState('Latest');

  return (
    <div className="mt-12">
      {/* Reviews Section */}
      <div className="border-t pt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">All Reviews (451)</h2>
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-lg p-2"
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
              <option value="Highest Rating">Highest Rating</option>
              <option value="Lowest Rating">Lowest Rating</option>
            </select>
            <button className="bg-black text-white px-4 py-2 rounded-lg">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
            >
              {/* Header: Name and Rating */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold">{review.name}</h3>
                  <div className="text-sm text-gray-500">
                    {review.verified && (
                      <span className="text-green-500 font-semibold">
                        Verified Buyer
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4">{review.review}</p>

              {/* Date */}
              <p className="text-gray-500 text-sm">Posted on {review.date}</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsReviews;