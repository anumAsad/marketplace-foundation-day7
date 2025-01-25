
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="bg-[#F2F0F1] pt-10 md:pt-24 overflow-hidden">
      <div className="md:max-w-frame mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <section className="max-w-frame px-4 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <div className="mb-12">
            <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full">
              Shop Now
            </button>
          </div>

          {/* Newsletter Signup Section */}
          <div className="text-center mb-8 md:mb-16 mt-8 md:mt-10">
            <p className="text-lg font-semibold text-black mb-3">Stay Updated!</p>
            <p className="text-sm text-black/60 mb-4 max-w-[550px] mx-auto">
              Sign up for our newsletter and get 10% off your first order!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-80 lg:w-[400px] py-3 px-6 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
              />
              <button className="bg-black hover:bg-black/80 text-white px-8 py-3 rounded-full transition duration-300 ease-in-out mt-4 sm:mt-0 sm:ml-4">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <section className="relative md:px-4 min-h-[448px] md:min-h-[428px] bg-cover bg-top xl:bg-[center_top_-1.6rem] bg-no-repeat bg-[url('/images/header-res-homepage.png')] md:bg-[url('/images/header-homepage.png')] mt-[-4rem] flex justify-center items-center">
          <div className="relative">
          <Image src={"/hero1.jpeg"}
          alt="hero-image"
          width={500} 
          height={600}  />
            <Image
              priority
              src="/vector1.png"
              height={104}
              width={104}
              alt="big star"
              className="absolute right-7 xl:right-0 top-12 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-max-w-24 xl:max-w-[104px] xl:max-h-[104px]"
            />
            <Image
              priority
              src="/vector.png"
              height={56}
              width={56}
              alt="small star"
              className="absolute left-7 md:left-0 top-36 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14"
            />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;