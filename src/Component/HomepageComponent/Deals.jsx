import React from "react";
import Raw from "../../assets/Raw.png";
import Button from "../Button";

export default function Deals() {
  return (
    <section className="flex flex-col py-10 px-4 md:px-">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#362FF6] px- md:px- py- mt-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-10">
          <div className="">
            {/* Text Section */}
            <div className="text-white max-w-[350px] md:max-w-[700px] py-10 ml-10">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                Securely Manage Your Deals
              </h1>

              <p className="text-base md:text-lg mb-5 ">
                From secure payments to clear agreements and fair resolutions,
                here’s how TrustPay empowers you.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-white text-[#362FF6] w-7 h-7 md:w-10 md:h-8 flex items-center justify-center rounded-lg font-bold">
                    ✓
                  </div>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold">
                      Create & Manage Agreements:
                    </span>{" "}
                    Define clear terms, set milestones, and invite partners.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white text-[#362FF6] w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-lg font-bold">
                    ✓
                  </div>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold">Secure Your Funds:</span>{" "}
                    Utilize our escrow service to keep payments safe.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white text-[#362FF6] w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-lg font-bold">
                    ✓
                  </div>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold">
                      Resolve Issues Fairly:
                    </span>{" "}
                    AI and human support ensure fair dispute resolution.
                  </p>
                </div>
              </div>

              <Button
                type="button"
                content="Get Started for Free"
                className="h-12 px-6 bg-white text-[#362FF6] font-semibold hover:bg-gray-200"
              />
            </div>

            {/* Image Section */}
          </div>
          <div className="h-78 md:h-110">
            <img
              src={Raw}
              alt="TrustPay dashboard preview"
              className="w-full max-w-[350px] md:max-w-[700px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
