import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "../assets/Logo.png";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#03022A] mt-12 md:mt-20 pb-6 px-4 md:px-10 flex flex-col items-center gap-10">
      <div className="bg-[#362FF6] text-center w-full max-w-[870px] rounded-b-[24px] py-8 px-4 flex flex-col items-center">
        <h1 className="text-xl sm:text-2xl md:text-[28px] text-[#FFFF] font-semibold">
          Do you have any questions?
        </h1>

        <p className="text-[#FFFF] py-3 max-w-[600px] text-sm sm:text-base">
          Can’t find the answer you’re looking for? Reach out to us and we will
          provide detailed information.
        </p>

        <div className="flex w-full max-w-full sm:max-w-lg mt-4 border border-[#FFFFFF33] rounded-2xl overflow-hidden">
          <Input
            type="text"
            placeholder="Enter Question"
            className="flex-1 min-w-0 h-12 px-4 sm:px-5 bg-transparent text-[#FFFF] placeholder-white border-none focus:outline-none"
          />

          <Button
            type="submit"
            content="Send Request"
            className="h-12 px-4 sm:px-6 bg-[#FFFF] text-[#362FF6] font-semibold text-sm shrink-0 min-w-[120px]"
          />
        </div>
      </div>

      <div className="bg-[#FFFF] rounded-[20px] w-full max-w-6xl flex flex-col md:flex-row justify-between items-center md:items-start gap-10 p-6 md:p-10">
        <div className="flex flex-col items-center md:items-start gap-5">
          <img
            src={Logo}
            alt="TrustPay Logo"
            className="w-[160px] md:w-[210px]"
          />

          <div className="flex gap-4 text-[#03022A] mt-8">
            <BsTelegram size={45} />
            <BiLogoWhatsappSquare size={48} />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
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

        <div className="flex flex-col items-center md:items-end gap-4">
          <Button
            type="button"
            content="Request a call"
            className="bg-[#362FF6] text-[#FFFF] px-6 py-2 rounded-xl shadow-md hover:bg-[#03022A] w-full sm:w-auto"
          />

          <div className="text-[#03022A] text-center md:text-right">
            <p className="font-medium">+1 (999) 999-99-99</p>
            <p className="text-gray-600 text-sm">info@trustpay.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
