import React from "react";
import Applayout from "../Layout/Applayout";

import Build from "../Component/HomepageComponent/Build";
import WhyTrustPay from "../Component/HomepageComponent/WhyTrustPay";
import Features from "../Component/HomepageComponent/Features";
import Deals from "../Component/HomepageComponent/Deals";
import Works from "../Component/HomepageComponent/HowItWork";
import Experiencces from "../Component/HomepageComponent/Experiencces";
import Frequently from "../Component/HomepageComponent/Frequently";

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
