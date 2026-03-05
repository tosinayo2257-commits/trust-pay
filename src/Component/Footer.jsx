import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "../assets/Logo.png";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="bg-[#03022A] pb-10 mt-2 gap-10 hidden md:flex flex-col items-center justify-center">
      <div className="bg-[#362FF6] text-center w-[810px] h-[273px] pt-10 rounded-bl-[24px] rounded-br-[24px] ">
        <div className="px-5 lg:px-0">
          <h1 className="text-[28px] text-[#FFFFFF] font-semibold">
            Do you have any questions?
          </h1>
          <p className="text-[#FFFFFF] py-3">
            Can’t find the answer you’re looking for? Reach out to us and we
            will provide detailed information.
          </p>
        </div>
        <div className=" flex items-center justify-center lg: py-3 px-5">
          <Input
            type="question"
            className="h-12 w-[449px] rounded-rb-[5px] text-[#FFFFFF]"
            placeholder="Enter Question"
          />
          <Button
            type="submit"
            content="Send Request"
            className="h-12 px-2 w-[150px] bg-[#FFFFFF] hover:text-[#FFFFFF] font-semibold"
          />
        </div>
      </div>

      <div>
        <div className="bg-[#FFFFFF] w-[1115px] h-50 flex flex-row  py-10 px-10 h-65 rounded-[20px] gap-55">
          <div className="flex flex-col justify-center gap-35  ">
            <div className="flex items-center pt-5 gap-3">
              <img
                className="text-2xl font-semibold text-gray-900"
                src={Logo}
                alt=""
              />
            </div>

            <div className="flex gap-4">
              <span className="">
                <BsTelegram size={35} />
              </span>

              <span>
                <BiLogoWhatsappSquare size={35} />
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-gray-800">
              <li className="hover:text-indigo-600 cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition">
                FAQ
              </li>
              <li className="hover:text-indigo-600 cursor-pointer transition">
                Contacts
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:items-end gap-5">
            <Button
              type="submit"
              content="Request a call"
              className=" text-white px-6 py-2 rounded-xl shadow-md  transition"
            />
            <div className="text-gray-800 text-right space-y-1">
              <p className="font-medium">+1 (999) 999-99-99</p>
              <p className="text-gray-600">info@trustpay.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
