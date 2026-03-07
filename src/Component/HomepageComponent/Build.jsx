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
    <section className="px-6 md:px-16 mb-12 max-w-[1440px] mx-auto flex flex-col justify-center md:flex items-center">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-9">
        {/* Text Section */}
        <div className="flex flex-col sm:justify-center">
          <h2 className="flex flex-wrap items-center text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D0D0D] gap-2">
            Build
            <img
              className="py-2 px-2 w-[120px] sm:w-[150px] md:w-[220px]"
              src={trust}
              alt="Trust"
            />
            in
          </h2>

          <p className="text-4xl sm:text-4xl md:text-6xl font-bold text-[#0D0D0D] mt-0">
            Every Transaction.
          </p>

          <p className="mt-4 sm:mt-6 text-[#000000B2] max-w-full sm:max-w-[555px] py-2 sm:py-4 font-medium text-sm sm:text-base">
            Your all-in-one platform for digital agreements, milestone-based{" "}
            <br />
            payments held in escrow, and swift dispute resolution. Focus on your
            work, we'll handle the trust.
          </p>

          <div className="mt-4 w-[180px] sm:w-[220px]">
            <Button
              type="submit"
              content={
                <span className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                  Get Started Now <IoIosArrowForward />
                </span>
              }
              className="text-white bg-[#362FF6] px-4 sm:px-6 py-2 rounded-xl shadow-md transition hover:bg-black w-full"
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src={Clip}
            alt="Hero illustration"
            className="w-full max-w-[400px] sm:max-w-[500px] h-auto"
          />
        </div>
      </div>

      {/* Download Section */}
      <div className="py-5 px-1 grid grid-cols-1  sm:grid-cols-3 gap-6 sm:gap-4 max-w-[600px] mx-auto">
        <div className="flex items-center gap-3">
          <img src={Apple} alt="App Store" className="w-10 sm:w-12" />
          <div>
            <p className="text-sm text-[#000000]">Download on the</p>
            <h4 className="font-bold text-[#000000]">App Store</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src={Playstore} alt="Google Play" className="w-10 sm:w-12" />
          <div>
            <p className="text-sm text-[#000000]">Get it on</p>
            <h4 className="font-bold text-[#000000]">Google Play</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <img src={globe} alt="Web version" className="w-10 sm:w-12" />
          <div>
            <p className="text-sm text-[#000000]">Available on the</p>
            <h4 className="font-bold text-[#000000]">Web</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
