import React from "react";
import Dark from "../../assets/Dark.png";
import Dark2 from "../../assets/Dark2.png";

export default function Features() {
  return (
    <section className="py-16 px8 md:px-10 relative">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Powerful Features, Seamless
          <br className="hidden md:block" />
          Experience
        </h1>

        <p className="text-[#000000B2] max-w-[768px] h-[60px] mx-auto">
          TrustPay is equipped with robust tools designed to protect your
          interests and simplify <br /> every stage of your agreements.
        </p>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-10 gap-20">
        {/* Feature 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image */}
          <div className="rounded-3xl bg-[#362FF6] flex justify-center mb-5 md:mb-5 pt-8 ">
            <img
              className="w-full max-w-[430px]"
              src={Dark2}
              alt="Dispute resolution dashboard"
            />
          </div>

          {/* Text */}
          <div className="text-start md:text-right px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#000000]">
              Fair & Efficient Dispute Resolution
            </h2>

            <p className="text-[#000000B2] max-w-126 md:ml-auto mx-auto">
              Disagreements can happen. Our streamlined dispute resolution
              process, powered by an initial AI review and backed by expert
              human support, ensures that issues are addressed quickly,
              transparently, and impartially. We're committed to finding fair
              solutions so you can move forward.
            </p>

            <button className="mt-8 bg-[#362FF6] hover:bg-black text-white font-medium px-6 py-3 rounded-xl transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image */}
          <div className="rounded-3xl bg-[#362FF6] flex justify-center mb-5 md:mb-5 md:order-2">
            <img
              className="w-full max-w-[450px]"
              src={Dark}
              alt="Digital agreement dashboard"
            />
          </div>

          {/* Text */}
          <div className="text-start md:text-left px-4 md:px-0 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#000000]">
              Secure Digital Agreement Signatures
            </h2>

            <p className="text-[#000000B2] max-w-122 mx-auto md:mx-0">
              Formalize your commitments with ease. Create, review, and
              digitally sign agreements directly on the TrustPay platform. Both
              parties receive a secure, verifiable copy, ensuring clarity and
              mutual understanding from the outset.
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
