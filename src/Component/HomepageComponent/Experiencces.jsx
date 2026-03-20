import React from "react";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import { VscQuote } from "react-icons/vsc";

export default function Experiences() {
  return (
    <section className="max-w-[1140px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-[#0D0D0D]">
          Experiences Shared by Our Users
        </h2>

        <p className="mt-4 text-[#000000B2] max-w-[700px] mx-auto text-sm sm:text-base">
          The team at TradeTrust provided unparalleled support throughout our
          project. Their expertise and dedication were evident from day one,
          helping us navigate complex challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-[#DEDEF2] rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="text-[#362FF6] text-4xl md:text-5xl">
            <VscQuote />
          </div>

          <p className="mt-4 text-[#000000] text-sm sm:text-base leading-relaxed">
            As a long-time user of WDK AI ToolKit, I can confidently say that
            their solutions have revolutionised the way we operate. From the
            outset, the team provided exceptional support and demonstrated a
            deep understanding.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <img
              src={Vector1}
              alt="Artemisia Udinse"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold text-[#0D0D0D]">Artemisia Udinse</h4>
              <p className="text-sm text-[#808080]">Marketing Specialist</p>
            </div>
          </div>
        </div>

        <div className="bg-[#DEDEF2] rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="text-[#362FF6] text-4xl md:text-5xl">
            <VscQuote />
          </div>

          <p className="mt-4 text-[#000000] text-sm sm:text-base leading-relaxed">
            As a long-time user of WDK AI ToolKit, I can confidently say that
            their solutions have revolutionised the way we operate. From the
            outset, the team provided exceptional support and demonstrated a
            deep understanding.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <img
              src={Vector2}
              alt="Artemisia Udinse"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <h4 className="font-semibold text-[#0D0D0D]">Artemisia Udinse</h4>
              <p className="text-sm text-[#808080]">Marketing Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
