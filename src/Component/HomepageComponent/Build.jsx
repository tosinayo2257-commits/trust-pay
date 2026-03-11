import React from "react";
import clip from "../../assets/Clip.png";
import apple from "../../assets/Apple.png";
import playstore from "../../assets/Playstore.png";
import globe from "../../assets/globe-02.png";
import vector from "../../assets/Vector-2.png";
import { LiaGreaterThanSolid } from "react-icons/lia";

export default function TrustPayLanding() {
  return (
    <div className="min-h-[600px] text-gray-900 flex items-center">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-18 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-outfit leading-tight">
            Build{" "}
            <span className="bg-[#DEDEF2] text-[#000000] px-3 sm:px-4 rounded-xl inline-flex items-center gap-2">
              <img
                src={vector}
                alt="vector"
                className="w-10 sm:w-14 h-10 sm:h-14"
              />
              Trust
            </span>{" "}
            in <br />
            Every Transaction.
          </h1>

          <p className="mt-3 text-gray-600 max-w-lg text-base sm:text-lg">
            Your all-in-one platform for digital agreements, milestone-based
            payments held in escrow, and swift dispute resolution. Focus on your
            work, we'll handle the trust.
          </p>

          <button className="mt-8 w-fit flex items-center gap-2 bg-[#362FF6] text-white px-5 py-3 rounded-xl shadow hover:bg-indigo-700 transition">
            Get Started Now
            <LiaGreaterThanSolid className="inline-block" />
          </button>

          {/* Phone Image for Mobile */}
          <div className="flex justify-center mt-8 md:hidden">
            <img
              src={clip}
              alt="app preview"
              className="w-[280px] sm:w-[320px] object-contain"
            />
          </div>

          {/* Store Links */}
          <div className=" flex flex-col md:flex-row flex-wrap gap-6 sm:gap-10 mt-10 sm:mt-16 justify-center md:justify-start text-[#000000]">
            <div className="flex items-center gap-3">
              <img src={apple} alt="" className="w-8" />
              <div>
                <p className="text-xs font-medium text-[#000000]">
                  Download on the
                </p>
                <p className="font-semibold text-xl">App Store</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={playstore} alt="" className="w-8" />
              <div>
                <p className="text-xs font-medium text-[#000000]">Get it on</p>
                <p className="font-semibold text-xl">Google Play</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img src={globe} alt="" className="w-8" />
              <div>
                <p className="text-xs font-medium text-[#000000]">
                  Available on the
                </p>
                <p className="font-semibold text-xl">Web</p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex justify-end">
          <img
            src={clip}
            alt="app preview"
            className="w-[470px] object-contain"
          />
        </div>
      </section>
    </div>
  );
}
