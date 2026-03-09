import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "../assets/Logo.png";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#03022A] mt-10 md:mt-20 pb-5 px-4 md:px-10 flex flex-col items-center gap-7">
      <div className="bg-[#362FF6] text-center w-full max-w-[870px] rounded-b-[24px] py-5 px-1 flex flex-col items-center">
        <h1 className="text-2xl md:text-[28px] text-[#FFFF] font-semibold">
          Do you have any questions?
        </h1>

        <p className="text-[#FFFF] py-3 max-w-[600px] text-sm md:text-base">
          Can’t find the answer you’re looking for? Reach out to us and we will
          provide detailed information.
        </p>

        <div className="flex w-full max-w-[600px] mt-4 border-1 border-[#FFFFFF33] rounded-2xl overflow-hidden">
          <Input
            type="text"
            className="flex-1 h-12 px-1 md:px-4 text-[#FFFFFF33] placeholder-[#FFFF] bg-transparent border-none focus:outline-none"
            placeholder="Enter Question"
          />
          <Button
            type="submit"
            content="Send Request"
            className="h-12 px-2 md:px-5 bg-[#FFFF] text-[#362FF6] font-semibold text-sm md:text-base"
          />
        </div>
      </div>

      <div className="bg-[#FFFF] rounded-[20px] w-full max-w-6xl flex flex-col md:flex-row justify-between gap-6 md:gap-10 p-5 md:p-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src={Logo}
            alt="TrustPay Logo"
            className="w-[180px] md:w-[210px]"
          />

          <div className="flex gap-3 text-black mt-10">
            <BsTelegram size={30} />
            <BiLogoWhatsappSquare size={30} />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-start font-bold">
          <h3 className="text-sm font-semibold text-gray-800 tracking-wider mb-3">
            QUICK LINKS
          </h3>

          <ul className="space-y-2 text-black">
            <li>
              <Link to="/" className="hover:text-[#362FF6] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-[#362FF6] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/con" className="hover:text-[#362FF6] transition">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 md:gap-5">
          <Button
            type="button"
            content="Request a call"
            className="bg-[#362FF6] text-[#FFFF] px-6 py-2 rounded-xl shadow-md hover:bg-[#03022A] w-[220px] sm:w-auto text-sm md:text-base"
          />

          <div className="text-black text-center md:text-right font-bold mt-2 md:mt-0">
            <p className="font-medium">+1 (999) 999-99-99</p>
            <p className="text-gray-600 text-sm">info@trustpay.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
