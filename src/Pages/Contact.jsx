import React, { useState } from "react";
import Button from "../Component/Button";
import Applayout from "../Layout/Applayout";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    topic: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the Terms of Use and Privacy Policy");
      return;
    }

    console.log(formData);
    alert("Form submitted!");

    setFormData({
      fullName: "",
      email: "",
      topic: "",
      message: "",
      agree: false,
    });
  };

  return (
    <Applayout>
      <div className="px-2 md:px-10">
        <div className="bg-[#362FF6] rounded-xl py-6 px-6 md:px-20 md:py-20 max-w-sm sm:max-w-3xl md:max-w-6xl mx-auto mt-6">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-center">
            Contact Our Support Team
          </h1>
          <p className="font-semibold text-white text-center text-[15px] md:text-[18px]">
            Have a specific question or need assistance? Reach out to our
            dedicated support team.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl sm:max-w-3xl md:max-w-6xl mx-auto mt-8 bg-white rounded-lg p-2 md:p-10 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col relative">
              <label className="mb-1 font-medium text-[#000000]">
                Full Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#909696]" />

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="pl-10 p-3 border border-[#F1F1F1] bg-[#1018280A] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col relative">
              <label className="mb-1 font-medium text-[#000000]">Email</label>

              <div className="relative">
                <IoMdMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#909696]" />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="pl-10 p-3 border border-[#F1F1F1] bg-[#1018280A] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-[#000000]">
              Topic of complaint
            </label>

            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="Enter topic of complaint"
              className="p-3 border border-[#F1F1F1] bg-[#1018280A] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-[#000000]">Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="p-3 border border-[#F1F1F1] bg-[#1018280A] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none w-full"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mr-2 w-4 h-4 accent-[#362FF6]"
            />

            <label className="text-sm text-[#000000]">
              I agree with Tradetrust Terms of Use and Privacy Policy
            </label>
          </div>

          <Button
            type="submit"
            content="Submit"
            className="bg-[#362FF6] text-white px-6 py-3 rounded-lg hover:bg-[#2f27d4] transition-colors w-full md:w-auto"
          />
        </form>
      </div>
    </Applayout>
  );
}
