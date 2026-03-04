import React from "react";
import Why from "../../assets/why.png";
import Hand from "../../assets/Hand.png";

export default function WhyTrustPay() {
  return (
    <div className="max-w-7xl mx-auto hidden md:flex flex-col">
      <div className="text-center  mb-20 ">
        <div className="text-4xl font-bold mb-4">
          <h1>Why TrustPay?</h1>
        </div>
        <div className="text-[#000000B2] max-w-2xl mx-auto">
          <p>
            For businesses and freelancers, managing deals effectively means
            overcoming uncertainty. TradeTrust provides the secure framework you
            need.
          </p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2  px-10  gap-6 ">
        <div className="mb-30 px-10 rounded-3xl bg-[#362FF6] ">
          <div className="text-3xl font-bold mb-4 pt-8 text-[#FFFFFF]">
            <h2>Clear Milestone Management</h2>
          </div>
          <div className="text-[#FFFFFFB2] w-[558px] px-5 max-w-2xl mx-auto">
            <p>
              Break down any project or service into clear, manageable
              milestones. Define deliverables, set deadlines, and link payments
              to each specific stage. Everyone stays on the same page, from
              start to finish.
            </p>
          </div>
          <div className=" mt-5">
            <img src={Why} alt="" />
          </div>
        </div>
        <div className=" px-8 w-[578px] h-126 rounded-3xl bg-[#DEDEF2] gap-10">
          <div className="text-3xl font-bold mb-4 pt-8 text-[#000000]">
            <h2>Guaranteed Payment Security</h2>
          </div>
          <div className="text-[#000000B2] w-[558px] px-5 max-w-2xl mx-auto">
            <p>
              We hold funds safely in our secure escrow. Service providers get
              paid for approved work, and clients only release payment when
              satisfied with the deliverables. No more chasing payments or
              paying for incomplete jobs.
            </p>
          </div>
          <div className=" mt-6">
            <img src={Hand} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
