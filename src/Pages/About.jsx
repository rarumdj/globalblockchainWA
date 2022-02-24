import React, { useEffect } from "react";
import SubHeader from "../Components/SubHeader";
import Allience from "../Containers/About/Allience";
import Community from "../Containers/About/Community";
import Initiative from "../Containers/About/Initiative";
import Objective from "../Containers/About/Objective";
import Statement from "../Containers/About/Statement";
import Footer from "../Containers/Footer/Footer";
import Directors from "../Containers/About/Directors";
import Trustees from "../Containers/About/Trustees";
import PartnersIcon from "../Containers/About/PartnersIcon";

function About() {
  useEffect(() => {
    document.title = "GBWA - About";
  }, []);

  return (
    <div className="mt-20">
      <SubHeader title={"About"} />
      <Statement />
      <Allience />
      <Community />
      <Objective />
      <Initiative />
      <Trustees />
      <Directors />
      <PartnersIcon />
      <Footer />
    </div>
  );
}

export default About;
