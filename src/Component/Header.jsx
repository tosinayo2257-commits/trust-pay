import React from "react";
import Logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import Button from "./Button";

export default function Header() {
  return (
    <header className="bg-[#FFFFFF] max-w-[1340px] mx-auto  py-4 md:py-5 mt-3  sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between px-1 md:px-0">
        {/* Logo + Mobile Menu */}
        <div className="flex items-center gap-45 md:gap-6">
          <div className="h-10 w-[136px] flex items-center max-w-[">
            <img
              src={Logo}
              alt="TrustPay Logo"
              className="h-full max-w-[210px] mx-auto object-contain"
            />
          </div>
          <div className="flex md:hidden">
            <IoIosMenu size={28} className="text-[#000022]" />
          </div>
        </div>

        {/* Navigation + Buttons */}
        <div className="flex items-center gap-4 md:gap-60">
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              Home
            </a>
            <a
              href="#faqs"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              FAQs
            </a>
            <a
              href="#contact"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex gap-4">
            <Button
              type="button"
              content="Log In"
              className="bg-[#362FF6] text-[#FFFFFF] px-6 py-2 rounded-xl shadow-md transition hover:bg-[#000022]"
            />
            <Button
              type="button"
              content="Sign Up"
              className="bg-[#362FF6] text-[#FFFFFF] px-6 py-2 rounded-xl shadow-md transition hover:bg-[#000022]"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
