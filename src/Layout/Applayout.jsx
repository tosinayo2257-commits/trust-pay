import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default function Applayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
