import React from 'react';

const Newsletter = () => {
  return (
    <div className="relative flex flex-col md:flex-row container w-full md:w-2/3 mt-10 mx-auto px-4 md:px-10 py-7 items-center rounded-2xl text-white bg-black" data-aos="zoom-out-down">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
        <h1 className="font-extrabold text-2xl md:text-3xl">STAY UP TO DATE ABOUT</h1>
        <h1 className="font-extrabold text-2xl md:text-3xl">OUR LATEST OFFERS</h1>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end">
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-2 rounded-3xl w-full md:w-96 text-black"
        />
        <button className="bg-white text-black p-2 rounded-3xl w-full md:w-96 mt-5">
          Subscribe to Newsletter
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
