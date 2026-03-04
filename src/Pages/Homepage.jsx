import React from "react";
import Applayout from "../Layout/Applayout";
import Experiencces from "../Component/HomepageComponent/Experiencces";
import Build from "../Component/HomepageComponent/Build";
import Works from "../Component/HomepageComponent/Work";
import Frequently from "../Component/HomepageComponent/Frequently";
import WhyTrustPay from "../Component/HomepageComponent/WhyTrustPay";
import Deals from "../Component/HomepageComponent/Deals";
import Features from "../Component/HomepageComponent/Features";

export default function Homepage() {
  return (
    <Applayout>
      <Build />
      <WhyTrustPay />
      <Features />
      <Deals />
      <Works />
      <Experiencces />
      <Frequently />
    </Applayout>
  );
}
