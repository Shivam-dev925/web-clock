import "bootstrap/dist/css/bootstrap.min.css";

import TimeZoneDataLayer from "./contexts/TImeZoneContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalStyleLayer } from "./styles/GlobalStyling";
import Home from "./components/Home";
import Stopwatch from "./components/Stopwatch";
import Clocks from "./components/Clocks";
import Timer from "./components/Timer";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <GlobalStyleLayer />
      <TimeZoneDataLayer>
        <Router basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/webClock/stopwatch" element={<Stopwatch />} />
            <Route path="/webClock/clocks" element={<Clocks />} />
            <Route path="/webClock/Timer" element={<Timer />} />
            <Route path="/webClock/About" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </TimeZoneDataLayer>
    </div>
  );
}

export default App;
