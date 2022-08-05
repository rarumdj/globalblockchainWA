import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import PromptMessage from "./Components/PromptMessage";
import NavBar from "./Containers/NavBar/NavBar";
import SinglePartnership from "./Containers/Partnership/SinglePartnership";
import SingleProject from "./Containers/Project/SingleProject";
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
          <Route path="/project/:slug" element={<SingleProject />}></Route>
          <Route
            path="/partnership/:slug"
            element={<SinglePartnership />}></Route>
        </Routes>
      </div>
      <PromptMessage />
    </div>
  );
};

export default App;
