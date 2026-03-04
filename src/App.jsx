import { useState } from "react";

import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Homepage from "./Pages/Homepage";
import Build from "./Component/HomepageComponent/Build";
import Work from "./Component/HomepageComponent/Work";
import Features from "./Component/HomepageComponent/Features";
import Deals from "./Component/HomepageComponent/Deals";

function App() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
