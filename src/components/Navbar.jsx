
import { Menu, X } from "lucide-react";
import { useState } from 'react';

const navItems = [
  
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  {label: 'Projects', href: '#'},
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#footer' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" sticky bg-[#231F20] shadow-md  w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
          <img src="/rk Logo.svg" alt="Logo" className="h-12 w-auto " />
            <span className="font-medium text-xl text-white">RK Realtors & Consultants</span>
          </div>
          <div className="hidden md:flex space-x-8">
{navItems.map((item) => (
  <div key={item.label} className="relative group">
    <a href={item.href} className="text-gray-200 hover:text-white font-medium duration-500">
      {item.label}
    </a>
    <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-green-600 group-hover:w-3/6"></span>
    <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-green-600 group-hover:w-3/6"></span>
  </div>
))}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-gray-600 hover:text-black font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};