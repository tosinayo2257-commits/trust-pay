import { BrowserRouter as Router, Routes, Route } from "react-router";

import "./App.css";

import Homepage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Question from "./Pages/Question";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/con" element={<Contact />} />
        <Route path="faq" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;
