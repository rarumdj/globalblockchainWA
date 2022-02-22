import React, { useEffect } from "react";
import SubHeader from "../Components/SubHeader";
import Footer from "../Containers/Footer/Footer";

function Education() {
  useEffect(() => {
    document.title = "GBWA - Education";
  }, []);

  return (
    <div className="mt-20">
      <SubHeader title={"Education"} />
      <Footer />
    </div>
  );
}

export default Education;
