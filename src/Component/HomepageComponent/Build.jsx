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
    <section className="px-6 md:px-16 mb-10 max-w-[1440px] mx-auto flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-9 w-full">
        <div className="mb-20 flex flex-col items-center md:items-start">
          <h2 className="flex flex-wrap items-center justify-center md:justify-start text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D0D0D] gap-2">
            Build
            <img
              className="py-2 px-2  w-[150px] md:w-[220px]"
              src={trust}
              alt="Trust"
            />
            in
          </h2>

          <p className="text-4xl md:text-6xl font-bold text-[#0D0D0D]">
            Every Transaction.
          </p>

          <p className="mt-4 sm:mt-3 text-[#000000B2] max-w-[565px] text-center md:text-start py-2 md:py-2 font-semibold text-sm sm:text-base">
            Your all-in-one platform for digital agreements, milestone-based
            payments held in escrow, and swift dispute resolution. Focus on your
            work, we'll handle the trust.
          </p>

          <div className="mt-4 w-[180px] sm:w-[220px]">
            <Button
              type="submit"
              content={
                <span className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Get Started Now <IoIosArrowForward />
                </span>
              }
              className="text-white bg-[#362FF6] px-4 sm:px-6 py-2 rounded-xl shadow-md transition hover:bg-black w-full"
            />
          </div>
        </div>

        <div className="mb-25 flex justify-center md:justify-end">
          <img
            src={Clip}
            alt="Hero illustration"
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-center justify-items-center md:justify-items-start">
          <div className="flex items-center gap-3 text-center md:text-left">
            <img src={Apple} alt="App Store" className="w-10" />
            <div>
              <p className="text-sm text-[#000000]">Download on the</p>
              <h4 className="font-bold text-[#000000]">App Store</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 text-center md:text-left">
            <img src={Playstore} alt="Google Play" className="w-10" />
            <div>
              <p className="text-sm text-[#000000]">Get it on</p>
              <h4 className="font-bold text-[#000000]">Google Play</h4>
            </div>
          </div>

          <div className="flex items-center gap-3 text-center md:text-left">
            <img src={globe} alt="Web version" className="w-10" />
            <div>
              <p className="text-sm text-[#000000]">Available on the</p>
              <h4 className="font-bold text-[#000000]">Web</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
