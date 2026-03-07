import { BrowserRouter as Router, Routes, Route } from "react-router";

import "./App.css";
import Frequently from "./Component/HomepageComponent/Frequently";

import Homepage from "./Pages/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/FAQ" element={<Frequently />} />
      </Routes>
    </Router>
  );
}

export default App;
