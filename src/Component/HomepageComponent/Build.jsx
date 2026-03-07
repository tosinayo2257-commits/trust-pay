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
    <div className="px-6 md:px-15 mb-2 max-w-[1440px] h-[510px] mx-auto flex flex-col justify-center">
      {/* Hero Section */}
      <div className="grid grid-cols-1 mt-1 md:grid-cols-2 items-center gap-10">
        {/* Text Section */}
        <div>
          <h2 className="flex items-center text-6xl max-w-[324px] md:max-w-[578px] font-bold text-[#0D0D0D] gap-2">
            Build
            <img
              className="py-2 px-2 w-[150px] md:w-[220px]"
              src={trust}
              alt="Trust"
            />
            in
          </h2>

          <p className="text-5xl text-[#0D0D0D] font-bold">
            {" "}
            Every Transaction.
          </p>

          <p className="mt-6 text-[#000000B2] max-w-[535px] py-4 font-semibold px-1">
            Your all-in-one platform for digital agreements, milestone-based
            payments held in escrow, and swift dispute resolution. Focus on your
            work, we'll handle the trust.
          </p>

          <div className="w-[198px] flex items-center">
            <Button
              type="submit"
              content={
                <span className="flex items-center gap-3">
                  Get Started Now <IoIosArrowForward />
                </span>
              }
              className="text-white px-6 py-2 rounded-xl shadow-md transition"
            />
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={Clip}
            alt="Hero illustration"
            className=" h-105  w-full max-w-[500px]"
          />
        </div>
      </div>

      {/* Download Section */}
      <div className="py-2 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-[600px]">
        <div className="mt-8 flex items-center gap-2">
          <img src={Apple} alt="App Store" />
          <div>
            <p className="text-sm text-[#000000]">Download on the</p>
            <h4 className="font-bold text-[#000000]">App Store</h4>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <img src={Playstore} alt="Google Play" />
          <div>
            <p className="text-sm text-[#000000]">Get it on</p>
            <h4 className="font-bold text-[#000000]">Google Play</h4>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <img src={globe} alt="Web version" />
          <div>
            <p className="text-sm text-[#000000]">Available on the</p>
            <h4 className="font-bold text-[#000000]">Web</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
