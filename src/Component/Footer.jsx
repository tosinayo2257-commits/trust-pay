import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "../assets/Logo.png";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#03022A] pb-6 px-4 md:px-10 flex flex-col items-center gap-7">
      {/* Question Section */}
      <div className="bg-[#362FF6] text-center w-full max-w-[870px] rounded-b-[24px]  py-10 px-4">
        <h1 className="text-2xl md:text-[28px] text-white font-semibold">
          Do you have any questions?
        </h1>

        <p className="text-white py-3 max-mx-auto">
          Can’t find the answer you’re looking for? Reach out to us and we will
          provide detailed information.
        </p>

        <div className="flex flex-row md:flex-row items-center justify-center gap- mt-4">
          <Input
            type="text"
            className="h-12 w-[239px] md:w-[449px] text-black px-3 rounded-lg"
            placeholder="Enter Question"
          />

          <Button
            type="submit"
            content="Send Request"
            className="h-12 w-[126px] text- md:w-[150px] bg-black text-[#FFFF] font-semibold"
          />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-white rounded-[20px] w-full max-w-5xl md:w-full max-w-6xl flex flex-col md:flex-row justify-between gap-10 p-5">
        {/* Logo + Social */}
        <div className="flex flex-col items-start md:items-start gap-4 md:gap-1">
          <img src={Logo} alt="TrustPay Logo" className="w-[210px]" />

          <div className="flex gap-3 mt-1 md:mt-15 text-black">
            <BsTelegram size={35} />
            <BiLogoWhatsappSquare size={35} />
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-start md:text-center font-bold">
          <h3 className="text-sm font-semibold text-gray-800 tracking-wider mb-4">
            QUICK LINKS
          </h3>

          <ul className="space-y-2 text-black">
            <li>
              <Link to="/" className="hover:text-indigo-600 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-indigo-600 transition">
                FAQ
              </Link>
            </li>

            <li className="hover:text-indigo-600 cursor-pointer transition">
              Contacts
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-start md:items-end gap-3 md:gap-5">
          <Button
            type="button"
            content="Request a call"
            className="bg-[#362FF6] text-white px-6 py-2 rounded-xl shadow-md hover:bg-[#03022A]"
          />

          <div className="text-black text-center md:text-right font-bold">
            <p className="font-medium">+1 (999) 999-99-99</p>
            <p className="text-gray-600">info@trustpay.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
