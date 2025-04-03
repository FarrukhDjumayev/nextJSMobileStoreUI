"use client";
import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-200">
      
      <div className="bg-white py-2 text-gray-700 text-sm">
        <div className="container mx-auto flex justify-between px-6">
          <div className="flex gap-4">
            <span>+998 93 811 41 71</span>
            <span>|</span>
            <span>Store location</span>
          </div>
          <div className="hidden md:block">Tell a friend about Drou & get 20% off</div>
          <div className="flex gap-4">
            <span>USD ▼</span>
            <span>Log in / Sign up</span>
          </div>
        </div>
      </div>

      
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/navLogo.svg" alt="Dji Mobile Store" className="h-10" />
          </div>

          
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-orange-500">HOME</a>
            <a href="#" className="hover:text-orange-500">ELECTRONICS ▼</a>
            <a href="#" className="hover:text-orange-500">BLOG ▼</a>
            <a href="#" className="hover:text-orange-500">PAGES ▼</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
          </nav>

          
          <div className="flex items-center gap-5 text-lg">
            <FiSearch className="cursor-pointer" />
            <FiHeart className="cursor-pointer" />
            <FiShoppingBag className="cursor-pointer" />

            
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 space-y-4 text-sm">
            <a href="#" className="hover:text-orange-500">HOME</a>
            <a href="#" className="hover:text-orange-500">ELECTRONICS ▼</a>
            <a href="#" className="hover:text-orange-500">BLOG ▼</a>
            <a href="#" className="hover:text-orange-500">PAGES ▼</a>
            <a href="#" className="hover:text-orange-500">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
