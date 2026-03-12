import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { Link } from "react-router";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FFFF] sticky top-0 z-50 ">
      <div className="max-w-295 mx-auto flex items-center justify-between py-4 sm:px-6 lg:px-8 py-6">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="TrustPay Logo"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center w-full">
          <nav className="flex items-center gap-8 mx-auto">
            <Link
              to="/"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              Home
            </Link>

            <Link
              to="/faq"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              FAQs
            </Link>

            <Link
              to="/con"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              Contact
            </Link>
          </nav>

          <div className="flex gap-3">
            <Button
              type="button"
              content="Log In"
              className="bg-[#DEDEF2] text-[#362FF6] px-5 py-2 rounded-xl hover:bg-[#362FF6] hover:text-[#FFFF] transition"
            />

            <Button
              type="button"
              content="Sign Up"
              className="bg-[#DEDEF2] text-[#362FF6] px-5 py-2 rounded-xl hover:bg-[#2c25d9] hover:text-[#FFFF] transition"
            />
          </div>
        </div>

        <button
          className="md:hidden text-[#000022]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoMdClose size={28} /> : <IoIosMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-6 gap-5">
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
                className="bg-[#DEDEF2] text-[#362FF6] py-2 rounded-xl w-full"
              />

              <Button
                type="button"
                content="Sign Up"
                className="bg-[#362FF6] text-[#FFFF] py-2 rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
