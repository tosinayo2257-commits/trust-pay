import React from "react";
import trust from "../../assets/trust.png";
import Button from "../Button";
import Clip from "../../assets/Clip.png";
import Apple from "../../assets/Apple.png";
import Playstore from "../../assets/Playstore.png";
import globe from "../../assets/globe-02.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Build() {
  return (
    <section className="px-5 md:px-16 py-5 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left order-1 mb-10">
          <h2 className="flex flex-wrap items-center justify-center md:justify-start text-4xl md:text-6xl font-bold text-[#0D0D0D] gap-2 leading-tight">
            Build
            <img
              src={trust}
              alt="Trust icon"
              className="w-[150px] md:w-[200px]"
            />
            in
          </h2>

          <p className="text-4xl md:text-6xl font-bold text-[#0D0D0D] leading-tight">
            Every Transaction.
          </p>

          <p className="mt-4 text-[#000000B2] max-w-[565px] font-medium text-sm sm:text-base">
            Your all-in-one platform for digital agreements, milestone-based
            payments held in escrow, and swift dispute resolution. Focus on your
            work, we'll handle the trust.
          </p>

          <div className="mt-7 w-[220px]">
            <Button
              type="submit"
              content={
                <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  Get Started Now <IoIosArrowForward />
                </span>
              }
              className="text-white bg-[#362FF6] px-6 py-3 rounded-xl shadow-md transition hover:bg-black w-full"
            />
          </div>
        </div>

        <div className="flex justify-center md:justify-end px-2 mb-px-10 mb-1 md:mb-1 order-2">
          <img
            src={Clip}
            alt="Illustration showing milestone-based transaction management"
            className="w-full max-w-[380px] sm:max-w-[450px] md:max-w-[500px] h-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 md:pb-10 w-full max-w-[500px] justify-items-center md:justify-items-start text-center md:text-left order-3 md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={Apple} alt="Download on App Store" className="w-10" />
            <div>
              <p className="text-xs text-[#000000]">Download on the</p>
              <h4 className="font-semibold text-[#000000]">App Store</h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={Playstore}
              alt="Download on Google Play"
              className="w-10"
            />
            <div>
              <p className="text-xs text-[#000000]">Get it on</p>
              <h4 className="font-semibold text-[#000000]">Google Play</h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={globe} alt="Access on Web" className="w-10" />
            <div>
              <p className="text-xs text-[#000000]">Available on the</p>
              <h4 className="font-semibold text-[#000000]">Web</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
