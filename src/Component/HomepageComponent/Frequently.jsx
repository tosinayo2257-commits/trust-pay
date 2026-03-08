import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { PiMinusLight } from "react-icons/pi";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFFF] py-16 px-4 md:px-6 max-w-[1440px] mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-[#000000B2] max-w-xl mx-auto text-sm md:text-base">
          We hope this FAQ section has addressed some of your common questions.
          If you have any further queries, please don't hesitate to reach out.
        </p>
      </div>

      <div className="max-w-[1109px]  mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-2">
              <button
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-base md:text-lg font-bold text-6xl text-black leading-snug">
                  {faq.question}
                </span>

                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FFFF]">
                  {isOpen ? (
                    <PiMinusLight className="w-5 h-5" />
                  ) : (
                    <GoPlus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm md:text-base text-[#808080] bg-[#DEDEF2] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
