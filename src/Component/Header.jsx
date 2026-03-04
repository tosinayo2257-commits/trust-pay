import React from "react";
import Logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  return (
    <header className="w-full bg-[#FFFFFF] py-4">
      <div className=" mx-auto flex items-center justify-between">
        <div className="flex items-center md:gap-0 py-5 w-[365px]">
          <div className="w-95 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            <img src={Logo} alt="" />
          </div>
          <div className="flex block lg:hidden">
            <span>
              <IoIosMenu />
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <h1 className="text-black font-medium hover:text-[#362FF6]">Home</h1>
          <h2 className="text-black font-medium hover:text-[#362FF6]">FAQs</h2>
          <h3 className="text-black font-medium hover:text-[#362FF6]">
            Contact
          </h3>
        </div>

        <div className="hidden md:flex gap-5">
          <button className="px-5 py-2 rounded-xl bg-[#DEDEF2] text-[#362FF6] hover:bg-[#362FF6] hover:text-[#FFFFFF] transition">
            Log In
          </button>
          <button className="px-5 py-2 rounded-xl bg-[#DEDEF2] text-[#362FF6] hover:bg-[#362FF6] hover:text-[#FFFFFF] transition shadow-md">
            Sign Up
          </button>
        </div>
        <div></div>
      </div>
    </header>
  );
}
