import React from "react";
import clip from "../../assets/Clip.png";
import apple from "../../assets/Apple.png";
import playstore from "../../assets/Playstore.png";
import globe from "../../assets/globe-02.png";
import vector from "../../assets/Vector-2.png";
import { LiaGreaterThanSolid } from "react-icons/lia";

export default function TrustPayLanding() {
  return (
    <div className="min-h-[600px] flex items-center text-[#000000]">
      <section className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold font-outfit leading-tight">
            Build{" "}
            <span className="bg-[#DEDEF2] px-3 py-1 rounded-xl inline-flex items-center gap-2">
              <img
                src={vector}
                alt="vector"
                className="w-6 h-6 sm:w-10 sm:h-10"
              />
              Trust
            </span>{" "}
            in <br className="hidden sm:block" />
            Every Transaction.
          </h1>

          <p className="mt-2 text-[#000000B2] max-w-md text-sm sm:text-base lg:text-xl">
            Your all-in-one platform for digital agreements, milestone-based
            payments held in escrow, and swift dispute resolution. Focus on your
            work, we'll handle the trust.
          </p>

          <button className="mt-6 flex items-center gap-2 bg-[#362FF6] text-[#FFFF] px-6 py-3 rounded-xl hover:bg-[#DEDEF2] hover:text-[#362FF6] transition">
            Get Started Now
            <LiaGreaterThanSolid />
          </button>

          <div className="mt-10 md:hidden">
            <img
              src={clip}
              alt="app preview"
              className="w-[240px] sm:w-[280px] mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-[#000000B2]">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={apple} alt="" className="w-7" />
              <div>
                <p className="text-xs">Download on the</p>
                <p className="font-semibold text-lg">App Store</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={playstore} alt="" className="w-7" />
              <div>
                <p className="text-xs">Get it on</p>
                <p className="font-semibold text-lg">Google Play</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img src={globe} alt="" className="w-7" />
              <div>
                <p className="text-xs">Available on the</p>
                <p className="font-semibold text-lg">Web</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <img
            src={clip}
            alt="app preview"
            className="w-[420px] lg:w-[480px]"
          />
        </div>
      </section>
    </div>
  );
}
