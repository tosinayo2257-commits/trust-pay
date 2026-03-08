import React from "react";
import Vector1 from "../../assets/Vector1.png";
import Vector2 from "../../assets/Vector2.png";
import { VscQuote } from "react-icons/vsc";

export default function Experiences() {
  return (
    <div className="max-w-7xl mx-auto md:flex flex-col">
      <div className="py-16 px-8">
        <h2 className="text-4xl md:text-5xl flex justify-center font-bold text-[#0D0D0D] text-center">
          Experiences Shared by Our Users
        </h2>

        <p className="mt-6 text-[#000000B2] max-w-[700px] text-center mx-auto">
          The team at Trade trust provided unparalleled support throughout our
          project. Their expertise and dedication were evident from day one,
          helping us navigate complex challenges.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 py-2 md:p-6 mt-10">
          <div className="bg-[#DEDEF2] rounded-3xl p-10 text-left shadow-sm">
            <div className="text-[#362FF6] text-6xl leading-none">
              <VscQuote />
            </div>

            <p className="mt-6 text-[#000000] leading-relaxed">
              As a long-time user of WDK AI ToolKit, I can confidently say that
              their solutions have revolutionised the way we operate. From the
              outset, the team provided exceptional support and demonstrated a
              deep understanding.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={Vector1}
                alt="Artemisia Udinse"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-[#0D0D0D]">
                  Artemisia Udinse
                </h4>
                <p className="text-sm text-[#808080]">Marketing Specialist</p>
              </div>
            </div>
          </div>

          <div className="bg-[#DEDEF2] rounded-3xl p-10 text-left shadow-sm">
            <div className="text-[#362FF6] text-6xl leading-none">
              <VscQuote />
            </div>

            <p className="mt-6 text-[#000000] leading-relaxed">
              As a long-time user of WDK AI ToolKit, I can confidently say that
              their solutions have revolutionised the way we operate. From the
              outset, the team provided exceptional support and demonstrated a
              deep understanding.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <img
                src={Vector2}
                alt="Artemisia Udinse"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-[#0D0D0D]">
                  Artemisia Udinse
                </h4>
                <p className="text-sm text-[#808080]">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
