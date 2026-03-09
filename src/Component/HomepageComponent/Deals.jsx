import React from "react";
import Raw from "../../assets/Raw.png";
import Button from "../Button";
import { IoCheckmarkOutline } from "react-icons/io5";

export default function Deals() {
  return (
    <section className="  p-10">
      <div className="max-w-[1120px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#362FF6] grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 pt-5 md:pt-10 pl-6 md:pl-10">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
              Securely Manage Your Deals
            </h1>

            <p className="text-sm sm:text-base md:text-lg mb-6 text-[#FFFFFFCC]">
              From secure payments to clear agreements and fair resolutions,
              here’s how TrustPay empowers you.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-white text-[#362FF6] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <IoCheckmarkOutline size={20} />
                </div>

                <p className="text-sm sm:text-base">
                  <span className="font-bold">Create & Manage Agreements:</span>{" "}
                  Define clear terms, set milestones, and invite partners.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white text-[#362FF6] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <IoCheckmarkOutline size={20} />
                </div>

                <p className="text-sm sm:text-base">
                  <span className="font-bold">Secure Your Funds:</span> Utilize
                  our escrow service to keep payments safe.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-white text-[#362FF6] rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <IoCheckmarkOutline size={20} />
                </div>

                <p className="text-sm sm:text-base">
                  <span className="font-bold">Resolve Issues Fairly:</span> AI
                  and human support ensure fair dispute resolution.
                </p>
              </div>
            </div>

            <Button
              type="button"
              content="Get Started for Free"
              className="h-11 px- bg-white text-[#362FF6] font-semibold rounded-xl hover:bg-gray-200"
            />
          </div>

          {/* IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={Raw}
              alt="TrustPay dashboard preview"
              className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[520px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
