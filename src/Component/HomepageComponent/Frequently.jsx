import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

export default function Question() {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "What is a Bounce?",
      answer:
        "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
    },
    {
      question: "What is the difference between the Free and Paid versions?",
      answer:
        "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
    },
    {
      question:
        "What if I decide to change a plan from monthly to annually and back?",
      answer:
        "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
    },
    {
      question: "How do I add personalised data to messages?",
      answer:
        "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
    },
    {
      question:
        "How do I re-subscribe a contact who opted out or was accidentally removed?",
      answer:
        "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
    },
    {
      question: "Do you plan on adding more features in the future?",
      answer:
        "Magna nec, porttitor purus vulputate. Enim accumsan non, auctor posuere tristique aliquam tempus maecenas orci. Risus egestas sapien tincidunt nunc est malesuada magna. Fringilla porta nunc consectetur amet aliquam. Dolor tellus augue in ridiculus vulputate.",
    },
  ];

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="px-5 md:px-10">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-[#000000B2] max-w-xl mx-auto text-sm md:text-base">
          We hope this FAQ section has addressed some of your common questions.
          If you have any further queries, please don't hesitate to reach out.
        </p>
      </div>
      <div className="max-w-[1140px] mx-auto space-y-4 py-0">
        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div
              key={index}
              className={`rounded-2xl px-6 py-5 cursor-pointer transition-all duration-300
                ${isOpen ? "bg-[#DEDEF2]" : "bg-[#FFFFFF]"}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0D0D0D] flex-1">
                  {faq.question}
                </h3>

                <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  {isOpen ? (
                    <FiMinus className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <FaPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </div>
              </div>

              {isOpen && (
                <p className="mt-4 text-[#808080] text-sm md:text-base leading-relaxed max-w-4xl">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
