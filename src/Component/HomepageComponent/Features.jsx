import React from "react";
import Dark from "../../assets/Dark.png";
import Dark2 from "../../assets/Dark2.png";

export default function Features() {
  return (
    <section className="py-16 relative">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful Features, Seamless
          <br className="hidden md:block" />
          Experience
        </h1>

        <p className="text-[#000000B2] max-w-2xl mx-auto">
          TrustPay is equipped with robust tools designed to protect your
          interests and simplify every stage of your agreements.
        </p>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto px-6 md:px-10 gap-20">
        {/* Feature 1 */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          {/* Image */}
          <div className="rounded-3xl bg-[#362FF6] px-8 flex justify-center order-1">
            <img
              className="w-full mt-8 max-w-[430px]"
              src={Dark2}
              alt="Dispute resolution dashboard"
            />
          </div>

          {/* Text */}
          <div className="md:p-10 md:text-right order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#000000]">
              Fair & Efficient Dispute Resolution
            </h2>

            <p className="text-[#000000B2] max-w-xl md:ml-auto">
              Disagreements can happen. Our streamlined dispute resolution
              process, powered by an initial AI review and backed by expert
              human support, ensures that issues are addressed quickly,
              transparently, and impartially.
            </p>

            <button className="mt-8 bg-[#362FF6] hover:bg-black text-white font-medium px-6 py-3 rounded-xl transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Image */}
          <div className="rounded-3xl bg-[#362FF6] flex justify-center order-1 md:order-2">
            <img
              className="w-full max-w-[450px] mt-"
              src={Dark}
              alt="Digital agreement dashboard"
            />
          </div>

          {/* Text */}
          <div className="md:p-10 md:text-left order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#000000]">
              Secure Digital Agreement Signatures
            </h2>

            <p className="text-[#000000B2] max-w-xl">
              Formalize your commitments with ease. Create, review, and
              digitally sign agreements directly on the TrustPay platform. Both
              parties receive a secure, verifiable copy.
            </p>

            <button className="mt-8 bg-[#362FF6] hover:bg-black text-white font-medium px-6 py-3 rounded-xl transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
