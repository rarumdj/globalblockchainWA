import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./Containers/NavBar/NavBar";
import About from "./Pages/About";
import Cooperate from "./Pages/Cooperate";
import Education from "./Pages/Education";
import Home from "./Pages/Home";
import Partnership from "./Pages/Partnership";
import Projects from "./Pages/Projects";
import ReadMore from "./Pages/ReadMore";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="h-screen scroll-smooth">
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/partnership" element={<Partnership />}></Route>
          <Route path="/corporate-training" element={<Cooperate />}></Route>
          <Route path="/readmore" element={<ReadMore />}></Route>
        </Routes>
      </div>
      
    </div>
  );
};

export default App;
