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
    <section className="px-4 py-8 max-w-[1140px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="flex flex-wrap items-center justify-center md:justify-start text-3xl sm:text-4xl md:text-6xl font-bold text-[#0D0D0D] gap-2 leading-tight">
            Build
            <img
              src={trust}
              alt="Trust icon"
              className="w-[90px] sm:w-[130px] md:w-[200px]"
            />
            in
          </h2>

          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0D0D0D] leading-tight">
            Every Transaction.
          </p>

          <p className="mt-4 text-[#000000B2] max-w-[560px] font-medium text-sm sm:text-base">
            Your all-in-one platform for digital agreements, milestone-based
            payments held in escrow, and swift dispute resolution. Focus on your
            work, we'll handle the trust.
          </p>

          <div className="mt-6 w-full max-w-[240px]">
            <Button
              type="submit"
              content={
                <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  Get Started Now <IoIosArrowForward />
                </span>
              }
              className="text-white bg-[#362FF6] px-6 py-3 rounded-xl shadow-md hover:bg-black w-full"
            />
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Clip}
            alt="Illustration showing milestone-based transaction management"
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[500px] h-auto"
          />
        </div>
      </div>

      {/* DOWNLOAD SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-[520px]">
        <div className="flex items-center gap-3">
          <img src={Apple} alt="Download on App Store" className="w-9" />
          <div>
            <p className="text-xs text-black">Download on the</p>
            <h4 className="font-semibold text-black">App Store</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src={Playstore} alt="Download on Google Play" className="w-9" />
          <div>
            <p className="text-xs text-black">Get it on</p>
            <h4 className="font-semibold text-black">Google Play</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src={globe} alt="Available on Web" className="w-9" />
          <div>
            <p className="text-xs text-black">Available on the</p>
            <h4 className="font-semibold text-black">Web</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
