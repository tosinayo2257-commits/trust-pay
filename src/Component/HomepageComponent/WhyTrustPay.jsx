import React from "react";
import Why from "../../assets/why.png";
import Hand from "../../assets/Hand.png";

export default function WhyTrustPay() {
  return (
    <section className="max-w-[1140px] mx-auto px-4 py-5">
      <div className="text-center mb-12 md:mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Why TrustPay?</h1>

        <p className="text-[#000000B2] max-w-4xl mx-auto text-sm sm:text-[20px]">
          For businesses and freelancers, managing deals effectively means
          overcoming uncertainty. TradeTrust provides the secure framework you
          need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="rounded-3xl bg-[#362FF6] px-6 sm:px-8 pt-11 flex flex-col items-start text-left">
          <h2 className="text[28px] md:text-[32px] font-bold mb-4 text-[#FFFF]">
            Clear Milestone Management
          </h2>

          <p className="text-[#FFFFFFB2] mb-6 text-sm sm:text-base">
            Break down any project or service into clear, manageable milestones.
            Define deliverables, set deadlines, and link payments to each
            specific stage. Everyone stays on the same page, from start to
            finish.
          </p>

          <img
            src={Why}
            alt="Illustration of milestone management"
            className="mx-auto w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-contain"
          />
        </div>

        <div className="rounded-3xl bg-[#DEDEF2] px-6 sm:px-6 pt-11 flex flex-col text-start md:text-left">
          <h2 className="text-[20px] md:text-[32px] font-bold mb-3 text-[#000000B2]">
            Guaranteed Payment Security
          </h2>

          <p className="text-[#000000B2] mb-7 text-sm sm:text-base">
            We hold funds safely in our secure escrow. Service providers get
            paid for approved work, and clients only release payment when
            satisfied with the deliverables. No more chasing payments or paying
            for incomplete jobs.
          </p>

          <img
            src={Hand}
            alt="Illustration of payment security"
            className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] object-contain "
          />
        </div>
      </div>
    </section>
  );
}
