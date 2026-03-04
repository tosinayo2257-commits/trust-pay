import React from "react";
import Dark from "../../assets/Dark.png";
import Dark2 from "../../assets/Dark2.png";

export default function Features() {
  return (
    <div className="py-2 hidden md:flex flex-col">
      <div className="text-center  mb-20 ">
        <div className="text-4xl font-bold mb-4">
          <h1>
            Powerful Features, Seamless <br /> Experience
          </h1>
        </div>
        <div className="text-[#000000B2] max-w-2xl mx-auto">
          <p>
            TrustPay is equipped with robust tools designed to protect your
            interests and simplify every stage of your agreements.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-7xl mx-auto">
        <div className=" px-10  gap-6 ">
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="mb-30 px-10 w-[530px] h-112 rounded-3xl bg-[#362FF6]">
              <img className="h-97 mt-15" src={Dark2} alt="" />
            </div>
            <section className="bg-[#FFFFFF] py-20 px-6">
              <div className="max-w-5xl mx-auto relative">
                <h2 className="text-3xl font-bold mb-4 pt-8 text-[#000000]">
                  Fair & Efficient Dispute Resolution
                </h2>

                <p className="  justify-end text-[#000000B2] w-[558px] px-5 max-w-2xl mx-auto">
                  Disagreements can happen. Our streamlined dispute resolution
                  process, powered by an initial AI review and backed by expert
                  human support, ensures that issues are addressed quickly,
                  transparently, and impartially. We’re committed to finding
                  fair solutions so you can move forward.
                </p>

                <div className="flex justify-end mt-10">
                  <button className="bg-[#362FF6] text-[#FFFFFF] hover:bg-[#000000] font-medium px-6 py-3 rounded-xl">
                    Get Started
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="px-10  gap-6 ">
          <div className="mt-3 grid grid-cols-2 gap-6">
            <section className="bg-[#FFFFFF] py-20 px-6">
              <div className="max-w-5xl mx-auto relative">
                <h2 className="px-5 text-3xl font-bold mb-4 pt-8 text-[#000000]">
                  Secure Digital Agreement <br /> Signatures
                </h2>

                <p className=" text-[#000000B2] w-[558px] px-5 max-w-2xl mx-auto">
                  Formalize your commitments with ease. Create, review, and
                  digitally sign agreements directly on the TrustPay platform.
                  Both parties receive a secure, verifiable copy, ensuring
                  clarity and mutual understanding from the outset.
                </p>

                <div className="mt-3 bg-[#362FF6] text-[#FFFFFF] hover:bg-[#000000] w-[149px] rounded-2xl flex gap-0  ">
                  <button className=" py-3 px-5">Get Started</button>
                </div>
              </div>
            </section>
            <div className="mb-30 px-10 w-[530px] rounded-3xl bg-[#362FF6]">
              <img className="h-97 " src={Dark} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
