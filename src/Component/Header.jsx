import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { Link } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="TrustPay Logo"
            className="h-9 sm:h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-30">
          <nav className="flex items-center gap-8">
            <Link
              to="/"
              className="text-[#000022] font-medium hover:text-[#362FF6]"
            >
              Home
            </Link>

            <Link
              to="/faq"
              className="text-[#000022] font-medium hover:text-[#362FF6]"
            >
              FAQs
            </Link>

            <Link
              to="/con"
              className="text-[#000022] font-medium hover:text-[#362FF6]"
            >
              Contact
            </Link>
          </nav>

          <div className="flex gap-3">
            <Button
              type="button"
              content="Log In"
              className="bg-[#DEDEF2] text-[#362FF6] px-5 py-2 rounded-xl hover:bg-[#362FF6] hover:text-white"
            />

            <Button
              type="button"
              content="Sign Up"
              className="bg-[#362FF6] text-white px-5 py-2 rounded-xl hover:bg-black"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#000022]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-5 gap-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#000022] hover:text-[#362FF6]"
            >
              Home
            </Link>

            <Link
              to="/faq"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#000022] hover:text-[#362FF6]"
            >
              FAQs
            </Link>

            <Link
              to="/con"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#000022] hover:text-[#362FF6]"
            >
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-4">
              <Button
                type="button"
                content="Log In"
                className="bg-[#DEDEF2] text-[#362FF6] py-2 rounded-xl"
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
