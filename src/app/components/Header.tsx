import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-black text-white h-12 flex items-center justify-center px-4">
      <div className="hidden md:block">
        Sign up and get 20% off your first order.
        <b className="text-bold underline px-2 hover:cursor-pointer">
          Sign Up Now
        </b>
      </div>
      <div className="block md:hidden text-sm text-center">
        🎉 Get 20% off your first order!
        <b className="underline hover:cursor-pointer">Sign Up Now</b>
      </div>
    </div>
  );
};

export default Header;
