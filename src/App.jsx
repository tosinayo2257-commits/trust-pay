import { BrowserRouter as Router, Routes, Route } from "react-router";

import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Homepage from "./Pages/Homepage";
import Build from "./Component/HomepageComponent/Build";
import Work from "./Component/HomepageComponent/HowItWork";
import Features from "./Component/HomepageComponent/Features";
import Deals from "./Component/HomepageComponent/Deals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
