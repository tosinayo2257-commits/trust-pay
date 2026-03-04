import React from "react";
import Raw from "../../assets/Raw.png";

export default function Deals() {
  return (
    <section className=" hidden md:flex flex-col py-8 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-[#362FF6]  px-10 py-5 ">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="text-[#FFFFFF] px-2">
              <h1 className="text-5xl font-bold leading-tight px-6">
                Securely Manage <br /> Your Deals
              </h1>

              <p className="text-lg text-[#FFFFFF] px-5 py-3">
                From secure payments to clear agreements and fair resolutions,
                here’s how TrustPay empowers you.
              </p>

              <div className=" w-full  justify-between items-center px-5 space-y-5 mb-5">
                <div className="flex items-start gap-4">
                  <div className="bg-[#FFFFFF] text-[#362FF6] w-8 h-8 flex items-center justify-center rounded-lg font-bold">
                    ✓
                  </div>
                  <p>
                    <span className="font-semibold">
                      Create & Manage Agreements:
                    </span>{" "}
                    Define clear terms, set milestones, and invite your
                    partners.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FFFFFF] text-[#362FF6] w-8 h-8 flex items-center justify-center rounded-lg font-bold">
                    ✓
                  </div>
                  <p>
                    <span className="font-semibold">Secure Your Funds:</span>{" "}
                    Utilize our trusted escrow service to ensure payments are
                    safe until work is approved.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#FFFFFF] text-[#362FF6] w-8 h-8 flex items-center justify-center rounded-lg font-bold">
                    ✓
                  </div>
                  <p>
                    <span className="font-semibold">
                      Resolve Issues Fairly:
                    </span>{" "}
                    Resolve disputes quickly and fairly with our expert AI and
                    human support.
                  </p>
                </div>
              </div>

              <button className="bg-[#FFFFFF] text-[#362FF6] font-semibold hover:bg-[#362FF6] hover:text-[#FFFFFF] px-6 py-3 rounded-xl shadow-md transition">
                Get Started for Free
              </button>
            </div>

            <div className="h-100">
              <img src={Raw} alt="" className="w-[528px] h-120  " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
