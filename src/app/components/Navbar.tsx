'use client';

import { SearchIcon, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { FaChevronDown, FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <div className="container w-full flex items-center justify-between px-6 md:px-16 lg:px-[1440] py-4 sm:py-6 min-h-20 border-b border-gray-300 bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="text-3xl font-extrabold"><Link href={"/"}>SHOP.CO</Link></div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-8">
        <button className="flex items-center gap-1">
         <Link href={'/casual'}> Shop</Link> <FaChevronDown />
        </button>
        <Link href="/on-sale">On Sale</Link>
        <Link href="/new-arrivals">New Arrivals</Link>
        <Link href="/brands">Brands</Link>
      </div>

      {/* Search, Cart, and Account */}
      <div className="flex items-center gap-4">
        <div className="hidden md:block max-w-md bg-gray-100 border border-gray-300 px-4 py-2 rounded-md">
          <input
            type="text"
            placeholder="Search for product"
            className="w-full bg-transparent text-gray-700 placeholder-gray-500 outline-none"
          />
        </div>
        <SearchIcon className="block md:hidden text-gray-600" />

        {/* Cart with Badge */}
        <Link href="/cart" className="relative">
          <ShoppingCart className="text-gray-600" />
          {cart.items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cart.items.reduce((total, item) => total + item.quantity, 0)}
            </span>
          )}
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <User className="text-gray-600 rounded-full" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Manage My Account</DropdownMenuItem>
            <DropdownMenuItem>My Orders</DropdownMenuItem>
            <DropdownMenuItem>My Cancellations</DropdownMenuItem>
            <DropdownMenuItem>My Reviews</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Burger Menu (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-600 text-2xl"
        >
          {menuOpen ? <IoClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50">
          <ul className="flex flex-col gap-4 p-6">
            <li>
              <button className="flex items-center gap-1">
                Shop <FaChevronDown />
              </button>
            </li>
            <li>
              <Link href="/on-sale">On Sale</Link>
            </li>
            <li>
              <Link href="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link href="/brands">Brands</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
