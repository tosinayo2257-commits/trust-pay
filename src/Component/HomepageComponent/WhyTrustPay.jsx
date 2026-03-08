import React from "react";
import Why from "../../assets/why.png";
import Hand from "../../assets/Hand.png";

export default function WhyTrustPay() {
  return (
    <section className="max-w-6xl mx-auto px-9 py-8 md:px-10 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Why TrustPay?</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          For businesses and freelancers, managing deals effectively means
          overcoming uncertainty. TradeTrust provides the secure framework you
          need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl bg-[#362FF6] px-8  flex flex-col  items-center">
          <h2 className="md:text-3xl font-bold mb-4 mt-5 text-white">
            Clear Milestone Management
          </h2>
          <p className="text-[#FFFFFFB2] mb-6">
            Break down any project or service into clear, manageable milestones.
            Define deliverables, set deadlines, and link payments to each
            specific stage. Everyone stays on the same page, from start to
            finish.
          </p>
          <img
            src={Why}
            alt="Illustration of milestone management"
            className="mt-4 max-w-75 md:max-w-250 rounded-lg object-contain"
          />
        </div>

        <div className="rounded-3xl bg-[#DEDEF2] px-8  flex flex-col items-center">
          <h2 className=" md:text-3xl font-bold mb-4 mt-5 text-black">
            Guaranteed Payment Security
          </h2>
          <p className="text-[#000000B2] mb-6 ">
            We hold funds safely in our secure escrow. Service providers get
            paid for approved work, and clients only release payment when
            satisfied with the deliverables. No more chasing payments or paying
            for incomplete jobs.
          </p>
          <img
            className="mt-4 max-w-75 md:max-w-250 rounded-lg object-contain"
            src={Hand}
            alt="Illustration of payment security"
          />
        </div>
      </div>
    </section>
  );
}
