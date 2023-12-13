import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import About from "../src/pages/about";
import Contact from "../src/pages/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
