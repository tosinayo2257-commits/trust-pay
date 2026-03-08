import React from "react";

import Button from "../Button";
import step1 from "../../assets/iPhone-13.png";
import step2 from "../../assets/iPhone-14-mini.png";
import step3 from "../../assets/View.png";
import step4 from "../../assets/iPhone-2.png";

const steps = [
  {
    id: 1,
    title: "Create Your Agreement",
    description:
      "Define the full scope of your project, service, or trade. Set clear terms, outline specific milestones with deliverables and due dates, and establish payment amounts. Invite your counterparty to review and digitally sign. You can even use our AI Assistant to help draft a comprehensive agreement quickly!",
    image: step1,
  },
  {
    id: 2,
    title: "Fund The Escrow",
    description:
      "Once both parties sign, the client securely deposits the agreed funds for the first milestone (or the entire project) into TrustPay's protected escrow account. Both parties receive immediate confirmation, so work can begin with complete peace of mind.",
    image: step2,
  },
  {
    id: 3,
    title: "Track Milestones",
    description:
      "Monitor the progress of each milestone through your dashboard. Communicate directly with your counterparty, share necessary files, and stay updated on timelines. Service providers can mark milestones as complete when the work is done.",
    image: step3,
  },
  {
    id: 4,
    title: "Approve & Get Paid",
    description:
      "Clients review submitted work for each milestone. Upon approval, funds for that milestone are instantly released from escrow to the service provider. If any disagreements arise, our fair and efficient dispute resolution process (with AI and human support) is there to help find a quick and impartial solution.",
    image: step4,
  },
];

const Step = ({ step, reverse }) => {
  return (
    <div
      className="relative grid md:grid-cols-2 items-center gap-8 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="hidden md:block absolute left-1/2 top-2 border-1 h-full w-[2px] bg-[#FFFF]" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black text-[#FFFF] w-10 h-10 rounded-full hidden md:flex items-center justify-center font-semibold shadow-lg">
        {step.id}
      </div>

      <div className={`${reverse ? "md:order-2" : ""} flex justify-center`}>
        <div className="rounded-3xl bg-[#362FF6] flex justify-center w-full max-w-[394px]">
          <img
            src={step.image}
            alt={step.title}
            className="rounded-xl px-20 mb-10 "
          />
        </div>
      </div>

      <div className="text-start md:flex flex-col justify-center pl-0 md:pl-18 w-full max-w-[420px] mx-auto md:mx-0">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
          {step.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

        <Button
          type="submit"
          content="Get Started"
          className="bg-[#362FF6] text-[#FFFF] w-full max-w-[140px] rounded-xl shadow-md transition hover:bg-gray-900"
        />
      </div>
    </div>
  );
};

export default function HowItWorks() {
  return (
    <section className="bg-[#FFFF] py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          How It Works
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Our process makes secure agreements and payments transparent and easy
          for everyone involved.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {steps.map((step, index) => (
          <Step key={step.id} step={step} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
