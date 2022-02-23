import React, { useEffect } from "react";
import SubHeader from "../Components/SubHeader";
import Resources from "../Containers/Education/Resources";
import Footer from "../Containers/Footer/Footer";

function Education() {
  useEffect(() => {
    document.title = "GBWA - Education";
  }, []);

  return (
    <div className="mt-20">
      <SubHeader title={"Education"} />
      <Resources />
      <Footer />
    </div>
  );
}

export default Education;
