import React from "react";
import Logo from "../assets/Logo.png";
import { IoIosMenu } from "react-icons/io";
import Button from "./Button";

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
          <Button
            type="submit"
            content="Log In"
            className=" text-white px-6 py-2 rounded-xl shadow-md  transition"
          />

          <Button
            type="submit"
            content="Sign Up"
            className=" text-white px-6 py-2 rounded-xl shadow-md  transition"
          />
        </div>
        <div></div>
      </div>
    </header>
  );
}
