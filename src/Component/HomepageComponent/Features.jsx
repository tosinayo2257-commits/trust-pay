import React from "react";
import Dark from "../../assets/Dark.png";
import Dark2 from "../../assets/Dark2.png";

export default function Features() {
  return (
    <div className="py-12 hidden md:flex flex-col">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">
          Powerful Features, Seamless <br /> Experience
        </h1>

        <p className="text-[#000000B2] max-w-2xl mx-auto">
          TrustPay is equipped with robust tools designed to protect your
          interests and simplify every stage of your agreements.
        </p>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto px-10 gap-12">
        {/* Feature 1 */}
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl bg-[#362FF6] flex justify-center ">
            <img
              className="w-full max-w-[450px] pt-9"
              src={Dark2}
              alt="Dispute resolution dashboard"
            />
          </div>

          <div className="p-9 text-end">
            <h2 className="text-3xl font-bold mb-4 text-[#000000]">
              Fair & Efficient Dispute Resolution
            </h2>

            <p className="text-[#000000B2] max-w-xl ">
              Disagreements can happen. Our streamlined dispute resolution
              process, powered by an initial AI review and backed by expert
              human support, ensures that issues are addressed quickly,
              transparently, and impartially. We’re committed to finding fair
              solutions so you can move forward.
            </p>

            <button className="mt-8 bg-[#362FF6] text-white hover:bg-black font-medium px-6 py-3 rounded-xl">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-2 gap-10 items-center">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-4 text-[#000000]">
              Secure Digital Agreement Signatures
            </h2>

            <p className="text-[#000000B2] max-w-xl">
              Formalize your commitments with ease. Create, review, and
              digitally sign agreements directly on the TrustPay platform. Both
              parties receive a secure, verifiable copy, ensuring clarity and
              mutual understanding from the outset.
            </p>

            <button className="mt-8 bg-[#362FF6] text-white hover:bg-black font-medium px-6 py-3 rounded-xl">
              Get Started
            </button>
          </div>

          <div className="rounded-3xl bg-[#362FF6] flex justify-center ">
            <img
              className="w-full max-w-[450px]"
              src={Dark}
              alt="Digital agreement dashboard"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
