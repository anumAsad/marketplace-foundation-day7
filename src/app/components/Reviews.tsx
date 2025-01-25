'use client'
import React, { useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'Sarah M.',
      rating: 5,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: 'Alex K.',
      rating: 5,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: 'James L.',
      rating: 5,
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: 'Monica D.',
      rating: 5,
      review:
        "Shop.co never fails to impress me with their outstanding customer service and quality. I've received so many compliments on the outfits I've purchased!",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 1,
    review: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      // Add the new review to the state
      setReviews([...reviews, newReview]);

      // Reset the form after submission
      setNewReview({
        name: '',
        rating: 1,
        review: '',
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewReview((prev) => ({
      ...prev,
      rating: parseInt(e.target.value),
    }));
  };

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">OUR HAPPY CUSTOMERS</h2>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 w-full sm:w-72 md:w-80"
          >
            <div className="flex items-center gap-2 mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
              <span className="text-green-600 text-sm">✔</span>
            </div>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-gray-600 mt-2">{review.review}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-center mt-10 mb-4">Add Your Review</h3>
      <form
        className="max-w-lg mx-auto bg-gray-100 p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={newReview.rating}
            onChange={handleRatingChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value={1}>1 - Poor</option>
            <option value={2}>2 - Fair</option>
            <option value={3}>3 - Good</option>
            <option value={4}>4 - Very Good</option>
            <option value={5}>5 - Excellent</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="review" className="block text-gray-700 font-semibold mb-2">
            Your Review
          </label>
          <textarea
            id="review"
            name="review"
            value={newReview.review}
            onChange={handleInputChange}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit Review
        </button>
      </form>
    </section>
  );
};

export default Reviews;
