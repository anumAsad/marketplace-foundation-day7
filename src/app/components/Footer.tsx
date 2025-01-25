import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-40 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-extrabold text-2xl md:text-3xl">SHOP.CO</h3>
          <p className="text-gray-600 mt-4">
            We have clothes that suit your style and which you&apos;re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-600 text-xl">
              <BsTwitter />
            </a>
            <a href="#" className="text-gray-600 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-600 text-xl">
              <BsInstagram />
            </a>
            <a href="#" className="text-gray-600 text-xl">
              <BsGithub />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold">Company</h4>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Help</h4>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>

        
        <div>
          <h4 className="font-bold">FAQ</h4>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-40 space-y-4 md:space-y-0">
        <div className="text-sm text-gray-600">
          © Shop.co 2000–2023. All Rights Reserved
        </div>
        <div className="flex items-center ">
                    <Image src={"/foot1.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/foot2.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/foot3.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/foot4.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/foot5.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                </div>
      </div>
    </div>
  );
};

export default Footer;
