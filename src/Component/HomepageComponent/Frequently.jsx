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
  const [openIndex, setOpenIndex] = useState();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FFFFFF] py-20 px-6 hidden md:flex flex-col">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center  text-[#000000B2] w-[650px] mb-12 ml-25">
          We hope this FAQ section has addressed some of your common questions.
          If you have any further queries, please don't hesitate to reach out to
          us.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 ${
                  isOpen ? "bg-[#DEDEF2]" : "bg-[#FFFFFF]"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  {isOpen ? (
                    <PiMinusLight className="w-5 h-5" />
                  ) : (
                    <GoPlus className="w-5 h-5" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-50 ${
                    isOpen
                      ? "max-h-40 opacity-100 px-6 pb-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#000000B2]">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
