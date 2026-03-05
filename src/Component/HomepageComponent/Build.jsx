import React from "react";
import trust from "../../assets/trust.png";
import Button from "../Button";
import Clip from "../../assets/Clip.png";
import Apple from "../../assets/Apple.png";
import Playstore from "../../assets/Playstore.png";
import globe from "../../assets/globe-02.png";
import { IoIosArrowForward } from "react-icons/io";

export default function build() {
  return (
    <div className="px-5 py-5 mx-auto md:w-[1112px] w-[327px] flex flex-col container">
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-[1115px] w-[327px] ">
        <div className="md:w-[573px] w-[327px]">
          <h2 className="text-5xl font-bold flex text-[#0D0D0D] md:w-[1115px] w-[327px]">
            Build{" "}
            <img
              className="flex justify-center items-center py-2 px-2 md:w-[250px] w-[150px]"
              src={trust}
              alt=""
            />{" "}
            in <br />
          </h2>
          <p className="text-5xl text-[#0D0D0D] font-bold">
            {" "}
            Every Transaction.
          </p>
          <div>
            <p className="mt-6  text-[#000000B2]  md:w-[573px] w-[327px] py-5">
              Your all-in-one platform for digital agreements, milestone-based{" "}
              payments held in escrow, and swift dispute resolution. Focus on{" "}
              your work, we'll handle the trust.
            </p>
          </div>
          <div className=" text-[#FFFFFF] w-[198px]  rounded-2xl   ">
            <Button
              type="submit"
              content={
                <span className="flex gap-3">
                  Get Started Now <IoIosArrowForward />
                </span>
              }
              className=" text-[#FFFFFF] px-6 py-2 rounded-xl shadow-md transition"
            />
          </div>
        </div>
        <div className="">
          <img src={Clip} alt="" />
        </div>
      </div>
      <div className=" w-[600px] py-10 grid grid-cols-1 md:grid-cols-3">
        <div className="mt-8 flex items-center gap-2">
          <img src={Apple} alt="App Store" className="" />
          <div>
            <p className="text-sm text-[#000000]">Download on the</p>
            <h4 className="font-semibold text-[#000000]">App Store</h4>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <img src={Playstore} alt="App Store" className="" />
          <div>
            <p className="text-sm text-[#000000]">Get it on</p>
            <h4 className="font-semibold text-[#000000]">Google Play</h4>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <img src={globe} alt="App Store" className="" />
          <div>
            <p className="text-sm text-[#000000]">Available on the</p>
            <h4 className="font-semibold text-[#000000]">Web</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
