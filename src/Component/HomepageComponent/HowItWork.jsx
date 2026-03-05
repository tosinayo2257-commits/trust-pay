import React from "react";
import Button from "../Button";
import step1 from "../../assets/Step1.png";
import step2 from "../../assets/Step2.png";
import step3 from "../../assets/Step3.png";
import step4 from "../../assets/Step4.png";

const steps = [
  {
    id: 1,
    title: "Create Your Agreement",
    description:
      "Define the full scope of your project, service, or trade. Set clear terms, outline specific milestones with deliverables and due dates, and establish payment amounts. Invite your counterparty to review and digitally sign.",
    image: step1,
  },
  {
    id: 2,
    title: "Fund The Escrow",
    description:
      "Once both parties sign, the client securely deposits the agreed funds for the first milestone (or entire project) into a protected escrow account. Both parties receive confirmation.",
    image: step2,
  },
  {
    id: 3,
    title: "Track Milestones",
    description:
      "Monitor progress of each milestone through your dashboard. Communicate directly, share files, and stay updated on timelines. Providers can mark milestones complete.",
    image: step3,
  },
  {
    id: 4,
    title: "Approve & Get Paid or Pay",
    description:
      "Clients review submitted work. Upon approval, funds are instantly released from escrow. If disagreements arise, dispute resolution helps ensure fairness.",
    image: step4,
  },
];

const Step = ({ step, reverse }) => {
  return (
    <div className="relative grid md:grid-cols-2 gap-35 items-center bg-[#FFFFFF] py-10 ">
      <div className=" absolute left-1/2 top-0 h-full w-[1px] bg-[#272D37CC] " />

      <div className="flex absolute left-1/2 -translate-x-1/2  bg-[#000000] text-white w-10 h-10 rounded-full items-center justify-center font-semibold shadow-lg">
        {step.id}
      </div>

      <div className={`${reverse ? "md:order-2" : ""}`}>
        <div className=" rounded-3xl p-8 w-[384px]">
          <img
            src={step.image}
            alt={step.title}
            className="rounded-xl w-full "
          />
        </div>
      </div>

      {/* Text */}
      <div className={`${reverse ? " w-[340px]" : ""}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#000000]">
          {step.title}
        </h3>
        <p className="text-[#272D37CC] leading-relaxed">{step.description}</p>

        <Button
          type="submit"
          content="Get Started"
          className=" text-white px-6 py-2 rounded-xl shadow-md  transition"
        />
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFFFF] py-24 md:px-16 hidden md:flex flex-col">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000000]">
          How it Works
        </h2>
        <p className="text-[#272D37CC] max-w-2xl mx-auto">
          Our straightforward process makes secure agreements and payments
          transparent and easy for everyone involved.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <Step key={step.id} step={step} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
