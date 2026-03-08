import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFFFFF] max-w-[1340px] mx-auto py-4 md:py-5 mt-3 sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4 md:px-0">
        <div className="flex items-center gap-20">
          <div className="h-10 w-[226px] flex items-center">
            <img
              src={Logo}
              alt="TrustPay Logo"
              className="h-full object-contain"
            />
          </div>

          <div className="flex md:hidden">
            {menuOpen ? (
              <IoMdClose
                size={30}
                className="text-[#000022] cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <IoIosMenu
                size={30}
                className="text-[#000022] cursor-pointer"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-60">
          <nav className="flex items-center gap-8">
            <a
              href="#home"
              className="text-[#000022] font-medium hover:text-[#362FF6]"
            >
              Home
            </a>
            <a
              href="#faqs"
              className="text-[#000022] font-medium hover:text-[#362FF6]"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-[#000022] font-medium hover:text-[#362FF6]"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-4">
            <Button
              type="button"
              content="Log In"
              className="bg-[#DEDEF2] text-[#362FF6] px-6 py-2 rounded-xl shadow-md hover:text-white hover:bg-[#362FF6]"
            />
            <Button
              type="button"
              content="Sign Up"
              className="bg-[#DEDEF2] text-[#362FF6] px-6 py-2 rounded-xl shadow-md hover:text-white hover:bg-[#362FF6]"
            />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden max-w-[1140px] mx-auto px-2 mt-4">
          <div className="bg-[#FFFFFF] rounded-xl px-6 py-5 space-y-4">
            <a
              href="#home"
              className="block text-[#000022] font-medium hover:text-[#362FF6]"
            >
              Home
            </a>

            <a
              href="#faqs"
              className="block text-[#000022] font-medium hover:text-[#362FF6]"
            >
              FAQs
            </a>

            <a
              href="#contact"
              className="block text-[#000022] font-medium hover:text-[#362FF6]"
            >
              Contact
            </a>

            <div className="flex flex-col gap-3 pt-3">
              <Button
                type="button"
                content="Log In"
                className="bg-[#362FF6] text-white py-2 rounded-xl"
              />
              <Button
                type="button"
                content="Sign Up"
                className="bg-[#362FF6] text-white py-2 rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
